import React, { useState } from "react";
import { Home, Car, Users, CreditCard, FileText, Star, Bell, Settings, X, Menu, Calendar } from 'lucide-react';
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/dashboard' },
    { id: 'viajes', icon: Car, label: 'Gestión de Viajes', path: '/dashboard/viajes' },
    { id: 'usuarios', icon: Users, label: 'Usuarios', path: '/dashboard/usuarios' },
    { id: 'vehiculos', icon: Car, label: 'Vehículos', path: '/dashboard/vehiculos' },
    { id: 'reservas', icon: Calendar, label: 'Reservas', path: '/dashboard/reservas' },
    { id: 'pagos', icon: CreditCard, label: 'Pagos', path: '/dashboard/pagos' },
    { id: 'reportes', icon: FileText, label: 'Reportes', path: '/dashboard/reportes' },
    { id: 'calificaciones', icon: Star, label: 'Calificaciones', path: '/dashboard/calificaciones' },
    { id: 'notificaciones', icon: Bell, label: 'Notificaciones', path: '/dashboard/notificaciones' },
    { id: 'configuracion', icon: Settings, label: 'Configuración', path: '/dashboard/configuracion' }
  ];

  const isActive = (path) => {
    // Si es la ruta raíz del dashboard, solo coincide exactamente
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    // Para otras rutas, usa startsWith
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col h-screen sticky top-0`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {sidebarOpen && (
          <div>
            <h1 className="text-xl font-bold">UGM</h1>
            <p className="text-xs text-gray-400">Transport</p>
          </div>
        )}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="p-2 hover:bg-gray-800 rounded"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                active ? 'bg-blue-600 text-white' : 'hover:bg-gray-800 text-gray-300'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <Icon size={20} />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-2">
          {sidebarOpen && (
            <div className="flex-1">
              <p className="text-sm font-semibold">Admin</p>
              <p className="text-xs text-gray-400">admin@uagrm.edu.bo</p>
            </div>
          )}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            AD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;