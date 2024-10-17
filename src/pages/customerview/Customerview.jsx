import React from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Customerview() {
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
                  <span>1</span>
                </div>

                <div>
                  <span className='font-bold'>Name: </span>
                  <span>Vinila</span>
                </div>

                <div>
                  <span className='font-bold'>Address: </span>
                  <span>No 24, Hendimahara</span>
                </div>

                <div>
                  <span className='font-bold'>City: </span>
                  <span>Minuwangoda</span>
                </div>

                <div>
                  <span className='font-bold'>Phone no: </span>
                  <span>0741784461</span>
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
                <input type="text" placeholder='Enter your name' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>Address</label>
                <input type="text" placeholder='Enter your address' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>City</label>
                <input type="text" placeholder='Enter your city' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
              </div>

              <div>
                <label className='flex'>Phone no</label>
                <input type="text" placeholder='Enter your phone no' className='border-b-2 border-slate-400 w-full pt-2 outline-none placeholder:text-slate-400'/>
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

export default Customerview