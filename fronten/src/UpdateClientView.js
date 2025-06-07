import { Container, Card, Form, Button} from "react-bootstrap";

function UpdateClientView() {
  return (

    <Container className="justify-content-center align-items-center" >
          <Card className="mt-4">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                📝 Actualizar Cliente
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>📛 Nombre:</Form.Label>
                  <Form.Control placeholder="Please, ingresa tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>📞 Teléfono:</Form.Label>
                  <Form.Control placeholder="Ingresa tu número de teléfono" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>🏠 Dirección:</Form.Label>
                  <Form.Control placeholder="Ingresa tu dirección" />
                </Form.Group>

              
                  <Button className="text-center" variant="success">💾 Guardar Cambios</Button>
                
              </Form>
            </Card.Body>
          </Card>
        
    </Container>
  );
}

export default UpdateClientView;
