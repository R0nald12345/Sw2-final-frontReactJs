import React, { useState } from 'react';
import { 
  Settings, Save, X, Eye, EyeOff, Upload, Camera, 
  Mail, Phone, MapPin, User, Lock, Bell, Shield,
  Palette, Globe, Database, LogOut, Edit2, Check,
  AlertCircle, CheckCircle, Key, ToggleRight, ToggleLeft
} from 'lucide-react';

const PageGestionConfiguracion = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Estado del perfil
  const [perfil, setPerfil] = useState({
    nombre: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@uagrm.edu.bo',
    telefono: '+591 76543210',
    departamento: 'Administración',
    rol: 'Administrador',
    foto: null,
    fechaRegistro: '2024-01-15'
  });

  // Estado de seguridad
  const [seguridad, setSeguridad] = useState({
    passwordActual: '',
    passwordNueva: '',
    confirmarPassword: '',
    autenticacion2FA: true,
    ultimoAcceso: '2024-11-15 14:30:22',
    dispositivosConectados: 3
  });

  // Estado de notificaciones
  const [notificaciones, setNotificaciones] = useState({
    emailNotificaciones: true,
    notificacionesViajes: true,
    notificacionesPagos: true,
    notificacionesReportes: true,
    notificacionesResenias: true,
    alertasSeguridad: true,
    notificacionesPromociones: false,
    resumenSemanal: true,
    resumenMensual: true
  });

  // Estado de preferencias
  const [preferencias, setPreferencias] = useState({
    tema: 'claro',
    idioma: 'es',
    zonaHoraria: 'America/La_Paz',
    formato24h: true,
    unidad: 'km'
  });

  // Estado del sistema
  const [sistema, setSistema] = useState({
    versionApp: '1.0.0',
    basesDatos: '450 MB / 1 GB',
    cacheLimpio: true,
    actualizacionesAutomaticas: true,
    mantenimientoSemanal: 'Domingo 02:00 AM'
  });

  const handleEditPerfil = (field, value) => {
    setPerfil(prev => ({ ...prev, [field]: value }));
  };

  const handleEditSeguridad = (field, value) => {
    setSeguridad(prev => ({ ...prev, [field]: value }));
  };

  const handleEditNotificaciones = (field) => {
    setNotificaciones(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleEditPreferencias = (field, value) => {
    setPreferencias(prev => ({ ...prev, [field]: value }));
  };

  const handleGuardar = async () => {
    setIsSaving(true);
    // Simulación de guardado
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccessMessage('Cambios guardados correctamente');
    setIsSaving(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCambiarContrasena = async () => {
    if (seguridad.passwordNueva !== seguridad.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccessMessage('Contraseña actualizada correctamente');
    setSeguridad(prev => ({
      ...prev,
      passwordActual: '',
      passwordNueva: '',
      confirmarPassword: ''
    }));
    setIsSaving(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-600 text-sm mt-1">Administra tu perfil, seguridad y preferencias</p>
      </div>

      {/* Mensaje de éxito */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle size={20} className="text-green-600" />
          <span className="text-green-800 text-sm">{successMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-lg shadow p-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('perfil')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
            activeTab === 'perfil'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <User size={18} />
          Perfil
        </button>
        <button
          onClick={() => setActiveTab('seguridad')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
            activeTab === 'seguridad'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Lock size={18} />
          Seguridad
        </button>
        <button
          onClick={() => setActiveTab('notificaciones')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
            activeTab === 'notificaciones'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Bell size={18} />
          Notificaciones
        </button>
        <button
          onClick={() => setActiveTab('preferencias')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
            activeTab === 'preferencias'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Palette size={18} />
          Preferencias
        </button>
        <button
          onClick={() => setActiveTab('sistema')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
            activeTab === 'sistema'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Database size={18} />
          Sistema
        </button>
      </div>

      {/* TAB: PERFIL */}
      {activeTab === 'perfil' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Foto de perfil */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-4">Foto de Perfil</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                {perfil.nombre.split(' ')[0][0]}{perfil.nombre.split(' ')[1][0]}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors w-full justify-center">
                <Upload size={18} />
                Subir foto
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors w-full justify-center">
                <X size={18} />
                Eliminar
              </button>
            </div>
          </div>

          {/* Información personal */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Información Personal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={perfil.nombre}
                  onChange={(e) => handleEditPerfil('nombre', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={perfil.email}
                  onChange={(e) => handleEditPerfil('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={perfil.telefono}
                  onChange={(e) => handleEditPerfil('telefono', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Departamento</label>
                <input
                  type="text"
                  value={perfil.departamento}
                  onChange={(e) => handleEditPerfil('departamento', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Rol</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Administrador</option>
                  <option>Moderador</option>
                  <option>Operador</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha de Registro</label>
                <input
                  type="text"
                  value={perfil.fechaRegistro}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                />
              </div>
            </div>

            <button
              onClick={handleGuardar}
              disabled={isSaving}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition-colors font-semibold"
            >
              <Save size={18} />
              {isSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </div>
      )}

      {/* TAB: SEGURIDAD */}
      {activeTab === 'seguridad' && (
        <div className="space-y-6">
          {/* Cambiar contraseña */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Key size={20} className="text-blue-600" />
              Cambiar Contraseña
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña Actual</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={seguridad.passwordActual}
                    onChange={(e) => handleEditSeguridad('passwordActual', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña Nueva</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={seguridad.passwordNueva}
                    onChange={(e) => handleEditSeguridad('passwordNueva', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmar Contraseña</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={seguridad.confirmarPassword}
                    onChange={(e) => handleEditSeguridad('confirmarPassword', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleCambiarContrasena}
              disabled={isSaving}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition-colors font-semibold"
            >
              <Lock size={18} />
              {isSaving ? 'Actualizando...' : 'Actualizar Contraseña'}
            </button>
          </div>

          {/* Autenticación 2FA */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Shield size={20} className="text-green-600" />
              Autenticación de Dos Factores (2FA)
            </h3>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Estado 2FA</p>
                <p className="text-sm text-gray-600">
                  {seguridad.autenticacion2FA ? 'Habilitada' : 'Deshabilitada'}
                </p>
              </div>
              <button
                onClick={() => handleEditSeguridad('autenticacion2FA', !seguridad.autenticacion2FA)}
                className="text-4xl"
              >
                {seguridad.autenticacion2FA ? (
                  <ToggleRight size={40} className="text-green-600" />
                ) : (
                  <ToggleLeft size={40} className="text-gray-400" />
                )}
              </button>
            </div>

            <p className="text-sm text-gray-600">
              La autenticación de dos factores añade una capa adicional de seguridad a tu cuenta.
            </p>
          </div>

          {/* Información de sesión */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Información de Sesión</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Último Acceso</p>
                  <p className="text-sm text-gray-600">{seguridad.ultimoAcceso}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Dispositivos Conectados</p>
                  <p className="text-sm text-gray-600">{seguridad.dispositivosConectados} dispositivos activos</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Ver dispositivos
                </button>
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition-colors font-semibold">
              <LogOut size={18} />
              Cerrar Todas las Sesiones
            </button>
          </div>
        </div>
      )}

      {/* TAB: NOTIFICACIONES */}
      {activeTab === 'notificaciones' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Preferencias de Notificaciones</h3>

            <div className="space-y-3">
              {/* Notificaciones por email */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones por Email</p>
                    <p className="text-sm text-gray-600">Recibe notificaciones importantes por email</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('emailNotificaciones')}
                >
                  {notificaciones.emailNotificaciones ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Notificaciones de viajes */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones de Viajes</p>
                    <p className="text-sm text-gray-600">Avisos sobre nuevos viajes disponibles</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('notificacionesViajes')}
                >
                  {notificaciones.notificacionesViajes ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Notificaciones de pagos */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones de Pagos</p>
                    <p className="text-sm text-gray-600">Confirmaciones de pago y transacciones</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('notificacionesPagos')}
                >
                  {notificaciones.notificacionesPagos ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Notificaciones de reportes */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle size={20} className="text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones de Reportes</p>
                    <p className="text-sm text-gray-600">Nuevos reportes y reclamaciones</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('notificacionesReportes')}
                >
                  {notificaciones.notificacionesReportes ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Notificaciones de reseñas */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-pink-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones de Reseñas</p>
                    <p className="text-sm text-gray-600">Nuevas calificaciones y comentarios</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('notificacionesResenias')}
                >
                  {notificaciones.notificacionesResenias ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Alertas de seguridad */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Alertas de Seguridad</p>
                    <p className="text-sm text-gray-600">Alertas críticas de seguridad</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('alertasSeguridad')}
                  disabled
                >
                  <ToggleRight size={32} className="text-green-600" />
                </button>
              </div>

              {/* Promociones */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Notificaciones de Promociones</p>
                    <p className="text-sm text-gray-600">Ofertas y promociones especiales</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('notificacionesPromociones')}
                >
                  {notificaciones.notificacionesPromociones ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Resumen semanal */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-indigo-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Resumen Semanal</p>
                    <p className="text-sm text-gray-600">Resumen de actividades semanales</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('resumenSemanal')}
                >
                  {notificaciones.resumenSemanal ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>

              {/* Resumen mensual */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Resumen Mensual</p>
                    <p className="text-sm text-gray-600">Resumen de actividades mensuales</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditNotificaciones('resumenMensual')}
                >
                  {notificaciones.resumenMensual ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handleGuardar}
              disabled={isSaving}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition-colors font-semibold"
            >
              <Save size={18} />
              {isSaving ? 'Guardando...' : 'Guardar Preferencias'}
            </button>
          </div>
        </div>
      )}

      {/* TAB: PREFERENCIAS */}
      {activeTab === 'preferencias' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Preferencias de Aplicación</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tema</label>
                <select
                  value={preferencias.tema}
                  onChange={(e) => handleEditPreferencias('tema', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="claro">Claro</option>
                  <option value="oscuro">Oscuro</option>
                  <option value="auto">Auto (según sistema)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Idioma</label>
                <select
                  value={preferencias.idioma}
                  onChange={(e) => handleEditPreferencias('idioma', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Zona Horaria</label>
                <select
                  value={preferencias.zonaHoraria}
                  onChange={(e) => handleEditPreferencias('zonaHoraria', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="America/La_Paz">La Paz (UTC -4)</option>
                  <option value="America/Denver">Mountain Time (UTC -7)</option>
                  <option value="America/New_York">Eastern Time (UTC -5)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Unidad de Distancia</label>
                <select
                  value={preferencias.unidad}
                  onChange={(e) => handleEditPreferencias('unidad', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="km">Kilómetros (km)</option>
                  <option value="mi">Millas (mi)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Formato de Hora</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={preferencias.formato24h}
                      onChange={() => handleEditPreferencias('formato24h', true)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">24 horas (14:30)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={!preferencias.formato24h}
                      onChange={() => handleEditPreferencias('formato24h', false)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">12 horas (2:30 PM)</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={handleGuardar}
              disabled={isSaving}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition-colors font-semibold"
            >
              <Save size={18} />
              {isSaving ? 'Guardando...' : 'Guardar Preferencias'}
            </button>
          </div>
        </div>
      )}

      {/* TAB: SISTEMA */}
      {activeTab === 'sistema' && (
        <div className="space-y-6">
          {/* Información del sistema */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Información del Sistema</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Versión de Aplicación</p>
                  <p className="text-sm text-gray-600">{sistema.versionApp}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Verificar actualizaciones
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Base de Datos</p>
                  <p className="text-sm text-gray-600">{sistema.basesDatos}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Limpiar caché
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Caché Limpio</p>
                  <p className="text-sm text-gray-600">{sistema.cacheLimpio ? 'Sí' : 'No'}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Mantenimiento Semanal</p>
                  <p className="text-sm text-gray-600">{sistema.mantenimientoSemanal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Configuración del sistema */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold">Configuración Avanzada</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Actualizaciones Automáticas</p>
                    <p className="text-sm text-gray-600">Instalar actualizaciones automáticamente</p>
                  </div>
                </div>
                <button>
                  {sistema.actualizacionesAutomaticas ? (
                    <ToggleRight size={32} className="text-green-600" />
                  ) : (
                    <ToggleLeft size={32} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Acciones de administrador */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <h3 className="text-lg font-bold text-red-600">Acciones Destructivas</h3>

            <div className="space-y-3">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold text-left">
                Limpiar Toda la Caché de la Aplicación
              </button>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold text-left">
                Restablecer Configuración Predeterminada
              </button>

              <button className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg transition-colors font-semibold text-left">
                Exportar Base de Datos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageGestionConfiguracion;