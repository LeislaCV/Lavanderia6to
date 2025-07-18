import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function ServicesView() {
  const [newService, setNewService] = useState("");
  
  const [service, setService] = useState({
    services: ["Lavado", "Planchado", "Tintorería", "Especial"]
  });

  const addService = () => {
    if (newService === "") return;
    const data = service;
    data.services?.push(newService);
    setService({ ...data });
    setNewService("");
  };

  const deleteService = (index) => {
    const data = service;
    if (data.services) {
      data.services = data.services.filter((_, i) => i !== index);
    }
    setService({ ...data });
  };

  const onChangeService = (index) => {
    const data = service;
    const nuevoValor = prompt("Editar servicio:", data.services[index]);
    if (nuevoValor !== null && nuevoValor !== "") {
      data.services[index] = nuevoValor;
    }
    setService({ ...data });
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-center">🧺 Alta de Servicios</Card.Title>
          <hr />
          <Form className="mb-3 d-flex gap-2">
            <Form.Control
              placeholder="Nuevo servicio"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
            />
            <Button variant="outline-primary" onClick={addService}>
              🆕 Agregar
            </Button>
          </Form>
          <hr />
          <Row xs={1} md={2} className="g-3">
            {service.services.map((service, index) => (
              <Col key={index}>
                <Card className="p-2 shadow-sm">
                  <h5>{service}</h5>
                  <div className="d-flex ms-2 mt-2 gap-2">
                    <Button
                      variant="outline-secondary"
                      onClick={() => onChangeService(index)}
                    >
                      ✏️ Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteService(index)}
                    >
                      🗑️ Eliminar
                    </Button>
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

export default ServicesView;
