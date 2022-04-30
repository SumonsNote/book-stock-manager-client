import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const {name, img} = item
    return (
        <div className='books-details'>
            <h2>{name}</h2>
            <img src={img} alt=""/>
        </div>
    );
};

export default ItemDetail;