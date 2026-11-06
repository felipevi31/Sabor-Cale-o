import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, ShoppingBag, Users, DollarSign, Activity, MessageCircle, 
  Clock, CheckCircle, AlertCircle, RefreshCw, Eye, ExternalLink, 
  Search, Filter, ChevronDown, Check, X, ArrowUpRight, Flame, MapPin, Lock, Download
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('hoy');
  const [orders, setOrders] = useState([]);
  const [metrics, setMetrics] = useState({
    total_sales: 0,
    total_orders: 0,
    total_users: 0,
    conversion_rate: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('resumen');
  const [downloading, setDownloading] = useState(null);

  // Cargar métricas en tiempo real desde Laravel
  useEffect(() => {
    fetchMetrics();
  }, [timeRange]);

  const fetchMetrics = async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('auth_token');

    if (!token) {
      setError('No hay una sesión activa. Por favor inicia sesión primero.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost/api/admin/metrics?range=${timeRange}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('No tienes permisos de administrador o tu sesión expiró.');
      }

      const data = await response.json();
      setMetrics(data.metrics || data);
      if (data.orders) setOrders(data.orders);
    } catch (err) {
      console.error('Error al conectar con el backend:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  // Función unificada y segura para descargar reportes
  const downloadReport = async (reportType, endpoint, prefix) => {
    setDownloading(reportType);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`http://localhost/api/admin/reports/${endpoint}`, {
        method: 'GET',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Accept': 'text/csv, application/octet-stream, */*'
        }
      });

      if (!response.ok) {
        throw new Error(`Error al generar el reporte de ${reportType}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${prefix}_Sabor_Caleno_${new Date().toISOString().slice(0,10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert(`No se pudo descargar el reporte de ${reportType}. Verifica que la ruta exista en Laravel.`);
    } finally {
      setDownloading(null);
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'todos' || order.status?.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = (order.client || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (order.id || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (order.phone || '').includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const channelData = [
    { name: 'WhatsApp Directo', value: 62, color: '#25D366' },
    { name: 'Carrito Web Directo', value: 38, color: '#FFC107' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f080a] text-white flex flex-col justify-center items-center p-8">
        <RefreshCw className="w-10 h-10 text-[#FFC107] animate-spin mb-4" />
        <p className="text-sm font-semibold text-gray-300">Conectando con la base de datos de Sabor Caleño...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0f080a] text-white flex flex-col justify-center items-center p-8">
        <div className="bg-[#180e11] border border-red-900/80 p-8 rounded-2xl max-w-md text-center shadow-2xl">
          <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Acceso Restringido</h2>
          <p className="text-xs text-gray-400 mb-6">{error}</p>
          <a href="/" className="inline-block bg-[#5B0D18] hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition">
            Volver al Menú
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f080a] text-gray-100 font-sans p-4 md:p-8">
      {/* Header Panel */}
      <header className="mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Panel En Vivo • El Carmen de Viboral</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white mt-1">Sabor Caleño Admin</h1>
          <p className="text-sm text-gray-400">Control de ventas, conversión y efectividad de la plataforma web.</p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
          {/* Selector de Rango de Tiempo */}
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-[#1e1215] border border-[#5B0D18] rounded-xl px-4 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
          >
            <option value="hoy">Hoy</option>
            <option value="ayer">Ayer</option>
            <option value="semana">Últimos 7 días</option>
            <option value="mes">Este Mes</option>
          </select>

          {/* Botón Descargar Excel de Ventas */}
          <button 
            onClick={() => downloadReport('ventas', 'sales-excel', 'Ventas')}
            disabled={downloading === 'ventas'}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md transition cursor-pointer"
            title="Descargar Excel con el historial de ventas"
          >
            <Download className="w-4 h-4" />
            {downloading === 'ventas' ? 'Generando...' : '📊 Excel Ventas'}
          </button>

          {/* Botón Descargar Excel de Clientes */}
          <button 
            onClick={() => downloadReport('clientes', 'users-excel', 'Clientes')}
            disabled={downloading === 'clientes'}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md transition cursor-pointer"
            title="Descargar Excel con todos los clientes registrados"
          >
            <Download className="w-4 h-4" />
            {downloading === 'clientes' ? 'Generando...' : '👥 Excel Clientes'}
          </button>

          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5B0D18] hover:bg-[#721220] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-red-900/50"
          >
            Ver Sitio Web <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 mb-6 pb-2 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('resumen')} 
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${activeTab === 'resumen' ? 'bg-[#FFC107] text-black' : 'text-gray-400 hover:text-white'}`}
        >
          Resumen General
        </button>
        <button 
          onClick={() => setActiveTab('pedidos')} 
          className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition ${activeTab === 'pedidos' ? 'bg-[#FFC107] text-black' : 'text-gray-400 hover:text-white'}`}
        >
          Pedidos en Tiempo Real
          <span className="bg-[#5B0D18] text-white text-xs px-2 py-0.5 rounded-full font-bold">{orders.length}</span>
        </button>
      </div>

      {activeTab === 'resumen' ? (
        <>
          {/* Tarjetas Informativas / Métricas Claras */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            
            {/* Dinero Ingresado */}
            <div className="bg-[#180e11] border border-[#5B0D18]/40 rounded-2xl p-5 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dinero Ingresado</p>
                  <h3 className="text-2xl font-black text-[#FFC107] mt-1">
                    ${(metrics.total_sales || 0).toLocaleString('es-CO')} COP
                  </h3>
                </div>
                <div className="p-3 bg-amber-500/10 text-[#FFC107] rounded-xl">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-4 text-xs text-emerald-400 font-semibold">Ventas registradas en la plataforma</p>
            </div>

            {/* Clientes Registrados */}
            <div className="bg-[#180e11] border border-[#5B0D18]/40 rounded-2xl p-5 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Clientes Registrados</p>
                  <h3 className="text-2xl font-black text-white mt-1">{metrics.total_users || 0}</h3>
                </div>
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">Usuarios con cuenta activa en MySQL</p>
            </div>

            {/* Cantidad de Pedidos */}
            <div className="bg-[#180e11] border border-[#5B0D18]/40 rounded-2xl p-5 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cantidad de Pedidos</p>
                  <h3 className="text-2xl font-black text-white mt-1">{metrics.total_orders || 0}</h3>
                </div>
                <div className="p-3 bg-red-500/10 text-red-400 rounded-xl">
                  <ShoppingBag className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-4 text-xs text-emerald-400 font-semibold">Sincronizados en tiempo real</p>
            </div>

            {/* Promedio por Pedido */}
            <div className="bg-[#180e11] border border-[#5B0D18]/40 rounded-2xl p-5 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Promedio por Pedido</p>
                  <h3 className="text-2xl font-black text-white mt-1">
                    ${metrics.total_orders > 0 
                      ? Math.round(metrics.total_sales / metrics.total_orders).toLocaleString('es-CO') 
                      : '0'} COP
                  </h3>
                </div>
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">Gasto estimado por cada compra</p>
            </div>

          </div>

          {/* Gráfico de Distribución de Pedidos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2 bg-[#180e11] border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Estado de los Pedidos de Hoy</h3>
                <p className="text-xs text-gray-400">Sincronización directa con los domicilios del restaurante</p>
              </div>
              <div className="p-8 text-center border border-dashed border-white/10 rounded-xl my-6">
                <p className="text-sm text-gray-400">
                  {metrics.total_orders > 0 
                    ? `Se han procesado ${metrics.total_orders} pedidos exitosamente en la plataforma.` 
                    : 'Aún no hay compras registradas en el rango seleccionado. Los nuevos pedidos aparecerán automáticamente aquí.'}
                </p>
              </div>
            </div>

            <div className="bg-[#180e11] border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Origen de las Solicitudes</h3>
                <p className="text-xs text-gray-400">Canal por el que ingresa el cliente</p>
              </div>

              <div className="h-44 w-full my-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={channelData} innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#180e11', borderRadius: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                {channelData.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="font-bold text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Tabla de Pedidos */
        <div className="bg-[#180e11] border border-white/10 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar cliente, ID o teléfono..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0f080a] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#FFC107]"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {['todos', 'Pendiente', 'Preparando', 'En Camino', 'Entregado'].map(st => (
                <button 
                  key={st} 
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${filterStatus === st ? 'bg-[#5B0D18] text-white border border-red-500' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0f080a] text-gray-400 uppercase text-xs border-b border-white/10">
                <tr>
                  <th className="p-4">ID / Hora</th>
                  <th className="p-4">Cliente</th>
                  <th className="p-4">Barrio</th>
                  <th className="p-4">Pedido</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredOrders.length > 0 ? filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-white/5 transition">
                    <td className="p-4">
                      <div className="font-bold text-white">{order.id}</div>
                      <div className="text-xs text-gray-400">{order.time || 'Hace un momento'}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-white">{order.client || 'Cliente General'}</div>
                      <div className="text-xs text-gray-400">{order.phone || 'N/A'}</div>
                    </td>
                    <td className="p-4 text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FFC107]" /> {order.barrio || 'El Carmen de Viboral'}
                      </div>
                    </td>
                    <td className="p-4 text-gray-300 max-w-xs truncate">{order.items || 'Detalle del pedido'}</td>
                    <td className="p-4 font-bold text-[#FFC107]">
                      ${(order.total || 0).toLocaleString('es-CO')} COP
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Pendiente' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                        order.status === 'Preparando' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        order.status === 'En Camino' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {order.status || 'Pendiente'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <select 
                          value={order.status} 
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="bg-[#0f080a] border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none"
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="Preparando">Preparando</option>
                          <option value="En Camino">En Camino</option>
                          <option value="Entregado">Entregado</option>
                        </select>
                        {order.phone && (
                          <a 
                            href={`https://wa.me/57${order.phone}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 rounded-lg transition"
                            title="Contactar al cliente en WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="7" className="p-6 text-center text-gray-500 text-xs">
                      No hay pedidos registrados en este momento.
                    </td>
                  </tr>
                )}
              </tbody>  
            </table>
          </div>
        </div>
      )}
    </div>
  );
}