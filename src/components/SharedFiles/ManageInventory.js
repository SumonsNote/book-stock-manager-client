import React, { useEffect, useState } from 'react';
import ManageInventoryDetail from './ManageInventoryDetail';

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
                items.map(item => <ManageInventoryDetail key={item.key} item={item}></ManageInventoryDetail>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;