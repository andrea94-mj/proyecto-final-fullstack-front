import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '@/css/Forms.css';

const EditarPerdido = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_API_URL;
  
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    imagen: null,
    nombre: '',
    tipo_de_animal: '',
    raza: '',
    color: '',
    genero: '',
    lugar_perdido: '',
    fecha_perdido: '',
    contacto_nombre: '',
    contacto_telefono: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [imagenPreview, setImagenPreview] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState(null);

  // Cargar los datos de la mascota
  useEffect(() => {
    const cargarMascota = async () => {
      try {
        const response = await fetch(`${URL}perdidos/${id}`);
        if (response.ok) {
          const data = await response.json();
          const mascota = data.data;
          
          // Formatear la fecha para el input de tipo date
          const fecha = mascota.fecha_perdido ? new Date(mascota.fecha_perdido) : new Date();
          const fechaFormateada = fecha.toISOString().split('T')[0];
          
          setFormData({
            nombre: mascota.nombre || '',
            tipo_de_animal: mascota.tipo_de_animal || '',
            raza: mascota.raza || '',
            color: mascota.color || '',
            genero: mascota.genero || '',
            lugar_perdido: mascota.lugar_perdido || '',
            fecha_perdido: fechaFormateada,
            contacto_nombre: mascota.contacto_nombre || '',
            contacto_telefono: mascota.contacto_telefono || ''
          });
          
          // Establecer la vista previa de la imagen si existe
          if (mascota.imagen) {
            setImagenPreview(`${URL}/${mascota.imagen}`);
          }
          
        } else {
          alert('No se pudo cargar la información de la mascota.');
          navigate('/administrador');
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
        alert('Error al cargar los datos de la mascota.');
        navigate('/administrador');
      } finally {
        setLoading(false);
      }
    };
    
    cargarMascota();
  }, [id, URL, navigate]);

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Maneja el archivo de imagen subida y lo almacena en el estado
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNuevaImagen(file);
      
      // Crear una URL para la vista previa de la imagen
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagenPreview(e.target.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

// Envío del formulario
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Crear FormData para enviar los datos
  const data = new FormData();
  
  // Añadir todos los campos al FormData
  Object.keys(formData).forEach(key => {
    if (key !== 'imagen') {
      data.append(key, formData[key]);
    }
  });
  
  // Si hay una nueva imagen, añadirla
  if (nuevaImagen) {
    data.append('imagen', nuevaImagen);
  }
  
  try {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${URL}perdidos/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
        // No incluir 'Content-Type' aquí porque FormData lo establece automáticamente con el boundary
      },
      body: data
    });
    
    if (response.ok) {
      alert('Mascota actualizada correctamente');
      navigate('/administrador');
    } else {
      const errorData = await response.json();
      alert(`Error al actualizar la mascota: ${errorData.message || 'No autorizado'}`);
    }
  } catch (error) {
    console.error("Error en el envío:", error);
    alert("Error de conexión o de servidor");
  }
};

  if (loading) {
    return <p>Cargando datos de la mascota...</p>;
  }

  return (
    <article className='article-form--mascota'>
      <h2 className='h2-editar'>Editar Mascota Perdida</h2>
      
      <form className='form-mascota' onSubmit={handleSubmit}>
        
        {/* Campo para seleccionar la imagen */}
        <div>
          <label>Imagen:</label>
          <input type="file" name="imagen" onChange={handleImageChange} accept="image/*" />
        </div>
        
        {/* Campo para nombre */}
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required/>
        </div>
        
        {/* Campo para tipo de animal */}
        <div>
          <label>Tipo de Animal:</label>
          <input type="text" name="tipo_de_animal" value={formData.tipo_de_animal} onChange={handleChange} required/>
        </div>
        
        {/* Campo para raza */}
        <div>
          <label>Raza:</label>
          <input type="text" name="raza" value={formData.raza} onChange={handleChange}/>
        </div>
        
        {/* Campo para color */}
        <div>
          <label>Color:</label>
          <input type="text" name="color" value={formData.color} onChange={handleChange} required/>
        </div>
        
        {/* Campo para género */}
        <div>
          <label>Género:</label>
          <input type="text" name="genero" value={formData.genero} onChange={handleChange}/>
        </div>
        
        {/* Campo para lugar perdido */}
        <div>
          <label>¿Dónde se perdió?</label>
          <input type="text" name="lugar_perdido" value={formData.lugar_perdido} onChange={handleChange} required/>
        </div>
        
        {/* Campo para fecha perdido */}
        <div>
          <label>¿Cuándo se perdió?</label>
          <input type="date" name="fecha_perdido" value={formData.fecha_perdido} onChange={handleChange} required/>
        </div>
        
        {/* Campo para nombre de contacto */}
        <div>
          <label>Nombre de Contacto:</label>
          <input type="text" name="contacto_nombre" value={formData.contacto_nombre} onChange={handleChange} required/>
        </div>
        
        {/* Campo para teléfono de contacto */}
        <div>
          <label>Teléfono de Contacto:</label>
          <input type="tel" name="contacto_telefono" value={formData.contacto_telefono} onChange={handleChange} required/>
        </div>
        
        {/* Botones de acción */}
        <div className="form-buttons">
          <button type="submit">Actualizar Mascota</button>
          <br />
          <button type="button" onClick={() => navigate('/administrador')} className="btn-cancelar">
            Cancelar
          </button>
        </div>
      </form>
    </article>
  );
};

export default EditarPerdido;