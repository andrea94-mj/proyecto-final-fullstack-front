import React, { useState } from 'react';
import "@/css/Forms.css";

const FormMascota = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    imagen: null,
    tipo_de_animal: '',
    raza: '',
    color: '',
    genero: '',
    lugar_encontrado: '',
    fecha_encontrado: '',
    contacto_nombre: '',
    contacto_telefono: ''
  });

  const URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Maneja el archivo de imagen subido
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imagen: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Usamos FormData para manejar archivos
    const data = new FormData();
    data.append('imagen', formData.imagen);
    data.append('tipo_de_animal', formData.tipo_de_animal);
    data.append('raza', formData.raza);
    data.append('color', formData.color);
    data.append('genero', formData.genero);
    data.append('lugar_encontrado', formData.lugar_encontrado);
    data.append('fecha_encontrado', formData.fecha_encontrado);
    data.append('contacto_nombre', formData.contacto_nombre);
    data.append('contacto_telefono', formData.contacto_telefono);

    try {
      const response = await fetch(`${URL}/nuevoEncontrado`, {
        method: 'POST',
        body: data // Enviamos FormData directamente
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("Formulario enviado con éxito!");
        console.log("Respuesta del servidor:", responseData);
        setFormData({
          imagen: null,
          tipo_de_animal: '',
          raza: '',
          color: '',
          genero: '',
          lugar_encontrado: '',
          fecha_encontrado: '',
          contacto_nombre: '',
          contacto_telefono: ''
        });
      } else {
        alert("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      alert("Error de conexión o de servidor");
    }
  };

  return (
    <>
    <article className='Article-form--mascota'>
    <form className='Form-mascota' onSubmit={handleSubmit}>
      <div>
        <label>Imagen:</label>
        <input type="file" name="imagen" onChange={handleImageChange} accept="image/*" required />
      </div>

      <div>
        <label>Tipo de Animal:</label>
        <input type="text" name="tipo_de_animal" value={formData.tipo_de_animal} onChange={handleChange} required/>
      </div>

      <div>
        <label>Raza:</label>
        <input type="text" name="raza" value={formData.raza} onChange={handleChange}/>
      </div>

      <div>
        <label>Color:</label>
        <input type="text" name="color" value={formData.color} onChange={handleChange} required/>
      </div>

      <div>
        <label>Género:</label>
        <input type="text" name="genero" value={formData.genero} onChange={handleChange}/>
      </div>

      <div>
        <label>Lugar Encontrado:</label>
        <input type="text" name="lugar_encontrado" value={formData.lugar_encontrado} onChange={handleChange} required />
      </div>

      <div>
        <label>Fecha Encontrado:</label>
        <input type="date" name="fecha_encontrado" value={formData.fecha_encontrado} onChange={handleChange} required/>
      </div>

      <div>
        <label>Nombre de Contacto:</label>
        <input type="text" name="contacto_nombre" value={formData.contacto_nombre} onChange={handleChange} required/>
      </div>

      <div>
        <label>Teléfono de Contacto:</label>
        <input type="tel" name="contacto_telefono" value={formData.contacto_telefono} onChange={handleChange} required />
      </div>

      <button type="submit">Enviar</button>
    </form>
    </article>
    </>
  );

};

export default FormMascota;
