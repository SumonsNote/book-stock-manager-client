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
        <div>
            <h2>Name:{books.name}</h2>
        </div>
    );
};

export default Inventory;