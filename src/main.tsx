import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.scss";
import Accueil from "./pages/Accueil";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import Planning from "./pages/Planning";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/accueil" replace />,
  },
  {
    path: "/accueil",
    element: <Accueil />,
    errorElement: <NotFound />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/planning",
    element: <Planning />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
