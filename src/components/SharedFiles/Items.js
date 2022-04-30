import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const Items = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('Items.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div className='container'>
        <h2 className='py-5'>Books</h2>
            <div className='row row-cols-3 py-3'>
            
            {
                item.map(item => <ItemDetail key={item.key} item={item}></ItemDetail>)
            }
        </div>
        </div>
    );
};

export default Items;