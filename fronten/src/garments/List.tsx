import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import { IGarments } from '../Interfaces'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Edit } from './Edit'

export const List = () => {
    const [garments, setGarments] = useState<IGarments[]>()
    const navigate = useNavigate()
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [currentGarment, setCurrentGarment] = useState<IGarments>()
    useEffect(() => {
        getGarments();
    }, [])
    const getGarments = async () => {
        try {
            Swal.fire("Cargando prendas")
            Swal.showLoading()
            const { data } = await axios.get("http://127.0.0.1:5000/garments/get-all")
            setGarments(data.garments)
            Swal.close()
        } catch (error) {
            Swal.fire("Ocurrio un error al traer las prendas")
            console.log(error)
        }
    }

    const deleteGarment = async (id: number | undefined) => {
        Swal.fire({
            title: "¿Seguro de eliminar la prenda?",
            showCancelButton: true,
            confirmButtonText: "Sí",
            denyButtonText: `Cancelar`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    Swal.fire("Eliminando prenda")
                    Swal.showLoading()
                    await axios.delete(`http://127.0.0.1:5000/garments/delete/${id}`)
                    Swal.fire("Prendan eliminada con exito", "", "success")
                    getGarments();
                } catch (error) {
                    console.log(error)
                    Swal.fire("Ocurrio un error al eliminar la prenda")
                }
            }
        });
    }


    return (
        <Container className='mt-5'>
            <Card>
                <Card.Body>
                    <Card.Title className='text-center'>Listado de prendas</Card.Title>
                    <div className='text-end m-2'>
                        <Button onClick={() => navigate("/garment/create")} variant='success'>Crear prenda</Button>
                    </div>
                    <Table>
                        <tr>
                            <th>#</th>
                            <th>Tipo:</th>
                            <th>Descripcion:</th>
                            <th>Opciones:</th>
                        </tr>
                        {
                            garments?.map((g, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{g.type}</td>
                                    <td>{g.description}</td>
                                    <td>
                                        <Row>
                                            <Col>
                                                <Button
                                                    onClick={
                                                        () => {
                                                            setCurrentGarment(g)
                                                            setShowModalEdit(true)
                                                        }
                                                    }
                                                >Editar</Button>
                                            </Col>
                                            <Col>
                                                <Button onClick={() => { deleteGarment(g.id) }} variant='danger'>Eliminar</Button>
                                            </Col>
                                        </Row>
                                    </td>
                                </tr>
                            ))
                        }
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar prenda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        currentGarment && (
                            <Edit close={setShowModalEdit} reload={getGarments} garment={currentGarment} />
                        )
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}