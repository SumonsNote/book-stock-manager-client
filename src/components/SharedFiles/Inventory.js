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
        <div className='container py-3'>
            <img style={{width: '500px'}} src={books.img} alt=""/>
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
            <input style={{width: '100px'}} type="number" name="" id=""/>
            <button className='btn btn-primary'>Increase Quantity</button>
            </div>
            <p className='py-5'><Link to='/manageInventory'>Manage Inventories</Link></p>
        </div>
    );
};

export default Inventory;