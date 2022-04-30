import React from 'react';
import {useNavigate } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const navigate = useNavigate()

    const navigateBooksStockManager = id => {
        navigate(`/inventory/${_id}`);
    }
    const {_id, name, img, des, price, quantity, supplier} = item
    return (
        <div className='container'>
            <div className='books-details m-1'>
            <h2>{name}</h2>
            <img src={img} alt=""/>
            <p>{des}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <button onClick={() => navigateBooksStockManager(_id)} className='btn btn-primary'>Stock Update</button>
        </div>
        </div>
    );
};

export default ItemDetail;