import React from 'react';
import RegistroEncontrado from '@/components/RegistroEncontrado';
import RegistroPerdido from '@/components/RegistroPerdido';
import "@/css/forms.css";

// Componente para seleccionar y mostrar el formulario adecuado según el tipo de registro (perdido o encontrado)
const FormMascota = () => {
  return (
    <>
      <article className='Registro-mascota'>
        {/* Sección para registrar una mascota encontrada */}
        <div>
          <p className='Form-p--registro'>¿Has encontrado una mascota? <br />Regístrala aquí</p>
          <RegistroEncontrado />
        </div>

        {/* Sección para registrar una mascota perdida */}
        <div>
          <p className='Form-p--registro'>¿Has perdido a tu mascota? <br />Regístrala aquí</p>
          <RegistroPerdido />
        </div>
      </article>
    </>
  );
};

export default FormMascota;

