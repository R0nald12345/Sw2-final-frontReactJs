import React, { useState } from 'react';
import { 
  CreditCard, Search, Filter, Plus, Eye, Edit, Trash2, 
  Download, TrendingUp, DollarSign, CheckCircle, Clock, 
  AlertCircle, MoreVertical, Wallet, QrCode, Banknote,
  Calendar, User, MapPin, RefreshCw, FileText, BarChart3
} from 'lucide-react';

const PageGestionPagos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [filterTipoPago, setFilterTipoPago] = useState('todos');
  const [filterFecha, setFilterFecha] = useState('hoy');
  const [expandedId, setExpandedId] = useState(null);

  const pagos = [
    {
      id: 'PAG001',
      viaje: 'V045',
      pasajero: 'María García',
      conductor: 'Juan Pérez',
      monto: 15.00,
      moneda: 'Bs.',
      tipoPago: 'QR',
      estado: 'Completado',
      comprobante: 'COMP-2024-11-15-001',
      urlComprobante: 'https://...',
      fechaPago: '2024-11-15',
      horaPago: '14:35',
      fechaConfirmacion: '2024-11-15 14:35:42',
      comision: 1.50,
      metodoPago: 'QR - Billetera Digital',
      referencia: 'TXN-789456123',
      origen: 'Campus Norte',
      destino: 'Campus Sur',
      distancia: '5.2 km'
    },
    {
      id: 'PAG002',
      viaje: 'V046',
      pasajero: 'Ana Martínez',
      conductor: 'Carlos López',
      monto: 12.00,
      moneda: 'Bs.',
      tipoPago: 'Efectivo',
      estado: 'Pendiente',
      comprobante: 'COMP-2024-11-15-002',
      urlComprobante: 'https://...',
      fechaPago: '2024-11-15',
      horaPago: '14:50',
      fechaConfirmacion: '2024-11-15 14:50:15',
      comision: 1.20,
      metodoPago: 'Efectivo',
      referencia: 'TXN-789456124',
      origen: 'Biblioteca Central',
      destino: 'Facultad Ingeniería',
      distancia: '3.8 km'
    },
    {
      id: 'PAG003',
      viaje: 'V047',
      pasajero: 'Pedro Rodríguez',
      conductor: 'Roberto Silva',
      monto: 10.00,
      moneda: 'Bs.',
      tipoPago: 'QR',
      estado: 'Completado',
      comprobante: 'COMP-2024-11-15-003',
      urlComprobante: 'https://...',
      fechaPago: '2024-11-15',
      horaPago: '15:05',
      fechaConfirmacion: '2024-11-15 15:05:08',
      comision: 1.00,
      metodoPago: 'QR - Billetera Digital',
      referencia: 'TXN-789456125',
      origen: 'Entrada Principal',
      destino: 'Cafetería',
      distancia: '1.5 km'
    },
    {
      id: 'PAG004',
      viaje: 'V048',
      pasajero: 'Lucia Fernández',
      conductor: 'Miguel Ángel',
      monto: 18.00,
      moneda: 'Bs.',
      tipoPago: 'QR',
      estado: 'Rechazado',
      comprobante: null,
      urlComprobante: null,
      fechaPago: '2024-11-15',
      horaPago: '15:20',
      fechaConfirmacion: '2024-11-15 15:20:33',
      comision: 0,
      metodoPago: 'QR - Billetera Digital',
      referencia: 'TXN-789456126-RECHAZADO',
      origen: 'Rectorado',
      destino: 'Centro Estudiantes',
      distancia: '2.1 km',
      motivo: 'Fondos insuficientes'
    },
    {
      id: 'PAG005',
      viaje: 'V049',
      pasajero: 'Sofia González',
      conductor: 'Ana María',
      monto: 14.00,
      moneda: 'Bs.',
      tipoPago: 'Efectivo',
      estado: 'Completado',
      comprobante: 'COMP-2024-11-15-005',
      urlComprobante: 'https://...',
      fechaPago: '2024-11-15',
      horaPago: '14:15',
      fechaConfirmacion: '2024-11-15 14:15:47',
      comision: 1.40,
      metodoPago: 'Efectivo',
      referencia: 'TXN-789456127',
      origen: 'Estacionamiento',
      destino: 'Puerta Este',
      distancia: '2.8 km'
    },
    {
      id: 'PAG006',
      viaje: 'V050',
      pasajero: 'Carlos Rojas',
      conductor: 'Juan Pérez',
      monto: 16.00,
      moneda: 'Bs.',
      tipoPago: 'QR',
      estado: 'En revisión',
      comprobante: 'COMP-2024-11-15-006',
      urlComprobante: 'https://...',
      fechaPago: '2024-11-15',
      horaPago: '13:30',
      fechaConfirmacion: '2024-11-15 13:30:22',
      comision: 1.60,
      metodoPago: 'QR - Billetera Digital',
      referencia: 'TXN-789456128',
      origen: 'Campus Sur',
      destino: 'Biblioteca',
      distancia: '4.5 km',
      motivo: 'Verificando integridad'
    }
  ];

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'Completado': return 'bg-green-100 text-green-800 border-l-4 border-green-500';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500';
      case 'En revisión': return 'bg-blue-100 text-blue-800 border-l-4 border-blue-500';
      case 'Rechazado': return 'bg-red-100 text-red-800 border-l-4 border-red-500';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoIcon = (estado) => {
    switch(estado) {
      case 'Completado': return <CheckCircle size={16} />;
      case 'Pendiente': return <Clock size={16} />;
      case 'En revisión': return <AlertCircle size={16} />;
      case 'Rechazado': return <AlertCircle size={16} />;
      default: return null;
    }
  };

  const getTipoPagoIcon = (tipo) => {
    switch(tipo) {
      case 'QR': return <QrCode size={18} />;
      case 'Efectivo': return <Banknote size={18} />;
      default: return <CreditCard size={18} />;
    }
  };

  const getTipoPagoColor = (tipo) => {
    switch(tipo) {
      case 'QR': return 'bg-purple-100 text-purple-800';
      case 'Efectivo': return 'bg-green-100 text-green-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const pagosFiltrados = pagos.filter(pago => {
    const matchBusqueda = 
      pago.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pago.pasajero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pago.conductor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pago.viaje.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchEstado = filterEstado === 'todos' || pago.estado === filterEstado;
    const matchTipoPago = filterTipoPago === 'todos' || pago.tipoPago === filterTipoPago;
    
    return matchBusqueda && matchEstado && matchTipoPago;
  });

  const estadisticas = {
    total: pagos.length,
    completados: pagos.filter(p => p.estado === 'Completado').length,
    pendientes: pagos.filter(p => p.estado === 'Pendiente').length,
    rechazados: pagos.filter(p => p.estado === 'Rechazado').length,
    montoTotal: pagos.filter(p => p.estado === 'Completado').reduce((sum, p) => sum + p.monto, 0),
    comisionTotal: pagos.filter(p => p.estado === 'Completado').reduce((sum, p) => sum + p.comision, 0)
  };

  const porcentajeQR = Math.round((pagos.filter(p => p.tipoPago === 'QR').length / pagos.length) * 100);
  const porcentajeEfectivo = 100 - porcentajeQR;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Pagos</h1>
          <p className="text-gray-600 text-sm mt-1">Administra y monitorea todas las transacciones del sistema</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Download size={20} />
          <span>Exportar Reporte</span>
        </button>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Transacciones</p>
              <p className="text-3xl font-bold">{estadisticas.total}</p>
              <p className="text-blue-100 text-xs mt-1">{estadisticas.completados} completadas</p>
            </div>
            <CreditCard size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Monto Total</p>
              <p className="text-3xl font-bold">Bs. {estadisticas.montoTotal.toFixed(2)}</p>
              <p className="text-green-100 text-xs mt-1">Ingresos completados</p>
            </div>
            <DollarSign size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Comisión Total</p>
              <p className="text-3xl font-bold">Bs. {estadisticas.comisionTotal.toFixed(2)}</p>
              <p className="text-purple-100 text-xs mt-1">Ingresos por comisión</p>
            </div>
            <Wallet size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Tasa de Éxito</p>
              <p className="text-3xl font-bold">{((estadisticas.completados / estadisticas.total) * 100).toFixed(0)}%</p>
              <p className="text-orange-100 text-xs mt-1">{estadisticas.rechazados} rechazadas</p>
            </div>
            <TrendingUp size={32} className="opacity-20" />
          </div>
        </div>
      </div>

      {/* Gráficos de métodos de pago */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Métodos de pago */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-4">Distribución de Métodos de Pago</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <QrCode size={20} className="text-purple-600" />
                  <span className="text-sm font-semibold">Pagos QR</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{porcentajeQR}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${porcentajeQR}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Banknote size={20} className="text-green-600" />
                  <span className="text-sm font-semibold">Pagos Efectivo</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{porcentajeEfectivo}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${porcentajeEfectivo}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Estados de pago */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-4">Estados de Transacciones</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-sm font-semibold">Completados</span>
              </div>
              <span className="text-sm font-bold text-green-600">{estadisticas.completados}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-yellow-600" />
                <span className="text-sm font-semibold">Pendientes</span>
              </div>
              <span className="text-sm font-bold text-yellow-600">{estadisticas.pendientes}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                <span className="text-sm font-semibold">Rechazados</span>
              </div>
              <span className="text-sm font-bold text-red-600">{estadisticas.rechazados}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por ID, pasajero, conductor, viaje..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los estados</option>
            <option value="Completado">Completado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En revisión">En revisión</option>
            <option value="Rechazado">Rechazado</option>
          </select>

          <select
            value={filterTipoPago}
            onChange={(e) => setFilterTipoPago(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los métodos</option>
            <option value="QR">QR</option>
            <option value="Efectivo">Efectivo</option>
          </select>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <RefreshCw size={20} />
            <span>Limpiar Filtros</span>
          </button>
        </div>
      </div>

      {/* Tabla de pagos */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-bold">Transacciones ({pagosFiltrados.length})</h2>
          <span className="text-xs text-gray-600">Total: Bs. {pagosFiltrados.filter(p => p.estado === 'Completado').reduce((sum, p) => sum + p.monto, 0).toFixed(2)}</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">ID Pago</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Pasajero</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Conductor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Método</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pagosFiltrados.map(pago => (
                <tr key={pago.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{pago.id}</span>
                    <p className="text-xs text-gray-500">{pago.viaje}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {pago.pasajero.split(' ')[0][0]}
                      </div>
                      <span className="text-sm text-gray-700">{pago.pasajero}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{pago.conductor}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">Bs. {pago.monto.toFixed(2)}</span>
                    <p className="text-xs text-gray-500">+Bs. {pago.comision.toFixed(2)} comisión</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getTipoPagoColor(pago.tipoPago)}`}>
                      {getTipoPagoIcon(pago.tipoPago)}
                      {pago.tipoPago}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getEstadoColor(pago.estado)}`}>
                      {getEstadoIcon(pago.estado)}
                      {pago.estado}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {pago.fechaPago}
                    <p className="text-xs text-gray-500">{pago.horaPago}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setExpandedId(expandedId === pago.id ? null : pago.id)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Ver detalles"
                      >
                        <Eye size={18} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-yellow-50 rounded-lg transition-colors" title="Descargar comprobante">
                        <Download size={18} className="text-yellow-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detalles expandibles */}
      <div className="space-y-4">
        {pagosFiltrados.filter(p => expandedId === p.id).map(pago => (
          <div key={pago.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4">Detalles de Transacción {pago.id}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Información del viaje */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-2">Información del Viaje</p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold">ID Viaje:</span> {pago.viaje}</p>
                  <p className="text-sm flex items-center gap-2"><MapPin size={16} /> {pago.origen} → {pago.destino}</p>
                  <p className="text-sm"><span className="font-semibold">Distancia:</span> {pago.distancia}</p>
                </div>
              </div>

              {/* Detalles de pago */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-2">Detalles del Pago</p>
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-semibold">Monto:</span> Bs. {pago.monto.toFixed(2)}</p>
                  <p className="text-sm"><span className="font-semibold">Comisión:</span> Bs. {pago.comision.toFixed(2)}</p>
                  <p className="text-sm"><span className="font-semibold">Total:</span> Bs. {(pago.monto + pago.comision).toFixed(2)}</p>
                </div>
              </div>

              {/* Referencia */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-2">Referencia de Transacción</p>
                <p className="text-sm font-mono bg-white p-2 rounded border border-gray-300">{pago.referencia}</p>
              </div>

              {/* Fechas */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-xs text-blue-600 font-semibold mb-2">Fechas y Horas</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Pago:</span> {pago.fechaPago} {pago.horaPago}</p>
                  <p><span className="font-semibold">Confirmado:</span> {pago.fechaConfirmacion}</p>
                  <p><span className="font-semibold">Método:</span> {pago.metodoPago}</p>
                </div>
              </div>

              {/* Comprobante */}
              {pago.comprobante && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-xs text-green-600 font-semibold mb-2">Comprobante</p>
                  <p className="text-sm font-mono bg-white p-2 rounded border border-green-300 mb-2">{pago.comprobante}</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm flex items-center gap-2 justify-center transition-colors">
                    <Download size={16} />
                    Descargar
                  </button>
                </div>
              )}

              {/* Estado */}
              <div className={`p-4 rounded-lg ${getEstadoColor(pago.estado).replace('border-l-4', '')}`}>
                <p className="text-xs font-semibold mb-2">Estado de Transacción</p>
                <div className="flex items-center gap-2">
                  {getEstadoIcon(pago.estado)}
                  <span className="font-semibold text-sm">{pago.estado}</span>
                </div>
                {pago.motivo && (
                  <p className="text-xs mt-2 text-gray-600">{pago.motivo}</p>
                )}
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                <FileText size={18} />
                Ver Comprobante
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                <RefreshCw size={18} />
                Reembolsar
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                <MoreVertical size={18} />
                Más Opciones
              </button>
            </div>
          </div>
        ))}
      </div>

      {pagosFiltrados.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <CreditCard size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">No se encontraron transacciones</p>
          <p className="text-gray-500 text-sm">Intenta cambiar los filtros o la búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default PageGestionPagos;