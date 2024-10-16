import React from 'react'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Newcustomer() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='container mx-auto my-auto'>
            <span className='font text-3xl text-blue-800 mx-5'>Add New Customer</span>
            <div className='flex flex-nowrap m-5 shadow-2xl rounded-3xl'>
                <div>
                    <PersonAddAltRoundedIcon sx={{ fontSize: 150 }} className='text-blue-800 m-[100px]'/>
                </div>
                <div>
                    <label className='flex pt-8 text-lg text-blue-800'>Name:</label>
                    <input type="text" placeholder='Enter your name' className='border-b-2 border-slate-300 w-[600px] pt-3 outline-none placeholder:text-slate-400'/>

                    <label className='flex pt-8 text-lg text-blue-800'>Address:</label>
                    <input type="text" placeholder='Enter your address' className='border-b-2 border-slate-300 w-[600px] pt-3 outline-none placeholder:text-slate-400'/>
                
                    <label className='flex pt-8 text-lg text-blue-800'>City:</label>
                    <input type="text" placeholder='Enter your city' className='border-b-2 border-slate-300 w-[600px] pt-3 outline-none placeholder:text-slate-400'/>

                    <label className='flex pt-8 text-lg text-blue-800'>Phone No:</label>
                    <input type="text" placeholder='Enter your phone no' className='border-b-2 border-slate-300 w-[600px] pt-3 outline-none placeholder:text-slate-400'/>

                    <input type="button" value="Save" className='flex bg-blue-800 text-slate-50 mt-20 mb-5 px-20 py-2 rounded-xl hover:bg-blue-900'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newcustomer