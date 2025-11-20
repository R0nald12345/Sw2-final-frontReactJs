import React from 'react';
import { lazy, Suspense } from 'react';

const LadingPageComponent = lazy(() => import('../LadingPage'));

// Componente de carga
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando...</p>
    </div>
  </div>
);

// Wrapper que proporciona el contexto correcto
const LadingPageWrapper = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LadingPageComponent />
    </Suspense>
  );
};

export default LadingPageWrapper;
