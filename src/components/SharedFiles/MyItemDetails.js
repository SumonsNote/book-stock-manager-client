import React from 'react';

const MyItemDetails = ({myItem}) => {
    const {img, name} = myItem;
    return (
        <div className='container m-4 p-4 g-4 border border-1 text-center mx-auto'>
            <img style={{width: '250px', height: '300px', margin: '20px'}} src={img} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default MyItemDetails;