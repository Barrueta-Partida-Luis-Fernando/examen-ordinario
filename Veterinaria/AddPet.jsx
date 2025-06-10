import React, { useState } from 'react';

function AddPet({ onPetAdded }) {
  const [form, setForm] = useState({ name: '', species: '', age: '', healthStatus: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      setForm({ name: '', species: '', age: '', healthStatus: '' });
      onPetAdded();
    });
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h2>Agregar Mascota</h2>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="species" placeholder="Especie" value={form.species} onChange={handleChange} required />
      <input name="age" type="number" placeholder="Edad" value={form.age} onChange={handleChange} required />
      <input name="healthStatus" placeholder="Estado de Salud" value={form.healthStatus} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default AddPet;
