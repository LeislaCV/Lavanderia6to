import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function GarmentView() {

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-center">🧥 Alta de Prendas</Card.Title>
          <hr></hr>
          
          <Form className="mb-3 d-flex gap-2">
            <Form.Control placeholder="Nueva prenda" disabled />
            <Button variant="outline-primary">🆕 Agregar</Button>
          </Form>
          <hr></hr>
          <Row xs={1} md={2} className="g-3">
            {["Camisa", "Pantalón", "Blusa", "Vestido"].map((garment, index) => (
              <Col key={index}>
                <Card className="p-2 shadow-sm">
                  <h5>{garment}</h5>
                  <div className="d-flex ms-2 mt-2">
                    <Button variant="outline-secondary"> ✏️ Editar</Button>
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

export default GarmentView;
