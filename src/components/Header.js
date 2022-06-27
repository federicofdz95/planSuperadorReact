import React from 'react'
import { Modal } from "react-bootstrap";
import { useState } from 'react';
import Button from "@mui/material/Button";


function Header(props) {

    const [showAltas, setShowAltas] = useState(false);
    const [showBajas, setShowBajas] = useState(false);
    

  return (
    <>      
      <Button
        variant="contained"
        size="small"        
        onClick={() => setShowAltas(true)}
      >
        Altas mes
      </Button>{" "}
      <Button variant="contained" size="small" onClick={() => setShowBajas(true)}>
        Baja mes
      </Button>{" "}
      <Button variant="contained" size="small">
        Ingresos
      </Button>{" "}
      <Button variant="contained" size="small">
        Aranceles
      </Button>{" "}
      <Button variant="contained" size="small">
        Mails
      </Button>{" "}
      <Button variant="contained" size="small">
        Transferencias
      </Button>{" "}
      {/** Modal Altas Mes */}
      <Modal show={showAltas} onHide={() => setShowAltas(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Altas</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowAltas(false)}>
            Descargar excel
          </Button>
        </Modal.Footer>
      </Modal>
      {/** Fin Modal Altas Mes*/}
      {/** Modal Bajas Mes */}
      <Modal show={showBajas} onHide={() => setShowBajas(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Bajas</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowBajas(false)}>
            Descargar excel
          </Button>
        </Modal.Footer>
      </Modal>
      {/** Fin Modal Bajas Mes */}
    </>
  );
}

Header.propTypes = {}

export default Header

