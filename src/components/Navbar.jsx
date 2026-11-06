import React from 'react';
import { ShoppingBag, UserCheck, ShieldAlert, LogOut, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Navbar({ currentStep, setCurrentStep, cartCount, user, onLogout }) {
  // Obtener iniciales del usuario para el avatar (ej: "Felipe Villalba" -> "FV")
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="bg-gradient-to-r from-[#42080f] via-[#5B0D18] to-[#42080f] text-[#F4B312] sticky top-0 z-50 shadow-2xl border-b border-[#F4B312]/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        
        {/* Identidad de Marca / Logo */}
        <div 
          onClick={() => setCurrentStep('menu')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F4B312] to-amber-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <img 
              src="/IMG/37.jpeg" 
              alt="Sabor Caleño Logo" 
              className="relative w-12 h-12 object-cover rounded-full bg-[#FFFBEA] p-0.5 border-2 border-[#F4B312] shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-base sm:text-xl leading-none text-[#F4B312] tracking-wider drop-shadow-md">
                SABOR CALEÑO
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse hidden sm:inline" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-[#FFFBEA]/80 tracking-widest uppercase mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              El Carmen de Viboral
            </span>
          </div>
        </div>

        {/* Navegación y Acciones */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setCurrentStep('menu')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
              currentStep === 'menu' 
                ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg shadow-amber-500/20 font-black scale-105' 
                : 'hover:bg-[#3D080F]/80 text-[#FFFBEA] hover:text-[#F4B312] border border-transparent hover:border-amber-500/20'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Menú</span>
          </button>

          {/* Menú de Usuario Autenticado / Acceso */}
          {user ? (
            <div className="flex items-center bg-[#2A050A]/90 border border-[#F4B312]/30 rounded-2xl pl-2 pr-2.5 py-1.5 shadow-inner space-x-2 sm:space-x-3">
              
              {/* Botón directo para el Administrador */}
              {user.role === 'admin' && (
                <button
                  onClick={() => setCurrentStep('admin')}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#5B0D18] font-black px-3 py-1.5 rounded-xl text-xs transition-all duration-300 shadow-md hover:scale-105 flex items-center space-x-1"
                  title="Ir al Panel de Administración"
                >
                  <span>🔐 Admin</span>
                </button>
              )}

              {/* Avatar con Iniciales y Estado */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F4B312] to-amber-600 text-[#5B0D18] flex items-center justify-center font-black text-xs shadow-md border border-amber-300/50">
                  {getInitials(user.name)}
                </div>
                <span className="text-xs font-bold text-[#FFFBEA] max-w-[100px] sm:max-w-[130px] truncate capitalize hidden md:inline">
                  {user.name}
                </span>
              </div>

              {/* Botón Salir */}
              <button
                onClick={onLogout}
                title="Cerrar sesión"
                className="flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-bold text-amber-300 hover:text-white bg-[#5B0D18] hover:bg-red-950 border border-amber-500/20 transition-all duration-200 group"
              >
                <LogOut className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline ml-1">Salir</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCurrentStep('access')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                currentStep === 'access' 
                  ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg shadow-amber-500/20 font-black scale-105' 
                  : 'hover:bg-[#3D080F]/80 text-[#FFFBEA] hover:text-[#F4B312] border border-amber-500/20'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Acceso / Registro</span>
            </button>
          )}

          {/* Botón Carrito / Pedido con indicador dinámico */}
          <button
            onClick={() => setCurrentStep('checkout')}
            className="relative bg-gradient-to-r from-[#F4B312] to-amber-500 hover:from-amber-400 hover:to-amber-400 text-[#5B0D18] font-black px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Mi Pedido</span>
            <span className="bg-[#5B0D18] text-[#F4B312] rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-black shadow-inner border border-amber-400/40">
              {cartCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}