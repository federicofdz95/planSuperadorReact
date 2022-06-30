import React from 'react'
import Home from './Home'
import Error404 from './Error404'
import IndexAfiliado from './Afiliado/Index'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function Rutas() {
  return (
    <div>
      <Router>
        <div className="App">
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/afiliado/:dni" element={<IndexAfiliado />} />
              <Route exact path="*" element={<Error404/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Rutas