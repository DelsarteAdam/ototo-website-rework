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
import Actualite from "./pages/Actualite";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

import { MangaApiProvider } from "./context/useMangaApi";
import Lecture from "./pages/Lecture";
import Test from "./pages/Test";
import Manga from "./pages/Manga";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MangaApiProvider>
        <Layout />
      </MangaApiProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true, // This makes "/accueil" the default route for "/"
        element: <Navigate to="/accueil" replace />,
      },
      {
        path: "accueil",
        element: <Accueil />,
        errorElement: <NotFound />,
      },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      {
        path: "actualite",
        element: <Actualite />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
      {
        path: "lecture/:manga",
        element: <Lecture />,
      },
      {
        path: "manga/:manga",
        element: <Manga />,
      },
    ],
  },
  {
    path: "notfound",
    element: <NotFound />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
