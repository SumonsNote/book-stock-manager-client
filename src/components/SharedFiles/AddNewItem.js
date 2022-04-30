import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/books`;
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            reset()
        } )
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a new item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Book Name' {...register("name", { required: true})} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <input type="submit" value="Add New Item" />
            </form>
        </div>
    );
};

export default AddNewItem;