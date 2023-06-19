import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './searchbar.css';

const SearchBar = () => {
  return (
    <Card id='serCard'>
        <Form id ='serForm'>
            <Row id='serRow'>
                <Col md={3}>
                    <p>Nama Mobil</p>
                    <Form.Control name="carName" placeholder="Car Name" />
                </Col>
                <Col md={3}>
                    <p>Kategori</p>
                    <Form.Select name="category" defaultValue="Masukkan kapasitas mobil">
                        <option value="">2 - 4 orang</option>
                        <option value="">4 - 6 orang</option>
                        <option value="">6 - 8 orang</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <p>Harga</p>
                    <Form.Select name="price" defaultValue="Masukkan harga sewa per Hari">
                        <option value="">di bawah Rp. 400.000</option>
                        <option value="">Rp. 400.000 - Rp. 600.000</option>
                        <option value="">di atas Rp. 600.000</option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <p>Status</p>
                    <Form.Select name="status" defaultValue="status">
                        <option value="">Sudah disewa</option>
                        <option value="">Belum disewa</option>
                    </Form.Select>
                </Col>
                <Col id='sebtCol' md={1}>
                    <Button variant="custom" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    </Card>
  )
}

export default SearchBar