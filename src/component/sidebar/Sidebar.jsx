import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-slate-300 w-full w-full h-screen'>
            <div className='px-10 py-5 sm:px-[100px]'>
                <Link to="/">
                    <span className='font-bold text-4xl sm:text-5xl'>Kade</span>
                </Link> 
            </div>
            <hr/>
            <div className='flex flex-col text-xl sm:text-2xl text-slate-600'>
               <ul>
                    <Link to="/customertable">
                        <li className='flex items-center px-5 sm:px-14 py-3 hover:bg-slate-50'>
                            <PersonRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Customer</span>
                        </li>
                    </Link>

                    <Link to="/categorytable" style={{textDecoration:"none"}}>
                        <li className='flex items-center px-5 sm:px-14 py-3 hover:bg-slate-50'>
                            <CategoryRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Category</span>
                        </li>
                    </Link>

                    <Link to="/itemtable" style={{textDecoration:"none"}}>
                        <li className='flex items-center px-5 sm:px-14 py-3 hover:bg-slate-50'>
                            <LocalMallRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Item</span>
                        </li>
                    </Link>

                    <Link to="/salestable">
                        <li className='flex items-center px-5 sm:px-14 py-3 hover:bg-slate-50'>
                            <PointOfSaleRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Sale</span>
                        </li>
                    </Link>
                
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li className='absolute bottom-0 left-0 flex items-center px-5 sm:px-14 py-3 hover:bg-slate-50 hover:w-full'>
                            <LogoutRoundedIcon className='mr-4'/>
                            <span>Log-out</span>
                        </li>
                    </Link>
                </ul>   
            </div>
        </div>
    );
};

export default Sidebar;
