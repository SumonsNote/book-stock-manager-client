import ManageInventoryDetail from './ManageInventoryDetail';
import { Link } from 'react-router-dom';
import useBooks from './UseBooks';

const ManageInventory = () => {
    const [items, setItems] = useBooks([])

    const handleDelete = id => {
        const url = `http://localhost:5000/books/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remain = items.filter(item => item._id !== id);
                setItems(remain);
        })
    }

    
    return (
        <div className='container'>
            <h2>Manage Inventory</h2>

            <div className='row row-cols-3 py-3'>
            {
                items.map(item => 
                <div>
                <ManageInventoryDetail key={item._id} item={item} ></ManageInventoryDetail>
                <div className='ms-4 py-3'>
                <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
                </div>
                )
            }
            
            </div>
            <div className='py-5'>
                <Link className='btn btn-primary' to='/addNewItem'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;