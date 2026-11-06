import React, { useState } from 'react';
import { menuCategories, menuProducts } from '../data/menuData';
import { Utensils, Sparkles, Plus, Search } from 'lucide-react';

export default function MenuSection({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? menuProducts
    : menuProducts.filter(p => p.category === selectedCategory);

  return (
    <main id="menu" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1">
      
      {/* Encabezado de la Carta */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#5B0D18]/10 px-4 py-1.5 rounded-full mb-3 border border-[#5B0D18]/20">
          <Sparkles className="w-4 h-4 text-[#5B0D18]" />
          <span className="text-xs font-black tracking-widest text-[#5B0D18] uppercase">Sabor y Tradición</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#5B0D18] uppercase tracking-wide drop-shadow-sm">
          CARTA Y MENÚ DIGITAL
        </h2>
        <p className="text-xs sm:text-sm text-[#5B0D18]/80 font-bold mt-2 max-w-xl mx-auto">
          El auténtico sabor del pollo asado, apanado y especialidades caleñas preparadas al momento en El Carmen de Viboral.
        </p>
      </div>

      {/* Filtro de Categorías Moderno */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap shadow-sm flex items-center gap-1.5 ${
            selectedCategory === 'all'
              ? 'bg-[#5B0D18] text-[#F4B312] shadow-lg shadow-[#5B0D18]/30 scale-105'
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
            className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 whitespace-nowrap shadow-sm ${
              selectedCategory === cat.id
                ? 'bg-[#5B0D18] text-[#F4B312] shadow-lg shadow-[#5B0D18]/30 scale-105'
                : 'bg-white text-[#5B0D18] border border-amber-200/80 hover:border-[#5B0D18]/50 hover:bg-amber-50/50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tarjetas de Productos Profesionales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-3xl overflow-hidden border border-amber-200/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
          >
            <div>
              {/* Contenedor de Imagen con Efecto Zoom */}
              <div className="relative overflow-hidden h-48 bg-amber-50">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black bg-[#5B0D18]/90 backdrop-blur-md text-[#F4B312] px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-amber-400/30">
                    {item.category.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Información del Plato */}
              <div className="p-5">
                <h3 className="font-extrabold text-base sm:text-lg text-[#5B0D18] group-hover:text-amber-700 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Pie de la Tarjeta con Precio y Botón */}
            <div className="p-5 pt-0 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-tight">Precio</span>
                <span className="font-black text-[#5B0D18] text-lg">
                  ${item.price.toLocaleString('es-CO')}
                </span>
              </div>
              <button 
                onClick={() => onAddToCart(item)}
                className="bg-gradient-to-r from-[#F4B312] to-amber-500 hover:from-amber-400 hover:to-amber-400 text-[#5B0D18] font-black text-xs px-4 py-2.5 rounded-2xl transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center gap-1.5 active:scale-95 hover:scale-105"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Agregar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-amber-200/60 shadow-sm mt-4">
          <p className="text-sm font-bold text-gray-500">No hay productos disponibles en esta categoría por el momento.</p>
        </div>
      )}
    </main>
  );
}