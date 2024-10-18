import React from 'react'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Newitem() {
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
                        <input type="text" placeholder='Enter your item name' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Quantity:</label>
                        <input type="text" placeholder='Enter your quantity' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>
                
                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Unit Price:</label>
                        <input type="text" placeholder='Enter your unit price' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <label className='flex pt-8 text-lg text-slate-800'>Category:</label>
                        <select type="text" className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-1 px-2 outline-none placeholder:text-slate-400'>
                            <option value="">--Select Category--</option>
                            <option value="">Medicine</option>
                            <option value="">Toys</option>
                            <option value="">Short Eats</option>
                            <option value="">Grossery</option>
                            <option value="">Vegetable</option>
                        </select>
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

export default Newitem