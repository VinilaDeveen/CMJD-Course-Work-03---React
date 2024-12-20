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

function Customertable() {
  const { isAuthenticated, jwtToken } = useAuth();
  const [customers, setCustomers] = React.useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'custname', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'city', headerName: 'City', width: 150 },
  ];

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 350,
      renderCell: (params) => (
        <div className='flex gap-2'>
          <Link to={`/customertable/${params.row.id}`}>
            <div className='bg-cover mt-2 px-2 h-[35px] bg-blue-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-blue-900'>
              <RemoveRedEyeRoundedIcon className='mr-2' />
              View
            </div>
          </Link>
          <div
            className='bg-cover mt-2 px-2 h-[35px] bg-red-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-red-900 cursor-pointer'
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteRoundedIcon className='mr-2' />
            Delete
          </div>
        </div>
      ),
    },
  ];

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      loadCustomers();
    }
  }, [isAuthenticated]);

  async function loadCustomers() {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/customer`, config)
      setCustomers(response.data);
    } catch (error) {
      console.log(config);
      console.error("There was an error fetching the customer list!", error);
    }
  }

  const handleDelete = async (custId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/customer/${custId}`, config);
        loadCustomers();
      } catch (error) {
        console.error("There was an error deleting the customer!", error);
      }
    }
  };

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <div className='container py-10 px-3 lg:px-10'>
          <Grid container justifyContent="space-between" alignItems="center" className='mb-5'>
            <Grid item>
              <span className='text-xl text-slate-600'>Customer List</span>
            </Grid>
          </Grid>
          <Box className='pt-5'>
            <DataGrid
              rows={customers}
              columns={columns.concat(actionColumn)}
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

export default Customertable;
