import ManageInventoryDetail from './ManageInventoryDetail';
import { Link } from 'react-router-dom';
import useBooks from './UseBooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageInventory = () => {
    const [items, setItems] = useBooks([])

    const handleDelete = id => {
        const url = `https://dry-beyond-11415.herokuapp.com/books/${id}`
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
            <div className='my-2'>
                <h2 className='my-2 fs-4'>Manage Inventory</h2>
                <Link className='btn btn-primary' to='/addNewItem'>Add New Item</Link>
            </div>


            <div className=' py-3'>
                {
                    items.map(item =>
                        <div>
                            <ManageInventoryDetail key={item._id} item={item} ></ManageInventoryDetail>
                            <div className='ms-4 py-3'>
                                <button className='btn btn-danger px-3' onClick={() => handleDelete(item._id)}><FontAwesomeIcon className='me-2 fs-1 text-center p-1' icon={faTrashAlt} /></button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default ManageInventory;