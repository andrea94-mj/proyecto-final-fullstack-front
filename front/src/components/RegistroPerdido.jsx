import React, { useState } from 'react';
import "@/css/Forms.css";

// Componente de formulario para registrar una mascota perdida
const RegistroPerdido = ({ onSubmit }) => {

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

  // URL de la API desde variables de entorno
  const URL = import.meta.env.VITE_API_URL;

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
    setFormData({
      ...formData,
      imagen: file
    });
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto FormData para enviar datos, incluida la imagen
    const data = new FormData();
    data.append('imagen', formData.imagen); // Agregamos la imagen al FormData
    data.append('nombre', formData.nombre);
    data.append('tipo_de_animal', formData.tipo_de_animal);
    data.append('raza', formData.raza);
    data.append('color', formData.color);
    data.append('genero', formData.genero);
    data.append('lugar_perdido', formData.lugar_perdido);
    data.append('fecha_perdido', formData.fecha_perdido);
    data.append('contacto_nombre', formData.contacto_nombre);
    data.append('contacto_telefono', formData.contacto_telefono);

    try {
      // Enviar los datos a la API
      const response = await fetch(`${URL}nuevoPerdido`, {
        method: 'POST',
        body: data
      });
      console.log("Response completo:", response);
      // Comprueba si la respuesta del servidor fue exitosa
      if (response.ok) {
        const responseData = await response.json();
        alert("¡Mascota registrada con éxito!");
        console.log("Respuesta del servidor:", responseData);

        // Reinicia el formulario después de enviarlo
        setFormData({
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
      } else {
        alert("Hubo un error al registrar la mascota");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert("Error de conexión o de servidor");
    }
  };

  return (
    <>
      <article className='article-form--mascota'>
        <form className='form-mascota' onSubmit={handleSubmit}>
          {/* Campo para seleccionar la imagen de la mascota perdida */}
          <div>
            <label>Imagen:</label>
            <input type="file" name="imagen" onChange={handleImageChange} accept="image/*" required />
          </div>
          {/* Campo para escribir el tipo de animal */}
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          {/* Campo para escribir el tipo de animal */}
          <div>
            <label>Tipo de Animal:</label>
            <input type="text" name="tipo_de_animal" value={formData.tipo_de_animal} onChange={handleChange} required />
          </div>
          {/* Campo para escribir la raza de la mascota */}
          <div>
            <label>Raza:</label>
            <input type="text" name="raza" value={formData.raza} onChange={handleChange} />
          </div>
          {/* Campo para escribir el color de la mascota */}
          <div>
            <label>Color:</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          {/* Campo para escribir el género de la mascota */}
          <div>
            <label>Género:</label>
            <input type="text" name="genero" value={formData.genero} onChange={handleChange} />
          </div>
          {/* Campo para escribir el lugar donde se perdió la mascota */}
          <div>
            <label>¿Dónde lo has perdido?</label>
            <input type="text" name="lugar_perdido" value={formData.lugar_perdido} onChange={handleChange} required />
          </div>
          {/* Campo para poner la fecha en la que se perdió la mascota */}
          <div>
            <label>¿Cuándo lo has perdido?</label>
            <input type="date" name="fecha_perdido" value={formData.fecha_perdido} onChange={handleChange} required />
          </div>
          {/* Campo para escribir el nombre de contacto */}
          <div>
            <label>Nombre de Contacto:</label>
            <input type="text" name="contacto_nombre" value={formData.contacto_nombre} onChange={handleChange} required />
          </div>
          {/* Campo para escribir el teléfono de contacto */}
          <div>
            <label>Teléfono de Contacto:</label>
            <input type="tel" name="contacto_telefono" value={formData.contacto_telefono} onChange={handleChange} required />
          </div>
          {/* Botón para enviar el formulario */}
          <button type="submit">Registrar Mascota Perdida</button>
        </form>
      </article>
    </>
  );
};

export default RegistroPerdido;

