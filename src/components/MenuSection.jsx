import React, { useState } from 'react';
import { menuCategories, menuProducts } from '../data/menuData';
import { Utensils, Sparkles, Plus } from 'lucide-react';

export default function MenuSection({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? menuProducts
    : menuProducts.filter(p => p.category === selectedCategory);

  return (
    <main id="menu" className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12 flex-1">
      
      {/* Encabezado de la Carta */}
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-[#5B0D18]/10 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-2.5 border border-[#5B0D18]/20">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5B0D18]" />
          <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#5B0D18] uppercase">Sabor y Tradición</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#5B0D18] uppercase tracking-wide drop-shadow-sm">
          CARTA Y MENÚ DIGITAL
        </h2>
        <p className="text-xs sm:text-sm text-[#5B0D18]/80 font-bold mt-1.5 max-w-xl mx-auto px-2">
          El auténtico sabor del pollo asado, apanado y especialidades caleñas preparadas al momento en El Carmen de Viboral.
        </p>
      </div>

      {/* Filtro de Categorías Moderno (py-2 evita que se recorte el botón activo) */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-2 px-1 mb-6 sm:mb-10 no-scrollbar justify-start sm:justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
            selectedCategory === 'all'
              ? 'bg-[#5B0D18] text-[#F4B312] shadow-md shadow-[#5B0D18]/25 ring-2 ring-[#F4B312]/40'
              : 'bg-white text-[#5B0D18] border border-amber-200/80 hover:border-[#5B0D18]/50 hover:bg-amber-50/50'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          Todos los Productos
        </button>
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-[#5B0D18] text-[#F4B312] shadow-md shadow-[#5B0D18]/25 ring-2 ring-[#F4B312]/40'
                : 'bg-white text-[#5B0D18] border border-amber-200/80 hover:border-[#5B0D18]/50 hover:bg-amber-50/50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tarjetas de Productos: Horizontal compacta en móvil, Vertical en PC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-7">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-row sm:flex-col justify-between sm:hover:-translate-y-1.5"
          >
            {/* Contenedor de Imagen */}
            <div className="relative overflow-hidden w-28 min-w-[7rem] sm:w-full h-auto sm:h-48 bg-amber-50 shrink-0">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Badge categoría solo en tablet/PC para no tapar la foto en celular */}
              <div className="hidden sm:block absolute top-3 left-3">
                <span className="text-[10px] font-black bg-[#5B0D18]/90 backdrop-blur-md text-[#F4B312] px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-amber-400/30">
                  {item.category.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Contenido (Info + Precio y Botón) */}
            <div className="flex-1 flex flex-col justify-between p-3 sm:p-5 min-w-0">
              <div>
                {/* Badge categoría compacto en móvil */}
                <span className="sm:hidden inline-block text-[9px] font-black text-[#5B0D18]/70 uppercase tracking-wider mb-0.5">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-extrabold text-sm sm:text-lg text-[#5B0D18] group-hover:text-amber-700 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-snug sm:leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Pie de la Tarjeta con Precio y Botón */}
              <div className="pt-2.5 sm:pt-4 mt-auto flex items-center justify-between gap-2">
                <div>
                  <span className="hidden sm:block text-[10px] text-gray-400 uppercase font-bold tracking-tight">Precio</span>
                  <span className="font-black text-[#5B0D18] text-base sm:text-lg">
                    ${item.price.toLocaleString('es-CO')}
                  </span>
                </div>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-gradient-to-r from-[#F4B312] to-amber-500 hover:from-amber-400 hover:to-amber-400 text-[#5B0D18] font-black text-[11px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-sm shadow-amber-500/20 flex items-center gap-1 active:scale-95 hover:scale-105 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 sm:py-16 bg-white rounded-3xl border border-amber-200/60 shadow-sm mt-4">
          <p className="text-sm font-bold text-gray-500">No hay productos disponibles en esta categoría por el momento.</p>
        </div>
      )}
    </main>
  );
}