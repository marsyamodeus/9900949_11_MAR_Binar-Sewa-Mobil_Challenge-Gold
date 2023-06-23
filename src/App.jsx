import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Homepage from './pages/Homepage';
import CarSearch from './pages/CarSearch';
import CarResult from './pages/CarResult';
import CarDetail from './pages/CarDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/CarSearch' element={<CarSearch />}/>
        <Route path='/CarResult' element={<CarResult />}/>
        <Route path='/CarDetail/:id' element={<CarDetail />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
