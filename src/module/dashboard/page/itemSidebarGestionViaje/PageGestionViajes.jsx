import React, { useState } from 'react';
import { 
  MapPin, Clock, DollarSign, Users, AlertCircle, 
  Plus, Filter, Search, Eye, Edit, Trash2, CheckCircle, 
  XCircle, Clock3, Navigation
} from 'lucide-react';

const PageGestionViajes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState('todos');

  const viajes = [
    {
      id: 'V001',
      conductor: 'Juan Pérez',
      origen: 'Campus Norte',
      destino: 'Campus Sur',
      estado: 'En curso',
      tipoViaje: 'Ida',
      pasajeros: 3,
      asientosDisp: 2,
      precio: 'Bs. 15',
      distancia: '5.2 km',
      horaInicio: '14:30',
      horaEstimada: '14:45',
      vehiculo: 'Toyota Corolla - PLT2024',
      temperatura: '25°C',
      notas: 'Recoger en entrada principal'
    },
    {
      id: 'V002',
      conductor: 'Carlos López',
      origen: 'Biblioteca Central',
      destino: 'Facultad de Ingeniería',
      estado: 'Programado',
      tipoViaje: 'Ida',
      pasajeros: 0,
      asientosDisp: 4,
      precio: 'Bs. 12',
      distancia: '3.8 km',
      horaInicio: '15:00',
      horaEstimada: '15:15',
      vehiculo: 'Honda Civic - PLT2025',
      temperatura: '25°C',
      notas: 'Viaje compartido'
    },
    {
      id: 'V003',
      conductor: 'Roberto Silva',
      origen: 'Entrada Principal',
      destino: 'Cafetería',
      estado: 'Completado',
      tipoViaje: 'Ida',
      pasajeros: 2,
      asientosDisp: 0,
      precio: 'Bs. 10',
      distancia: '1.5 km',
      horaInicio: '13:45',
      horaEstimada: '13:55',
      vehiculo: 'Nissan Sentra - PLT2026',
      temperatura: '24°C',
      notas: 'Viaje exitoso'
    },
    {
      id: 'V004',
      conductor: 'Miguel Ángel',
      origen: 'Rectorado',
      destino: 'Centro de Estudiantes',
      estado: 'Cancelado',
      tipoViaje: 'Vuelta',
      pasajeros: 0,
      asientosDisp: 4,
      precio: 'Bs. 18',
      distancia: '2.1 km',
      horaInicio: '16:00',
      horaEstimada: '16:15',
      vehiculo: 'Hyundai Accent - PLT2027',
      temperatura: '25°C',
      notas: 'Cancelado por conductor'
    },
    {
      id: 'V005',
      conductor: 'Ana María',
      origen: 'Estacionamiento',
      destino: 'Puerta Este',
      estado: 'En curso',
      tipoViaje: 'Ida',
      pasajeros: 4,
      asientosDisp: 1,
      precio: 'Bs. 14',
      distancia: '2.8 km',
      horaInicio: '14:15',
      horaEstimada: '14:30',
      vehiculo: 'Kia Forte - PLT2028',
      temperatura: '26°C',
      notas: 'Último asiento disponible'
    }
  ];

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'En curso': return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'Programado': return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
      case 'Completado': return 'bg-green-100 text-green-800 border border-green-300';
      case 'Cancelado': return 'bg-red-100 text-red-800 border border-red-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEstadoIcon = (estado) => {
    switch(estado) {
      case 'En curso': return <Navigation size={16} />;
      case 'Programado': return <Clock3 size={16} />;
      case 'Completado': return <CheckCircle size={16} />;
      case 'Cancelado': return <XCircle size={16} />;
      default: return null;
    }
  };

  const viajesFiltrados = viajes.filter(viaje => {
    const matchBusqueda = 
      viaje.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      viaje.conductor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      viaje.origen.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchEstado = filterEstado === 'todos' || viaje.estado === filterEstado;
    
    return matchBusqueda && matchEstado;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Viajes</h1>
          <p className="text-gray-600 text-sm mt-1">Monitorea y administra todos los viajes en tiempo real</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={20} />
          <span>Nuevo Viaje</span>
        </button>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Viajes Activos</p>
              <p className="text-3xl font-bold">2</p>
            </div>
            <Navigation size={32} className="opacity-20" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Programados</p>
              <p className="text-3xl font-bold">1</p>
            </div>
            <Clock3 size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completados</p>
              <p className="text-3xl font-bold">1</p>
            </div>
            <CheckCircle size={32} className="opacity-20" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Cancelados</p>
              <p className="text-3xl font-bold">1</p>
            </div>
            <AlertCircle size={32} className="opacity-20" />
          </div>
        </div>
      </div>

      {/* Buscador y Filtros */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por ID, conductor, origen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todos">Todos los estados</option>
            <option value="En curso">En curso</option>
            <option value="Programado">Programado</option>
            <option value="Completado">Completado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      {/* Tabla de Viajes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold">Viajes ({viajesFiltrados.length})</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Conductor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Ruta</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Distancia</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Pasajeros</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {viajesFiltrados.map(viaje => (
                <tr key={viaje.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{viaje.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {viaje.conductor.split(' ')[0][0]}
                      </div>
                      <span className="text-sm text-gray-700">{viaje.conductor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <MapPin size={16} className="text-blue-500" />
                      <span className="truncate max-w-xs">{viaje.origen} → {viaje.destino}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {viaje.distancia}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-700">{viaje.pasajeros}/{4}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {viaje.precio}
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getEstadoColor(viaje.estado)}`}>
                      {getEstadoIcon(viaje.estado)}
                      {viaje.estado}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Ver detalles">
                        <Eye size={18} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-yellow-50 rounded-lg transition-colors" title="Editar">
                        <Edit size={18} className="text-yellow-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Cancelar">
                        <Trash2 size={18} className="text-red-600" />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {viajesFiltrados.slice(0, 2).map(viaje => (
          <div key={viaje.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{viaje.id} - {viaje.conductor}</h3>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getEstadoColor(viaje.estado)}`}>
                {getEstadoIcon(viaje.estado)}
                {viaje.estado}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Recorrido</p>
                  <p className="font-semibold text-gray-900">{viaje.origen}</p>
                  <p className="text-sm text-gray-600 ml-4">↓</p>
                  <p className="font-semibold text-gray-900">{viaje.destino}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600">Vehículo</p>
                  <p className="font-semibold text-gray-900 text-sm">{viaje.vehiculo}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Distancia</p>
                  <p className="font-semibold text-gray-900 text-sm">{viaje.distancia}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Hora Inicio</p>
                  <p className="font-semibold text-gray-900 text-sm">{viaje.horaInicio}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Hora Estimada</p>
                  <p className="font-semibold text-gray-900 text-sm">{viaje.horaEstimada}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
                <p className="text-xs text-gray-600">Notas</p>
                <p className="text-sm text-gray-900">{viaje.notas}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageGestionViajes;