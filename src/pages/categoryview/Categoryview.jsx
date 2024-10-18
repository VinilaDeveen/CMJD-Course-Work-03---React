import React from 'react'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Sidebar from '../../component/sidebar/Sidebar';

function Categoryview() {
  return (
    <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full px-20 py-5'>
          <div className='w-full p-10 shadow-xl rounded-lg text-slate-600 m-10'>
            <div className='flex flex-nowrap'>
              <div>
                <span className='font-extrabold text-xl mx-5'>Category Information</span>
              </div>
              <div className='px-10'>
                <CategoryRoundedIcon sx={{ fontSize: 100 }}/>
              </div>
              <div className="info">
                <div>
                  <span className='font-bold'>ID: </span>
                  <span>1</span>
                </div>

                <div>
                  <span className='font-bold'>Category: </span>
                  <span>Toys</span>
                </div>
              </div>
            </div>

        </div>
        <div className="w-full p-10 shadow-xl rounded-lg text-slate-600 mx-10">
            <div className="title">
            <span className='font-extrabold text-xl'>Items</span>
            </div>
            <div className='pt-5'>
                <table className='border-2 w-full'>
                    <thead>
                        <tr>
                            <th className='border-2 w-full px-5'>Item ID</th>
                            <th className='border-2 px-20'>Item Name</th>
                            <th className='border-2 w-full px-10'>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-2 text-center'>1</td>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>1</td>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>1</td>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>1</td>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                        </tr>

                        <tr>
                            <td className='border-2 text-center'>1</td>
                            <td className='border-2 text-center'>rice 1kg</td>
                            <td className='border-2 text-center'>Rs. 200.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categoryview