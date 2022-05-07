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
import MyItems from './components/SharedFiles/MyItems';
import Blog from './components/SharedFiles/Blog';
import NotFound from './components/SharedFiles/NotFound';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequiredAuth><Inventory></Inventory></RequiredAuth>
        }></Route>
        <Route path='/addNewItem' element={<RequiredAuth><AddNewItem></AddNewItem></RequiredAuth>}></Route>
        <Route path='/manageInventory' element={<RequiredAuth><ManageInventory></ManageInventory></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myItems' element={<RequiredAuth><MyItems></MyItems></RequiredAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
