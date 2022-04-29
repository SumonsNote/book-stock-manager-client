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
        <div className='row container'>
            <div className=' d-flex flex-wrap'>
            {
                item.map(item => <ItemDetail key={item.key} item={item}></ItemDetail>)
            }
        </div>
        </div>
    );
};

export default Items;