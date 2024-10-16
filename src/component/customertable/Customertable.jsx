import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field: 'custName', headerName: 'Name', width: 200},
  {field: 'custAddress', headerName: 'Address', width: 250},
  {field: 'city', headerName: 'City', width: 150}
];

const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 350,
      renderCell: (params) => {
        return (
          <div className='flex gap-2'>
            <Link to={`/customertable/customerview`}>
              <div className='bg-cover mt-2 px-2 h-[35px] bg-blue-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-blue-900'><RemoveRedEyeRoundedIcon className='mr-2'/>View</div>
            </Link>
            <Link to={``} style={{textDecoration: "none"}}>
            <div className='bg-cover mt-2 px-2 h-[35px] bg-red-500 text-slate-50 rounded-3xl flex items-center justify-center hover:bg-red-900' onClick={() => handleDelete(params.row.patientID)}><DeleteRoundedIcon className='mr-2'/>Delete</div>
            </Link>
          </div>
        );
      },
    },
  ];

const rows = [
  { id: 1, custName: 'Danapala', custAddress: 'No.20 Walana', city: 'Panadura'},
  { id: 2, custName: 'Gunapala', custAddress: 'No 200, Thalpitiya', city: 'Wadduwa'},
  { id: 3, custName: 'Amarapala', custAddress: 'No 100, Horawala', city: 'Matugama'},
  { id: 4, custName: 'Somapala', custAddress: 'No .10, Ginigama', city: 'Galle'},
  { id: 5, custName: 'Jinapala', custAddress: 'No122, Anuradhapura Road', city: 'Kurunegala'},
  { id: 6, custName: 'Gnanawathee', custAddress: 'No. 43, St Peters Road', city: 'Negambo'},
  { id: 7, custName: 'Amarawathee', custAddress: 'No 12, Rathnapura Road', city:'Madampe'},
  { id: 8, custName: 'Leelawathee', custAddress: 'No. 234, Attidiya Road', city: 'Dehiwala'},
  { id: 9, custName: 'Gunawathee', custAddress: 'No. 230, Galle Road', city: 'Ambalangoda'},
];

function Customertable() {
  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <div className='container py-10 px-5'>
          <div className='m-2'>
              <span className='text-xl text-slate-600'>Customer List</span>
              <Link to="/customertable/newcustomer" style={{ textDecoration: "none" }}>
              <span className='absolute p-2 border-solid border-2 border-green-700 rounded-lg top- right-[50px] text-green-700 hover:border-slate-900 hover:text-slate-900'><AddCircleRoundedIcon className='mr-2 hover:text-slate-900'/>Add New</span>
              </Link>
          </div>
            <Box className= 'pt-5 h-[600px] w-[1170px]'>
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
            />
            </Box>
        </div>
      </div>
    </div>
  );
}
export default Customertable
