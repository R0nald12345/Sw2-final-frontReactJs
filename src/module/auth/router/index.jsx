import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Login = lazy(() => import('../page/LoginPage'))
const RegisterPage = lazy(() => import('../page/RegisterPage'))
 

// Componente de carga
const LoadingComponent = () => <div>Cargando...</div>;

const AuthRoutes = () => {
    return (
        <Routes>

            <Route path="login" element={
                <Suspense fallback={<LoadingComponent />}>
                    <Login />
                </Suspense>
            } />

            <Route path="registro" element={
                <Suspense fallback={<LoadingComponent />}>
                    <RegisterPage/>
                </Suspense>
            } />

            <Route path="*" element={<Navigate to="/auth/login" replace />} />

        </Routes>
    )
}

export default AuthRoutes;