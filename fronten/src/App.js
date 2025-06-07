
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const onSubmit = async () => {

    try {
      const res = await axios.post("http://localhost:4000/login_user", login);
      const token = res.access_token;
      localStorage.setItem("token", token);
      alert("✅ ¡Login exitoso!");
      navigate("/full-client"); // o donde quieras redirigir
    } catch (err) {
      console.error(err.response);
      alert("❌ Error de login. Verifica tus credenciales.");
    }
  };

  return (
    <Container className="justify-content-center align-items-center">
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center">
            WELCOME TO THE LAUNDRY!
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>📧 Email:</Form.Label>
              <Form.Control
                placeholder="Ingresa tu correo electrónico"
                value={login.email}
                onChange={(e) =>
                  setLogin({ ...login, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>🔒 Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="success" type="submit "onClick={() => onSubmit()}>
              🔑 Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
