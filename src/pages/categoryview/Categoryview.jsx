import React, { useEffect,useState } from 'react'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import Sidebar from '../../component/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Categoryview() {
  const{ isAuthenticated, jwtToken } = useAuth();
  const{categoryId} = useParams();
  const[items, setItems] = useState([]);
  const[categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if(isAuthenticated){
      loadCategoryDetails();
    }
  },[isAuthenticated,categoryId])

  const config = {
    headers : {
      Authorization : `Bearer ${jwtToken}`
    }
  }

  async function loadCategoryDetails() {
    const response = await axios.get(`http://localhost:8080/api/v1/category/${categoryId}`, config)
    .then( response => {
      setCategoryName(response.data.categoryName);
      setItems(response.data.items);
    })
    .catch(error => {
      console.error("There was an error fetching the category details!", error);
    })
  }

  const handleSubmit = (e) => {
    const category = {categoryId,categoryName};

    const response = axios.put(`http://localhost:8080/api/v1/customer/${id}`,category)
      .then(response => {
        console.log('Category details updated:', response.data);
    })
    .catch(error => {
        console.error("There was an error updating the category!", error);
    });
  };

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
                  <span>{categoryId}</span>
                </div>

                <div>
                  <span className='font-bold'>Category: </span>
                  <span>{categoryName}</span>
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

                        {items.map( function (item) {
                          return (
                            <tr>
                              <td className='border-2 text-center'>{item.itemId}</td>
                              <td className='border-2 text-center'>{item.name}</td>
                              <td className='border-2 text-center'>{item.unitPrice}</td>
                          </tr>
                          )
                        })}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categoryview