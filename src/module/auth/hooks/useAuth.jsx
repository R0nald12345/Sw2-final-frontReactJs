
import React, {  createContext,useContext, useState } from "react";

import Swal from "sweetalert2";
import { authService } from "../service/authService";
// import { useAuthStore } from '../../../stores/useAuthStore';


const AuthContext = createContext(null);

export const AuthProvider= ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { setAuth, logout: storeLogout} = useAuthStore();

    const login = async (payload) => {
        try {
            setIsLoading(true);
            const response = await authService.login(payload);

            if (response && response.user) {
                setAuth(response.user, response.token); // Guardar en Zustand
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: `Has iniciado sesión como ${response.user.nombre}`,
                }).then(() => {
                    window.location.reload(); // Recarga la página después de cerrar el alert
                });
            }
            
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales Incorrectos o Vacías!",
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (payload) => {
        try {
            setIsLoading(true);
            await authService.register(payload);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Tu cuenta ha sido creada correctamente',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: error instanceof Error ? error.message : 'Error inesperado',
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        storeLogout(); // Limpiar Zustand
    };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook para obtener el contexto de autenticación
 *
 * Lanza un error si no se encuentra dentro de un proveedor de autenticación
 *
 * @returns {AuthContextType} El objeto del contexto de autenticación
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};