import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import evangadilogo from '../../Images/Icon/eva.png';

const Navbar = () => {
  const navigate= useNavigate();
  useEffect(() => {
    
    }, []);
    const logout = () => {
      // Clear the token from local storage
      localStorage.removeItem('token');
      navigate('/login'); // Redirect to the login page after logout
    };
    
  
  return (
    <>

      <nav className='   container-fluid navbar shadow-lg border-t-4 border-orange-200 '>
       <div className=' container md:max-w-[1000px] h-[70px] p-3  md:m-auto md:flex md:justify-between sm:block'>
        <Link to="/"><div className='nav-item nav-btn m-2 pb-3  '>
            <img src={evangadilogo}  className='h-[30px] mb-3' alt='Evangadi logo image'/>
        </div></Link>
        <div className='md:flex md:justify-between sm:block'>
           {/* <div className='m-3'> <Link >How </Link></div>
           <div className='m-3'> <Link >How it works</Link></div> */}
            <div className='m-2'>< >
            <button type='submit' onClick ={logout} className='text-white bg-blue-700 hover:bg-orange-600 px-8 py-2'>LogOut</button></></div>
            <div className='m-1'><Link to='' ></Link></div>  
        </div>

       </div>
       <div className='sm:block md:hidden'><DensityMediumIcon/></div>
      </nav>
     
      </>
  );
}

export default Navbar;
