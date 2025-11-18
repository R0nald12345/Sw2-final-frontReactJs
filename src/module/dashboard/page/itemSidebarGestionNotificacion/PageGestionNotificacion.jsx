import React, { useState } from 'react';
import { 
  Bell, Search, Filter, Plus, Eye, Trash2, 
  MoreVertical, CheckCircle, Clock, AlertCircle, 
  Mail, MessageSquare, AlertTriangle, Info, 
  Users, MapPin, DollarSign, Car, TrendingUp,
  Archive, Send, RefreshCw, Download, Settings
} from 'lucide-react';

const PageGestionNotificacion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipo, setFilterTipo] = useState('todos');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [filterDestino, setFilterDestino] = useState('todos');
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('todas');

  const notificaciones = [
    {
      id: 'NOT001',
      titulo: 'Nuevo viaje disponible',
      mensaje: 'Un nuevo viaje está disponible cerca de tu ubicación. Distancia: 2.5 km',
      tipo: 'Viaje',
      prioridad: 'Alta',
      estado: 'No leída',
      destino: 'Conductores',
      fecha: '2024-11-15',
      hora: '14:30',
      icono: Car,
      color: 'bg-blue-100 text-blue-800',
      leida: false,
      enviada: true,
      tiempoEnvio: '2024-11-15 14:30:22',
      usuariosAfectados: 45,
      tasa_lectura: 87,
      detalles: 'Viaje de Campus Norte a Campus Sur',
      accion: 'Ver viaje',
      enlace: '/viajes/V050'
    },
    {
      id: 'NOT002',
      titulo: 'Reserva confirmada',
      mensaje: 'Tu reserva ha sido confirmada. Tu conductor llegará en 5 minutos.',
      tipo: 'Reserva',
      prioridad: 'Media',
      estado: 'Leída',
      destino: 'Pasajeros',
      fecha: '2024-11-15',
      hora: '13:45',
      icono: CheckCircle,
      color: 'bg-green-100 text-green-800',
      leida: true,
      enviada: true,
      tiempoEnvio: '2024-11-15 13:45:10',
      usuariosAfectados: 120,
      tasa_lectura: 95,
      detalles: 'Conductor: Juan Pérez (Placa: PLT2024)',
      accion: 'Rastrear',
      enlace: '/reservas/RES123'
    },
    {
      id: 'NOT003',
      titulo: 'Alerta de seguridad',
      mensaje: 'Se ha detectado un comportamiento inusual en tu cuenta. Por favor verifica tu información.',
      tipo: 'Seguridad',
      prioridad: 'Crítica',
      estado: 'No leída',
      destino: 'Todos',
      fecha: '2024-11-15',
      hora: '12:20',
      icono: AlertTriangle,
      color: 'bg-red-100 text-red-800',
      leida: false,
      enviada: true,
      tiempoEnvio: '2024-11-15 12:20:45',
      usuariosAfectados: 2,
      tasa_lectura: 100,
      detalles: 'Intento de acceso desde ubicación desconocida',
      accion: 'Revisar actividad',
      enlace: '/seguridad'
    },
    {
      id: 'NOT004',
      titulo: 'Pago recibido',
      mensaje: 'Has recibido un pago de Bs. 15.00 por el viaje completado.',
      tipo: 'Pago',
      prioridad: 'Media',
      estado: 'Leída',
      destino: 'Conductores',
      fecha: '2024-11-15',
      hora: '14:35',
      icono: DollarSign,
      color: 'bg-green-100 text-green-800',
      leida: true,
      enviada: true,
      tiempoEnvio: '2024-11-15 14:35:33',
      usuariosAfectados: 120,
      tasa_lectura: 98,
      detalles: 'Viaje V045 - Pasajero: María García',
      accion: 'Ver transacción',
      enlace: '/pagos/PAG001'
    },
    {
      id: 'NOT005',
      titulo: 'Recordatorio: Completar verificación',
      mensaje: 'Te recordamos completar tu verificación de identidad para continuar usando el servicio.',
      tipo: 'Recordatorio',
      prioridad: 'Baja',
      estado: 'No leída',
      destino: 'Todos',
      fecha: '2024-11-14',
      hora: '10:00',
      icono: Info,
      color: 'bg-yellow-100 text-yellow-800',
      leida: false,
      enviada: true,
      tiempoEnvio: '2024-11-14 10:00:00',
      usuariosAfectados: 35,
      tasa_lectura: 45,
      detalles: 'Falta de documentos: Licencia de conducir',
      accion: 'Verificar identidad',
      enlace: '/verificacion'
    },
    {
      id: 'NOT006',
      titulo: 'Nueva calificación recibida',
      mensaje: 'María García te ha calificado con 5 estrellas.',
      tipo: 'Calificación',
      prioridad: 'Baja',
      estado: 'Leída',
      destino: 'Conductores',
      fecha: '2024-11-15',
      hora: '14:40',
      icono: MessageSquare,
      color: 'bg-purple-100 text-purple-800',
      leida: true,
      enviada: true,
      tiempoEnvio: '2024-11-15 14:40:15',
      usuariosAfectados: 89,
      tasa_lectura: 92,
      detalles: '"Excelente conductor, muy atento y profesional."',
      accion: 'Ver reseña',
      enlace: '/calificaciones/CAL001'
    },
    {
      id: 'NOT007',
      titulo: 'Promoción disponible',
      mensaje: '¡Obtén un 20% de descuento en tus próximos 3 viajes!',
      tipo: 'Promoción',
      prioridad: 'Baja',
      estado: 'No leída',
      destino: 'Pasajeros',
      fecha: '2024-11-15',
      hora: '08:00',
      icono: TrendingUp,
      color: 'bg-pink-100 text-pink-800',
      leida: false,
      enviada: true,
      tiempoEnvio: '2024-11-15 08:00:00',
      usuariosAfectados: 500,
      tasa_lectura: 35,
      detalles: 'Código: PROMO20 - Válido hasta el 30 de noviembre',
      accion: 'Usar promoción',
      enlace: '/promociones'
    },
    {
      id: 'NOT008',
      titulo: 'Vehículo requiere mantenimiento',
      mensaje: 'Tu vehículo requiere un control de mantenimiento pronto.',
      tipo: 'Mantenimiento',
      prioridad: 'Media',
      estado: 'No leída',
      destino: 'Conductores',
      fecha: '2024-11-14',
      hora: '16:00',
      icono: AlertCircle,
      color: 'bg-orange-100 text-orange-800',
      leida: false,
      enviada: true,
      tiempoEnvio: '2024-11-14 16:00:22',
      usuariosAfectados: 25,
      tasa_lectura: 72,
      detalles: 'Próximo cambio de aceite: 150 km',
      accion: 'Programar mantenimiento',
      enlace: '/vehiculos/mantenimiento'
    }
  ];

  const getPrioridadColor = (prioridad) => {
    switch(prioridad) {
      case 'Crítica': return 'bg-red-50 border-l-4 border-red-500';
      case 'Alta': return 'bg-orange-50 border-l-4 border-orange-500';
      case 'Media': return 'bg-yellow-50 border-l-4 border-yellow-500';
      case 'Baja': return 'bg-blue-50 border-l-4 border-blue-500';
      default: return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };

  const getPrioridadBadgeColor = (prioridad) => {
    switch(prioridad) {
      case 'Crítica': return 'bg-red-100 text-red-800';
      case 'Alta': return 'bg-orange-100 text-orange-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoBadgeColor = (estado) => {
    return estado === 'Leída' ? 'bg-gray-100 text-gray-700' : 'bg-blue-100 text-blue-800';
  };

  const getTipoIcon = (tipo) => {
    const iconMap = {
      'Viaje': Car,
      'Reserva': CheckCircle,
      'Seguridad': AlertTriangle,
      'Pago': DollarSign,
      'Recordatorio': Info,
      'Calificación': MessageSquare,
      'Promoción': TrendingUp,
      'Mantenimiento': AlertCircle
    };
    return iconMap[tipo] || Bell;
  };

  const notificacionesFiltradas = notificaciones.filter(notif => {
    const matchBusqueda = 
      notif.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.mensaje.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.tipo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchTipo = filterTipo === 'todos' || notif.tipo === filterTipo;
    const matchEstado = filterEstado === 'todos' || notif.estado === filterEstado;
    const matchDestino = filterDestino === 'todos' || notif.destino === filterDestino;

    if (activeTab === 'no_leidas') return matchBusqueda && matchTipo && matchEstado && matchDestino && !notif.leida;
    if (activeTab === 'leidas') return matchBusqueda && matchTipo && matchEstado && matchDestino && notif.leida;
    
    return matchBusqueda && matchTipo && matchEstado && matchDestino;
  });

  const estadisticas = {
    total: notificaciones.length,
    no_leidas: notificaciones.filter(n => !n.leida).length,
    leidas: notificaciones.filter(n => n.leida).length,
    criticas: notificaciones.filter(n => n.prioridad === 'Crítica').length,
    porcentaje_lectura: Math.round((notificaciones.filter(n => n.leida).length / notificaciones.length) * 100)
  };

  const tipos = [...new Set(notificaciones.map(n => n.tipo))];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Centro de Notificaciones</h1>
          <p className="text-gray-600 text-sm mt-1">Gestiona todas las notificaciones del sistema</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={20} />
          <span>Nueva Notificación</span>
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
            <Bell size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">No leídas</p>
              <p className="text-3xl font-bold">{estadisticas.no_leidas}</p>
              <p className="text-blue-100 text-xs mt-1">Requieren atención</p>
            </div>
            <Mail size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Leídas</p>
              <p className="text-3xl font-bold">{estadisticas.leidas}</p>
            </div>
            <CheckCircle size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Críticas</p>
              <p className="text-3xl font-bold">{estadisticas.criticas}</p>
            </div>
            <AlertTriangle size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Tasa de Lectura</p>
              <p className="text-3xl font-bold">{estadisticas.porcentaje_lectura}%</p>
            </div>
            <TrendingUp size={32} className="opacity-20" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-lg shadow p-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('todas')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'todas'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas ({estadisticas.total})
        </button>
        <button
          onClick={() => setActiveTab('no_leidas')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'no_leidas'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          No leídas ({estadisticas.no_leidas})
        </button>
        <button
          onClick={() => setActiveTab('leidas')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'leidas'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Leídas ({estadisticas.leidas})
        </button>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por título, mensaje o tipo..."
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
            {tipos.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>

          <select
            value={filterDestino}
            onChange={(e) => setFilterDestino(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los destinos</option>
            <option value="Conductores">Conductores</option>
            <option value="Pasajeros">Pasajeros</option>
            <option value="Todos">Todos</option>
          </select>

          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los estados</option>
            <option value="Leída">Leída</option>
            <option value="No leída">No leída</option>
          </select>

          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <RefreshCw size={20} />
            <span>Limpiar</span>
          </button>
        </div>
      </div>

      {/* Acciones en lote */}
      {estadisticas.no_leidas > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info size={20} className="text-blue-600" />
            <span className="text-sm text-blue-800">Tienes <strong>{estadisticas.no_leidas}</strong> notificación(es) sin leer</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            Marcar todas como leídas
          </button>
        </div>
      )}

      {/* Lista de notificaciones */}
      <div className="space-y-4">
        {notificacionesFiltradas.map((notif) => {
          const TipoIcon = getTipoIcon(notif.tipo);
          
          return (
            <div key={notif.id} className={`rounded-lg shadow hover:shadow-lg transition-all ${getPrioridadColor(notif.prioridad)} ${!notif.leida ? 'border-2 border-blue-300' : ''}`}>
              {/* Header */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedId(expandedId === notif.id ? null : notif.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Contenido principal */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Icono del tipo */}
                      <div className={`p-2 rounded-lg ${notif.color}`}>
                        <TipoIcon size={20} />
                      </div>

                      {/* Título */}
                      <h3 className={`font-bold text-lg ${!notif.leida ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notif.titulo}
                      </h3>

                      {/* Badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPrioridadBadgeColor(notif.prioridad)}`}>
                          {notif.prioridad}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEstadoBadgeColor(notif.estado)}`}>
                          {notif.estado}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                          {notif.destino}
                        </span>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <p className="text-gray-700 line-clamp-2">{notif.mensaje}</p>

                    {/* Meta información */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                      <span>{notif.fecha}</span>
                      <span>{notif.hora}</span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {notif.usuariosAfectados} usuarios
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {notif.tasa_lectura}% leído
                      </span>
                    </div>
                  </div>

                  {/* Botones de acciones rápidas */}
                  <div className="flex items-center gap-2">
                    {!notif.leida && (
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="Marcar como leída">
                        <CheckCircle size={20} className="text-blue-600" />
                      </button>
                    )}
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="Más opciones">
                      <MoreVertical size={20} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Detalles expandibles */}
              {expandedId === notif.id && (
                <div className="border-t border-gray-300 p-6 bg-white space-y-6">
                  {/* Mensaje completo */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mensaje Completo</h4>
                    <p className="text-gray-700 leading-relaxed">{notif.mensaje}</p>
                  </div>

                  {/* Detalles adicionales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">ID de Notificación</p>
                      <p className="font-mono text-sm text-gray-900">{notif.id}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Tipo</p>
                      <p className="text-sm text-gray-900">{notif.tipo}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Enviado</p>
                      <p className="text-sm text-gray-900">{notif.tiempoEnvio}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Destino</p>
                      <p className="text-sm text-gray-900">{notif.destino}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Usuarios Afectados</p>
                      <p className="text-sm text-gray-900">{notif.usuariosAfectados}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 font-semibold mb-2">Tasa de Lectura</p>
                      <p className="text-sm text-gray-900">{notif.tasa_lectura}%</p>
                    </div>
                  </div>

                  {/* Detalles específicos */}
                  {notif.detalles && (
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-xs text-blue-600 font-semibold mb-2">Detalles</p>
                      <p className="text-sm text-blue-900">{notif.detalles}</p>
                    </div>
                  )}

                  {/* Acciones */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    {!notif.leida && (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                        <CheckCircle size={18} />
                        Marcar como Leída
                      </button>
                    )}
                    {notif.accion && (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                        <Eye size={18} />
                        {notif.accion}
                      </button>
                    )}
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                      <Archive size={18} />
                      Archivar
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm">
                      <Trash2 size={18} />
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {notificacionesFiltradas.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Bell size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No se encontraron notificaciones</p>
            <p className="text-gray-500 text-sm">Intenta cambiar los filtros o la búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Agregar esta línea al inicio del archivo si no existe
// import { Users } from 'lucide-react';

export default PageGestionNotificacion;