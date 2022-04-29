import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const {name, img} = item
    return (
        <div className=''>
            <div className='books-detail m-5'>
            <h2>{name}</h2>
            <img src={img} alt=""/>
        </div>
        </div>
    );
};

export default ItemDetail;