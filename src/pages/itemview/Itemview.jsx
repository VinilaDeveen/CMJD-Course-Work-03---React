import React, { useEffect, useState } from 'react'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Itemview() {
  const[categories, setCategories] = useState([]);
  const{itemId} = useParams();
  const[name, setName] = useState('');
  const[qty, setQty] = useState(0);
  const[unitPrice, setUnitPrice] = useState(0.00);
  const[categoryId, setCategoryId] = useState(0);
  const[categoryName, setCategoryName] = useState('');

  useEffect(() => {
    loadItemDetails();
    loadCategories();
  },[])

  async function loadItemDetails() {
    const response = await axios.get(`http://localhost:8080/api/v1/item/${itemId}`)
    .then( response => {
      setName(response.data.name);
      setQty(response.data.qty);
      setUnitPrice(response.data.unitPrice);
      setCategoryId(response.data.category.categoryId);
      setCategoryName(response.data.category.categoryName);
    })
    .catch(error => {
      console.error("There was an error fetching the item details!", error);
    })
  }

  async function loadCategories() {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/category`);
      setCategories(response.data);
    } catch (error) {
      console.error("There was an error fetching the category list!", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
  
    const item = {
      name: name,
      qty: qty,
      unitPrice: unitPrice,
      category: { categoryId: categoryId } // Ensure categoryId is a number
    };

    loadItemDetails();
  
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/item/${itemId}`, item);
      console.log('Item details updated:', response.data);
    } catch (error) {
      console.error("There was an error updating the item!", error);
    }
  };
  
  

  return (
    <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <div className='p-10 shadow-xl rounded-lg text-slate-600 m-10'>
            <div className='flex flex-nowrap'>
              <div>
                <span className='font-extrabold text-xl mx-5'>Item Information</span>
              </div>
              <div className='px-10'>
                <LocalMallRoundedIcon sx={{ fontSize: 100 }}/>
              </div>
              <div className="info">
                <div>
                  <span className='font-bold'>ID: </span>
                  <span>{itemId}</span>
                </div>

                <div>
                  <span className='font-bold'>Item: </span>
                  <span>{name}</span>
                </div>

                <div>
                  <span className='font-bold'>Quantity: </span>
                  <span>{qty}</span>
                </div>

                <div>
                  <span className='font-bold'>Unit Price: </span>
                  <span>Rs. {unitPrice}</span>
                </div>

                <div>
                  <span className='font-bold'>Category: </span>
                  <span>{categoryName}</span>
                </div>
              </div>
            </div>

          </div>
          <div className="p-20 shadow-xl rounded-lg text-slate-600 mx-10">
            <div className="title">
            <span className='font-extrabold text-xl'>Update Information</span>
            </div>
            <div className="flex flex-wrap grid gap-4 grid-cols-2 mt-5">
              <div>
                <label className='flex'>Item</label>
                <input 
                  type="text" 
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your item name' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>Quantity</label>
                <input 
                  type="number" 
                  name='qty'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  placeholder='Enter your quantity' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>Unit Price</label>
                <input 
                  type="number" 
                  name='unitPrice'
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                  placeholder='Enter your unit price' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>Category</label>
                <select 
                  type="text" 
                  className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-1 px-2 outline-none placeholder:text-slate-400'
                  value={categoryId} // Bind the value to categoryId state
                  onChange={(e) => setCategoryId(e.target.value)} // Update categoryId state when the user selects a new category
                >
                  {categories.map((category) => (
                    <option key={category.categoryId} value={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>


              <div>
                <input 
                  type="button" 
                  value="Save" 
                  className='flex bg-slate-700 text-slate-50 mt-10 mb-5 px-20 py-2 rounded-xl hover:bg-slate-900 cursor-pointer'
                  onClick={handleSubmit}
                />
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Itemview