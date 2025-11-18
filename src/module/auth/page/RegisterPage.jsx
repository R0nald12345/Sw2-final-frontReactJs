
import React from "react";

import { useForm } from "react-hook-form";
import logoUAGRM from "../img/logo_escudo_uagrm.png";
import uagrm_logo from "../img/uagrm_logo.png";
import logo_facebook from "../img/logo_facebook.png";
import logo_whatApps from "../img/logo_whatApps.png";
import imgenFondo from "../img/imagenFondo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Tipado para el formulario de registro


const RegisterPage = () => {
  const { register: registerUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Adaptar el objeto para cumplir con RegisterPayload
      await registerUser({
        registro: data.registro,
        nombre: data.nombre,
        correo: data.correo,
        password: data.password,
        telefono: data.telefono ?? 0, // Si no se ingresa, enviar 0
        ci: data.ci,
        rol: data.rol,
      });
      navigate("/"); // Redirige al login después del registro
    } catch (error) {
      setError("root", { message: "Error al registrar. Verifica los datos." });
    }
  };

  return (
    <div
      className="min-h-screen w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgenFondo})` }}
    >
      <header className="flex justify-between p-5">
        <img src={uagrm_logo} alt="Logo UAGRM" width={80} height={100} />
        <section className="flex gap-5">
          <img src={logo_facebook} className="rounded-xl" alt="Facebook" width={50} height={50} />
          <img src={logo_whatApps} className="rounded-xl" alt="WhatsApp" width={50} height={50} />
        </section>
      </header>

      <section className="flex items-center justify-center">
        <section className="flex flex-col-reverse md:flex-row md:w-[85%] lg:w-[60%] md:mt-72 lg:mt-20 md:gap-5">
          <div className="px-5 md:px-12 py-8 mx-auto w-[95%] md:w-[60%] bg-white/20 rounded-md shadow-lg mt-8 md:mt-0">
            <h2 className="font-mplus-bold text-3xl md:text-5xl text-white text-center">Registrarse</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mx-auto">

              {/* Registro */}
              <div className="mb-2">
                <input
                  type="number"
                  placeholder="Registro Universitario"
                  {...register("registro", { required: "El registro es obligatorio" })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
                {errors.registro && <p className="text-red-500 text-sm">{errors.registro.message}</p>}
              </div>

              {/* Nombre */}
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
              </div>

              {/* Correo */}
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("correo", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Correo no válido",
                    },
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
                {errors.correo && <p className="text-red-500 text-sm">{errors.correo.message}</p>}
              </div>

              {/* Contraseña */}
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "Mínimo 8 caracteres",
                    },
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              {/* Teléfono */}
              <div className="mb-2">
                <input
                  type="number"
                  placeholder="Teléfono (opcional)"
                  {...register("telefono")}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
              </div>

              {/* CI */}
              <div className="mb-2">
                <input
                  type="number"
                  placeholder="Carnet de Identidad"
                  {...register("ci", { required: "El CI es obligatorio" })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                />
                {errors.ci && <p className="text-red-500 text-sm">{errors.ci.message}</p>}
              </div>

              {/* Rol */}
              <div className="mb-4">
                <select
                  {...register("rol", {
                    required: "El rol es obligatorio",
                    validate: (value) =>
                      ["estudiante", "docente", "administrativo"].includes(value) ||
                      "Rol inválido",
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-5 bg-white outline-none"
                >
                  <option value="">Seleccione un rol</option>
                  <option value="estudiante">Estudiante</option>
                  <option value="docente">Docente</option>
                  <option value="administrativo">Administrativo</option>
                </select>
                {errors.rol && <p className="text-red-500 text-sm">{errors.rol.message}</p>}
              </div>

              {/* Error general */}
              {errors.root && <p className="text-red-500 text-sm mb-4">{errors.root.message}</p>}

              {/* Botones */}
              <div className="flex justify-between mt-8 gap-6">
                <button
                  type="submit"
                  className="font-mplus-bold bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 w-full cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? "Registrando..." : "Registrarse"}
                </button>
                <button
                  type="button"
                  className="font-mplus-bold bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Volver al Login
                </button>
              </div>
            </form>
          </div>

          {/* Escudo */}
          <div className="w-[50%] md:w-[40%] mx-auto flex justify-center mt-5 md:mt-0">
            <img src={logoUAGRM} alt="Escudo UAGRM" width={300} height={300} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default RegisterPage;
