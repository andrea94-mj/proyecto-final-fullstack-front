import { createBrowserRouter } from "react-router-dom";

// Páginas:
import Home from "@/pages/Home";
import Encontrados from "@/pages/Encontrados";
import Perdidos from "@/pages/Perdidos";
import Blog from "@/pages/Blog";
import FormRegistro from "@/pages/FormRegistro";
import FormAcceso from "@/pages/FormAcceso";
import Admin from "@/pages/Admin";

// Páginas especiales:
import Layout from "@/Layout";
import PrivateRoute from "@/components/PrivateRoute";


const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,

    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'administrador',
            element: <PrivateRoute><Admin/></PrivateRoute>
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
