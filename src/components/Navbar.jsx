import React from 'react';

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
    <header className="bg-[#5B0D18] text-[#F4B312] sticky top-0 z-50 shadow-2xl border-b border-[#F4B312]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Identidad de Marca / Logo */}
        <div 
          onClick={() => setCurrentStep('menu')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <img 
              src="/IMG/37.jpeg" 
              alt="Sabor Caleño Logo" 
              className="w-11 h-11 object-cover rounded-full bg-[#FFFBEA] p-0.5 border-2 border-[#F4B312] shadow-md group-hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-black text-base sm:text-lg leading-none text-[#F4B312] tracking-wide drop-shadow-sm">
              SABOR CALEÑO
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-[#FFFBEA]/80 tracking-wider uppercase mt-0.5">
              El Carmen de Viboral
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setCurrentStep('menu')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
              currentStep === 'menu' 
                ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg font-black scale-105' 
                : 'hover:bg-[#3D080F] text-[#FFFBEA] hover:text-[#F4B312]'
            }`}
          >
            Menú
          </button>

          {/* Menú de Usuario Autenticado / Acceso */}
          {user ? (
            <div className="flex items-center bg-[#3D080F]/90 border border-[#F4B312]/40 rounded-full pl-1.5 pr-2 py-1 shadow-inner space-x-2">
              {/* Avatar con Iniciales */}
              <div className="w-7 h-7 rounded-full bg-[#F4B312] text-[#5B0D18] flex items-center justify-center font-black text-xs shadow-md border border-[#5B0D18]">
                {getInitials(user.name)}
              </div>
              
              {/* Nombre de Usuario */}
              <span className="text-xs font-bold text-[#FFFBEA] max-w-[120px] truncate capitalize">
                {user.name}
              </span>

              {/* Botón Salir con Ícono */}
              <button
                onClick={onLogout}
                title="Cerrar sesión"
                className="flex items-center space-x-1 text-[11px] font-bold text-[#F4B312] hover:text-red-400 bg-[#5B0D18] hover:bg-[#2A050A] px-2.5 py-1 rounded-full border border-[#F4B312]/20 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCurrentStep('access')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                currentStep === 'access' 
                  ? 'bg-[#F4B312] text-[#5B0D18] shadow-lg font-black scale-105' 
                  : 'hover:bg-[#3D080F] text-[#FFFBEA] hover:text-[#F4B312]'
              }`}
            >
              Acceso / Registro
            </button>
          )}

          {/* Botón Carrito */}
          <button
            onClick={() => setCurrentStep('checkout')}
            className="bg-[#F4B312] hover:bg-[#d99e0f] text-[#5B0D18] font-black px-4 py-1.5 rounded-full text-xs flex items-center space-x-2 transition-all duration-200 shadow-md active:scale-95"
          >
            <span>🛒 Mi Pedido</span>
            <span className="bg-[#5B0D18] text-[#F4B312] rounded-full px-2 py-0.5 text-[10px] font-extrabold shadow-inner">
              {cartCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}