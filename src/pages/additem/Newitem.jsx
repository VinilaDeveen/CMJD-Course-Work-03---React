import React, { useState,useEffect } from 'react'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Newitem() {
    const{ isAuthenticated, jwtToken } = useAuth();

    const[categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const[name, setName] = useState('');
    const[qty, setQty] = useState(0);
    const[unitPrice, setUnitPrice] = useState(0.00);
    const[categoryId, setCategoryId] = useState(0);

    useEffect(() => {
        if (isAuthenticated) {
            loadCategories();
        }
    },[isAuthenticated])

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    async function loadCategories() {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/category`, config);
          setCategories(response.data);
        } catch (error) {
          console.error("There was an error fetching the category list!", error);
        }
      }

    async function handleSubmit() {
        const data = {
            name : name,
            qty : qty,
            unitPrice : unitPrice,
            category : {
                categoryId : categoryId
            }
        };

        const response = await axios.post(`http://localhost:8080/api/v1/item`,data , config )
          .then(response => {
            console.log('Item details updated:', response.data);
        })
        .catch(error => {
            console.error("There was an error updating the item!", error);
        });
        navigate(`/itemtable`)
      };

  return (
    <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div className='w-full px-20'>
            <div>
            <span className='font text-3xl text-slate-600 mx-5'>Add New Item</span>
            </div>
            <div className='flex m-5 shadow-2xl rounded-3xl w-full'>
                <div className='my-40'>
                <LocalMallRoundedIcon 
                            sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }} 
                            className='text-slate-800 mx-4 my-10 sm:mx-20 sm:my-20 md:m-20 md:my-20' 
                        />
                </div>
                <div className='p-10 w-full'>
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Item:</label>
                        <input 
                            type="text" 
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your item name' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Quantity:</label>
                        <input 
                            type="number" 
                            name='qty'
                            onChange={(e) => setQty(e.target.value)}
                            placeholder='Enter your quantity' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>
                
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Unit Price:</label>
                        <input 
                            type="number" 
                            name='unitPrice'
                            onChange={(e) => setUnitPrice(e.target.value)}
                            placeholder='Enter your unit price' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Category:</label>
                        <select 
                            type="number" 
                            className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-1 px-2 outline-none placeholder:text-slate-400'
                            value={categoryId} 
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option>--Select Category--</option>
                            {categories.map((category) => (
                              <option key={category.categoryId} value={category.categoryId}>
                                {category.categoryName}
                              </option>
                            ))}
                        </select>
                    </div>

                    <div className='w-full'>
                        <input 
                            type="button"
                            value="Save" 
                            className='flex bg-slate-800 text-slate-50 mt-20 mb-5 px-20 py-2 rounded-xl hover:bg-slate-900'
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Newitem