import { Container, Card, Form, Button} from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const CreateClientView = () => {
    const navigate = useNavigate();
    const [createClient, setcreateClient] = useState({
        name: "",
        phone_number: "",
        address: "",
        
    });

    const onSubmit = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/clients/create",createClient 
                );
            navigate("/full-client");
        } catch (error) {
            alert("Upss, hubo un error al crear el cliente:(", error);
        }
        console.log(createClient);
    };
  return (

    <Container className="justify-content-center align-items-center" >
          <Card className="mt-4">
            <Card.Body>
              <Card.Title className="mb-4 text-center">
                🧑‍💻 Crear Cliente
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>📛 Nombre:</Form.Label>
                  <Form.Control placeholder="Ingresa tu nombre" value={createClient.name}   onChange={(e) => setcreateClient({
                    ...createClient,
                    name: e.target.value
                  })}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>📞 Teléfono:</Form.Label>
                  <Form.Control placeholder="Ingresa tu número de teléfono"  value={createClient.phone_number}   onChange={(e) => setcreateClient({
                    ...createClient,
                    phone_number: e.target.value
                  })}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>🏠 Dirección:</Form.Label>
                  <Form.Control placeholder="Ingresa tu dirección"  value={createClient.address}   onChange={(e) => setcreateClient({
                    ...createClient,
                    address: e.target.value
                  })}/>
                </Form.Group>

              
                  <Button className="text-center" type="submit" variant="primary" onClick={() => onSubmit()}>🧑‍💻 Crear Cliente</Button>
                
              </Form>
            </Card.Body>
          </Card>
        
    </Container>
  );
}

export default CreateClientView;