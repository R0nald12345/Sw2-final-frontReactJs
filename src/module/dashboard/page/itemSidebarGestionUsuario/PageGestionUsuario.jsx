import React, { useState } from 'react';
import { Search, Filter, Edit2, Trash2, Eye, UserCheck, UserX, Download, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const PageGestionUsuario = ()=> {
  const [activeTab, setActiveTab] = useState('pasajeros');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const itemsPerPage = 8;

  const pasajeros = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@estudiante.uagrm.edu.bo', telefono: '77123456', tipoUsuario: 'Estudiante', documento: '1234567 SC', estado: 'activo', calificacion: 4.8, viajesRealizados: 23, fechaRegistro: '2024-01-15' },
    { id: 2, nombre: 'María González', email: 'maria.gonzalez@estudiante.uagrm.edu.bo', telefono: '76234567', tipoUsuario: 'Estudiante', documento: '2345678 SC', estado: 'activo', calificacion: 4.9, viajesRealizados: 45, fechaRegistro: '2024-02-10' },
    { id: 3, nombre: 'Carlos Méndez', email: 'carlos.mendez@uagrm.edu.bo', telefono: '75345678', tipoUsuario: 'Docente', documento: '3456789 SC', estado: 'activo', calificacion: 4.7, viajesRealizados: 12, fechaRegistro: '2024-03-05' },
    { id: 4, nombre: 'Ana Torres', email: 'ana.torres@uagrm.edu.bo', telefono: '74456789', tipoUsuario: 'Administrativo', documento: '4567890 SC', estado: 'suspendido', calificacion: 4.3, viajesRealizados: 8, fechaRegistro: '2024-01-20' },
    { id: 5, nombre: 'Luis Vargas', email: 'luis.vargas@estudiante.uagrm.edu.bo', telefono: '73567890', tipoUsuario: 'Estudiante', documento: '5678901 SC', estado: 'activo', calificacion: 5.0, viajesRealizados: 67, fechaRegistro: '2023-11-12' },
    { id: 6, nombre: 'Patricia Rojas', email: 'patricia.rojas@estudiante.uagrm.edu.bo', telefono: '72678901', tipoUsuario: 'Estudiante', documento: '6789012 SC', estado: 'inactivo', calificacion: 4.6, viajesRealizados: 5, fechaRegistro: '2024-04-22' },
  ];

  const conductores = [
    { id: 1, nombre: 'Roberto Sánchez', email: 'roberto.sanchez@conductor.com', telefono: '70123456', documento: '7890123 SC', vehiculo: 'Toyota Corolla 2020', placa: 'ABC-1234', estado: 'activo', calificacion: 4.9, viajesRealizados: 156, verificacion: 'aprobado', fechaRegistro: '2023-08-10' },
    { id: 2, nombre: 'Diego Fernández', email: 'diego.fernandez@conductor.com', telefono: '71234567', documento: '8901234 SC', vehiculo: 'Hyundai Accent 2019', placa: 'DEF-5678', estado: 'activo', calificacion: 4.7, viajesRealizados: 89, verificacion: 'aprobado', fechaRegistro: '2023-09-15' },
    { id: 3, nombre: 'Raúl Morales', email: 'raul.morales@conductor.com', telefono: '69345678', documento: '9012345 SC', vehiculo: 'Nissan Versa 2021', placa: 'GHI-9012', estado: 'activo', calificacion: 4.8, viajesRealizados: 234, verificacion: 'aprobado', fechaRegistro: '2023-07-20' },
    { id: 4, nombre: 'Javier Castro', email: 'javier.castro@conductor.com', telefono: '68456789', documento: '0123456 SC', vehiculo: 'Chevrolet Sail 2018', placa: 'JKL-3456', estado: 'suspendido', calificacion: 4.2, viajesRealizados: 45, verificacion: 'rechazado', fechaRegistro: '2024-02-05' },
    { id: 5, nombre: 'Fernando Ruiz', email: 'fernando.ruiz@conductor.com', telefono: '67567890', documento: '1234568 SC', vehiculo: 'Suzuki Swift 2022', placa: 'MNO-7890', estado: 'activo', calificacion: 5.0, viajesRealizados: 312, verificacion: 'aprobado', fechaRegistro: '2023-06-01' },
  ];

  const usuarios = activeTab === 'pasajeros' ? pasajeros : conductores;
  
  const filteredUsers = usuarios.filter(user => {
    const matchesSearch = user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'todos' || user.estado === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getEstadoBadge = (estado) => {
    const colors = {
      activo: 'bg-green-100 text-green-700',
      suspendido: 'bg-red-100 text-red-700',
      inactivo: 'bg-gray-100 text-gray-700'
    };
    return colors[estado] || colors.inactivo;
  };

  const getTipoUsuarioBadge = (tipo) => {
    const colors = {
      'Estudiante': 'bg-blue-100 text-blue-700',
      'Docente': 'bg-purple-100 text-purple-700',
      'Administrativo': 'bg-orange-100 text-orange-700'
    };
    return colors[tipo] || 'bg-gray-100 text-gray-700';
  };

  const getVerificacionBadge = (verificacion) => {
    const colors = {
      aprobado: 'bg-green-100 text-green-700',
      rechazado: 'bg-red-100 text-red-700',
      pendiente: 'bg-yellow-100 text-yellow-700'
    };
    return colors[verificacion] || colors.pendiente;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra pasajeros y conductores de la plataforma UAGRM</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pasajeros</p>
                <p className="text-2xl font-bold text-gray-900">{pasajeros.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Conductores</p>
                <p className="text-2xl font-bold text-gray-900">{conductores.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Usuarios Activos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {usuarios.filter(u => u.estado === 'activo').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Suspendidos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {usuarios.filter(u => u.estado === 'suspendido').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <UserX className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => { setActiveTab('pasajeros'); setCurrentPage(1); }}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'pasajeros'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pasajeros
              </button>
              <button
                onClick={() => { setActiveTab('conductores'); setCurrentPage(1); }}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'conductores'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Conductores
              </button>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todos los estados</option>
                  <option value="activo">Activo</option>
                  <option value="suspendido">Suspendido</option>
                  <option value="inactivo">Inactivo</option>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                  {activeTab === 'pasajeros' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  )}
                  {activeTab === 'conductores' && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehículo</th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Viajes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {user.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.nombre}</div>
                          <div className="text-sm text-gray-500">{user.documento}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.telefono}</div>
                    </td>
                    {activeTab === 'pasajeros' && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTipoUsuarioBadge(user.tipoUsuario)}`}>
                          {user.tipoUsuario}
                        </span>
                      </td>
                    )}
                    {activeTab === 'conductores' && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.vehiculo}</div>
                        <div className="text-sm text-gray-500">{user.placa}</div>
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm font-medium text-gray-900">{user.calificacion}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.viajesRealizados}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoBadge(user.estado)}`}>
                        {user.estado}
                      </span>
                      {activeTab === 'conductores' && (
                        <div className="mt-1">
                          <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getVerificacionBadge(user.verificacion)}`}>
                            {user.verificacion}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button className="text-blue-600 hover:text-blue-900 p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
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
              <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredUsers.length)}</span> de{' '}
              <span className="font-medium">{filteredUsers.length}</span> resultados
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
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
      </div>
    </div>
  );
}

export default PageGestionUsuario;