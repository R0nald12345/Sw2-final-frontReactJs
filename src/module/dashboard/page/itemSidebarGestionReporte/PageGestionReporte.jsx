import React, { useState } from 'react';
import { 
  FileText, Search, Filter, Plus, Eye, Edit, Trash2, 
  AlertTriangle, CheckCircle, Clock, User, MapPin, 
  Camera, Download, MoreVertical, 
  AlertCircle, Flag
} from 'lucide-react';

const PageGestionReporte = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipo, setFilterTipo] = useState('todos');
  const [filterGravedad, setFilterGravedad] = useState('todos');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [expandedId, setExpandedId] = useState(null);

  const reportes = [
    {
      id: 'REP001',
      titulo: 'Conductor sin cinturón de seguridad',
      descripcion: 'El conductor del viaje V045 no utilizaba cinturón de seguridad durante el trayecto.',
      tipo: 'Incumplimiento',
      gravedad: 'Leve',
      estado: 'Abierto',
      reportadoPor: 'María García',
      reportadoA: 'Juan Pérez',
      fechaReporte: '2024-11-15',
      horaReporte: '14:30',
      ubicacion: 'Campus Norte - Campus Sur',
      evidencias: 2,
      fotosEvidencia: ['foto1.jpg', 'foto2.jpg'],
      comentarios: 5,
      prioridad: 'Media',
      asignado: 'Carlos Rodríguez'
    },
    {
      id: 'REP002',
      titulo: 'Exceso de velocidad',
      descripcion: 'El conductor excedió el límite de velocidad permitido en la zona universitaria.',
      tipo: 'Infracción',
      gravedad: 'Moderada',
      estado: 'En revisión',
      reportadoPor: 'Admin Sistema',
      reportadoA: 'Roberto Silva',
      fechaReporte: '2024-11-14',
      horaReporte: '10:15',
      ubicacion: 'Entrada Principal',
      evidencias: 1,
      fotosEvidencia: ['gps_data.jpg'],
      comentarios: 3,
      prioridad: 'Alta',
      asignado: 'Juan López'
    },
    {
      id: 'REP003',
      titulo: 'Comportamiento inadecuado hacia pasajero',
      descripcion: 'Pasajero reporta trato irrespetuoso por parte del conductor durante el viaje.',
      tipo: 'Conducta',
      gravedad: 'Grave',
      estado: 'Cerrado',
      reportadoPor: 'Ana Martínez',
      reportadoA: 'Miguel Ángel',
      fechaReporte: '2024-11-13',
      horaReporte: '16:45',
      ubicacion: 'Biblioteca Central',
      evidencias: 3,
      fotosEvidencia: ['video1.mp4', 'mensaje1.jpg', 'mensaje2.jpg'],
      comentarios: 8,
      prioridad: 'Crítica',
      asignado: 'Administrador'
    },
    {
      id: 'REP004',
      titulo: 'Vehículo con daños visibles',
      descripcion: 'Se reporta que el vehículo presenta daños en la carrocería y vidrios rotos.',
      tipo: 'Daño Material',
      gravedad: 'Moderada',
      estado: 'Abierto',
      reportadoPor: 'Carlos López',
      reportadoA: 'Sistema',
      fechaReporte: '2024-11-12',
      horaReporte: '09:20',
      ubicacion: 'Estacionamiento',
      evidencias: 4,
      fotosEvidencia: ['daño1.jpg', 'daño2.jpg', 'daño3.jpg', 'daño4.jpg'],
      comentarios: 2,
      prioridad: 'Media',
      asignado: 'Mantenimiento'
    },
    {
      id: 'REP005',
      titulo: 'Falta de higiene en vehículo',
      descripcion: 'El interior del vehículo se encontraba sucio y con mal olor durante el viaje.',
      tipo: 'Higiene',
      gravedad: 'Leve',
      estado: 'Resuelto',
      reportadoPor: 'Pedro Rodríguez',
      reportadoA: 'Kia Forte - PLT2028',
      fechaReporte: '2024-11-11',
      horaReporte: '13:50',
      ubicacion: 'Campus Sur',
      evidencias: 2,
      fotosEvidencia: ['limpieza1.jpg', 'limpieza2.jpg'],
      comentarios: 1,
      prioridad: 'Baja',
      asignado: 'Limpieza'
    },
    {
      id: 'REP006',
      titulo: 'Tarifa incorrecta cobrada',
      descripcion: 'El conductor cobró una tarifa superior a la establecida en el sistema.',
      tipo: 'Fraude',
      gravedad: 'Grave',
      estado: 'En revisión',
      reportadoPor: 'Lucia Fernández',
      reportadoA: 'Juan Pérez',
      fechaReporte: '2024-11-10',
      horaReporte: '11:30',
      ubicacion: 'Rectorado',
      evidencias: 3,
      fotosEvidencia: ['comprobante1.jpg', 'comprobante2.jpg', 'chat.jpg'],
      comentarios: 6,
      prioridad: 'Crítica',
      asignado: 'Auditoría'
    }
  ];

  const getTipoColor = (tipo) => {
    const tiposColor = {
      'Incumplimiento': 'bg-yellow-100 text-yellow-800',
      'Infracción': 'bg-orange-100 text-orange-800',
      'Conducta': 'bg-red-100 text-red-800',
      'Daño Material': 'bg-purple-100 text-purple-800',
      'Higiene': 'bg-blue-100 text-blue-800',
      'Fraude': 'bg-red-100 text-red-800'
    };
    return tiposColor[tipo] || 'bg-gray-100 text-gray-800';
  };

  const getGravedadColor = (gravedad) => {
    switch(gravedad) {
      case 'Leve': return 'bg-green-100 text-green-800 border-l-4 border-green-500';
      case 'Moderada': return 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500';
      case 'Grave': return 'bg-orange-100 text-orange-800 border-l-4 border-orange-500';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGravedadIcon = (gravedad) => {
    switch(gravedad) {
      case 'Leve': return <AlertCircle size={16} />;
      case 'Moderada': return <AlertTriangle size={16} />;
      case 'Grave': return <Flag size={16} />;
      default: return null;
    }
  };

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'Abierto': return 'bg-blue-100 text-blue-800';
      case 'En revisión': return 'bg-yellow-100 text-yellow-800';
      case 'Resuelto': return 'bg-green-100 text-green-800';
      case 'Cerrado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPrioridadColor = (prioridad) => {
    switch(prioridad) {
      case 'Baja': return 'text-green-600 bg-green-50';
      case 'Media': return 'text-yellow-600 bg-yellow-50';
      case 'Alta': return 'text-orange-600 bg-orange-50';
      case 'Crítica': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const reportesFiltrados = reportes.filter(reporte => {
    const matchBusqueda = 
      reporte.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reporte.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reporte.reportadoPor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchTipo = filterTipo === 'todos' || reporte.tipo === filterTipo;
    const matchGravedad = filterGravedad === 'todos' || reporte.gravedad === filterGravedad;
    const matchEstado = filterEstado === 'todos' || reporte.estado === filterEstado;
    
    return matchBusqueda && matchTipo && matchGravedad && matchEstado;
  });

  const estadisticas = {
    total: reportes.length,
    abiertos: reportes.filter(r => r.estado === 'Abierto').length,
    enRevision: reportes.filter(r => r.estado === 'En revisión').length,
    resueltos: reportes.filter(r => r.estado === 'Resuelto').length,
    criticos: reportes.filter(r => r.prioridad === 'Crítica').length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Reportes</h1>
          <p className="text-gray-600 text-sm mt-1">Monitorea y administra los reportes de usuarios y conductores</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={20} />
          <span>Nuevo Reporte</span>
        </button>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total</p>
              <p className="text-3xl font-bold">{estadisticas.total}</p>
            </div>
            <FileText size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Abiertos</p>
              <p className="text-3xl font-bold">{estadisticas.abiertos}</p>
            </div>
            <AlertCircle size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">En Revisión</p>
              <p className="text-3xl font-bold">{estadisticas.enRevision}</p>
            </div>
            <Clock size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Resueltos</p>
              <p className="text-3xl font-bold">{estadisticas.resueltos}</p>
            </div>
            <CheckCircle size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Críticos</p>
              <p className="text-3xl font-bold">{estadisticas.criticos}</p>
            </div>
            <Flag size={32} className="opacity-20" />
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
              placeholder="Buscar por ID, título, reportador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <select
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los tipos</option>
            <option value="Incumplimiento">Incumplimiento</option>
            <option value="Infracción">Infracción</option>
            <option value="Conducta">Conducta</option>
            <option value="Daño Material">Daño Material</option>
            <option value="Higiene">Higiene</option>
            <option value="Fraude">Fraude</option>
          </select>

          <select
            value={filterGravedad}
            onChange={(e) => setFilterGravedad(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todas las gravedades</option>
            <option value="Leve">Leve</option>
            <option value="Moderada">Moderada</option>
            <option value="Grave">Grave</option>
          </select>

          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los estados</option>
            <option value="Abierto">Abierto</option>
            <option value="En revisión">En revisión</option>
            <option value="Resuelto">Resuelto</option>
            <option value="Cerrado">Cerrado</option>
          </select>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Download size={20} />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* Lista de reportes */}
      <div className="space-y-4">
        {reportesFiltrados.map((reporte) => (
          <div key={reporte.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            {/* Header del reporte */}
            <div 
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedId(expandedId === reporte.id ? null : reporte.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-gray-900">{reporte.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTipoColor(reporte.tipo)}`}>
                      {reporte.tipo}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getGravedadColor(reporte.gravedad)}`}>
                      {getGravedadIcon(reporte.gravedad)}
                      {reporte.gravedad}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEstadoColor(reporte.estado)}`}>
                      {reporte.estado}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPrioridadColor(reporte.prioridad)}`}>
                      {reporte.prioridad}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900">{reporte.titulo}</h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{reporte.reportadoPor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{reporte.fechaReporte} {reporte.horaReporte}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{reporte.ubicacion}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Detalles expandibles */}
            {expandedId === reporte.id && (
              <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-6">
                {/* Descripción */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Descripción</h4>
                  <p className="text-gray-700">{reporte.descripcion}</p>
                </div>

                {/* Grid de información */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">Reportado a</p>
                    <p className="text-sm text-gray-900 font-semibold mt-1">{reporte.reportadoA}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">Asignado a</p>
                    <p className="text-sm text-gray-900 font-semibold mt-1">{reporte.asignado}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">Evidencias</p>
                    <p className="text-sm text-gray-900 font-semibold mt-1">{reporte.evidencias} archivo(s)</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-semibold">Comentarios</p>
                    <p className="text-sm text-gray-900 font-semibold mt-1">{reporte.comentarios}</p>
                  </div>
                </div>

                {/* Evidencias */}
                {reporte.fotosEvidencia.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Evidencias</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {reporte.fotosEvidencia.map((foto, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors cursor-pointer">
                          <div className="flex items-center justify-center h-24 bg-gray-100 rounded mb-2">
                            <Camera size={32} className="text-gray-400" />
                          </div>
                          <p className="text-xs text-gray-600 truncate">{foto}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Acciones */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                    <Eye size={18} />
                    Ver Detalles Completos
                  </button>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                    <Edit size={18} />
                    Editar
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                    <Trash2 size={18} />
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {reportesFiltrados.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No se encontraron reportes</p>
            <p className="text-gray-500 text-sm">Intenta cambiar los filtros o la búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageGestionReporte;