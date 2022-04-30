import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth)
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" to='/'>Book Stock Manager</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
      <div className='navbar-nav'>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {
        user &&<>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/manageInventory'>Manage Items</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/myItems'>My Items</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/addNewItem'>Add Items</Link>
        </li>
        </>
      }
        {
          user ?
           <Link to='/login'><button className='btn btn-link' onClick={handleSignOut}>Logout</button></Link> :
          <button className='btn btn-link'><Link to='/login'>Login</Link></button>
        }
      </ul>
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;