import React from 'react';
import MyItemDetails from './MyItemDetails';
import useBooks from './UseBooks';

const MyItems = () => {
    const [myItems, setMyItems] = useBooks([])
    return (
        <div className='container'>
            <h2 className='text-center py-5'>Total Products: {myItems.length}</h2>
            <div className='row row-cols-3'>
            {
                myItems.map(myItem => <MyItemDetails key={myItem._id} myItem={myItem}></MyItemDetails>)
            }
            </div>
        </div>
    );
};

export default MyItems;