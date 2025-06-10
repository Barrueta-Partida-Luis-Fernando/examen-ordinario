import React, { useState } from 'react';

function EditPet({ pet, onUpdated, onCancel }) {
  const [form, setForm] = useState({ ...pet });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/pets/${form.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => onUpdated());
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h3>Editar Mascota</h3>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="species" value={form.species} onChange={handleChange} required />
      <input name="age" type="number" value={form.age} onChange={handleChange} required />
      <input name="healthStatus" value={form.healthStatus} onChange={handleChange} required />
      <button type="submit">Actualizar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default EditPet;
