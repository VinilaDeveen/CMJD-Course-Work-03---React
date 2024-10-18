import React from 'react'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Itemview() {
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
                  <span>1</span>
                </div>

                <div>
                  <span className='font-bold'>Item: </span>
                  <span>Soap</span>
                </div>

                <div>
                  <span className='font-bold'>Quantity: </span>
                  <span>10</span>
                </div>

                <div>
                  <span className='font-bold'>Unit Price: </span>
                  <span>Rs. 200.00</span>
                </div>

                <div>
                  <span className='font-bold'>Category: </span>
                  <span>Grossery</span>
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
                <input type="text" placeholder='Enter your item name' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>Quantity</label>
                <input type="number" placeholder='Enter your quantity' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>Unit Price</label>
                <input type="text" placeholder='Enter your unit price' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>Category</label>
                <select type="text" className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-1 px-2 outline-none placeholder:text-slate-400'>
                    <option value="">--Select Category--</option>
                    <option value="">Medicine</option>
                    <option value="">Toys</option>
                    <option value="">Short Eats</option>
                    <option value="">Grossery</option>
                    <option value="">Vegetable</option>
                </select>
              </div>

              <div>
                <input type="button" value="Save" className='flex bg-slate-700 text-slate-50 mt-10 mb-5 px-20 py-2 rounded-xl hover:bg-slate-900 cursor-pointer'/>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Itemview