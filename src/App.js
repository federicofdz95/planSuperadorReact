import './App.css';
import BarraNavegacion from './components/BarraNavegacion';
//import Rutas from './components/Rutas';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import IndexAfiliado from './components/Afiliado/Index';
import Error404 from './components/Error404';
import Deudores from './components/Deudores';


const App = () => {
  //const user = useContext(Busqueda.UserContext); 
  return (
    <>
      <div>
        <Router>
          <div className='mb-5'>
            <BarraNavegacion />
          </div>

          <div className="App">
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/afiliado/:dni"
                  element={<IndexAfiliado />}
                />
                <Route exact path="*" element={<Deudores />} />
                <Route exact path="*" element={<Error404 />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
  
};




export default App;
