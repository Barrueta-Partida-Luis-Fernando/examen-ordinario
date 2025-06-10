import React, { useEffect, useState } from 'react';
import EditPet from './EditPet';

function PetList() {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  const fetchPets = () => {
    fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(data => setPets(data));
  };

  useEffect(() => fetchPets(), []);

  const deletePet = (id) => {
    fetch(`http://localhost:3001/pets/${id}`, { method: 'DELETE' })
      .then(() => fetchPets());
  };

  return (
    <div className="pet-list">
      {editingPet && (
        <EditPet pet={editingPet} onUpdated={() => {
          setEditingPet(null);
          fetchPets();
        }} onCancel={() => setEditingPet(null)} />
      )}
      <div className="pet-cards">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <h3>{pet.name}</h3>
            <p><strong>Especie:</strong> {pet.species}</p>
            <p><strong>Edad:</strong> {pet.age}</p>
            <p><strong>Salud:</strong> {pet.healthStatus}</p>
            <div className="buttons">
              <button onClick={() => setEditingPet(pet)}>Editar</button>
              <button onClick={() => deletePet(pet.id)} className="delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetList;
