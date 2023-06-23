import React, {useEffect,useState} from 'react';
import axios from "axios";
import { Form, Row, Col, Button, Card, Container } from 'react-bootstrap';
import './searchbar.css';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {

    //Axios, API, etc
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [isRented, setisRented] = useState("");
    // const [price, setPrice] = useState();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const navigate = useNavigate();

    useEffect(()=> {
        getData();
     },[]);
  
     const getData = () => {
        const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        
        axios
           .get(api)
           .then((res)=>{
              setData(res.data.cars);
           })
           .catch((err)=>console.log(err));
     };
  
     const handleNameChange=(e)=>{
        setName(e.target.value)
     }
  
     const handleCategChange = (e) => {
        setCategory(e.target.value);
      };
  
      const handleisRentedChange = (e) => {
        setisRented(e.target.value);
      };

      const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
     };
     
     const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
     };

    const redirect = (id) =>{
        navigate(`/CarDetail/${id}`);
    };

  return (
    <Container>
        <Card className='searchPanel' id='serCard'>
            <Form id ='serForm'>
                <Row id='serRow'>
                    <Col  md={3} style={{ width: 'auto' }}>
                        <p>Nama Mobil</p>
                        <Form.Control name="carName" onChange={handleNameChange} />
                    </Col>
                    <Col  md={3} style={{ width: 'auto' }}>
                        <p>Kategori</p>
                        <Form.Select name="category"  onChange={handleCategChange}>
                            <option value=""></option>
                            <option value="small">2 - 4 orang</option>
                            <option value="medium">4 - 6 orang</option>
                            <option value="large">6 - 8 orang</option>
                        </Form.Select>
                    </Col>
                    <Col  md={2} style={{ width: 'auto' }}>
                        <p>Harga minimum</p>
                        <Form.Control name='minPrice'onChange={handleMinPriceChange}/>
                    </Col>
                    <Col  md={2} style={{ width: 'auto' }}>
                        <p>Harga maximum</p>
                        <Form.Control name='maxPrice'onChange={handleMaxPriceChange}/>
                    </Col>
                    <Col  md={3} style={{ width: 'auto' }}>
                        <p>Status</p>
                        <Form.Select name="isRented" onChange={handleisRentedChange}>
                            <option value=""></option>
                            <option value="true">Sudah disewa</option>
                            <option value="false">Belum disewa</option>
                        </Form.Select>
                    </Col>
                    <Col id='sebtCol'  md={1} style={{ width: 'auto' }}>
                        <Button variant="custom" id='serButt' onClick={getData}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {
            data.map((item)=>(
                <Container id='restCont' key={item.id} style={{ width: '100%', maxWidth: '21rem' }}>
                     <Card className='carCards' style={{width:'333 px'}}>
                        <Card.Img variant="top" src={item.image} style={{width:'270 px', height:'160 px'}}/>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Harga: {item.price}</Card.Text>
                            <Card.Text>Status: {item.status ? "Sudah disewa" : "Belum disewa"}</Card.Text>
                            <Button onClick={()=>redirect(item.id)}variant="custom" disabled={item.status} >Sewa Mobil</Button>
                        </Card.Body>
                    </Card>

                </Container>
            ))
        }
       </div>
    </Container>
  )
}

export default SearchBar