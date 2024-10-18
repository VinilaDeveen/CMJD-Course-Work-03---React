import React from 'react'
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Saleview() {
  return (
    <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full px-20 py-5'>
          <div className='w-full p-10 shadow-xl rounded-lg text-slate-600 m-10'>
            <div className='flex flex-nowrap'>
              <div>
                <span className='font-extrabold text-xl mx-5'>Order Information</span>
              </div>
              <div className='px-10'>
                <PointOfSaleRoundedIcon sx={{ fontSize: 100 }}/>
              </div>
              <div className="info">
                <div>
                  <span className='font-bold'>ID: </span>
                  <span>1</span>
                </div>

                <div>
                  <span className='font-bold'>Customer name: </span>
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
                  <span className='font-bold'>Order date & time: </span>
                  <span>2024-09-23 16:28:18.408579</span>
                </div>

                <div>
                  <span className='font-bold'>Total: </span>
                  <span>Rs.4000.00</span>
                </div>

              </div>
            </div>

        </div>
        <div className="w-full p-10 shadow-xl rounded-lg text-slate-600 mx-10">
            <div className="title">
            <span className='font-extrabold text-xl'>Ordered Items</span>
            </div>
            <div className='pt-5'>
                <table className='border-2 w-full'>
                    <thead>
                        <tr>
                            <th className='border-2 w-full px-5'>Item</th>
                            <th className='border-2 px-20'>Unit price</th>
                            <th className='border-2 w-full px-5'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                            <td className='border-2 text-center'>2</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                            <td className='border-2 text-center'>2</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                            <td className='border-2 text-center'>2</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                            <td className='border-2 text-center'>2</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                            <td className='border-2 text-center'>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Saleview