import { useState } from 'react'
import { menuCategories, menuProducts } from '../data/menuData'

export default function MenuSection({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all'
    ? menuProducts
    : menuProducts.filter(p => p.category === selectedCategory)

  return (
    <main id="menu" className="max-w-7xl mx-auto px-4 py-10 flex-1">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-black text-[#5B0D18] uppercase tracking-wide">
          CARTA Y MENÚ DIGITAL
        </h2>
        <p className="text-xs text-[#5B0D18]/80 font-bold mt-1">
          El auténtico sabor del pollo asado, apanado y especialidades caleñas
        </p>
      </div>

      {/* Filtro de Categorías */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-black transition whitespace-nowrap border ${
            selectedCategory === 'all'
              ? 'bg-[#5B0D18] text-[#F4B312] border-[#5B0D18]'
              : 'bg-white text-[#5B0D18] border-amber-300 hover:border-[#F4B312]'
          }`}
        >
          Todos los Productos
        </button>
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition whitespace-nowrap border ${
              selectedCategory === cat.id
                ? 'bg-[#5B0D18] text-[#F4B312] border-[#5B0D18]'
                : 'bg-white text-[#5B0D18] border-amber-300 hover:border-[#F4B312]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tarjetas de Productos */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl overflow-hidden border-2 border-[#F4B312]/40 shadow-lg flex flex-col justify-between hover:border-[#F4B312] transition"
          >
            <div>
              <img src={item.img} alt={item.name} className="w-full h-44 object-cover bg-amber-50" />
              <div className="p-4">
                <span className="text-[10px] font-black bg-[#5B0D18] text-[#F4B312] px-2.5 py-1 rounded-full uppercase">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-extrabold text-base mt-2 text-[#5B0D18]">{item.name}</h3>
                <p className="text-xs text-amber-900/80 mt-1">{item.desc}</p>
              </div>
            </div>
            <div className="p-4 border-t border-amber-100 flex items-center justify-between bg-amber-50/50">
              <span className="font-black text-[#5B0D18] text-lg">${item.price.toLocaleString('es-CO')}</span>
              <button 
                onClick={() => onAddToCart(item)}
                className="bg-[#F4B312] hover:bg-[#d99e0f] text-[#5B0D18] font-black text-xs px-3.5 py-2 rounded-xl transition shadow"
              >
                + Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}