import React, { useState } from 'react';
import { Search, Car, CheckCircle, XCircle, Clock, Edit2, Eye, Trash2, ChevronLeft, ChevronRight, Plus, Download, AlertTriangle, Wind, Users } from 'lucide-react';

const PageGestionVehiculo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipo, setFilterTipo] = useState('todos');
  const [filterVerificacion, setFilterVerificacion] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVehiculo, setSelectedVehiculo] = useState(null);
  const itemsPerPage = 8;

  const vehiculos = [
    {
      id: 1,
      modelo: 'Toyota Corolla',
      color: 'Blanco',
      año: 2020,
      placa: 'ABC-1234',
      capacidad: 4,
      conductor: 'Roberto Sánchez',
      conductorId: 1,
      documentoConductor: '7890123 SC',
      telefonoConductor: '70123456',
      tipoVehiculo: 'Auto',
      aireAcondicionado: true,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 156,
      calificacionPromedio: 4.9,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2023-08-10',
      ultimaVerificacion: '2024-10-15',
      observaciones: 'Vehículo en excelente estado'
    },
    {
      id: 2,
      modelo: 'Hyundai Accent',
      color: 'Gris',
      año: 2019,
      placa: 'DEF-5678',
      capacidad: 4,
      conductor: 'Diego Fernández',
      conductorId: 2,
      documentoConductor: '8901234 SC',
      telefonoConductor: '71234567',
      tipoVehiculo: 'Auto',
      aireAcondicionado: true,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 89,
      calificacionPromedio: 4.7,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2023-09-15',
      ultimaVerificacion: '2024-09-20',
      observaciones: 'Vehículo en buen estado general'
    },
    {
      id: 3,
      modelo: 'Nissan Versa',
      color: 'Azul',
      año: 2021,
      placa: 'GHI-9012',
      capacidad: 4,
      conductor: 'Raúl Morales',
      conductorId: 3,
      documentoConductor: '9012345 SC',
      telefonoConductor: '69345678',
      tipoVehiculo: 'Auto',
      aireAcondicionado: true,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 234,
      calificacionPromedio: 4.8,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2023-07-20',
      ultimaVerificacion: '2024-11-05',
      observaciones: 'Vehículo impecable, mantenimiento al día'
    },
    {
      id: 4,
      modelo: 'Chevrolet Sail',
      color: 'Negro',
      año: 2018,
      placa: 'JKL-3456',
      capacidad: 4,
      conductor: 'Javier Castro',
      conductorId: 4,
      documentoConductor: '0123456 SC',
      telefonoConductor: '68456789',
      tipoVehiculo: 'Auto',
      aireAcondicionado: false,
      estadoVerificacion: 'rechazado',
      viajesRealizados: 45,
      calificacionPromedio: 4.2,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2024-02-05',
      ultimaVerificacion: '2024-02-10',
      observaciones: 'Requiere reparaciones en el sistema de frenos'
    },
    {
      id: 5,
      modelo: 'Suzuki Swift',
      color: 'Rojo',
      año: 2022,
      placa: 'MNO-7890',
      capacidad: 4,
      conductor: 'Fernando Ruiz',
      conductorId: 5,
      documentoConductor: '1234568 SC',
      telefonoConductor: '67567890',
      tipoVehiculo: 'Auto',
      aireAcondicionado: true,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 312,
      calificacionPromedio: 5.0,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2023-06-01',
      ultimaVerificacion: '2024-10-28',
      observaciones: 'Vehículo nuevo, excelente condición'
    },
    {
      id: 6,
      modelo: 'Honda Civic',
      color: 'Plata',
      año: 2021,
      placa: 'PQR-1122',
      capacidad: 4,
      conductor: 'Mario Vargas',
      conductorId: 6,
      documentoConductor: '2345679 SC',
      telefonoConductor: '75123890',
      tipoVehiculo: 'Auto',
      aireAcondicionado: true,
      estadoVerificacion: 'pendiente',
      viajesRealizados: 0,
      calificacionPromedio: 0,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2024-11-15',
      ultimaVerificacion: null,
      observaciones: 'Pendiente de inspección inicial'
    },
    {
      id: 7,
      modelo: 'Yamaha FZ',
      color: 'Negro',
      año: 2020,
      placa: 'STU-3344',
      capacidad: 2,
      conductor: 'Carlos Méndez',
      conductorId: 7,
      documentoConductor: '3456780 SC',
      telefonoConductor: '74234567',
      tipoVehiculo: 'Motocicleta',
      aireAcondicionado: false,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 78,
      calificacionPromedio: 4.6,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2024-03-12',
      ultimaVerificacion: '2024-10-01',
      observaciones: 'Motocicleta en buen estado'
    },
    {
      id: 8,
      modelo: 'Honda XR 150',
      color: 'Rojo',
      año: 2021,
      placa: 'VWX-5566',
      capacidad: 2,
      conductor: 'Luis Rojas',
      conductorId: 8,
      documentoConductor: '4567891 SC',
      telefonoConductor: '73345678',
      tipoVehiculo: 'Motocicleta',
      aireAcondicionado: false,
      estadoVerificacion: 'aprobado',
      viajesRealizados: 92,
      calificacionPromedio: 4.7,
      fotoLateral: 'https://via.placeholder.com/400x300',
      fotoFrontal: 'https://via.placeholder.com/400x300',
      fotoInterior: 'https://via.placeholder.com/400x300',
      fechaRegistro: '2024-01-20',
      ultimaVerificacion: '2024-09-15',
      observaciones: 'Mantenimiento reciente realizado'
    }
  ];

  const filteredVehiculos = vehiculos.filter(vehiculo => {
    const matchesSearch = vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehiculo.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehiculo.conductor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = filterTipo === 'todos' || vehiculo.tipoVehiculo === filterTipo;
    const matchesVerificacion = filterVerificacion === 'todos' || vehiculo.estadoVerificacion === filterVerificacion;
    return matchesSearch && matchesTipo && matchesVerificacion;
  });

  const totalPages = Math.ceil(filteredVehiculos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVehiculos = filteredVehiculos.slice(startIndex, startIndex + itemsPerPage);

  const getVerificacionBadge = (estado) => {
    const configs = {
      aprobado: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
      rechazado: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle },
      pendiente: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: Clock }
    };
    const config = configs[estado] || configs.pendiente;
    const Icon = config.icon;
    return (
      <span className={`px-3 py-1 inline-flex items-center gap-1.5 text-xs leading-5 font-semibold rounded-full ${config.bg} ${config.text}`}>
        <Icon className="w-3.5 h-3.5" />
        {estado}
      </span>
    );
  };

  const getTipoVehiculoBadge = (tipo) => {
    const colors = {
      'Auto': 'bg-blue-100 text-blue-700',
      'Motocicleta': 'bg-purple-100 text-purple-700',
      'Camioneta': 'bg-orange-100 text-orange-700'
    };
    return colors[tipo] || colors.Auto;
  };

  const stats = {
    total: vehiculos.length,
    aprobados: vehiculos.filter(v => v.estadoVerificacion === 'aprobado').length,
    pendientes: vehiculos.filter(v => v.estadoVerificacion === 'pendiente').length,
    rechazados: vehiculos.filter(v => v.estadoVerificacion === 'rechazado').length,
    promedioCalificacion: (vehiculos.filter(v => v.calificacionPromedio > 0).reduce((sum, v) => sum + v.calificacionPromedio, 0) / vehiculos.filter(v => v.calificacionPromedio > 0).length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Vehículos</h1>
          <p className="text-gray-600">Administra y verifica los vehículos de la plataforma</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Vehículos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Aprobados</p>
                <p className="text-2xl font-bold text-green-700">{stats.aprobados}</p>
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
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rechazados</p>
                <p className="text-2xl font-bold text-red-700">{stats.rechazados}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Calificación</p>
                <p className="text-2xl font-bold text-amber-600">{stats.promedioCalificacion} ★</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-amber-600" />
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
                  placeholder="Buscar por modelo, placa o conductor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 w-full lg:w-auto flex-wrap">
                <select
                  value={filterTipo}
                  onChange={(e) => setFilterTipo(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todos los tipos</option>
                  <option value="Auto">Auto</option>
                  <option value="Motocicleta">Motocicleta</option>
                  <option value="Camioneta">Camioneta</option>
                </select>

                <select
                  value={filterVerificacion}
                  onChange={(e) => setFilterVerificacion(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todas las verificaciones</option>
                  <option value="aprobado">Aprobado</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="rechazado">Rechazado</option>
                </select>

                <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span className="hidden sm:inline">Nuevo</span>
                </button>

                <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conductor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Características</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Viajes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedVehiculos.map((vehiculo) => (
                  <tr key={vehiculo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                            <Car className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{vehiculo.modelo}</div>
                          <div className="text-sm text-gray-500">{vehiculo.placa} • {vehiculo.color} • {vehiculo.año}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{vehiculo.conductor}</div>
                      <div className="text-sm text-gray-500">{vehiculo.documentoConductor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTipoVehiculoBadge(vehiculo.tipoVehiculo)}`}>
                        {vehiculo.tipoVehiculo}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3 text-sm text-gray-900">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{vehiculo.capacidad}</span>
                        </div>
                        {vehiculo.aireAcondicionado && (
                          <div className="flex items-center gap-1 text-blue-600">
                            <Wind className="w-4 h-4" />
                            <span className="text-xs">A/C</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {vehiculo.viajesRealizados}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {vehiculo.calificacionPromedio > 0 ? (
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-sm font-medium text-gray-900">{vehiculo.calificacionPromedio}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Sin calificar</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getVerificacionBadge(vehiculo.estadoVerificacion)}
                      {vehiculo.ultimaVerificacion && (
                        <div className="text-xs text-gray-500 mt-1">
                          Últ. verificación: {vehiculo.ultimaVerificacion}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setSelectedVehiculo(vehiculo)}
                          className="text-blue-600 hover:text-blue-900 p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 p-1.5 hover:bg-green-50 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
              <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredVehiculos.length)}</span> de{' '}
              <span className="font-medium">{filteredVehiculos.length}</span> resultados
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
        {selectedVehiculo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedVehiculo.modelo}</h2>
                    <p className="text-sm text-gray-500 mt-1">Placa: {selectedVehiculo.placa}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedVehiculo(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Estado de Verificación */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-600">Estado de verificación:</span>
                  {getVerificacionBadge(selectedVehiculo.estadoVerificacion)}
                </div>

                {/* Información del Vehículo */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Vehículo</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Modelo</p>
                      <p className="text-sm font-medium text-gray-900">{selectedVehiculo.modelo}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Color</p>
                      <p className="text-sm font-medium text-gray-900">{selectedVehiculo.color}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Año</p>
                      <p className="text-sm font-medium text-gray-900">{selectedVehiculo.año}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Placa</p>
                      <p className="text-sm font-medium text-gray-900">{selectedVehiculo.placa}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Tipo de Vehículo</p>
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTipoVehiculoBadge(selectedVehiculo.tipoVehiculo)}`}>
                        {selectedVehiculo.tipoVehiculo}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Capacidad</p>
                      <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        {selectedVehiculo.capacidad} pasajeros
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Aire Acondicionado</p>
                      <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                        {selectedVehiculo.aireAcondicionado ? (
                          <>
                            <Wind className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600">Sí</span>
                          </>
                        ) : (
                          <span className="text-gray-400">No</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Información del Conductor */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Conductor Asignado</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-lg font-semibold">
                        {selectedVehiculo.conductor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900">{selectedVehiculo.conductor}</p>
                        <p className="text-sm text-gray-500">ID Conductor: #{selectedVehiculo.conductorId}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-500">Documento</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVehiculo.documentoConductor}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Teléfono</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVehiculo.telefonoConductor}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estadísticas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Estadísticas de Desempeño</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 mb-1">Viajes Realizados</p>
                          <p className="text-2xl font-bold text-blue-700">{selectedVehiculo.viajesRealizados}</p>
                        </div>
                        <Car className="w-10 h-10 text-blue-600 opacity-50" />
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-amber-600 mb-1">Calificación Promedio</p>
                          <p className="text-2xl font-bold text-amber-700">
                            {selectedVehiculo.calificacionPromedio > 0 ? `${selectedVehiculo.calificacionPromedio} ★` : 'N/A'}
                          </p>
                        </div>
                        <CheckCircle className="w-10 h-10 text-amber-600 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fechas Importantes */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fechas Importantes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Fecha de Registro</p>
                      <p className="text-sm font-medium text-gray-900">{selectedVehiculo.fechaRegistro}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Última Verificación</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedVehiculo.ultimaVerificacion || 'Pendiente'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fotografías del Vehículo */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fotografías del Vehículo</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Vista Lateral</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={selectedVehiculo.fotoLateral} 
                          alt="Vista lateral"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Vista Frontal</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={selectedVehiculo.fotoFrontal} 
                          alt="Vista frontal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">Vista Interior</p>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={selectedVehiculo.fotoInterior} 
                          alt="Vista interior"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Observaciones */}
                {selectedVehiculo.observaciones && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Observaciones</h3>
                    <div className={`p-4 rounded-lg border ${
                      selectedVehiculo.estadoVerificacion === 'rechazado' 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <p className="text-sm text-gray-700">{selectedVehiculo.observaciones}</p>
                    </div>
                  </div>
                )}

                {/* Acciones según estado */}
                {selectedVehiculo.estadoVerificacion === 'pendiente' && (
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Aprobar Vehículo
                    </button>
                    <button className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Rechazar Vehículo
                    </button>
                  </div>
                )}

                {selectedVehiculo.estadoVerificacion === 'aprobado' && (
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <Edit2 className="w-5 h-5" />
                      Editar Información
                    </button>
                    <button className="flex-1 px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Solicitar Reverificación
                    </button>
                  </div>
                )}

                {selectedVehiculo.estadoVerificacion === 'rechazado' && (
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <Edit2 className="w-5 h-5" />
                      Revisar Nuevamente
                    </button>
                    <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Eliminar Registro
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageGestionVehiculo;