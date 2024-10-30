// import React from 'react';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import footerLogo from '../../Images/Icon/eva.png';

// import { Link } from 'react-router-dom';
// import {
//     FaFacebook,
//     FaInstagram,
//     FaYoutube,
//   } from "react-icons/fa6";

  
// const Footer = () => {
//     const socialLinks = [
//         { label: "Facebook", icon: FaFacebook , to:'/' },
//         { label: "Instagram", icon: FaInstagram, to:"/footer"},
//         { label: "YouTube", icon: FaYoutube, to:"https://www.youtube.com/watch?v=RnoWRXh0vNo" },
        
       
      
        
//       ];
//   return (
//     <footer className='bg-[#3B455A] p-14 mt-64'>
//       <section className=' container-fluid sm:block md:flex flex-row justify-between md:max-w-[1200px] mx-auto '>
//         <div className='container'>
//         <img src={footerLogo} className='w-100 mb-10'/>
//         <div className='flex flex-row '>
//            {/* {/* <p className='w-[60px] h-[30px]'> <a href='' className='border-2 h-[60px] hover:bg-red-600 border-white rounded-full'><FacebookRoundedIcon className=''/></a></p>
//            <p className='w-[60px] h-[30px]'><a  href='' className='rounded-full'><InstagramIcon className=''/></a></p>
//            <p className='w-[60px] h-[30px]'><a href=''><YouTubeIcon/></a></p> */}
            
        
//             <div className="footer-icons flex items-center space-x-3">
//               {socialLinks.map((socialLink, index) => {
//                 const Icon = socialLink.icon;
//                 const to= socialLink.to;
//                 return (
                    
//                   <Link to={to}>
//                   <Icon
//                     key={`social-${index}`}
//                     className="w-14 h-14 p-2 rounded-full hover:bg-white hover:text-red-600 cursor-pointer"
//                   />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
        
//         <div className ='container '>
//         <h3 className='text-white mb-10 text-2xl'>Usefull Link</h3>
//         <div className='opacity-50'>
//     {/* <p><a>How it works</a></p> */}
//     <div className='text red '>
//             <p ><a>Term of Service</a></p>
//             <p><a>Privacy Policy</a></p>
//             </div>
//         </div>
//         </div>
        

//              <h3 className='text-2xl mb-2'>Contact Information</h3>
//              <div className='opacity-50'>
//                 {/* <p className=''>Evangadi Networks</p> */}
//                 <p className=''>support@evangadi.com</p>
//                  <p className=''>+1-202-386-2702</p>
             
//         </div>
//      </section>
//     </footer>
//   );
// }
// export default Footer;

import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import footerLogo from '../../Images/evangadi-logo-footer (1).png';

const Footer = () => {
  const socialLinks = [
    { label: "Facebook", icon: FaFacebook, to: '/' },
    { label: "Instagram", icon: FaInstagram, to: "/footer" },
    { label: "YouTube", icon: FaYoutube, to: "https://www.youtube.com/watch?v=RnoWRXh0vNo" },
  ];

  return (
    <footer className='bg-[#3B455A] p-14 mt-64'>
      <section className='container-fluid sm:block md:flex justify-between max-w-[1200px] mx-auto'>
        <div className='container mb-10 md:mb-0'>
          <img src={footerLogo} className='w-32 mb-10' alt="Footer Logo" />
          <div className='flex space-x-3'>
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Link className='text-white' to={socialLink.to} key={`social-${index}`}>
                  <Icon className="w-14 h-14 p-2 rounded-full hover:bg-white cursor-pointer" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className='container mb-10 md:mb-0'>
          <h3 className='text-white mb-10 text-2xl'>Useful Links</h3>
          <div className='opacity-80'>
          <p><Link to='/' className='text-white no-underline hover:underline'>How It Works</Link></p>
            <p><Link to='/terms-of-service' className='text-white no-underline hover:underline'>Terms of Service</Link></p>
            <p><Link to='/privacy-policy' className='text-white no-underline hover:underline'>Privacy Policy</Link></p>
          </div>
        </div>
        <div className='container'>
          <h3 className='text-2xl text-white mb-2'>Contact Information</h3>
          <div className='text-white opacity-80'>
            <p>Evangadi Networks</p>
            <p>support@evangadi.com</p>
            <p>+1-202-386-2702</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

