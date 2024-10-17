import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Grid from '@mui/material/Grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'datetime', headerName: 'Date & Time', width: 250 },
  { field: 'custName', headerName: 'Customer Name', width: 200 }
];

const actionColumn = [
  {
    field: 'action',
    headerName: 'Action',
    width: 350,
    renderCell: (params) => {
      return (
        <div className='flex gap-2'>
          <Link to={`/salestable/saleview`}>
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

const rows = [
  { id: 1, datetime:'2024-08-01 16:28:18.408579', custName:'Amal'},
  { id: 2, datetime:'2024-08-03 16:28:18.408579', custName:'Kamal'},
  { id: 3, datetime:'2024-08-15 16:28:18.408579', custName:'Sunil'},
  { id: 4, datetime:'2024-08-18 16:28:18.408579', custName:'Anura'},
  { id: 5, datetime:'2024-08-30 16:28:18.408579', custName:'Kasun'},
  { id: 6, datetime:'2024-09-20 16:28:18.408579', custName:'Chamara'},
  { id: 7, datetime:'2024-10-01 16:28:18.408579', custName:'Sadun'},
  { id: 8, datetime:'2024-10-15 16:28:18.408579', custName:'Gayan'},
];

function Salestable() {
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
              rows={rows}
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
  )
}

export default Salestable