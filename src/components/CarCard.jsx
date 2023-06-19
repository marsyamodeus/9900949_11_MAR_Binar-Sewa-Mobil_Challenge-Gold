import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CarCard = () => {
  return (
    <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src='/product1.png'/>
            <Card.Body>
                <Card.Title>Rp. 500.000</Card.Title>
                <Card.Text>Mobil ini bagus loh</Card.Text>
                <Button variant="primary">Sewa Mobil</Button>
            </Card.Body>
    </Card>
  )
}

export default CarCard