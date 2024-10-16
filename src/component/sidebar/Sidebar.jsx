import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-slate-300 w-[300px] h-[730px]'>
            <div className='px-[100px] py-5'>
                <Link to="/" >
                    <span className='font-bold text-5xl'>Kade</span>
                </Link> 
            </div>
            <hr/>
            <div className='flex flex-col text-2xl text-slate-600'>
               <ul>
                    <Link to="/customertable">
                        <li className='px-14 py-3 hover:bg-slate-50'>
                            <PersonRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Customer</span>
                        </li>
                    </Link>

                    <Link to="/home" style={{textDecoration:"none"}}>
                        <li className='px-14 py-3 hover:bg-slate-50'>
                            <CategoryRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Category</span>
                        </li>
                    </Link>

                    <Link to="/home" style={{textDecoration:"none"}}>
                        <li className='px-14 py-3 hover:bg-slate-50'>
                            <LocalMallRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Item</span>
                        </li>
                    </Link>

                    <Link to="/home" >
                        <li className='px-14 py-3 hover:bg-slate-50'>
                            <PointOfSaleRoundedIcon sx={{fontSize:30}}/>
                            <span className='ml-2'>Sale</span>
                        </li>
                    </Link>
                
                    
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li className='absolute bottom-[10px] w-[300px] py-2 hover:bg-white rounded-lg'>
                            <LogoutRoundedIcon className='ml-10 mr-4'/>
                            <span>Log-out</span>
                        </li>
                    </Link>
                    
                </ul>   
            </div>
        </div>
    );
};

export default Sidebar;