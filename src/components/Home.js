import React from 'react'
import BarraNavegacion from './BarraNavegacion';
import Deudores from './Deudores';
//import Formu from './Formu';

function Home() {
  return (
    <div className="mb-5">
      <BarraNavegacion />    
      
      <Deudores />
    </div>
  );
}

export default Home