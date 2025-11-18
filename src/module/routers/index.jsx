import React ,{ lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PublicRoute from './PublicRoute'
// import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from '../auth/hooks/useAuth'
// import AuthRoutes from '../auth/router/index'

const LoadingFallback = () => <div>Cargando....</div>

// Carga diferida de los módulos
const AuthRoutes = lazy(() => import('../auth/router/index'))
const DashboardRoutes = lazy(() => import('../dashboard/router/index'))

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        
                        {/* Rutas públicas */}
                        <Route element={<PublicRoute />}>
                            <Route path="/auth/*" element={<AuthRoutes />} />
                        </Route>

                        {/* Rutas protegidas */}
                        {/* <Route element={<ProtectedRoute />}> */}
                        <Route element={<PublicRoute />}>
                            <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        </Route>

                        {/* Ruta por defecto */}
                        <Route path="*" element={<Navigate to="/auth" replace />} />
                    </Routes>
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes