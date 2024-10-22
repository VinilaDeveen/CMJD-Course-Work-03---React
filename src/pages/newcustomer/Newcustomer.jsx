import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import axios from 'axios';

function Newcustomer() {
    const navigate = useNavigate();
    const[custname, setName] = useState('');
    const[address, setAddress] = useState('');
    const[city, setCity] = useState('');
    const[phoneNo, setPhoneNo] = useState('');

    async function handleSubmit() {
        const data = {
            custname : custname,
            address : address,
            city : city,
            phoneNo : phoneNo
        };

        const response = await axios.post(`http://localhost:8080/api/v1/customer`,data)
          .then(response => {
            console.log('Customer details updated:', response.data);
        })
        .catch(error => {
            console.error("There was an error updating the customer!", error);
        });
        navigate(`/customertable`)
      };

  return (
    <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div className='w-full px-20'>
            <div>
            <span className='font text-3xl text-slate-600 mx-5'>Add New Customer</span>
            </div>
            <div className='flex m-10 shadow-2xl rounded-3xl w-full'>
                <div className='my-40'>
                <PersonAddAltRoundedIcon 
                            sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }} 
                            className='text-slate-800 mx-4 my-10 sm:mx-20 sm:my-20 md:m-20 md:my-20' 
                        />
                </div>
                <div className='p-10 w-full'>
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Name:</label>
                        <input 
                            type="text"
                            name='custname'
                            onChange={(e) => setName(e.target.value)} 
                            placeholder='Enter your name' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Address:</label>
                        <input 
                            type="text" 
                            name='address'
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Enter your address' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>
                
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>City:</label>
                        <input 
                            type="text" 
                            name='city'
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='Enter your city' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Phone No:</label>
                        <input 
                            type="text" 
                            name='phoneNo'
                            onChange={(e) => setPhoneNo(e.target.value)}
                            placeholder='Enter your phone no' 
                            className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'
                        />
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

export default Newcustomer