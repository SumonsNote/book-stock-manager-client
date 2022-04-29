import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/SharedFiles/Home';
import Navbar from './components/SharedFiles/Navbar';
import Footer from './components/SharedFiles/Footer';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
