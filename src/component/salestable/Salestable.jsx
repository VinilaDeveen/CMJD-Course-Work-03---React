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


function Salestable() {
  const [sales, setSales] = React.useState([]);

  React.useEffect(() => {
    loadSales();
  },[]);

  async function loadSales() {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/sale`);
      const Sales = response.data.map(sale => ({
        ...sale,
        customer: sale.customer.custname // Map category name for each item
      }));
      setSales(Sales);
    } catch (error) {
      console.error("There was an error fetching the sale list!", error);
    }
  }

  const handleDelete = (saleId) => {
    if (window.confirm("Are you sure you want to delete this sale?")) {
      axios.delete(`http://localhost:8080/api/v1/sale/${saleId}`)
        .then(response => {
          loadSales();
        })
        .catch(error => {
          console.error("There was an error deleting the sale!", error);
        });
    }
  };

  const columns = [
    { field: 'saleId', headerName: 'ID', width: 90 },
    { field: 'saleDateTime', headerName: 'Date & Time', width: 250 },
    { field: 'customer', headerName: 'Customer Name', width: 200 }
  ];
  
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 350,
      renderCell: (params) => {
        return (
          <div className='flex gap-2'>
            <Link to={`/salestable/${params.row.saleId}`}>
              <div className='bg-cover mt-2 px-2 h-[35px] bg-blue-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-blue-900'>
                <RemoveRedEyeRoundedIcon className='mr-2' />
                View
              </div>
            </Link>
            <div
                className='bg-cover mt-2 px-2 h-[35px] bg-red-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-red-900'
                onClick={() => handleDelete(params.row.saleId)}
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
          <Grid container justifyContent="space-between" alignItems="center" className='mb-5'>
            <Grid item>
              <span className='text-xl text-slate-600'>Sales List</span>
            </Grid>
            <Grid item>
              <Link to='/sales/addsale' style={{ textDecoration: 'none' }}>
                <span className='p-2 border-solid border-2 border-green-700 rounded-lg top- right-[50px] text-green-700 hover:border-slate-900 hover:text-slate-900'>
                  <AddCircleRoundedIcon className='mr-2 hover:text-slate-900'/>
                  Add New
                </span>
              </Link>
            </Grid>
          </Grid>
          <Box className='pt-5'>
            <DataGrid
              rows={sales}
              columns={columns.concat(actionColumn)}
              getRowId={(row) => row.saleId}
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
  )
}

export default Salestable