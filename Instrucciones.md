- [X] Crear Front con Vite-React + React-Router-Dom
- [X] Alias @ para Vite (en el archivo vite.config.js)
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@':'/src'
    }
  }
})
```
- [ ] Instalar TailwindCSS (script cdn + tailwind.config.js) En la página de tailwind aparece el paquete para instalarlo en la terminal
- [ ] Crear páginas principales: Registro - Login - Home público - Home privado (pages/ <Home><Login><Registro><Admin>)
- [ ] Crear Layout (Header + Main + Footer)
- [ ] Configurar rutas de React-Router-Dom
- [ ] Mock User (en lib/constants.js) para pruebas
- [ ] Fomulario de Login - handleLogin()
- [ ] Formulario de Registro - handleRegistro()
- [ ] Botones de Login + Registro (<Button>) (crear en un componente)
- [ ] Header condicional si existe user, botón Logout (para cerrar la sesión)
- [ ] Creamos un contexto utilizando useContext para manejar el estado de autenticación y su hook personalizado (hooks/useUser.jsx 
- [ ] Simulamos guardar datos de usuario en LocalStorage
- [ ] Proteger ruta privada (<PrivateRoute>)
- [ ] Botón de Logout y Limpieza de sesión
- [ ] Crear Variables de entorno para VITE_BACKEND_URL
- [ ] Crear los fetch para Login y Registro