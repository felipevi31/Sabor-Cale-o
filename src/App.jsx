import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'
import CheckoutModal from './components/CheckoutModal'
import AdminDashboard from './components/AdminDashboard'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  background: '#FFFBEA',
  color: '#5B0D18',
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default function App() {
  const [currentStep, setCurrentStep] = useState('menu')
  const [cart, setCart] = useState([])
  const [isRegistering, setIsRegistering] = useState(false)
  const [user, setUser] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  // Recuperar sesión persistente al cargar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('auth_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Enviar credenciales a Laravel
  const handleSubmitAuth = async (e) => {
    e.preventDefault()

    const endpoint = isRegistering 
      ? 'http://localhost/api/register' 
      : 'http://localhost/api/login'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(
          isRegistering 
            ? formData 
            : { email: formData.email, password: formData.password }
        )
      })

      const data = await response.json()

      if (response.ok) {
        if (data.access_token) {
          localStorage.setItem('auth_token', data.access_token)
        }
        if (data.user) {
          localStorage.setItem('auth_user', JSON.stringify(data.user))
          setUser(data.user)
        }

        Toast.fire({
          icon: 'success',
          title: isRegistering ? '¡Cuenta creada con éxito!' : '¡Bienvenido de nuevo!'
        })

        setCurrentStep('menu')
      } else {
        Toast.fire({
          icon: 'error',
          title: data.message || 'Error en las credenciales'
        })
      }
    } catch (error) {
      console.error('Error al conectar con la API:', error)
      Toast.fire({
        icon: 'error',
        title: 'No se pudo conectar con el servidor'
      })
    }
  }

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    setUser(null)
    Toast.fire({
      icon: 'info',
      title: 'Sesión cerrada correctamente'
    })
  }

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === item.id)
      if (existingIndex > -1) {
        const updated = [...prevCart]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        }
        return updated
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })

    Toast.fire({
      icon: 'success',
      title: `${item.name || item.nombre || 'Producto'} agregado al carrito`
    })
  }

  const handleClearCart = () => {
    setCart([])
  }

  const totalAmount = cart.reduce((acc, item) => {
    const precio = Number(item.price || item.precio || 0)
    const cantidad = Number(item.quantity || item.cantidad || 1)
    return acc + precio * cantidad
  }, 0)

  const totalCount = cart.reduce((acc, item) => {
    const cantidad = Number(item.quantity || item.cantidad || 1)
    return acc + cantidad
  }, 0)

  return (
    <div className="min-h-screen bg-[#FFFBEA] text-[#3D080F] flex flex-col font-sans">
      {/* Ocultar la barra de navegación del cliente cuando se está en el Admin */}
      {currentStep !== 'admin' && (
        <Navbar 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
          cartCount={totalCount}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {/* VISTA DE ACCESO Y REGISTRO */}
      {currentStep === 'access' && (
        <section className="max-w-md mx-auto my-12 p-6 bg-white rounded-2xl border-2 border-[#F4B312] shadow-xl w-full">
          <h2 className="text-2xl font-black text-[#5B0D18] text-center mb-2">
            {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
          </h2>
          <p className="text-xs text-center text-amber-900 mb-6">
            {isRegistering ? 'Regístrate para pedir en Sabor Caleño' : 'Ingresa para continuar con tu pedido'}
          </p>

          <form onSubmit={handleSubmitAuth} className="space-y-4">
            {isRegistering && (
              <div>
                <label className="block text-xs font-bold text-[#5B0D18] mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:border-[#F4B312]" 
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#5B0D18] mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="correo@ejemplo.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:border-[#F4B312]" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5B0D18] mb-1">Contraseña</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:border-[#F4B312]" 
              />
            </div>

            {isRegistering && (
              <div>
                <label className="block text-xs font-bold text-[#5B0D18] mb-1">Confirmar Contraseña</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  value={formData.password_confirmation}
                  onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-amber-300 text-sm focus:outline-none focus:border-[#F4B312]" 
                />
              </div>
            )}

            <button type="submit" className="w-full bg-[#F4B312] text-[#5B0D18] font-black py-3 rounded-xl hover:bg-[#d99e0f] transition text-sm">
              {isRegistering ? 'Registrarme e Ir al Menú' : 'Ingresar'}
            </button>
          </form>

          <div className="text-center mt-4 space-y-2">
            <div>
              <button onClick={() => setIsRegistering(!isRegistering)} className="text-xs font-bold text-[#5B0D18] underline">
                {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate aquí'}
              </button>
            </div>
            {/* Acceso directo al Dashboard de Administración */}
            <div className="pt-2 border-t border-amber-200">
              <button 
                onClick={() => setCurrentStep('admin')} 
                className="text-xs text-amber-800 font-semibold hover:text-[#5B0D18] transition"
              >
                🔐 Acceso Administrador Sabor Caleño
              </button>
            </div>
          </div>
        </section>
      )}

      {/* VISTA DEL MENÚ PRINCIPAL */}
      {currentStep === 'menu' && (
        <>
          <Hero />
          <MenuSection onAddToCart={handleAddToCart} />
        </>
      )}

      {/* VISTA DEL FLUJO DE PEDIDO (CHECKOUT) */}
      {currentStep === 'checkout' && (
        <section className="w-full px-4">
          <CheckoutModal 
            cartItems={cart}
            totalAmount={totalAmount}
            onBackToMenu={() => setCurrentStep('menu')}
            onClearCart={handleClearCart}
          />
        </section>
      )}

      {/* VISTA DEL DASHBOARD ADMINISTRADOR */}
      {currentStep === 'admin' && (
        <div className="w-full">
          {/* Botón flotante superior para volver a la tienda web */}
          <div className="bg-[#180e11] px-6 py-2 border-b border-white/10 flex justify-between items-center text-xs text-gray-400">
            <span>Sabor Caleño • Modo Administración</span>
            <button 
              onClick={() => setCurrentStep('menu')}
              className="bg-[#5B0D18] hover:bg-red-800 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition"
            >
              ← Volver a la Tienda
            </button>
          </div>
          <AdminDashboard />
        </div>
      )}

      {/* Ocultar Footer cuando se está en el módulo Admin */}
      {currentStep !== 'admin' && <Footer />}
    </div>
  )
}