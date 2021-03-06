import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import useBooks from './UseBooks';

const Items = () => {
    const [item, setItem] = useBooks([])

    const slicedItem = item.slice(0, 6)
    return (
        <div className='container'>
        <h2 className='py-5 text-center'>Inventory Items</h2>
            <div className='row row-cols-3 py-3'>
            
            {
                slicedItem.map(item => <ItemDetail key={item._id} item={item}></ItemDetail>)
            }
            
        </div>
        <p className='text-center mt-3 text-uppercase'><Link to='/manageInventory'>Manage Inventories</Link></p>
        </div>
    );
};

export default Items;