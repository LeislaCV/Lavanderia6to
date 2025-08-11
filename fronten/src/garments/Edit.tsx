import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { IGarments } from '../Interfaces'

interface props {
  garment: IGarments;
  reload: () => Promise<void>;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Edit = ({ garment, reload, close }: props) => {
  const [data, setData] = useState({})

  const submit = async () => {
    try {
      Swal.fire("Actualizando prenda")
      Swal.showLoading()
      await axios.put(`http://127.0.0.1:5000/garments/update/${garment.id}`, data)
      Swal.fire("Prendan actualizada con exito", "", "success").then(()=>{
        close(false);
        reload();
      })
    } catch (error) {
      console.log(error)
      Swal.fire("Ocurrio un error al actualizar la prendas")
    }
  }

  const onChange = (e: any) => {
    e.preventDefault()
    const newData: any = data
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  return (
    <Container className='mt-5'>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Tipo:</Form.Label>
              <Form.Control defaultValue={garment.type} name='type' onChange={onChange} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Descripcion:</Form.Label>
              <Form.Control defaultValue={garment.description} name='description' onChange={onChange} />
            </Form.Group>
            <div className='text-center'>
              <Button onClick={() => submit()}>Actualizar</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}