import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import logoReact from "../img/logo.svg";


//const dniContext = createContext();

function Formu() {
  
  /*
  const {
    register,
    formState: { errors },    
  } = useForm();
  */

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
    
    await axios.get(
      "http://localhost:82/api/AfiliadoPlanMutual/" + dni.txtDni
    ).then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0) {
        var respuesta = response[0];
        console.log(respuesta);
      } else {
        
        console.log(response.afiNroDoc.length);
      }
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
  
  const [deudores, setDeudores] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    /*
    fetch("http://localhost:82/api/spDeudores")
      .then((response) => {
        return response.json();
      })
      .then((deudores) => {
        setDeudores(deudores);
      });
    */

      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: response } = await axios.get(
            "http://localhost:82/api/spDeudores"
          );
          setDeudores(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };

      fetchData();

  }, []);

  function prueba(e) {
    //alert(e.target.value);
    document.getElementById("txtDNI").value = e.target.value;
  }

  return (
    <div>
      <div className="col-12 mb-5">
        <Fragment>
          <div className="d-flex justify-content-center">
            <Row>
              <Col md={12}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    name="txtDni"
                    onChange={handleChange}
                  />
                  <label htmlFor="dni">Ingrese DNI</label>
                </div>
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
              </Col>
            </Row>
          </div>
        </Fragment>
      </div>

      {/*  <div className="col-12 mb-5">
        <div>
          {dni.map((item, index) => (
            <div key={index}>
              <dniContext.Provider value={item.dni}>
                <Login dni={item.dni} />
              </dniContext.Provider>
            </div>
          ))}
        </div>
      </div> */}

      <h2 className="mb-3">Deudores</h2>

      {loading && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border content-align-center mt-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <Table className="table-success" bordered>
          <thead>
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
                    <Button
                      onClick={prueba}
                      value={x.afi_nro_doc}
                      variant="light"
                      size="sm"
                    >
                      {x.afi_nro_doc}
                    </Button>
                  </td>
                  <td>
                    {x.afi_Apellido}, {x.afi_Nombre}
                  </td>
                  <td>{x.deuda}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

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
