import React, { useState } from 'react';
import "@/css/Forms.css";

const FormMascota = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    imagen: '',
    tipo_de_animal: '',
    raza: '',
    color: '',
    genero: '',
    lugar_encontrado: '',
    fecha_encontrado: '',
    contacto_nombre: '',
    contacto_telefono: ''
  });

  const URL = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${URL}/nuevoEncontrado`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert("Formulario enviado con éxito!");
        console.log("Respuesta del servidor:", data);
        setFormData({
          imagen: '',
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Imagen URL:</label>
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Tipo de Animal:</label>
        <input
          type="text"
          name="tipo_de_animal"
          value={formData.tipo_de_animal}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Raza:</label>
        <input
          type="text"
          name="raza"
          value={formData.raza}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Color:</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Género:</label>
        <input
          type="text"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Lugar Encontrado:</label>
        <input
          type="text"
          name="lugar_encontrado"
          value={formData.lugar_encontrado}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Fecha Encontrado:</label>
        <input
          type="date"
          name="fecha_encontrado"
          value={formData.fecha_encontrado}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Nombre de Contacto:</label>
        <input
          type="text"
          name="contacto_nombre"
          value={formData.contacto_nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Teléfono de Contacto:</label>
        <input
          type="tel"
          name="contacto_telefono"
          value={formData.contacto_telefono}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormMascota;