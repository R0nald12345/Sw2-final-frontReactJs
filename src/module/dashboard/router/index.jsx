import React from 'react'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import DashboardLayout from '../page/PageDashboard/DashboardLayout'

const DashboardLayout = lazy(() => import('../page/PageDashboard/DashboardLayout'));
const PageInicio = lazy(() => import('../page/ItemSidebarInicio/PageInicio'));

const PageGestionViajes = lazy(() => import('../page/itemSidebarGestionViaje/PageGestionViajes'));
const PageGestionUsuario = lazy(() => import('../page/itemSidebarGestionUsuario/PageGestionUsuario'));
const PageGestionVehiculo = lazy(() => import('../page/itemSidebarGestionVehiculo/PageGestionVechiculo'));
const PageGestionReserva = lazy(() => import('../page/itemSidebarGestionReserva/PageGestionReserva'));
const PageGestionPago = lazy(() => import('../page/itemSidebarGestionPago/PageGestionPago'));
const PageGestionReporte = lazy(() => import('../page/itemSidebarGestionReporte/PageGestionReporte'));
const PageGestionCalificacion = lazy(() => import('../page/itemSidebarGestionCalificacion/PageGestionCalificacion'));
const PageGestionNotificacion = lazy(() => import('../page/itemSidebarGestionNotificacion/PageGestionNotificacion'));
const PageGestionConfiguracion = lazy(() => import('../page/itemSidebarGestionConfiguracion/PageGestionConfiguracion'));


const Loading = () => <div>Loading...</div>;

const DashboardRoutes = () => (
  <Routes>
    {/* ---------- RUTA PADRE CON LAYOUT ---------- */}
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <DashboardLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <PageInicio />
          </Suspense>
        }
      />

      {/* hija  →  /dashboard/postulantes */}
      <Route
        path="viajes"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionViajes />
          </Suspense>
        }
      /> 

      <Route
        path="usuarios"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionUsuario />
          </Suspense>
        }
      /> 
      <Route
        path="vehiculos"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionVehiculo />
          </Suspense>
        }
      /> 

      <Route
        path="reservas"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionReserva />
          </Suspense>
        }
      />
      <Route
        path="pagos"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionPago />
          </Suspense>
        }
      />
      <Route
        path="reportes"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionReporte />
          </Suspense>
        }
      />
      <Route
        path="calificaciones"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionCalificacion />
          </Suspense>
        }
      />
      <Route
        path="notificaciones"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionNotificacion />
          </Suspense>
        }
      />
      <Route
        path="configuracion"
        element={
          <Suspense fallback={<Loading />}>
            <PageGestionConfiguracion />
          </Suspense>
        }
      />
    

    </Route>
  </Routes>
);

export default DashboardRoutes;
