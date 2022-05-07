import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryId} = useParams()

    const [books, Setbooks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/books/${inventoryId}`)
        .then(res => res.json())
        .then(data => Setbooks(data))
    },[])
    
    return (
        <div className='container py-5 d-flex justify-content-center align-items-center'>
            <div>
            <img className='rounded-3' style={{width: '350px', height: '500px'}} src={books.img} alt=""/>
            </div>
            <div className='ms-4'>
            <h2>Name:{books.name}</h2>
            <p>Price: {books.price}</p>
            <p>ID: {books._id}</p>
            <p>Quantity: {books.quantity}</p>
            <p>Supplier: {books.supplier}</p>
            <p>Description: {books.des}</p>
            <div className='d-flex'>
            <div className='pe-5'>
            <button className='btn btn-primary'>Delivered</button>
            </div>
            <input className='me-3' style={{width: '100px'}} type="number" name="" id=""/>
            <button className='btn btn-primary'>Increase Quantity</button>
            </div>
            <Link className='my-5 btn btn-warning text-decoration-none' to='/manageInventory'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;