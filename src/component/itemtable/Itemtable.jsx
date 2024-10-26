import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Itemtable() {
  const { isAuthenticated, jwtToken } = useAuth();
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (isAuthenticated) {
      loadItems();
    }
  }, [isAuthenticated]);

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  async function loadItems() {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/item`, config);
      const updatedItems = response.data.map(item => ({
        ...item,
        category: item.category.categoryName
      }));
      setItems(updatedItems);
    } catch (error) {
      console.error('There was an error fetching the item list!', error);
    }
  }

  const handleDelete = (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://localhost:8080/api/v1/item/${itemId}`)
        .then(response => {
          loadItems();
        })
        .catch(error => {
          console.error("There was an error deleting the item!", error);
        });
    }
  };

  const columns = [
    { field: 'itemId', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Item', width: 150 },
    { field: 'qty', headerName: 'Quantity', width: 100 },
    { field: 'unitPrice', headerName: 'Unit Price', width: 120 },
    { field: 'category', headerName: 'Category', width: 200 },
  ];

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 310,
      renderCell: (params) => {
        return (
          <div className='flex gap-2'>
            <Link to={`/itemtable/${params.row.itemId}`}>
              <div className='bg-cover mt-2 px-2 h-[35px] bg-blue-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-blue-900'>
                <RemoveRedEyeRoundedIcon className='mr-2' />
                View
              </div>
            </Link>
            <div
              className='bg-cover mt-2 px-2 h-[35px] bg-red-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-red-900 cursor-pointer'
              onClick={() => handleDelete(params.row.itemId)}
            >
              <DeleteRoundedIcon className='mr-2' />
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <div className='container py-10 px-3 lg:px-10'>
          <Grid container justifyContent='space-between' alignItems='center' className='mb-5'>
            <Grid item>
              <span className='text-xl text-slate-600'>Item List</span>
            </Grid>
            <Grid item>
              <Link to='/itemtable/additem' style={{ textDecoration: 'none' }}>
                <span className='p-2 border-solid border-2 border-green-700 rounded-lg text-green-700 hover:border-slate-900 hover:text-slate-900'>
                  <AddCircleRoundedIcon className='mr-2 hover:text-slate-900' />
                  Add New
                </span>
              </Link>
            </Grid>
          </Grid>
          <Box className='pt-5'>
            <DataGrid
              rows={items}
              columns={columns.concat(actionColumn)}
              getRowId={(row) => row.itemId}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 9,
                  },
                },
              }}
              pageSizeOptions={[9]}
              checkboxSelection
              disableRowSelectionOnClick
              autoHeight
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Itemtable;
