import React, { useEffect, useState } from 'react';
import ManageInventoryDetail from './ManageInventoryDetail';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='container'>
            <h2>Manage Inventory</h2>

            <div className='row row-cols-3 py-3'>
            {
                items.map(item => <ManageInventoryDetail key={item.key} item={item} ></ManageInventoryDetail>)
            }
            
            </div>
            <div className='py-5'>
                <Link className='btn btn-primary' to='/addNewItem'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;