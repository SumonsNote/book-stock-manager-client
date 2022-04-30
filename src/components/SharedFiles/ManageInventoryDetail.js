import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventoryDetail = ({item}) => {
    const {name, _id, price, quantity, supplier, img} = item;
    return (
        <div className='container'>
        <img style={{width: '60px', height:'40px'}} src={img} alt=""/>
            <h2>{name}</h2>
            <p>ID: {_id}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
        </div>
    );
};

export default ManageInventoryDetail;