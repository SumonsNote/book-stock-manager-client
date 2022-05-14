import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase.init';

const AddNewItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    if(user){
    }

    const onSubmit = data => {
        const url = 'https://dry-beyond-11415.herokuapp.com/books';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data =>{
            reset()
            console.log(data);
        } )
    }


    return (
        <div style={{marginBottom: "220px"}}>
            <div className='w-50 mx-auto form-control my-5'>
            <h2 className='text-center text-info'>Please add a new item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 form-control' placeholder='Book Name' {...register("name", { required: true})} />
                <input className='mb-2 form-control' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 form-control' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 form-control' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 form-control' placeholder='Supplier' {...register("supplier")} />
                <input className='btn btn-primary form-control' type="submit" value="Add New Item" />
            </form>
        </div>
        </div>
    );
};

export default AddNewItem;