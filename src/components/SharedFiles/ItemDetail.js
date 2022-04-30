import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const {name, img, des, price, quantity, supplier} = item
    return (
        <div className='container'>
            <div className='books-details m-1'>
            <h2>{name}</h2>
            <img src={img} alt=""/>
            <p>{des}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <Link to='/inventory'><button className='btn btn-primary'>Stock Update</button></Link>
        </div>
        </div>
    );
};

export default ItemDetail;