import React from 'react';
import { 
  Car, Users, FileText, Star, 
  MapPin, UserCheck, AlertCircle, DollarSign, TrendingUp
} from 'lucide-react';

const PageInicio = () => {
  const stats = [
    { 
      title: 'Viajes Hoy', 
      value: '45', 
      change: '+12%', 
      icon: Car, 
      color: 'bg-blue-500' 
    },
    { 
      title: 'Conductores Activos', 
      value: '28', 
      change: '+5%', 
      icon: UserCheck, 
      color: 'bg-green-500' 
    },
    { 
      title: 'Ingresos Hoy', 
      value: 'Bs. 2,450', 
      change: '+18%', 
      icon: DollarSign, 
      color: 'bg-purple-500' 
    },
    { 
      title: 'Reportes Pendientes', 
      value: '7', 
      change: '-3%', 
      icon: AlertCircle, 
      color: 'bg-red-500' 
    }
  ];

  const recentTrips = [
    {
      id: 'V001',
      conductor: 'Juan Pérez',
      pasajero: 'María García',
      origen: 'Campus Norte',
      destino: 'Campus Sur',
      estado: 'En curso',
      hora: '14:30',
      monto: 'Bs. 15'
    },
    {
      id: 'V002',
      conductor: 'Carlos López',
      pasajero: 'Ana Martínez',
      origen: 'Biblioteca Central',
      destino: 'Facultad de Ingeniería',
      estado: 'Completado',
      hora: '14:15',
      monto: 'Bs. 12'
    },
    {
      id: 'V003',
      conductor: 'Roberto Silva',
      pasajero: 'Pedro Rodríguez',
      origen: 'Entrada Principal',
      destino: 'Cafetería',
      estado: 'Programado',
      hora: '15:00',
      monto: 'Bs. 10'
    }
  ];

  const topDrivers = [
    { nombre: 'Juan Pérez', viajes: 156, rating: 4.9, vehiculo: 'Toyota Corolla' },
    { nombre: 'Carlos López', viajes: 142, rating: 4.8, vehiculo: 'Honda Civic' },
    { nombre: 'Roberto Silva', viajes: 128, rating: 4.7, vehiculo: 'Nissan Sentra' },
    { nombre: 'Miguel Ángel', viajes: 115, rating: 4.6, vehiculo: 'Hyundai Accent' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} vs ayer
                  </p>
                </div>
                <div className={`${stat.color} p-4 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Trips */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-bold">Viajes Recientes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conductor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pasajero</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ruta</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hora</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTrips.map(trip => (
                  <tr key={trip.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{trip.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trip.conductor}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trip.pasajero}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="truncate max-w-[150px]">{trip.origen} → {trip.destino}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        trip.estado === 'En curso' ? 'bg-blue-100 text-blue-800' :
                        trip.estado === 'Completado' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trip.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{trip.hora}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{trip.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Drivers */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-bold">Mejores Conductores</h3>
          </div>
          <div className="p-6 space-y-4">
            {topDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{driver.nombre}</p>
                    <p className="text-xs text-gray-600">{driver.vehiculo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold">{driver.rating}</span>
                  </div>
                  <p className="text-xs text-gray-600">{driver.viajes} viajes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">Actividad Semanal</h3>
        <div className="h-64 flex items-end justify-around gap-2">
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, idx) => {
            const heights = [60, 80, 70, 90, 75, 50, 40];
            return (
              <div key={day} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-400"
                  style={{ height: `${heights[idx]}%` }}
                />
                <p className="text-xs text-gray-600">{day}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageInicio;