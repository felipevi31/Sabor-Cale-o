import React, { useState } from 'react';
import { menuCategories, menuProducts } from '../data/menuData';
import { Utensils, Sparkles, Plus } from 'lucide-react';

export default function MenuSection({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? menuProducts
    : menuProducts.filter(p => p.category === selectedCategory);

  return (
    <main id="menu" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12 flex-1 overflow-x-clip">
      
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

      {/* Filtro de Categorías sin desbordamiento */}
      <div className="flex items-center gap-2 overflow-x-auto md:flex-wrap py-2 px-1 mb-6 sm:mb-10 no-scrollbar justify-start md:justify-center">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-2xl text-xs font-black transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 shrink-0 cursor-pointer ${
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
            type="button"
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-2xl text-xs font-black transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#5B0D18] text-[#F4B312] shadow-md shadow-[#5B0D18]/25 ring-2 ring-[#F4B312]/40'
                : 'bg-white text-[#5B0D18] border border-amber-200/80 hover:border-[#5B0D18]/50 hover:bg-amber-50/50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tarjetas de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-7">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-row sm:flex-col items-stretch justify-between sm:hover:-translate-y-1.5 p-2.5 sm:p-0 gap-2.5 sm:gap-0 min-w-0"
          >
            {/* Contenedor de Imagen */}
            <div className="relative overflow-hidden w-24 h-24 sm:w-full sm:h-48 rounded-xl sm:rounded-none bg-amber-50 shrink-0 self-center sm:self-stretch">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="hidden sm:block absolute top-3 left-3">
                <span className="text-[10px] font-black bg-[#5B0D18]/90 backdrop-blur-md text-[#F4B312] px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-amber-400/30">
                  {item.category.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Contenido: Título, Descripción y Fila de Precio + Botón Agregar */}
            <div className="flex-1 flex flex-col justify-between min-h-24 sm:min-h-0 sm:p-5 min-w-0">
              <div className="min-w-0">
                <span className="sm:hidden inline-block text-[9px] font-black text-[#5B0D18]/75 uppercase tracking-wider">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-extrabold text-sm sm:text-lg text-[#5B0D18] group-hover:text-amber-700 transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1.5 leading-snug sm:leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Pie con Precio a la izquierda y Botón Agregar siempre visible a la derecha */}
              <div className="pt-2 sm:pt-4 mt-1.5 sm:mt-auto flex items-center justify-between gap-2 min-w-0">
                <div className="leading-none shrink-0">
                  <span className="hidden sm:block text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Precio</span>
                  <span className="font-black text-[#5B0D18] text-sm sm:text-lg">
                    ${item.price.toLocaleString('es-CO')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onAddToCart?.(item)}
                  aria-label={`Agregar ${item.name} al carrito`}
                  className="bg-[#F4B312] hover:bg-amber-400 text-[#5B0D18] font-black text-xs px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-sm flex items-center gap-1 active:scale-95 shrink-0 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />
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