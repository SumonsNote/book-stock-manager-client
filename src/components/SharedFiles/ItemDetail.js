import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

    const navigateBooksStockManager = id => {
        navigate(`/inventory/${_id}`);
    }
    const { _id, name, img, des, price, quantity, supplier } = item
    return (

        <div class="card-group">
            <div class="card">
                <img style={{width: '100%', height: '100%'}} src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{des}</p>
                        <p>{price}</p>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <button onClick={() => navigateBooksStockManager(_id)} className='btn btn-primary'>Stock Update</button>
                    </div>
            </div>
        </div>
    );
};

export default ItemDetail;