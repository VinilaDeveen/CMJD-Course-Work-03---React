import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Grid from '@mui/material/Grid';



const rows = [
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
  { id: 1, itemName: 'Soap', quantity: '10', unitprice: 'Rs. 120.00', category: 'Grossery'},
];

function Itemtable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'itemName', headerName: 'Item', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'unitprice', headerName: 'Unit Price', width: 120 },
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
            <Link to={`/itemtable/itemview`}>
              <div className='bg-cover mt-2 px-2 h-[35px] bg-blue-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-blue-900'>
                <RemoveRedEyeRoundedIcon className='mr-2' />
                View
              </div>
            </Link>
            <Link to={``} style={{ textDecoration: 'none' }}>
              <div
                className='bg-cover mt-2 px-2 h-[35px] bg-red-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-red-900'
                onClick={() => handleDelete(params.row.patientID)}
              >
                <DeleteRoundedIcon className='mr-2' />
                Delete
              </div>
            </Link>
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
              <span className='text-xl text-slate-600'>Item List</span>
            </Grid>
            <Grid item>
              <Link to='/itemtable/additem' style={{ textDecoration: 'none' }}>
                <span className='p-2 border-solid border-2 border-green-700 rounded-lg top- right-[50px] text-green-700 hover:border-slate-900 hover:text-slate-900'>
                  <AddCircleRoundedIcon className='mr-2 hover:text-slate-900'/>
                  Add New
                </span>
              </Link>
            </Grid>
          </Grid>
          <Box className='pt-5'>
            <DataGrid
              rows={rows}
              columns={columns.concat(actionColumn)}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 2,
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

export default Itemtable