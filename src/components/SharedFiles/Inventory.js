import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <button className='btn btn-primary'>Delivered</button>
        </div>
    );
};

export default Inventory;