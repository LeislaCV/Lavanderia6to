import React, { useState } from 'react'
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function GarmentView() {
  const [newGarment, setNewGarment] = useState("");

  const [garment, setGarment] = useState({
    garments: ["Camisa", "Pantalón", "Blusa"], 
  });

  const addGarment = () => {
    if (newGarment === "") return;
    const data = garment;

    data.garments?.push(newGarment);
    setGarment({ ...data });
    setNewGarment("");
  };

  const deleteGarment = (ig) => {
    const data = garment;
    if (data.garments) {
      data.garments = data.garments.filter((_, i) => i !== ig);
    }
    setGarment({ ...data });
  };

  const onChangeGarment = (ig) => {
    const data = garment;
    const nuevoValor = prompt("Editar prenda:", data.garments[ig]);
    if (nuevoValor !== null && nuevoValor !== "") {
      data.garments[ig] = nuevoValor;
    }
    setGarment({ ...data });
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-center">🧥 Alta de Prendas</Card.Title>
          <hr />

          <Form className="mb-3 d-flex gap-2">
            <Form.Control
              placeholder="Nueva prenda"
              value={newGarment}
              onChange={(e) => setNewGarment(e.target.value)}
            />
            <Button variant="outline-primary" onClick={addGarment}>🆕 Agregar</Button>
          </Form>

          <hr />
          <Row xs={1} md={2} className="g-3">
            {garment.garments.map((garment, index) => (
              <Col key={index}>
                <Card className="p-2 shadow-sm">
                  <h5>{garment}</h5>
                  <div className="d-flex ms-2 mt-2 gap-2">
                    <Button variant="outline-secondary" onClick={() => onChangeGarment(index)}>✏️ Editar</Button>
                    <Button variant="outline-danger" onClick={() => deleteGarment(index)}>🗑️ Eliminar</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GarmentView;
