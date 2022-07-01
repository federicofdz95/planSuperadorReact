import { React } from "react";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import toast, { Toaster } from "react-hot-toast";
import { SpinnerDotted } from 'spinners-react';


function Deudores() {

    const urlDeudores = "http://localhost:84/deudores";

    const [deudores, setDeudores] = useState([]);
    const [loading, setLoading] = useState(true);
    
    /*
    const [dni, setDni] = useState("");

    const dniChange = (event) => {
      setDni(event.target.value);      
    };
    */

    useEffect(() => {      
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: response } = await axios.get(urlDeudores);
          setDeudores(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };

      fetchData();
    }, []);

  return (
    <div className="container mb-5">
      <p className="fs-2 text-start">Deudores</p>
      <hr className="col-3 mb-5" />

      {loading && (
        <SpinnerDotted/>
      )}

      {!loading && (
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>SECCIONAL</th>
              <th>DNI</th>
              <th>AFILIADO</th>
              <th>DEBE</th>
            </tr>
          </thead>

          <tbody>
            {deudores.map((x, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{x.secc_nombre}</td>
                  <td>
                    
                      {x.afi_nro_doc}
                    
                  </td>
                  <td>
                    {x.afi_Apellido}, {x.afi_Nombre}
                  </td>
                  <td>{x.deuda}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Deudores