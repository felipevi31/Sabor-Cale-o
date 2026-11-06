import React from 'react';
import { 
  MapPin, Phone, Clock, MessageCircle, ExternalLink, 
  ChevronRight, Award, ShieldCheck, Heart 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#180b0e] text-amber-50 pt-16 pb-8 border-t-2 border-[#FFC107]/40 relative overflow-hidden font-sans">
      {/* Resplandor decorativo de fondo (Glow Effect) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B0D18]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Superior de Confianza / Garantía */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-center gap-4 bg-[#1e1215]/80 p-4 rounded-2xl border border-white/5 shadow-inner">
            <div className="p-3 bg-amber-500/10 text-[#FFC107] rounded-xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sabor Tradicional</h4>
              <p className="text-xs text-gray-400">Receta caleña auténtica e ingredientes frescos.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1e1215]/80 p-4 rounded-2xl border border-white/5 shadow-inner">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Domicilios Seguros</h4>
              <p className="text-xs text-gray-400">Entrega rápida y empaques térmicos.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1e1215]/80 p-4 rounded-2xl border border-white/5 shadow-inner">
            <div className="p-3 bg-red-500/10 text-red-400 rounded-xl shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Calidad Garantizada</h4>
              <p className="text-xs text-gray-400">El Carmen de Viboral nos prefiere.</p>
            </div>
          </div>
        </div>

        {/* Rejilla Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Marca & Redes */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/IMG/37.jpeg" 
                alt="Logo Sabor Caleño" 
                className="h-14 w-auto object-contain rounded-xl bg-black/40 p-1 border border-amber-500/30 shadow-lg" 
              />
              <img 
                src="/IMG/39.jpeg" 
                alt="Mascota Sabor Caleño" 
                className="h-14 w-auto object-contain rounded-xl bg-black/40 p-1 border border-amber-500/30 shadow-lg" 
              />
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider text-white block">
                SABOR <span className="text-[#FFC107]">CALEÑO</span>
              </span>
              <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mt-0.5">
                El Carmen de Viboral
              </p>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              El auténtico sabor del pollo asado, apanado y especialidades caleñas. Tradición, crocancia y calidad en cada plato.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/573146808787"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg.emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Pedir por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna 2: Horarios de Atención */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <Clock className="w-4 h-4 text-[#FFC107]" />
              Horarios de Atención
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-400">Lunes - Jueves:</span>
                <span className="font-bold text-[#FFC107]">11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-400">Viernes - Sábado:</span>
                <span className="font-bold text-[#FFC107]">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-400">Domingos y Festivos:</span>
                <span className="font-bold text-[#FFC107]">11:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <Phone className="w-4 h-4 text-[#FFC107]" />
              Atención y Pedidos
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                <MapPin className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Dirección Principal</strong>
                  <span>El Carmen de Viboral, Antioquia</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Línea Directa Domicilios</strong>
                  <a href="tel:+573146808787" className="text-emerald-400 font-bold hover:underline">
                    +57 314 680 8787
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Ubicación & Mapa */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <MapPin className="w-4 h-4 text-[#FFC107]" />
              Ubicación Exacta
            </h3>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe
                title="Ubicación Sabor Caleño"
                src="https://maps.google.com/maps?q=Sabor%20Cale%C3%B1o%20El%20Carmen%20de%20Viboral&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-105 brightness-95"
              ></iframe>
              <a
                href="https://share.google/JUDl9iJy5ygOD5hYP"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-2 right-2 bg-[#FFC107] hover:bg-amber-400 text-black font-extrabold text-[11px] px-3 py-1.5 rounded-lg shadow-xl transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
              >
                Abrir en Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Sub-footer / Derechos de autor */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} <strong className="text-white">Sabor Caleño</strong> - El Carmen de Viboral. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Términos del Servicio</span>
            <span>•</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Política de Privacidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}