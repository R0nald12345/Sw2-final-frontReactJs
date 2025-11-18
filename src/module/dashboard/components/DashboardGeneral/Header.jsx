import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine, RiChat1Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";



const Header = () => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("auth-storage");
    if (storage) {
      try {
        const parsed = JSON.parse(storage);
        const userData = parsed.state?.user;
        if (userData) {
          setUser(userData);
        }
      } catch (err) {
        console.error("Error al leer auth-storage:", err);
      }
    }
  }, []);

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Administrativo</h2>
        <p className="text-gray-600 text-sm">Universidad Gabriel René Moreno</p>
      </div>
      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <IoNotifications className="text-xl" />
              <span className="absolute -top-0.5 right-0 bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs font-bold">
                2
              </span>
            </MenuButton>
          }
          arrow
          align="end"
          transition
          menuClassName="bg-white shadow-lg rounded-lg border p-4 min-w-[300px]"
        >
          <h1 className="text-gray-900 text-center font-medium mb-4">
            Notificaciones (3)
          </h1>
          <hr className="mb-4 border-gray-200" />
          {[1, 2, 3].map((item) => (
            <MenuItem key={item} className="p-0 hover:bg-transparent">
              <Link
                to="/"
                className="text-gray-700 flex items-center gap-4 py-2 px-4 hover:bg-gray-50 transition-colors rounded-lg w-full"
              >
                <RiChat1Fill className="p-2 bg-yellow-100 text-yellow-600 box-content rounded-full" />
                <div className="text-sm flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span>Nuevo comentario</span>
                    <span className="text-xs text-gray-500">Hoy</span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {user?.nombre || "Alguien"} ha comentado tu publicación.
                  </p>
                </div>
              </Link>
            </MenuItem>
          ))}
          <hr className="my-4 border-gray-200" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center">
            <Link
              to="/"
              className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>

        {/* Menú de usuario */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <span className="font-bold text-gray-700">
                {user?.nombre?.split(" ")[0]?.toUpperCase() || "USUARIO"}
              </span>
              <FaAngleDown className="text-gray-600" />
            </MenuButton>
          }
          arrow
          align="end"
          transition
          menuClassName="bg-white shadow-lg rounded-lg border p-4 min-w-[200px]"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-gray-50 flex items-center gap-4 py-2 px-4 w-full"
              to="/perfil"
            >
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold text-gray-700">
                  {user?.nombre || "Nombre"}
                </span>
                <span className="text-xs text-gray-500">
                  {user?.correo || "correo@ejemplo.com"}
                </span>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-4 border-gray-200" />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-gray-50 flex items-center gap-4 py-2 px-4 w-full text-gray-700"
              to="/configuracion"
            >
              <IoMdSettings />
              <span>Configuración</span>
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              className="rounded-lg transition-colors hover:bg-red-50 flex items-center gap-4 py-2 px-4 w-full"
              to="/logout"
            >
              <RiLogoutCircleRLine className="text-red-600" />
              <span className="text-red-600 font-semibold">Cerrar Sesión</span>
            </Link>
          </MenuItem>
        </Menu>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            AD
          </div>
          <div>
            <p className="font-semibold text-sm">Administrador</p>
            <p className="text-xs text-gray-600">admin@uagrm.edu.bo</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
