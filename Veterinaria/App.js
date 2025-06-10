import React, { useState } from 'react';
import AddPet from './components/AddPet';
import PetList from './components/PetList';

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="container">
      <h1>PetCare - Gestor de Mascotas</h1>
      <AddPet onPetAdded={() => setReload(!reload)} />
      <PetList key={reload} />
    </div>
  );
}

export default App;
