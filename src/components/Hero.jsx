export default function Hero() {
  return (
    <section className="relative w-full min-h-[540px] sm:h-[88vh] sm:min-h-[600px] flex items-center py-12 overflow-hidden border-b-4 border-[#F4B312] bg-[#25060c]">
      
      {/* Video de fondo con capa oscura */}
      <video
        src="/IMG/RENDER FULL MENÚ ANIMADO.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#25060c]/95 via-[#25060c]/75 sm:via-[#25060c]/60 to-[#25060c]/40 sm:to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full min-w-0">
        <div className="max-w-xl w-full min-w-0 space-y-4 sm:space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D080F]/85 border border-[#F4B312]/60 backdrop-blur-md max-w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4B312] animate-ping shrink-0" />
            <span className="text-[#F4B312] text-[11px] sm:text-xs font-black uppercase tracking-wider truncate">
              Pollo Asado &amp; Apanado
            </span>
          </div>

          {/* Titular */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight break-words">
            SABOR <span className="text-[#F4B312]">CALEÑO</span>
          </h1>

          <div className="flex items-center gap-3">
            <div className="h-1 w-8 sm:w-10 bg-[#F4B312] rounded-full shrink-0" />
            <h2 className="text-base sm:text-2xl font-extrabold text-white uppercase tracking-wide">
              Pollo asado y apanado
            </h2>
          </div>

          <p className="text-white/85 text-sm sm:text-lg leading-relaxed">
            El auténtico sabor de la sazón caleña directamente a tu mesa.
            Pollo jugoso y apanado crocante en <strong className="text-[#F4B312]">El Carmen de Viboral</strong>.
          </p>

          <p className="text-xs sm:text-sm text-white/75 flex items-center gap-2">
            📍 El Carmen de Viboral · Antioquia
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#F4B312] hover:bg-[#ffc62f] text-[#5B0D18] font-black px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Ver menú →
            </button>

            <a
              href="https://wa.me/573146808787"
              target="_blank"
              rel="noreferrer"
              className="bg-[#3D080F]/85 hover:bg-[#3D080F] text-white font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="text-emerald-400 font-extrabold">WA</span> WhatsApp
            </a>
          </div>

          {/* Beneficios breves */}
          <div className="flex flex-wrap gap-4 pt-2 sm:pt-4 text-xs text-white/70 font-medium">
            <span>✓ Producto fresco</span>
            <span>✓ Preparado al momento</span>
          </div>

        </div>
      </div>

    </section>
  );
}