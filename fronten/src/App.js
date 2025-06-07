import{Container, Card, Form, Row, Col, Button} from "react-bootstrap"


function Login (){
  return (
    
    <Container  className="justify-content-center align-items-center">
             <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center">
            WELCOME TO THE LAUNDRY!
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>📧 Email: </Form.Label>
              <Form.Control placeholder="Ingresa tu correo electronico"  />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> 🔒 Password:</Form.Label>
              <Form.Control placeholder="Ingresa tu contraseña" />
            </Form.Group>
          
                <Button variant="success"> 🔑Ingresar</Button>
          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default Login;
