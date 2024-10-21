import { createBrowserRouter } from "react-router-dom";

// Páginas:
import Home from "@/pages/Home";
import Encontrados from "@/pages/Encontrados";
import Perdidos from "@/pages/Perdidos";
import Blog from "@/pages/Blog";
import FormRegistro from "@/pages/FormRegistro";
import FormAcceso from "@/pages/FormAcceso";

// Páginas especiales:
import Layout from "@/Layout";


const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,

    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'encontrados',
            element: <Encontrados/>
        },
        {
            path: 'perdidos',
            element: <Perdidos/>
        },
        {
            path: 'blog',
            element: <Blog/>
        },
        {
            path: 'registro',
            element: <FormRegistro/>
        },
        {
            path: 'acceso',
            element: <FormAcceso/>
        }

    ]
}]);

export default router;
