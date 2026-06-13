import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@core/router/AppRoutes";

// Optional: global loading fallback (safe UX)
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen text-gray-400">
    Loading...
  </div>
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
