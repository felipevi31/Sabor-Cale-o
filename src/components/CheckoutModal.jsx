import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function CheckoutModal({ cartItems = [], totalAmount = 0, onBackToMenu, onClearCart }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    barrio: '',
    notas: '',
    metodoPago: 'Efectivo',
  });

  const DOMICILIO_BASE = 5000;
  const subtotalSeguro = Number(totalAmount) || 0;
  const totalFinal = subtotalSeguro + DOMICILIO_BASE;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = () => {
    const PHONE_NUMBER = "573146808787"; // Reemplaza con tu WhatsApp

    const productosTexto = cartItems
      .map((item) => {
        const nombre = item.name || item.nombre || item.title || 'Producto';
        const cantidad = Number(item.quantity || item.cantidad || 1);
        const precio = Number(item.price || item.precio || 0);
        return `- ${cantidad}x ${nombre} ($${(precio * cantidad).toLocaleString()})`;
      })
      .join('\n');

    const mensaje = 
`*¡NUEVO PEDIDO - SABOR CALEÑO!* 🍗
-----------------------------------
*DATOS DEL CLIENTE:*
👤 *Nombre:* ${formData.nombre}
📱 *Teléfono:* ${formData.telefono}
📍 *Dirección:* ${formData.direccion}
🏠 *Barrio:* ${formData.barrio || 'N/A'}
${formData.notas ? `📝 *Notas:* ${formData.notas}\n` : ''}
-----------------------------------
*DETALLE DEL PEDIDO:*
${productosTexto || 'Sin productos'}

🛵 *Domicilio (Urbano):* $${DOMICILIO_BASE.toLocaleString()}
💰 *TOTAL A PAGAR:* $${totalFinal.toLocaleString()}
💳 *MEDIO DE PAGO:* ${formData.metodoPago}

⚠️ *Nota zona rural:* Si tu pedido es para zona veredal/rural, reenvíanos tu ubicación para cotizar el valor exacto del domicilio.
-----------------------------------
_Enviado desde la Web de Sabor Caleño_`;

    // Abrir ventana de WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener,noreferrer');

    // SweetAlert2 estilizado con la ruta directa desde public/IMG
    Swal.fire({
      title: '<span style="color: #5B0D18; font-weight: 900; font-size: 22px;">¡Pedido Generado con Éxito!</span>',
      html: `
        <div style="text-align: center; font-family: sans-serif; padding: 4px 0;">
          <img src="/IMG/39.jpeg" alt="Sabor Caleño" style="width: 130px; height: auto; margin: 0 auto 12px auto; display: block;" />
          <p style="color: #4A5568; font-size: 13px; margin-bottom: 12px; line-height: 1.5;">
            Tu orden ha sido estructurada correctamente para <strong>Sabor Caleño</strong>.
          </p>
          <div style="background-color: #FFFBEA; border: 1px dashed #F4B312; padding: 12px; border-radius: 12px; text-align: left; font-size: 12px; color: #5B0D18;">
            📲 <strong>Paso final obligatorio:</strong> Presiona "Enviar" en el chat de WhatsApp que se acaba de abrir para despachar tu pedido a la cocina.
          </div>
        </div>
      `,
      confirmButtonColor: '#F4B312',
      confirmButtonText: '<span style="color: #5B0D18; font-weight: 900; font-size: 14px;">Entendido, Volver al Menú</span>',
      customClass: {
        popup: 'rounded-2xl border-2 border-[#F4B312]',
        confirmButton: 'shadow-md rounded-xl px-6 py-2.5'
      },
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        if (onClearCart) onClearCart();
        onBackToMenu();
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-2xl shadow-xl border border-amber-200">
      <div className="flex justify-between items-center mb-8 border-b pb-4 text-center">
        <div className={`font-bold text-xs sm:text-sm ${step === 1 ? 'text-[#5B0D18] border-b-2 border-[#F4B312] pb-1' : 'text-gray-400'}`}>
          1. Verificación
        </div>
        <div className={`font-bold text-xs sm:text-sm ${step === 2 ? 'text-[#5B0D18] border-b-2 border-[#F4B312] pb-1' : 'text-gray-400'}`}>
          2. Datos de Entrega
        </div>
        <div className={`font-bold text-xs sm:text-sm ${step === 3 ? 'text-[#5B0D18] border-b-2 border-[#F4B312] pb-1' : 'text-gray-400'}`}>
          3. Pago
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-black text-[#5B0D18]">1. Revisa tu Pedido</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-6">Tu carrito está vacío.</p>
          ) : (
            <div className="border-t border-b py-3 space-y-2">
              {cartItems.map((item, idx) => {
                const nombre = item.name || item.nombre || item.title || 'Producto';
                const cantidad = Number(item.quantity || item.cantidad || 1);
                const precio = Number(item.price || item.precio || 0);
                return (
                  <div key={item.id || idx} className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-800">{cantidad}x {nombre}</span>
                    <span className="font-bold text-[#5B0D18]">${(precio * cantidad).toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="space-y-1 text-sm pt-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal productos:</span>
              <span>${subtotalSeguro.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Domicilio urbano estimado:</span>
              <span>${DOMICILIO_BASE.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-black text-[#5B0D18] pt-2 border-t">
              <span>Total a pagar:</span>
              <span>${totalFinal.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button onClick={onBackToMenu} className="px-4 py-2 text-gray-600 font-semibold hover:bg-amber-50 rounded-lg text-sm">
              Volver al Menú
            </button>
            <button
              onClick={() => setStep(2)}
              disabled={cartItems.length === 0}
              className="px-6 py-2.5 bg-[#F4B312] hover:bg-[#d99e0f] disabled:bg-gray-300 text-[#5B0D18] font-black rounded-xl transition-colors text-sm shadow"
            >
              Ingresar Datos →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-black text-[#5B0D18]">2. Datos de Entrega</h2>
          <div>
            <label className="block text-xs font-bold text-[#5B0D18] mb-1">Nombre completo *</label>
            <input
              type="text"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              className="w-full p-2.5 border border-amber-300 rounded-xl focus:outline-none focus:border-[#F4B312] text-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#5B0D18] mb-1">Teléfono / WhatsApp *</label>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: 300 123 4567"
                className="w-full p-2.5 border border-amber-300 rounded-xl focus:outline-none focus:border-[#F4B312] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#5B0D18] mb-1">Barrio / Sector</label>
              <input
                type="text"
                name="barrio"
                value={formData.barrio}
                onChange={handleChange}
                placeholder="Ej: El Rosario"
                className="w-full p-2.5 border border-amber-300 rounded-xl focus:outline-none focus:border-[#F4B312] text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#5B0D18] mb-1">Dirección exacta *</label>
            <input
              type="text"
              name="direccion"
              required
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Ej: Calle 20 # 29-15"
              className="w-full p-2.5 border border-amber-300 rounded-xl focus:outline-none focus:border-[#F4B312] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#5B0D18] mb-1">Notas adicionales (opcional)</label>
            <textarea
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Ej: Casa de dos pisos, timbrar fuerte..."
              className="w-full p-2.5 border border-amber-300 rounded-xl focus:outline-none focus:border-[#F4B312] text-sm h-16"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button onClick={() => setStep(1)} className="px-4 py-2 text-gray-600 font-semibold hover:bg-amber-50 rounded-lg text-sm">
              ← Atrás
            </button>
            <button
              onClick={() => formData.nombre && formData.direccion && formData.telefono && setStep(3)}
              disabled={!formData.nombre || !formData.direccion || !formData.telefono}
              className="px-6 py-2.5 bg-[#F4B312] hover:bg-[#d99e0f] disabled:bg-gray-300 text-[#5B0D18] font-black rounded-xl transition-colors text-sm shadow"
            >
              Elegir Pago →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-black text-[#5B0D18]">3. Método de Pago</h2>
          <div className="space-y-3">
            {[
              { id: 'Efectivo', label: 'Efectivo contra entrega', desc: 'Pagas al recibir tu pedido' },
              { id: 'Transferencia (Bancolombia/Nequi)', label: 'Transferencia bancaria / Nequi', desc: 'Pago previo antes del envío' },
              { id: 'Datáfono', label: 'Datáfono contra entrega', desc: 'Tarjeta débito o crédito al recibir' }
            ].map((option) => (
              <label
                key={option.id}
                className={`flex items-start p-3 border-2 rounded-xl cursor-pointer transition-colors ${
                  formData.metodoPago === option.id ? 'border-[#F4B312] bg-[#FFFBEA]' : 'border-amber-100'
                }`}
              >
                <input
                  type="radio"
                  name="metodoPago"
                  value={option.id}
                  checked={formData.metodoPago === option.id}
                  onChange={handleChange}
                  className="mt-1 text-[#F4B312] focus:ring-[#F4B312]"
                />
                <div className="ml-3">
                  <span className="block font-bold text-[#5B0D18] text-sm">{option.label}</span>
                  <span className="text-xs text-amber-900/70">{option.desc}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="p-3 bg-[#FFFBEA] rounded-xl border border-[#F4B312] text-xs text-[#5B0D18]">
            📌 <strong>¿Estás en zona rural o veredal?</strong> El valor del domicilio puede variar. Envíanos tu ubicación exacta al WhatsApp para cotizar la tarifa correspondiente.
          </div>

          <div className="flex justify-between pt-4">
            <button onClick={() => setStep(2)} className="px-4 py-2 text-gray-600 font-semibold hover:bg-amber-50 rounded-lg text-sm">
              ← Ajustar datos
            </button>
            <button
              onClick={handleSendWhatsApp}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-lg transition-all transform active:scale-95 text-sm"
            >
              Enviar Pedido a WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}