import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "@/css/Layout.css"; 

const Admin = () => {
  // Estados para almacenar los datos
  const [perdidos, setPerdidos] = useState([]);
  const [encontrados, setEncontrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('perdidos'); // Para alternar entre perdidos y encontrados

  // URL de la API desde variables de entorno
  const URL = import.meta.env.VITE_API_URL;

  // Función para cargar los datos
  const cargarDatos = async () => {
    setLoading(true);
    try {
      // Cargar mascotas perdidas
      const resPerdidos = await fetch(`${URL}perdidos`);
      const dataPerdidos = await resPerdidos.json();
      
      // Cargar mascotas encontradas
      const resEncontrados = await fetch(`${URL}encontrados`);
      const dataEncontrados = await resEncontrados.json();
      
      setPerdidos(dataPerdidos.data || []);
      setEncontrados(dataEncontrados.data || []);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      alert("Error al cargar los datos de mascotas");
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    cargarDatos();
  }, []);

// Función para eliminar una mascota perdida
const eliminarPerdido = async (id) => {
  if (window.confirm('¿Estás seguro de que quieres eliminar esta mascota?')) {
    try {
      // Obtener el token del localStorage
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${URL}perdidos/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        // Actualizar el estado eliminando la mascota
        setPerdidos(perdidos.filter(mascota => mascota._id !== id));
        alert('Mascota eliminada correctamente');
      } else {
        alert('Error al eliminar la mascota: No autorizado');
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error de conexión al eliminar la mascota");
    }
  }
};

// Función para eliminar una mascota encontrada
const eliminarEncontrado = async (id) => {
  if (window.confirm('¿Estás seguro de que quieres eliminar esta mascota?')) {
    try {
      // Obtener el token del localStorage
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${URL}encontrados/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        // Actualizar el estado eliminando la mascota
        setEncontrados(encontrados.filter(mascota => mascota._id !== id));
        alert('Mascota eliminada correctamente');
      } else {
        alert('Error al eliminar la mascota: No autorizado');
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error de conexión al eliminar la mascota");
    }
  }
};

  return (
    <div className="admin-container">
      <h1>Panel de Administrador</h1>
      
      {/* Selector de pestañas */}
      <div className="admin-tabs">
        <button className={activeTab === 'perdidos' ? 'active' : ''} onClick={() => setActiveTab('perdidos')}> Mascotas Perdidas</button>
        <button className={activeTab === 'encontrados' ? 'active' : ''} onClick={() => setActiveTab('encontrados')}> Mascotas Encontradas</button>
      </div>

      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="admin-content">
          {/* Tabla de mascotas perdidas */}
          {activeTab === 'perdidos' && (
            <div className="mascotas-table">
              <h2>Mascotas Perdidas</h2>
              {perdidos.length === 0 ? (
                <p>No hay mascotas perdidas registradas.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Color</th>
                      <th>Ubicación</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {perdidos.map((mascota) => (
                      <tr key={mascota._id}>
                        <td>{mascota.nombre || 'Sin nombre'}</td>
                        <td>{mascota.tipo_de_animal}</td>
                        <td>{mascota.color}</td>
                        <td>{mascota.lugar_perdido}</td>
                        <td>{new Date(mascota.fecha_perdido).toLocaleDateString()}</td>
                        <td>
                          <Link to={`/editar-perdido/${mascota._id}`} className="btn-editar"> Editar</Link>
                          <button onClick={() => eliminarPerdido(mascota._id)} className="btn-eliminar">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Tabla de mascotas encontradas */}
          {activeTab === 'encontrados' && (
            <div className="mascotas-table">
              <h2>Mascotas Encontradas</h2>
              {encontrados.length === 0 ? (
                <p>No hay mascotas encontradas registradas.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Color</th>
                      <th>Ubicación</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {encontrados.map((mascota) => (
                      <tr key={mascota._id}>
                        <td>{mascota.tipo_de_animal}</td>
                        <td>{mascota.color}</td>
                        <td>{mascota.lugar_encontrado}</td>
                        <td>{new Date(mascota.fecha_encontrado).toLocaleDateString()}</td>
                        <td>
                          <Link to={`/editar-encontrado/${mascota._id}`} className="btn-editar">Editar</Link>
                          <button onClick={() => eliminarEncontrado(mascota._id)} className="btn-eliminar">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;