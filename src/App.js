import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/SharedFiles/Home';
import Navbar from './components/SharedFiles/Navbar';
import Footer from './components/SharedFiles/Footer';
import Inventory from './components/SharedFiles/Inventory';
import Login from './components/SharedFiles/Login';
import Register from './components/SharedFiles/Register';
import RequiredAuth from './components/SharedFiles/RequiredAuth';
import ManageInventory from './components/SharedFiles/ManageInventory';
import AddNewItem from './components/SharedFiles/AddNewItem';

function App() {
  return (
    <div className=''>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequiredAuth><Inventory></Inventory></RequiredAuth>
        }></Route>
        <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
