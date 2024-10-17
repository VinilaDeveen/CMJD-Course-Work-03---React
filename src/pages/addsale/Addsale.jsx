import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Sidebar from '../../component/sidebar/Sidebar';


function Addsale() {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='px-20 py-5'>
            <div className="px-10 py-5 mx-10 w-full shadow-xl rounded-lg text-slate-600">
                <div>
                <span className='font-extrabold text-xl'>Add Order</span>
                </div>
                <div className="flex flex-wrap grid gap-6 grid-cols-4 m-10">
                    <div className='row-span-5 flex justify-center items-center'>
                        <ShoppingCartIcon 
                            sx={{ fontSize: { xs: 60, sm: 100, md: 150 } }} 
                            className='text-slate-800 mx-4 my-10 sm:mx-8 sm:my-16 md:mx-10 md:my-20' 
                        />
                    </div>
                    <div className='col-span-3 w-full'>
                        <label className='flex'>Name</label>
                        <select 
                            type="text" 
                            placeholder='Enter your name' 
                            className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-2 px-3 outline-none placeholder:text-slate-400'>
                            <option value="">--Select Customer Name--</option>
                            <option value="">Vinila</option>
                            <option value="">Vinila</option>
                            <option value="">Vinila</option>
                        </select>
                    </div>

                    

                    <div>
                        <label className='flex'>Item</label>
                        <select type="text" className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full py-1 px-2 outline-none placeholder:text-slate-400'>
                            <option value="">--Select Item--</option>
                            <option value="">t-shirt</option>
                            <option value="">pandol</option>
                            <option value="">fish bun</option>
                            <option value="">tea leaves</option>
                            <option value="">rice</option>
                        </select>
                    </div>

                    <div className='pl-8 col-span-2'>
                        <label className='flex'>Quantity</label>
                        <input type="number" placeholder='Quantity' className='border-2 border-slate-300 rounded-lg w-full sm:w-full md:w-full px-2 py-1 outline-none placeholder:text-slate-400'/>
                    </div>

                    <div type="button" className='col-span-3 w-full sm: w-full md:w-full h-10 bg-slate-700 text-slate-50 text-lg px-10 py-3 mt-5 rounded-xl flex items-center justify-center hover:bg-slate-900 cursor-pointer'><AddShoppingCartIcon className='mr-2'/>Add to cart</div>

                    <div className='col-span-3'>
                        <table className='border-2 w-full'>
                                    <thead>
                                        <tr>
                                            <th className='border-2 w-[400px]'>Item</th>
                                            <th className='border-2'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border-2 text-center'>rice 1kg</td>
                                            <td className='border-2 text-center'>2</td>
                                        </tr>

                                        <tr>
                                            <td className='border-2 text-center'>rice 1kg</td>
                                            <td className='border-2 text-center'>2</td>
                                        </tr>

                                        <tr>
                                            <td className='border-2 text-center'>rice 1kg</td>
                                            <td className='border-2 text-center'>2</td>
                                        </tr>

                                        <tr>
                                            <td className='border-2 text-center'>rice 1kg</td>
                                            <td className='border-2 text-center'>2</td>
                                        </tr>

                                        <tr>
                                            <td className='border-2 text-center'>rice 1kg</td>
                                            <td className='border-2 text-center'>2</td>
                                        </tr>
                                    </tbody>
                        </table>
                    </div>
                    <div type="button" className='w-[200px] h-10 bg-slate-700 text-slate-50 text-lg px-10 py-3 my-5 rounded-xl flex items-center justify-center hover:bg-slate-900 cursor-pointer'>
                        <LocalMallIcon/>Checkout
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addsale