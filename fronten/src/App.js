import { Button, Card, Container, Table,Row, Col } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();

  const [summaries] = useState([
    { 
      garment: 'Camisa', 
      service: 'Lavado',
       total: 22 
      },

  ]);
  
  return (
 <>
      <Container className="justify-content-center align-items-center">
        <Card className="mt-4">
          <Card.Body>
            <Card.Title className="mb-4 text-center">📋 Lista de Resumen</Card.Title>

            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th> Prenda</th>
                  <th> Servicio</th>
                  <th> Precio</th>
                </tr>
              </thead>
              <tbody>
                    {
                        summaries?.map((summary) => (
                            <tr>
                                
                                <td>{summary.garment}</td>
                                <td>{summary.service}</td>
                                <td>{summary.total}</td>
                                <td>
                                   
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                    <div className="mt-4">
                      <h2>Total: </h2>
                      <Button variant="primary" >Total</Button>
  
                      <Button variant="warning"  onClick={() => navigate('/hola')}>Agregar otro servicio</Button>
                        </div>

                    </tr>
                </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default App;
