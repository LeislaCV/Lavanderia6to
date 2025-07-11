import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function ServicesView() {

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-center">🧺 Alta de Servicios</Card.Title>
          <hr></hr>
          
          <Form className="mb-3 d-flex gap-2">
            <Form.Control placeholder="Nuevo servicio" disabled />
            <Button variant="outline-primary"> 🆕 Agregar</Button>
          </Form>
        <hr></hr>
          <Row xs={1} md={2} className="g-3">
            {["Lavado","Planchado", "Tintoreria", "Especial"].map((garment, index) => (
              <Col key={index}>
                <Card className="p-2 shadow-sm">
                  <h5>{garment}</h5>
                  <div className="d-flex ms-2 mt-2">
                    <Button variant="outline-secondary"> ✏️Editar</Button>
                    <Button variant="outline-danger"> 🗑️ Eliminar</Button>
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
