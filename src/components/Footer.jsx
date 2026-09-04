import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#3D0C02] text-amber-50 pt-12 pb-6 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Logos e Información */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo Oficial y Mascota */}
              <img 
                src="/IMG/37.jpeg" 
                alt="Logo Sabor Caleño" 
                className="h-12 w-auto object-contain rounded-md bg-white/10 p-1 border border-amber-400/40" 
              />
              <img 
                src="/IMG/39.jpeg" 
                alt="Mascota Sabor Caleño" 
                className="h-12 w-auto object-contain rounded-md bg-white/10 p-1 border border-amber-400/40" 
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wide text-amber-400 block">
                SABOR CALEÑO
              </span>
              <p className="text-xs text-amber-200/80 font-semibold">El Carmen de Viboral</p>
            </div>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              El auténtico sabor del pollo asado, apanado y especialidades caleñas. Tradición y calidad en cada plato.
            </p>
            <div className="flex space-x-3 pt-1">
              <a
                href="https://wa.me/573146808787"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-full transition-colors duration-200"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Horarios de Atención */}
          <div>
            <h3 className="text-amber-400 font-bold text-lg mb-4 border-b border-amber-500/30 pb-2">
              Horarios de Atención
            </h3>
            <ul className="space-y-2 text-sm text-amber-100/90">
              <li className="flex justify-between">
                <span>Lunes - Jueves:</span>
                <span className="font-semibold text-amber-300">11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes - Sábado:</span>
                <span className="font-semibold text-amber-300">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos y Festivos:</span>
                <span className="font-semibold text-amber-300">11:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-amber-400 font-bold text-lg mb-4 border-b border-amber-500/30 pb-2">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/90">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>El Carmen de Viboral, Antioquia</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Domicilios: +57 314 680 8787</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Mapa Interactivo de Google Maps */}
          <div>
            <h3 className="text-amber-400 font-bold text-lg mb-4 border-b border-amber-500/30 pb-2">
              Ubicación Exacta
            </h3>
            <div className="w-full h-40 rounded-lg overflow-hidden border-2 border-amber-500/40 shadow-md relative group">
              <iframe
                title="Ubicación Sabor Caleño"
                src="https://maps.google.com/maps?q=Sabor%20Cale%C3%B1o%20El%20Carmen%20de%20Viboral&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://share.google/JUDl9iJy5ygOD5hYP"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-1.5 right-1.5 bg-amber-500 hover:bg-amber-600 text-[#3D0C02] text-[11px] font-black px-2.5 py-1 rounded-md shadow-lg transition-colors z-10 flex items-center gap-1"
              >
                Abrir en Maps 📍
              </a>
            </div>
          </div>

        </div>

        {/* Derechos de autor */}
        <div className="border-t border-amber-500/20 pt-4 text-center text-xs text-amber-200/60">
          <p>© {new Date().getFullYear()} Sabor Caleño - El Carmen de Viboral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}