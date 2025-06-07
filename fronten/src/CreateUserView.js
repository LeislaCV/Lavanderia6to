
import { Container, Card, Form, Button} from "react-bootstrap";


function CreateUserView() {

  return (

    <Container className="justify-content-center align-items-center" >
          <Card className="mt-4">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                🧑‍💻 Crear Usuario
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>📛 Nombre:</Form.Label>
                  <Form.Control placeholder=" Ingresa tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>📧 Email:</Form.Label>
                  <Form.Control placeholder="Ingresa tu email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>🔒 Contraseña:</Form.Label>
                  <Form.Control placeholder="Ingresa tu contraseña " />
                </Form.Group>

              
                  <Button className="text-center" variant="primary">🧑‍💻 Crear Cliente</Button>
                
              </Form>
            </Card.Body>
          </Card>
        
    </Container>
  );
}

export default CreateUserView;
