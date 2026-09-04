export default function Hero() {
  return (
    <section className="bg-[#5B0D18] text-white py-10 border-b-4 border-[#F4B312] px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#3D080F] px-3 py-1 rounded-full border border-[#F4B312]">
            <span className="w-2 h-2 rounded-full bg-[#F4B312] animate-ping" />
            <span className="text-[#F4B312] text-xs font-black uppercase tracking-wider">
              Pollo Frito y Asado Caleño
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#F4B312] leading-tight">
            SABOR CALEÑO <br />
            <span className="text-white text-3xl sm:text-4xl">POLLO FRITO Y ASADO</span>
          </h1>

          <p className="text-amber-100/90 text-sm max-w-md">
            El auténtico sabor de la sazón caleña directo a tu mesa en El Carmen de Viboral. Pollo asado a la brasa, apanado crocante y combos familiares.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F4B312] hover:bg-[#d99e0f] text-[#5B0D18] font-black px-6 py-3 rounded-xl text-sm shadow-lg transition"
            >
              Hacer mi pedido
            </button>
            <a 
              href="https://wa.me/573146808787" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#3D080F] hover:bg-[#2a050a] text-emerald-400 font-bold px-5 py-3 rounded-xl text-sm border border-emerald-500/40 transition"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>

        <div className="flex justify-center relative">
          <img 
            src="/IMG/39.jpeg" 
            alt="Mascota Sabor Caleño" 
            className="rounded-2xl border-4 border-[#F4B312] shadow-2xl max-h-80 object-cover"
          />
        </div>

      </div>
    </section>
  )
}