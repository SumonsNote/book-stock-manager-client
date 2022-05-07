import React from 'react';
import { } from 'react-router-dom';

const ManageInventoryDetail = ({ item }) => {
    const { name, _id, price, quantity, supplier, img } = item;
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">IMG</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img style={{width: '100px', height: '150px'}} src={img} alt=""/></td>
                        <td>{_id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{supplier}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventoryDetail;