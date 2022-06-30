import React, { useEffect, useState } from 'react'
import BarraNavegacion from '../BarraNavegacion';
//import Formu from '../Formu';
import user from '../../img/user.png'
import { useParams } from "react-router";
import axios from "axios";



function Index() {

  const {dni} = useParams();
  //console.log(dni)

  const urlAfiliado = "http://localhost:84/afiliado/";

  const [afiliado, setAfiliado] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAfiliadoId = async () => {
      //setLoading(true);
      try {
        const { data: response } = await axios.get(urlAfiliado + dni);
        setAfiliado(response);
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
      //setLoading(false);
    };

    getAfiliadoId();
  }, [dni]);

  const cardStyle = {
    backgroundColor: "#dcdcdc",
  };

  
  return (
    <div>
      <BarraNavegacion />
      
      

      <div className="container mb-5 mt-5">
        <p className="fs-2 text-start">Afiliado</p>
        <hr className="col-3 mb-5" />

        <div className="card justify-content-center" style={cardStyle}>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col col-lg-3">
                <img src={user} alt="logo" width={200} />
                <ul className="list-group list-group-flush mt-5">
                  <li className="list-group-item" style={cardStyle}>
                    estado
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-warning btn-sm">
                      CAMBIO PLAN
                    </button>
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-secondary btn-sm">PAGOS</button>
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-secondary btn-sm">
                      PAGOS DB
                    </button>
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-secondary btn-sm">
                      APORTES
                    </button>
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-secondary btn-sm">
                      FACTURACION
                    </button>
                  </li>
                  <li className="list-group-item" style={cardStyle}>
                    <button className="btn btn-secondary btn-sm">
                      REFACTURACION
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col col-lg-9">
                <table className="table table-bordered">
                  <thead className="">
                    <tr>
                      <td colSpan={4}>NOMBRE y APELLIDO</td>
                    </tr>
                  </thead>
                  <tr>
                    <td colSpan={4}>
                      {afiliado.afiNombre} , {afiliado.afiApellido}
                    </td>
                  </tr>
                  <thead className="">
                    <tr>
                      <td>DNI</td>
                      <td>CUIL</td>
                      <td>EDAD</td>
                      <td>NACIMIENTO</td>
                    </tr>
                  </thead>
                  <tr>
                    <td>{afiliado.afiNroDoc}</td>
                    <td>{afiliado.afiCuil}</td>
                    <td>{afiliado.afiEdad2}</td>
                    <td>{afiliado.afiNacio}</td>
                  </tr>
                  <thead className="">
                    <tr>
                      <td colSpan={2}>DOMICILIO</td>
                      <td colSpan={2}>MAIL</td>
                    </tr>
                  </thead>
                  <tr>
                    <td colSpan={2}>{afiliado.afiCalleNro}</td>
                    <td colSpan={2}>{afiliado.afiEmail}</td>
                  </tr>
                  <thead className="">
                    <tr>
                      <td colSpan={4}>OBSERVACIONES</td>
                    </tr>
                  </thead>
                  <tr>
                    <td colSpan={4}>{afiliado.afiNroDoc}</td>
                  </tr>
                  <thead className="">
                    <tr>
                      <td colSpan={4}>FAMILIARES</td>
                    </tr>
                  </thead>
                  <tr>
                    <td colSpan={4}>{afiliado.afiNroDoc}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index