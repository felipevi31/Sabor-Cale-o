import React from 'react';
import { ShoppingBag, UserCheck, LogOut, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Navbar({ currentStep, setCurrentStep, cartCount, user, onLogout }) {
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
    <header className="w-full bg-gradient-to-r from-[#42080f] via-[#5B0D18] to-[#42080f] text-[#F4B312] sticky top-0 z-50 shadow-2xl border-b border-[#F4B312]/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex justify-between items-center gap-2 min-w-0">
        
        {/* Identidad de Marca / Logo */}
        <div 
          onClick={() => setCurrentStep('menu')} 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0 shrink-0"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F4B312] to-amber-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <img 
              src="/IMG/37.jpeg" 
              alt="Sabor Caleño Logo" 
              className="relative w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full bg-[#FFFBEA] p-0.5 border-2 border-[#F4B312] shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-black text-sm sm:text-xl leading-none text-[#F4B312] tracking-wider drop-shadow-md truncate">
                SABOR CALEÑO
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse hidden sm:inline shrink-0" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold text-[#FFFBEA]/80 tracking-wider sm:tracking-widest uppercase mt-0.5 flex items-center gap-1 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
              <span className="truncate">El Carmen de Viboral</span>
            </span>
          </div>
        </div>

        {/* Navegación y Acciones */}
        <nav className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => setCurrentStep('menu')}
            className={`px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
              currentStep === 'menu' 
                ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg shadow-amber-500/20 font-black' 
                : 'hover:bg-[#3D080F]/80 text-[#FFFBEA] hover:text-[#F4B312] border border-transparent hover:border-amber-500/20'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 shrink-0" />
            <span className="hidden md:inline">Menú</span>
          </button>

          {user ? (
            <div className="flex items-center bg-[#2A050A]/90 border border-[#F4B312]/30 rounded-2xl pl-1.5 pr-2 py-1 shadow-inner gap-1.5 sm:gap-2.5">
              {user.role === 'admin' && (
                <button
                  onClick={() => setCurrentStep('admin')}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#5B0D18] font-black px-2.5 py-1.5 rounded-xl text-xs transition-all duration-300 shadow-md hover:scale-105 flex items-center"
                  title="Ir al Panel de Administración"
                >
                  <span>🔐</span>
                  <span className="hidden lg:inline ml-1">Admin</span>
                </button>
              )}

              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#F4B312] to-amber-600 text-[#5B0D18] flex items-center justify-center font-black text-xs shadow-md border border-amber-300/50 shrink-0">
                  {getInitials(user.name)}
                </div>
                <span className="text-xs font-bold text-[#FFFBEA] max-w-[110px] truncate capitalize hidden lg:inline">
                  {user.name}
                </span>
              </div>

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
              className={`px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                currentStep === 'access' 
                  ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg shadow-amber-500/20 font-black' 
                  : 'hover:bg-[#3D080F]/80 text-[#FFFBEA] hover:text-[#F4B312] border border-amber-500/20'
              }`}
            >
              <UserCheck className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Acceso / Registro</span>
              <span className="sm:hidden">Entrar</span>
            </button>
          )}

          <button
            onClick={() => setCurrentStep('checkout')}
            className="relative bg-gradient-to-r from-[#F4B312] to-amber-500 hover:from-amber-400 hover:to-amber-400 text-[#5B0D18] font-black px-2.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Mi Pedido</span>
            <span className="bg-[#5B0D18] text-[#F4B312] rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center text-[11px] font-black shadow-inner border border-amber-400/40">
              {cartCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}