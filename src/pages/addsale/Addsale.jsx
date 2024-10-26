import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Sidebar from '../../component/sidebar/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Addsale() {
  const { isAuthenticated, jwtToken } = useAuth();

  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [custId, setCustId] = useState(0);
  const [itemId, setItemId] = useState('');
  const [qty, setQty] = useState('');
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadCustomer();
      loadItems();
    }
  }, [isAuthenticated]);

  const handleAddItem = () => {
    const selectedItem = items.find(item => item.itemId === parseInt(itemId));
    if (selectedItem && qty > 0) {
      setOrderItems([...orderItems, { name: selectedItem.name, qty }]);
      setItemId('');
      setQty('');
    } else {
      alert("Please select a valid item and quantity.");
    }
  };

  async function handleSubmit() {
    if (custId === 0 || orderItems.length === 0) {
      alert("Please select a customer and add items to the order.");
      return;
    }
  
    const data = {
      customer: { id: custId }, 
      itemDatails: orderItems.map(item => ({
        itemId: items.find(i => i.name === item.name).itemId,
        name: item.name,
        qty: parseInt(item.qty),
        unitPrice: items.find(i => i.name === item.name).unitPrice 
      }))
    };
  
    if (isAuthenticated) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/sale', data , config);
        alert('Sale created successfully!');
        navigate('/salestable');
      } catch (error) {
        console.error("There was an error creating the sale!", error);
        alert('Error occurred while creating sale.');
      }
    }
  }
  

  async function loadItems() {
    if (isAuthenticated) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/item`,config);
        setItems(response.data);
      } catch (error) {
        console.error("There was an error fetching the item list!", error);
      }
    }
  }

  async function loadCustomer() {
    if (isAuthenticated) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/customer`, config);
        setCustomers(response.data);
      } catch (error) {
        console.error("There was an error fetching the customer list!", error);
      }
    }
  }

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='px-20 py-5'>
        <div className="px-10 py-5 mx-10 w-full shadow-xl rounded-lg text-slate-600">
          <div>
            <span className='font-extrabold text-xl'>Add Order</span>
          </div>
          <div className="flex flex-wrap grid gap-6 grid-cols-4 m-10">
            <div className='row-span-5 flex justify-center items-center'>
              <ShoppingCartIcon
                sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }}
                className='text-slate-800 mx-4 my-10 sm:mx-8 sm:my-16 md:mx-10 md:my-20'
              />
            </div>
            <div className='col-span-3 w-full'>
              <label className='flex'>Name</label>
              <select
                className='border-2 border-slate-300 rounded-lg w-full py-2 px-3 outline-none placeholder:text-slate-400'
                value={custId}
                onChange={(e) => setCustId(e.target.value)}
              >
                <option value="">--Select Customer Name--</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>{customer.custname}</option>
                ))}
              </select>
            </div>

            <div>
              <label className='flex'>Item</label>
              <select
                className='border-2 border-slate-300 rounded-lg w-full py-1 px-2 outline-none placeholder:text-slate-400'
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
              >
                <option value="">--Select Item--</option>
                {items.map((item) => (
                  <option key={item.itemId} value={item.itemId}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className='pl-8 col-span-2'>
              <label className='flex'>Quantity</label>
              <input
                type="number"
                placeholder='Quantity'
                className='border-2 border-slate-300 rounded-lg w-full px-2 py-1 outline-none placeholder:text-slate-400'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>

            <div type="button" className='col-span-3 w-full h-10 bg-slate-700 text-slate-50 text-lg px-10 py-3 mt-5 rounded-xl flex items-center justify-center hover:bg-slate-900 cursor-pointer' onClick={handleAddItem}>
              <AddShoppingCartIcon className='mr-2' /> Add to cart
            </div>

            <div className='col-span-3'>
              <table className='border-2 w-full'>
                <thead>
                  <tr>
                    <th className='border-2 w-[400px]'>Item</th>
                    <th className='border-2'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((orderItem, index) => (
                    <tr key={index}>
                      <td className='border-2 text-center'>{orderItem.name}</td>
                      <td className='border-2 text-center'>{orderItem.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div type="button" className='w-[200px] h-10 bg-slate-700 text-slate-50 text-lg px-10 py-3 my-5 rounded-xl flex items-center justify-center hover:bg-slate-900 cursor-pointer' onClick={handleSubmit}>
              <LocalMallIcon /> Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addsale;
