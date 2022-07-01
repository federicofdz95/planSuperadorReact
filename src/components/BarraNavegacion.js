import React, { useState } from 'react'
import mutual from "../mutual.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function BarraNavegacion() {
  
  const [dni, setDni] = useState('');
  //const [afi, setAfi] = useState([]);
  const ulrControlDni = "http://localhost:84/control/";
  const ulrHisAfil = "http://localhost:84/hisafil/";
  const ulrEmpresaOpcion = "http://localhost:84/empresaopcion/";


  const dniChange = (event) => {    
    setDni(event.target.value);
    //console.log(dni);
  }

  const buscarAfi = () => {
    
    if (dni!=='') {
    axios
      .get(ulrControlDni + dni)
      .then((response) => {
        if (response.data.length===0) {
          toast.error("No existe el afiliado", { duration: 700 });
        } else {                    
          axios
            .get(ulrHisAfil + dni)
            .then((response) => {
              if (response.data.length===0) {
                toast.error("No hay registros en his_afil_os", {duration: 700,});
              } else {
                axios
                  .get(ulrEmpresaOpcion + dni)
                  .then((response) => {
                    if (response.data.length === 0) {
                      toast.error("No hay registros en Empresa Opcion", {
                        duration: 700,
                      });
                    } else {
                      console.log(response.data[0]);
                    }
                  })
                  .catch((e) => {
                    toast.error("Ha ocurrido un error", { duration: 1000 });
                  });
              }
            })
            .catch((e) => {
              toast.error("Ha ocurrido un error", {duration: 1000});
            });
        }                
      })
      .catch((e) => {        
        toast.error("Ha ocurrido un error", {
          duration: 1000,
          position: "top-center",
        });
      });
    
    } else {
      
      toast.error("Por favor ingrese el DNI", {
        duration: 800,
        position: "top-center",        
        },        
      )
    }
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src={mutual} alt="logo" width={200} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/deudores"}>
                  Deudores
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                id="dni"
                name="txtDni"
                placeholder="Ingrese DNI"
                onChange={dniChange}
                maxLength={8}
              />
              <button className="btn btn-success btn-sm" onClick={buscarAfi}>
                Buscar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Otras Funciones
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">Altas Mes</li>
                  <li className="dropdown-item">Bajas Mes</li>
                  <li className="dropdown-item">Ingresos</li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-item">Aranceles</li>
                  <li className="dropdown-item">Mails</li>
                </ul>
              </li> */}

      {}

      <Toaster />
    </div>
  );
}

export default BarraNavegacion