import React, { useEffect } from 'react'
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Saleview() {
  const { isAuthenticated, jwtToken } = useAuth();

  const { saleId } = useParams();
  const [salesItems, setSalesItem] = useState([]);
  const [custname, setCustName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [saleDateTime, setSaleDateTime] = useState('');
  const [totalPrice, setTotalPrice] = useState(0.00);

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadSaleDetails();
    }
  }, [isAuthenticated]);

  async function loadSaleDetails() {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/sale/${saleId}`, config);
      setCustName(response.data.customer.custname);
      setAddress(response.data.customer.address);
      setCity(response.data.customer.city);
      setSaleDateTime(response.data.saleDateTime);
      setTotalPrice(response.data.totalPrice);
      setSalesItem(response.data.saleItem);
    } catch (error) {
      console.error("There was an error fetching the sale details!", error);
    }
  }

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='w-full px-20 py-5'>
        <div className='w-full p-10 shadow-xl rounded-lg text-slate-600 m-10'>
          <div className='flex flex-nowrap'>
            <div>
              <span className='font-extrabold text-xl mx-5'>Order Information</span>
            </div>
            <div className='px-10'>
              <PointOfSaleRoundedIcon sx={{ fontSize: 100 }} />
            </div>
            <div className="info">
              <div>
                <span className='font-bold'>ID: </span>
                <span>{saleId}</span>
              </div>

              <div>
                <span className='font-bold'>Customer name: </span>
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
                <span className='font-bold'>Order date & time: </span>
                <span>{saleDateTime}</span>
              </div>

              <div>
                <span className='font-bold'>Total: </span>
                <span>Rs.{totalPrice}</span>
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
                  <th className='border-2 w-full px-20'>Sub total</th>
                </tr>
              </thead>
              <tbody>
                {salesItems.map(salesItem => (
                  <tr key={salesItem.item.id}>
                    <td className='border-2 text-center'>{salesItem.item.name}</td>
                    <td className='border-2 text-center'>Rs.{salesItem.item.unitPrice}</td>
                    <td className='border-2 text-center'>{salesItem.qty}</td>
                    <td className='border-2 text-center'>Rs.{salesItem.subTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saleview;
