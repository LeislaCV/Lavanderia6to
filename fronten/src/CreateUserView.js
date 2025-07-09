
import { Container, Card, Form, Button} from "react-bootstrap";
import axios from 'axios';
import React, { useState } from 'react';

function CreateUserView() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:4000/users", {
        name,
        email,
        password,
      });
      alert("✅ Usuario creado correctamente");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("❌ Error al crear usuario");
    }
  };
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
                  <Form.Control placeholder=" Ingresa tu nombre" value={name}
                onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>📧 Email:</Form.Label>
                  <Form.Control placeholder="Ingresa tu email"  value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>🔒 Contraseña:</Form.Label>
                  <Form.Control placeholder="Ingresa tu contraseña " type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

              
                  <Button className="text-center" type="submit" onClick={() => onSubmit()} variant="primary">🧑‍💻 Crear Usuario</Button>
                
              </Form>
            </Card.Body>
          </Card>
        
    </Container>
  );
}

export default CreateUserView;


