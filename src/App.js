import './App.css';
import mutual from "./mutual.png"

import Header from './components/Header';
import Formu from './components/Formu';
//import Deudores from './Deudores'



const App = () => {
  //const user = useContext(Busqueda.UserContext);

 
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 mb-5 mt-5">
          <img src={mutual} alt="logo" width={500} />
        </div>

        <div className="col-12 mb-5">
          <Header />
        </div>        
          <Formu/>
      </div>
    </div>
  );
};




export default App;
