import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import logoReact from "../img/logo.svg";
//import Cookies from "universal-cookie";



//const dniContext = createContext();

function Formu() {
  
  const urlDni = "http://localhost:82/api/AfiliadoPlanMutual/";  
  //const cookies = new Cookies();

  const [dni, setDni] = useState({
    txtDni:''
  });

  const handleChange = (e) => {
    //console.log(data);
    setDni({ ...dni, 
      [e.target.name]: e.target.value 
    });    
    //console.log(dni)
    //e.target.reset();    
  };

  const buscarDNI = async() => {
    
    await axios.get(urlDni + dni.txtDni).then(response=>{
      return response.data;
    }).then(response=>{            
      console.log(response);      
    }).catch(error => {
      console.log(error)
    })
    /*
    try {
      const { data: response } = await axios.get(
        "http://localhost:82/api/AfiliadoPlanMutual/" + dni.txtDni
      );
      
      console.log(response);  
      
    } catch (error) {
      console.error(error.message);
    } 
    */

  };
   


  return (

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div class="col col-lg-4">
            <p className="fs-2">Plan salud Mutual</p>
            <hr className="mb-5" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="col col-lg-3">
            <div className="card">
              <div className="card-body mt-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    name="txtDni"
                    onChange={handleChange}
                  />
                  <label htmlFor="dni">Ingrese DNI</label>
                </div>
              </div>
              <div className="card-body">
                <Button
                  type="submit"
                  variant="success"
                  size="sm"
                  onClick={() => buscarDNI()}
                >
                  <img
                    src={logoReact}
                    className="App-logo"
                    alt="logo"
                    width={40}
                  />
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>

      </div>    
  );
}

/* function Login() {
  
  const dni = useContext(dniContext);

  fetch("http://localhost:82/api/AfiliadoPlanMutual/" + dni, {
    mode: "no-cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

} */

export default Formu;
