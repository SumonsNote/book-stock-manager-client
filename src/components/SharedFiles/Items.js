import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const Items = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])

    const slicedItem = item.slice(0, 6)
    return (
        <div className='container'>
        <h2 className='py-5 text-center'>Inventory Items</h2>
            <div className='row row-cols-3 py-3'>
            
            {
                slicedItem.map(item => <ItemDetail key={item.key} item={item}></ItemDetail>)
            }
            
        </div>
        <p className='text-center'><Link to='/manageInventory'>Manage Inventories</Link></p>
        </div>
    );
};

export default Items;