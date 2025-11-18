// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { ChevronDown } from 'lucide-react';
// //import { useAuthStore } from '../../../stores/useAuthStore';

// interface VotosData {
//   name: string;
//   votos: number;
// }

// interface VotosDecanoData {
//   name: string;
//   value: number;
//   color: string;
// }

// interface VotosDirectorData {
//   name: string;
//   votos: number;
// }

// interface DashboardStats {
//   totalVotantes: number;
//   totalVotantesFacultad: number;
//   totalVotantesCarrera: number;
// }

// const Dashboard = () => {
//   const [selectedFacultad, setSelectedFacultad] = useState('Tecnología');
//   const [selectedCarrera, setSelectedCarrera] = useState('Ing.Civil');
//   const [selectedVotos, setSelectedVotos] = useState({
//     estudiantes: true,
//     docentes: false
//   });

//   const stats: DashboardStats = {
//     totalVotantes: 34567,
//     totalVotantesFacultad: 3242,
//     totalVotantesCarrera: 1234
//   };

//   const votosData: VotosData[] = [
//     { name: 'Reinero', votos: 45000 },
//     { name: 'Nogales', votos: 12000 },
//     { name: 'Pedraza', votos: 22000 }
//   ];

//   const votosDecanoData: VotosDecanoData[] = [
//     { name: 'Caballero', value: 60, color: '#3B82F6' },
//     { name: 'Peinado', value: 25, color: '#F97316' },
//     { name: 'Rosales', value: 10, color: '#EF4444' },
//     { name: 'Gonzales', value: 5, color: '#FCD34D' }
//   ];

//   const votosDirectorData: VotosDirectorData[] = [
//     { name: 'Junior', votos: 12000 },
//     { name: 'Calizaya', votos: 5500 },
//     { name: 'Peinado', votos: 3500 },
//     { name: 'Dunnia', votos: 2000 }
//   ];

//   const facultades = ['Tecnología', 'Medicina', 'Derecho', 'Economía'];
//   const carreras = ['Ing.Civil', 'Ing.Sistemas', 'Ing.Industrial', 'Arquitectura'];

//   const handleVotosChange = (tipo: 'estudiantes' | 'docentes') => {
//     setSelectedVotos(prev => ({
//       ...prev,
//       [tipo]: !prev[tipo]
//     }));
//   };

//   // const user = useAuthStore(state => state.user);
//   // const token = useAuthStore(state => state.token);
//   // console.log('Usuario desde Zustand:', user);
//   // console.log('Token desde Zustand:', token);



//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-sm font-medium text-gray-600 mb-2">Total votantes:</h3>
//           <p className="text-3xl font-bold text-gray-800">{stats.totalVotantes.toLocaleString()}</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-sm font-medium text-gray-600 mb-2">Total votantes por facultad:</h3>
//           <p className="text-3xl font-bold text-gray-800">{stats.totalVotantesFacultad.toLocaleString()}</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-sm font-medium text-gray-600 mb-2">Total votantes por carrera:</h3>
//           <p className="text-3xl font-bold text-gray-800">{stats.totalVotantesCarrera.toLocaleString()}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Facultad</label>
//               <div className="relative">
//                 <select
//                   value={selectedFacultad}
//                   onChange={(e) => setSelectedFacultad(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {facultades.map(facultad => (
//                     <option key={facultad} value={facultad}>{facultad}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Carrera</label>
//               <div className="relative">
//                 <select
//                   value={selectedCarrera}
//                   onChange={(e) => setSelectedCarrera(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {carreras.map(carrera => (
//                     <option key={carrera} value={carrera}>{carrera}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-3">Votos:</label>
//               <div className="space-y-2">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={selectedVotos.estudiantes}
//                     onChange={() => handleVotosChange('estudiantes')}
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">estudiantes</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={selectedVotos.docentes}
//                     onChange={() => handleVotosChange('docentes')}
//                     className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">docentes</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Charts Grid */}
//         <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Bar Chart - Votos */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Votos</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={votosData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip formatter={(value: any) => [value.toLocaleString(), 'Votos']} />
//                 <Bar dataKey="votos" fill="#3B82F6" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Pie Chart - Votos Decano */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Votos Decano</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   // data={votosDecanoData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   dataKey="value"
//                   label={({ name, value }) => `${name}: ${value}%`}
//                 >
//                   {votosDecanoData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Bar Chart - Votos director de carrera */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Votos director de carrera</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={votosDirectorData}
//             layout="horizontal"
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" width={80} />
//             <Tooltip formatter={(value) => [value.toLocaleString(), 'Votos']} />
//             <Bar dataKey="votos" fill="#3B82F6" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;