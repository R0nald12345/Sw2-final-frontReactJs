import React, { useState } from 'react';
import { 
  Star, Search, Filter, Plus, Eye, Edit, Trash2, 
  MoreVertical, TrendingUp, BarChart3, PieChart, 
  User, MessageSquare, Calendar, ThumbsUp, ThumbsDown,
  AlertCircle, CheckCircle, Download, RefreshCw, Flag
} from 'lucide-react';

const PageGestionCalificacion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipo, setFilterTipo] = useState('todos');
  const [filterRating, setFilterRating] = useState('todos');
  const [filterPeriodo, setFilterPeriodo] = useState('hoy');
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('conductores');

  const calificacionesConductores = [
    {
      id: 'CAL001',
      conductor: 'Juan Pérez',
      viaje: 'V045',
      pasajero: 'María García',
      puntuacion: 5,
      comentario: 'Excelente conductor, muy atento y profesional. Vehículo limpio y cómodo.',
      tipo: 'Viaje',
      fecha: '2024-11-15',
      hora: '14:35',
      aspectos: {
        seguridad: 5,
        limpieza: 5,
        trato: 5,
        puntualidad: 5
      },
      reportado: false,
      respuesta: 'Gracias por tu confianza, esperamos verte pronto.',
      fechaRespuesta: '2024-11-15'
    },
    {
      id: 'CAL002',
      conductor: 'Carlos López',
      viaje: 'V046',
      pasajero: 'Ana Martínez',
      puntuacion: 3,
      comentario: 'El conductor iba muy rápido y fue un poco desatento. Llegué asustada.',
      tipo: 'Viaje',
      fecha: '2024-11-14',
      hora: '10:15',
      aspectos: {
        seguridad: 2,
        limpieza: 4,
        trato: 3,
        puntualidad: 4
      },
      reportado: true,
      respuesta: null,
      fechaRespuesta: null
    },
    {
      id: 'CAL003',
      conductor: 'Roberto Silva',
      viaje: 'V047',
      pasajero: 'Pedro Rodríguez',
      puntuacion: 4,
      comentario: 'Buen viaje, llegué a tiempo. Solo el vehículo estaba un poco desordenado.',
      tipo: 'Viaje',
      fecha: '2024-11-13',
      hora: '15:05',
      aspectos: {
        seguridad: 4,
        limpieza: 3,
        trato: 4,
        puntualidad: 5
      },
      reportado: false,
      respuesta: 'Gracias, mejoraremos la limpieza del vehículo.',
      fechaRespuesta: '2024-11-13'
    },
    {
      id: 'CAL004',
      conductor: 'Miguel Ángel',
      viaje: 'V048',
      pasajero: 'Lucia Fernández',
      puntuacion: 2,
      comentario: 'Conductor muy grosero y desatento. No recomiendo este servicio.',
      tipo: 'Viaje',
      fecha: '2024-11-12',
      hora: '15:20',
      aspectos: {
        seguridad: 3,
        limpieza: 2,
        trato: 1,
        puntualidad: 2
      },
      reportado: true,
      respuesta: null,
      fechaRespuesta: null
    },
    {
      id: 'CAL005',
      conductor: 'Juan Pérez',
      viaje: 'V049',
      pasajero: 'Sofia González',
      puntuacion: 5,
      comentario: 'Perfecto en todo. Muy amable y profesional.',
      tipo: 'Viaje',
      fecha: '2024-11-11',
      hora: '14:15',
      aspectos: {
        seguridad: 5,
        limpieza: 5,
        trato: 5,
        puntualidad: 5
      },
      reportado: false,
      respuesta: 'Agradecemos tu evaluación positiva.',
      fechaRespuesta: '2024-11-11'
    }
  ];

  const calificacionesPasajeros = [
    {
      id: 'CAL101',
      pasajero: 'María García',
      conductor: 'Juan Pérez',
      viaje: 'V045',
      puntuacion: 5,
      comentario: 'Pasajero respetuoso y educado. Sin problemas durante el viaje.',
      tipo: 'Pasajero',
      fecha: '2024-11-15',
      hora: '14:35',
      aspectos: {
        respeto: 5,
        puntualidad: 5,
        aseo: 5,
        comunicacion: 5
      },
      reportado: false,
      respuesta: null,
      fechaRespuesta: null
    },
    {
      id: 'CAL102',
      pasajero: 'Ana Martínez',
      conductor: 'Carlos López',
      viaje: 'V046',
      puntuacion: 4,
      comentario: 'Buena experiencia, pasajero tranquilo y amable.',
      tipo: 'Pasajero',
      fecha: '2024-11-14',
      hora: '10:15',
      aspectos: {
        respeto: 4,
        puntualidad: 5,
        aseo: 4,
        comunicacion: 4
      },
      reportado: false,
      respuesta: null,
      fechaRespuesta: null
    },
    {
      id: 'CAL103',
      pasajero: 'Pedro Rodríguez',
      conductor: 'Roberto Silva',
      viaje: 'V047',
      puntuacion: 3,
      comentario: 'Pasajero llegó tarde y tuve que esperar. Fue algo incómodo.',
      tipo: 'Pasajero',
      fecha: '2024-11-13',
      hora: '15:05',
      aspectos: {
        respeto: 3,
        puntualidad: 2,
        aseo: 4,
        comunicacion: 3
      },
      reportado: false,
      respuesta: 'Se reportará al pasajero sobre puntualidad.',
      fechaRespuesta: '2024-11-13'
    }
  ];

  const getCalificaciones = () => activeTab === 'conductores' ? calificacionesConductores : calificacionesPasajeros;
  const calificaciones = getCalificaciones();

  const getRatingColor = (puntuacion) => {
    if (puntuacion === 5) return 'text-yellow-500';
    if (puntuacion === 4) return 'text-yellow-500';
    if (puntuacion === 3) return 'text-yellow-400';
    if (puntuacion === 2) return 'text-orange-500';
    return 'text-red-500';
  };

  const getRatingBg = (puntuacion) => {
    if (puntuacion === 5) return 'bg-green-50';
    if (puntuacion === 4) return 'bg-blue-50';
    if (puntuacion === 3) return 'bg-yellow-50';
    if (puntuacion === 2) return 'bg-orange-50';
    return 'bg-red-50';
  };

  const getReportStatus = (reportado) => {
    return reportado ? { text: 'Reportada', color: 'text-red-600 bg-red-50', icon: Flag } : { text: 'Válida', color: 'text-green-600 bg-green-50', icon: CheckCircle };
  };

  const calificacionesFiltradas = calificaciones.filter(cal => {
    const matchBusqueda = 
      (activeTab === 'conductores' ? cal.conductor : cal.pasajero).toLowerCase().includes(searchTerm.toLowerCase()) ||
      cal.comentario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cal.viaje.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchTipo = filterTipo === 'todos' || cal.tipo === filterTipo;
    const matchRating = filterRating === 'todos' || cal.puntuacion === parseInt(filterRating);
    
    return matchBusqueda && matchTipo && matchRating;
  });

  const estadisticas = {
    total: calificaciones.length,
    promedio: (calificaciones.reduce((sum, c) => sum + c.puntuacion, 0) / calificaciones.length).toFixed(1),
    excelentes: calificaciones.filter(c => c.puntuacion === 5).length,
    buenas: calificaciones.filter(c => c.puntuacion === 4).length,
    regulares: calificaciones.filter(c => c.puntuacion === 3).length,
    malas: calificaciones.filter(c => c.puntuacion <= 2).length,
    reportadas: calificaciones.filter(c => c.reportado).length
  };

  const distribucion = [
    { rating: '5★', count: estadisticas.excelentes, porcentaje: Math.round((estadisticas.excelentes / estadisticas.total) * 100) },
    { rating: '4★', count: estadisticas.buenas, porcentaje: Math.round((estadisticas.buenas / estadisticas.total) * 100) },
    { rating: '3★', count: estadisticas.regulares, porcentaje: Math.round((estadisticas.regulares / estadisticas.total) * 100) },
    { rating: '1-2★', count: estadisticas.malas, porcentaje: Math.round((estadisticas.malas / estadisticas.total) * 100) }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Calificaciones</h1>
          <p className="text-gray-600 text-sm mt-1">Monitorea la satisfacción de usuarios y conductores</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Download size={20} />
          <span>Exportar Reporte</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-lg shadow p-2">
        <button
          onClick={() => setActiveTab('conductores')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === 'conductores'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>Conductores</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('pasajeros')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === 'pasajeros'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>Pasajeros</span>
          </div>
        </button>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Calificación Promedio</p>
              <p className="text-3xl font-bold">{estadisticas.promedio}</p>
              <p className="text-yellow-100 text-xs mt-1">De 5.0</p>
            </div>
            <div className="flex items-center gap-1 text-3xl">
              {[...Array(Math.round(estadisticas.promedio))].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Excelentes</p>
              <p className="text-3xl font-bold">{estadisticas.excelentes}</p>
              <p className="text-green-100 text-xs mt-1">{Math.round((estadisticas.excelentes / estadisticas.total) * 100)}% del total</p>
            </div>
            <ThumbsUp size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Negativas</p>
              <p className="text-3xl font-bold">{estadisticas.malas}</p>
              <p className="text-red-100 text-xs mt-1">{Math.round((estadisticas.malas / estadisticas.total) * 100)}% del total</p>
            </div>
            <ThumbsDown size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Reportadas</p>
              <p className="text-3xl font-bold">{estadisticas.reportadas}</p>
              <p className="text-orange-100 text-xs mt-1">Requieren revisión</p>
            </div>
            <AlertCircle size={32} className="opacity-20" />
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribución de calificaciones */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold mb-4">Distribución de Calificaciones</h3>
          <div className="space-y-4">
            {distribucion.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{item.count} reseñas</span>
                    <span className="text-sm font-bold text-gray-900">{item.porcentaje}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      idx === 0 ? 'bg-yellow-500' :
                      idx === 1 ? 'bg-blue-500' :
                      idx === 2 ? 'bg-yellow-400' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${item.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top y Bottom */}
        <div className="space-y-4">
          {/* Mejores calificados */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-600" />
              Top Mejores
            </h3>
            <div className="space-y-3">
              {calificaciones
                .filter(c => c.puntuacion === 5)
                .slice(0, 3)
                .map((cal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {activeTab === 'conductores' ? cal.conductor : cal.pasajero}
                      </p>
                      <p className="text-xs text-gray-600">{cal.viaje}</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Peores calificados */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-red-600" />
              Requieren Atención
            </h3>
            <div className="space-y-3">
              {calificaciones
                .filter(c => c.puntuacion <= 2)
                .slice(0, 3)
                .map((cal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {activeTab === 'conductores' ? cal.conductor : cal.pasajero}
                      </p>
                      <p className="text-xs text-gray-600">{cal.viaje}</p>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      {[...Array(cal.puntuacion)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                ))}
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
              placeholder="Buscar por nombre, viaje o comentario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todas las calificaciones</option>
            <option value="5">5 Estrellas</option>
            <option value="4">4 Estrellas</option>
            <option value="3">3 Estrellas</option>
            <option value="2">2 Estrellas</option>
            <option value="1">1 Estrella</option>
          </select>

          <select
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los tipos</option>
            <option value="Viaje">Viaje</option>
            <option value="Servicio">Servicio</option>
          </select>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <RefreshCw size={20} />
            <span>Limpiar Filtros</span>
          </button>
        </div>
      </div>

      {/* Lista de calificaciones */}
      <div className="space-y-4">
        {calificacionesFiltradas.map((cal) => {
          const status = getReportStatus(cal.reportado);
          const StatusIcon = status.icon;
          
          return (
            <div key={cal.id} className={`rounded-lg shadow hover:shadow-lg transition-shadow ${getRatingBg(cal.puntuacion)}`}>
              {/* Header */}
              <div 
                className="p-6 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setExpandedId(expandedId === cal.id ? null : cal.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Info principal */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-gray-900">{cal.id}</span>
                      
                      {/* Rating stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={i < cal.puntuacion ? 'text-yellow-500' : 'text-gray-300'}
                            fill={i < cal.puntuacion ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="ml-2 font-bold text-gray-900">{cal.puntuacion}.0</span>
                      </div>

                      {/* Status badge */}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${status.color}`}>
                        <StatusIcon size={14} />
                        {status.text}
                      </span>
                    </div>

                    {/* Nombres */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900">
                        {activeTab === 'conductores' ? cal.conductor : cal.pasajero}
                      </span>
                      <span className="text-gray-600">→</span>
                      <span className="text-gray-600">
                        {activeTab === 'conductores' ? `Por ${cal.pasajero}` : `Para ${cal.conductor}`}
                      </span>
                    </div>

                    {/* Comentario */}
                    <p className="text-gray-700 line-clamp-2">{cal.comentario}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                      <span>{cal.viaje}</span>
                      <span>{cal.fecha}</span>
                      <span>{cal.hora}</span>
                    </div>
                  </div>

                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Detalles expandibles */}
              {expandedId === cal.id && (
                <div className="border-t border-gray-300 p-6 bg-white space-y-6">
                  {/* Comentario completo */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comentario Completo</h4>
                    <p className="text-gray-700 leading-relaxed">{cal.comentario}</p>
                  </div>

                  {/* Aspectos evaluados */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Detalles de Evaluación</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(cal.aspectos).map(([aspecto, puntuacion]) => (
                        <div key={aspecto} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600 capitalize font-semibold mb-2">{aspecto}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < puntuacion ? 'text-yellow-500' : 'text-gray-300'}
                                fill={i < puntuacion ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Respuesta */}
                  {cal.respuesta ? (
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Respuesta de {activeTab === 'conductores' ? 'Conductor' : 'Pasajero'}</h4>
                      <p className="text-gray-700 text-sm">{cal.respuesta}</p>
                      <p className="text-xs text-gray-600 mt-2">{cal.fechaRespuesta}</p>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-sm text-yellow-800">Sin respuesta aún</p>
                    </div>
                  )}

                  {/* Acciones */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                      <MessageSquare size={18} />
                      Responder
                    </button>
                    {cal.reportado && (
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                        <Flag size={18} />
                        Ver Reporte
                      </button>
                    )}
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                      <Eye size={18} />
                      Detalles Completos
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {calificacionesFiltradas.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Star size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No se encontraron calificaciones</p>
            <p className="text-gray-500 text-sm">Intenta cambiar los filtros o la búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageGestionCalificacion;