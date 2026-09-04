import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isRegistering 
      ? 'http://localhost/api/register' 
      : 'http://localhost/api/login';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Éxito:', data);
      if (data.token) {
        localStorage.setItem('auth_token', data.token);
      }
      onClose();
    } else {
      console.error('Error:', data);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#FFFDF6] rounded-2xl border-2 border-amber-400 p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-950/60 hover:text-amber-950 text-xl font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-[#3D0C02]">
            {isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}
          </h2>
          <p className="text-xs text-amber-900/80 font-medium mt-1">
            Ingresa para continuar con tu pedido
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <div>
              <label className="block text-xs font-bold text-[#3D0C02] mb-1">Nombre Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Juan Pérez"
                className="w-full px-3 py-2 border border-amber-400 rounded-lg text-sm bg-white"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#3D0C02] mb-1">Correo Electrónico</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="correo@ejemplo.com"
              className="w-full px-3 py-2 border border-amber-400 rounded-lg text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3D0C02] mb-1">Contraseña</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-amber-400 rounded-lg text-sm bg-white"
            />
          </div>

          {isRegistering && (
            <div>
              <label className="block text-xs font-bold text-[#3D0C02] mb-1">Confirmar Contraseña</label>
              <input
                type="password"
                required
                value={formData.password_confirmation}
                onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-amber-400 rounded-lg text-sm bg-white"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-[#3D0C02] font-black text-sm rounded-lg shadow-md transition-colors duration-200"
          >
            {isRegistering ? 'Crear mi Cuenta' : 'Ingresar'}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-xs font-bold text-[#3D0C02] underline hover:text-amber-600"
          >
            {isRegistering ? '¿Ya tienes cuenta? Inicia sesión aquí' : '¿No tienes cuenta? Regístrate aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}