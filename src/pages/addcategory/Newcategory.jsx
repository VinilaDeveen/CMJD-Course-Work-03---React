import React from 'react'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Newcategory() {
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
                <CategoryRoundedIcon 
                            sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }} 
                            className='text-slate-800 mx-4 my-10 sm:mx-20 sm:my-20 md:mx-20 md:my-20' 
                        />
                </div>
                <div className='p-10 w-full'>
                    <div className='w-full py-20'>
                        <label className='flex pt-8 text-lg text-slate-800'>Category:</label>
                        <input type="text" placeholder='Enter your category' className='border-b-2 border-slate-300 w-full pt-3 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div className='w-full'>
                        <input type="button" value="Save" className='flex bg-slate-800 text-slate-50 mt-10 mb-5 px-20 py-2 rounded-xl hover:bg-slate-900'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newcategory