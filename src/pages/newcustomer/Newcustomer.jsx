import React from 'react'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Newcustomer() {
  return (
    <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div className='w-full px-20'>
            <div>
            <span className='font text-3xl text-slate-600 mx-5'>Add New Customer</span>
            </div>
            <div className='flex flex-nowrap m-10 shadow-2xl rounded-3xl w-full'>
                <div>
                <PersonAddAltRoundedIcon 
                            sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }} 
                            className='text-slate-800 mx-4 my-10 sm:mx-20 sm:my-20 md:mx-10 md:my-20' 
                        />
                </div>
                <div className='p-10 w-full'>
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Name:</label>
                        <input type="text" placeholder='Enter your name' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Address:</label>
                        <input type="text" placeholder='Enter your address' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>
                
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>City:</label>
                        <input type="text" placeholder='Enter your city' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Phone No:</label>
                        <input type="text" placeholder='Enter your phone no' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <input type="button" value="Save" className='flex bg-slate-800 text-slate-50 mt-20 mb-5 px-20 py-2 rounded-xl hover:bg-slate-900'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newcustomer