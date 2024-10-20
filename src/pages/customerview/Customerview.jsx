import React, { useEffect, useState } from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Customerview() {
  const{id} = useParams();
  const[custname, setName] = useState('');
  const[address, setAddress] = useState('');
  const[city, setCity] = useState('');
  const[phoneNo, setPhoneNo] = useState('');

  useEffect(() => {
    loadCustomerDetails();
  },[id])

  async function loadCustomerDetails() {
    const response = await axios.get(`http://localhost:8080/api/v1/customer/${id}`)
    .then( response => {
      setName(response.data.custname);
      setAddress(response.data.address);
      setCity(response.data.city);
      setPhoneNo(response.data.phoneNo);
    })
    .catch(error => {
      console.error("There was an error fetching the customer details!", error);
    })
  }

  const handleSubmit = (e) => {
    const customer = {id,custname,address,city,phoneNo};

    const response = axios.put(`http://localhost:8080/api/v1/customer/${id}`,customer)
      .then(response => {
        console.log('Patient details updated:', response.data);
    })
    .catch(error => {
        console.error("There was an error updating the patient!", error);
    });
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
                <span className='font-extrabold text-xl mx-5'>Customer Information</span>
              </div>
              <div className='px-10'>
                <PersonRoundedIcon sx={{ fontSize: 100 }}/>
              </div>
              <div className="info">
                <div>
                  <span className='font-bold'>ID: </span>
                  <span>{id}</span>
                </div>

                <div>
                  <span className='font-bold'>Name: </span>
                  <span>{custname}</span>
                </div>

                <div>
                  <span className='font-bold'>Address: </span>
                  <span>{address}</span>
                </div>

                <div>
                  <span className='font-bold'>City: </span>
                  <span>{city}</span>
                </div>

                <div>
                  <span className='font-bold'>Phone no: </span>
                  <span>{phoneNo}</span>
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
                <label className='flex'>Name</label>
                <input 
                  type="text" 
                  name='custname'
                  value={custname}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your name' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>Address</label>
                <input 
                  type="text"
                  name='address'
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Enter your address' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>City</label>
                <input 
                  type="text"
                  name='city' 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder='Enter your city' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
              </div>

              <div>
                <label className='flex'>Phone no</label>
                <input 
                  type="text" 
                  name='phoneNo'
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder='Enter your phone no' 
                  className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'
                />
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

export default Customerview