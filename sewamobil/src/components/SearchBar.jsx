import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './searchbar.css';

const SearchBar = () => {
  return (
    <Card id='serCard'>
        <Form id ='serForm'>
            <Row id='serRow'>
                <Col md={2}>
                    <p>Nama Mobil</p>
                    <Form.Control name="carName" placeholder="Car Name" />
                </Col>
                <Col md={2}>
                    <p>Kategori</p>
                    <Form.Select name="category" defaultValue="All Categories">
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <p>Harga</p>
                    <Form.Select name="price" defaultValue="All Prices">
                        <option value="">All Prices</option>
                        <option value="">All Prices</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <p>Status</p>
                    <Form.Select name="price" defaultValue="All Prices">
                        <option value="">All Prices</option>
                        <option value="">All Prices</option>
                    </Form.Select>
                </Col>
                <Col id='sebtCol' md={2}>
                    <Button variant="custom" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    </Card>
  )
}

export default SearchBar