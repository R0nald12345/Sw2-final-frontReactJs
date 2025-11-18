import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, User, Car, Clock, DollarSign, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight, Eye, Download } from 'lucide-react';

const PageGestionReserva = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [filterFecha, setFilterFecha] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReserva, setSelectedReserva] = useState(null);
  const itemsPerPage = 10;

  const reservas = [
    {
      id: 1,
      pasajero: 'Juan Pérez',
      conductor: 'Roberto Sánchez',
      vehiculo: 'Toyota Corolla - ABC-1234',
      origen: 'UAGRM Campus',
      destino: 'Centro de Santa Cruz',
      puntoRecogida: 'Edificio de Ingeniería',
      latitudRecogida: -17.7833,
      longitudRecogida: -63.1821,
      fechaViaje: '2024-11-18',
      horaReserva: '07:30 AM',
      horaConfirmacion: '07:00 AM',
      monto: 15.00,
      asientos: 1,
      estado: 'confirmada',
      estadoPago: 'completado',
      distancia: '8.5 km',
      duracionEstimada: '25 min'
    },
    {
      id: 2,
      pasajero: 'María González',
      conductor: 'Diego Fernández',
      vehiculo: 'Hyundai Accent - DEF-5678',
      origen: 'Av. Banzer',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Mall Ventura',
      latitudRecogida: -17.7547,
      longitudRecogida: -63.1511,
      fechaViaje: '2024-11-18',
      horaReserva: '08:00 AM',
      horaConfirmacion: '07:45 AM',
      monto: 12.00,
      asientos: 2,
      estado: 'confirmada',
      estadoPago: 'completado',
      distancia: '6.2 km',
      duracionEstimada: '18 min'
    },
    {
      id: 3,
      pasajero: 'Carlos Méndez',
      conductor: 'Raúl Morales',
      vehiculo: 'Nissan Versa - GHI-9012',
      origen: 'Centro',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Plaza 24 de Septiembre',
      latitudRecogida: -17.7833,
      longitudRecogida: -63.1821,
      fechaViaje: '2024-11-18',
      horaReserva: '06:45 AM',
      horaConfirmacion: null,
      monto: 18.00,
      asientos: 1,
      estado: 'pendiente',
      estadoPago: 'pendiente',
      distancia: '10.3 km',
      duracionEstimada: '30 min'
    },
    {
      id: 4,
      pasajero: 'Ana Torres',
      conductor: 'Fernando Ruiz',
      vehiculo: 'Suzuki Swift - MNO-7890',
      origen: 'UAGRM Campus',
      destino: 'Equipetrol',
      puntoRecogida: 'Biblioteca Central',
      latitudRecogida: -17.7833,
      longitudRecogida: -63.1821,
      fechaViaje: '2024-11-17',
      horaReserva: '05:30 PM',
      horaConfirmacion: '05:25 PM',
      monto: 20.00,
      asientos: 1,
      estado: 'completada',
      estadoPago: 'completado',
      distancia: '12.8 km',
      duracionEstimada: '35 min'
    },
    {
      id: 5,
      pasajero: 'Luis Vargas',
      conductor: 'Roberto Sánchez',
      vehiculo: 'Toyota Corolla - ABC-1234',
      origen: 'Barrio Hamacas',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Mercado Mutualista',
      latitudRecogida: -17.7547,
      longitudRecogida: -63.1511,
      fechaViaje: '2024-11-17',
      horaReserva: '07:15 AM',
      horaConfirmacion: '07:10 AM',
      monto: 14.00,
      asientos: 1,
      estado: 'completada',
      estadoPago: 'completado',
      distancia: '7.5 km',
      duracionEstimada: '22 min'
    },
    {
      id: 6,
      pasajero: 'Patricia Rojas',
      conductor: 'Diego Fernández',
      vehiculo: 'Hyundai Accent - DEF-5678',
      origen: 'UAGRM Campus',
      destino: 'Las Brisas',
      puntoRecogida: 'Facultad de Ciencias Exactas',
      latitudRecogida: -17.7833,
      longitudRecogida: -63.1821,
      fechaViaje: '2024-11-18',
      horaReserva: '12:00 PM',
      horaConfirmacion: null,
      monto: 16.00,
      asientos: 2,
      estado: 'cancelada',
      estadoPago: 'reembolsado',
      distancia: '9.1 km',
      duracionEstimada: '27 min'
    },
    {
      id: 7,
      pasajero: 'Roberto Chávez',
      conductor: 'Raúl Morales',
      vehiculo: 'Nissan Versa - GHI-9012',
      origen: 'Av. Cristo Redentor',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Terminal Bimodal',
      latitudRecogida: -17.8145,
      longitudRecogida: -63.1559,
      fechaViaje: '2024-11-19',
      horaReserva: '07:00 AM',
      horaConfirmacion: '06:50 AM',
      monto: 22.00,
      asientos: 1,
      estado: 'confirmada',
      estadoPago: 'completado',
      distancia: '14.2 km',
      duracionEstimada: '40 min'
    },
    {
      id: 8,
      pasajero: 'Sandra Ortiz',
      conductor: 'Fernando Ruiz',
      vehiculo: 'Suzuki Swift - MNO-7890',
      origen: 'Plan 3000',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Av. Santos Dumont',
      latitudRecogida: -17.7491,
      longitudRecogida: -63.1996,
      fechaViaje: '2024-11-19',
      horaReserva: '06:30 AM',
      horaConfirmacion: null,
      monto: 25.00,
      asientos: 1,
      estado: 'pendiente',
      estadoPago: 'pendiente',
      distancia: '16.5 km',
      duracionEstimada: '45 min'
    },
    {
      id: 9,
      pasajero: 'Miguel Ríos',
      conductor: 'Roberto Sánchez',
      vehiculo: 'Toyota Corolla - ABC-1234',
      origen: 'UAGRM Campus',
      destino: 'Urbarí',
      puntoRecogida: 'Polideportivo UAGRM',
      latitudRecogida: -17.7833,
      longitudRecogida: -63.1821,
      fechaViaje: '2024-11-17',
      horaReserva: '06:00 PM',
      horaConfirmacion: '05:55 PM',
      monto: 19.00,
      asientos: 2,
      estado: 'completada',
      estadoPago: 'completado',
      distancia: '11.3 km',
      duracionEstimada: '32 min'
    },
    {
      id: 10,
      pasajero: 'Elena Vega',
      conductor: 'Diego Fernández',
      vehiculo: 'Hyundai Accent - DEF-5678',
      origen: 'Villa 1ro de Mayo',
      destino: 'UAGRM Campus',
      puntoRecogida: 'Av. Roca y Coronado',
      latitudRecogida: -17.7682,
      longitudRecogida: -63.2054,
      fechaViaje: '2024-11-18',
      horaReserva: '08:30 AM',
      horaConfirmacion: '08:15 AM',
      monto: 17.00,
      asientos: 1,
      estado: 'en_curso',
      estadoPago: 'completado',
      distancia: '9.8 km',
      duracionEstimada: '28 min'
    }
  ];

  const filteredReservas = reservas.filter(reserva => {
    const matchesSearch = reserva.pasajero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reserva.conductor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reserva.origen.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reserva.destino.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === 'todos' || reserva.estado === filterEstado;
    
    let matchesFecha = true;
    if (filterFecha === 'hoy') {
      matchesFecha = reserva.fechaViaje === '2024-11-18';
    } else if (filterFecha === 'ayer') {
      matchesFecha = reserva.fechaViaje === '2024-11-17';
    } else if (filterFecha === 'manana') {
      matchesFecha = reserva.fechaViaje === '2024-11-19';
    }
    
    return matchesSearch && matchesEstado && matchesFecha;
  });

  const totalPages = Math.ceil(filteredReservas.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReservas = filteredReservas.slice(startIndex, startIndex + itemsPerPage);

  const getEstadoBadge = (estado) => {
    const configs = {
      pendiente: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: AlertCircle },
      confirmada: { bg: 'bg-blue-100', text: 'text-blue-700', icon: CheckCircle },
      en_curso: { bg: 'bg-purple-100', text: 'text-purple-700', icon: Clock },
      completada: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
      cancelada: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle }
    };
    const config = configs[estado] || configs.pendiente;
    const Icon = config.icon;
    return (
      <span className={`px-3 py-1 inline-flex items-center gap-1.5 text-xs leading-5 font-semibold rounded-full ${config.bg} ${config.text}`}>
        <Icon className="w-3.5 h-3.5" />
        {estado.replace('_', ' ')}
      </span>
    );
  };

  const getEstadoPagoBadge = (estado) => {
    const colors = {
      completado: 'bg-green-100 text-green-700',
      pendiente: 'bg-yellow-100 text-yellow-700',
      reembolsado: 'bg-gray-100 text-gray-700'
    };
    return colors[estado] || colors.pendiente;
  };

  const stats = {
    total: reservas.length,
    confirmadas: reservas.filter(r => r.estado === 'confirmada').length,
    completadas: reservas.filter(r => r.estado === 'completada').length,
    pendientes: reservas.filter(r => r.estado === 'pendiente').length,
    ingresoTotal: reservas.filter(r => r.estadoPago === 'completado').reduce((sum, r) => sum + r.monto, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Reservas</h1>
          <p className="text-gray-600">Administra todas las reservas de viajes en la plataforma</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Reservas</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Confirmadas</p>
                <p className="text-2xl font-bold text-blue-700">{stats.confirmadas}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completadas</p>
                <p className="text-2xl font-bold text-green-700">{stats.completadas}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pendientes</p>
                <p className="text-2xl font-bold text-yellow-700">{stats.pendientes}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ingresos Total</p>
                <p className="text-2xl font-bold text-emerald-700">Bs. {stats.ingresoTotal.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por pasajero, conductor, origen o destino..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 w-full lg:w-auto flex-wrap">
                <select
                  value={filterEstado}
                  onChange={(e) => setFilterEstado(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todos los estados</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="confirmada">Confirmada</option>
                  <option value="en_curso">En curso</option>
                  <option value="completada">Completada</option>
                  <option value="cancelada">Cancelada</option>
                </select>

                <select
                  value={filterFecha}
                  onChange={(e) => setFilterFecha(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todas las fechas</option>
                  <option value="hoy">Hoy</option>
                  <option value="ayer">Ayer</option>
                  <option value="manana">Mañana</option>
                </select>

                <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="hidden sm:inline">Exportar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pasajero</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conductor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ruta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha/Hora</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedReservas.map((reserva) => (
                  <tr key={reserva.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{reserva.id.toString().padStart(4, '0')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-semibold">
                          {reserva.pasajero.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{reserva.pasajero}</div>
                          <div className="text-xs text-gray-500">{reserva.asientos} asiento(s)</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{reserva.conductor}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Car className="w-3 h-3" />
                        {reserva.vehiculo}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2 max-w-xs">
                        <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-gray-900 font-medium">{reserva.origen}</div>
                          <div className="text-xs text-gray-500 mb-1">{reserva.puntoRecogida}</div>
                          <MapPin className="w-4 h-4 text-red-600 inline" />
                          <span className="text-sm text-gray-900 ml-2">{reserva.destino}</span>
                          <div className="text-xs text-gray-500 mt-1">{reserva.distancia} • {reserva.duracionEstimada}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {reserva.fechaViaje}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {reserva.horaReserva}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">Bs. {reserva.monto.toFixed(2)}</div>
                      <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoPagoBadge(reserva.estadoPago)}`}>
                        {reserva.estadoPago}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getEstadoBadge(reserva.estado)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => setSelectedReserva(reserva)}
                        className="text-blue-600 hover:text-blue-900 p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Mostrando <span className="font-medium">{startIndex + 1}</span> a{' '}
              <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredReservas.length)}</span> de{' '}
              <span className="font-medium">{filteredReservas.length}</span> resultados
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal de Detalle */}
        {selectedReserva && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Detalle de Reserva</h2>
                    <p className="text-sm text-gray-500 mt-1">ID: #{selectedReserva.id.toString().padStart(4, '0')}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedReserva(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Estado */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Estado de la reserva:</span>
                  {getEstadoBadge(selectedReserva.estado)}
                </div>

                {/* Participantes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Pasajero</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                        {selectedReserva.pasajero.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{selectedReserva.pasajero}</p>
                        <p className="text-xs text-gray-500">{selectedReserva.asientos} asiento(s)</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Conductor</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                        {selectedReserva.conductor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{selectedReserva.conductor}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Car className="w-3 h-3" />
                          {selectedReserva.vehiculo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ruta */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-500">Detalles de la ruta</p>
                  <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{selectedReserva.origen}</p>
                        <p className="text-xs text-gray-500 mt-1">Punto de recogida: {selectedReserva.puntoRecogida}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Lat: {selectedReserva.latitudRecogida}, Lon: {selectedReserva.longitudRecogida}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pl-2">
                      <div className="border-l-2 border-dashed border-gray-300 h-6 ml-2"></div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{selectedReserva.destino}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Distancia: {selectedReserva.distancia} • Duración estimada: {selectedReserva.duracionEstimada}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Fecha del viaje</p>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">{selectedReserva.fechaViaje}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Hora de recogida</p>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">{selectedReserva.horaReserva}</span>
                    </div>
                  </div>
                </div>

                {/* Confirmación */}
                {selectedReserva.horaConfirmacion && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Hora de confirmación</p>
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">{selectedReserva.horaConfirmacion}</span>
                    </div>
                  </div>
                )}

                {/* Pago */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-500">Información de pago</p>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">Bs. {selectedReserva.monto.toFixed(2)}</p>
                        <p className="text-xs text-gray-500">Monto total</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoPagoBadge(selectedReserva.estadoPago)}`}>
                      {selectedReserva.estadoPago}
                    </span>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Ver en mapa
                  </button>
                  <button className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Descargar comprobante
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageGestionReserva;