
// import React,{useRef} from 'react'
// import { Link,useNavigate } from 'react-router-dom';

// import axios from '../axiosConfig';


// const Signup = () => {
//   const navigate= useNavigate();
//   const usernameDOM= useRef();
//   const firstnameDOM= useRef();
//   const lastnameDOM= useRef();
//   const emailDOM= useRef();
//   const passwordDOM= useRef();
//   // const cpassswordDOM= useRef();
  
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const usernamevalue=usernameDOM.current.value;
//     const firstnamevalue=firstnameDOM.current.value;
//     const lastnamevalue=lastnameDOM.current.value;
//     const emailvalue=emailDOM.current.value;
//     const passwordvalue=passwordDOM.current.value;
//     // const cpasswordvalue=cpassswordDOM.current.value;
// if(!usernamevalue || !firstnamevalue ||!lastnamevalue || !emailvalue || !passwordvalue){
//   alert("please enter all required fields")
//   return;
// }
// try {
//   const response= await axios.post('/register',{
//     username:usernamevalue,
//     firstName:firstnamevalue,
//     lastName:lastnamevalue,
//     email:emailvalue,
//     password:passwordvalue,
//     // c_password:cpasswordvalue
//   })
  
//   alert("registration sucessfully, please login")
//   navigate('/login');
  
// } catch (error) {
//   console.log(error);
  
// }
//   }

// //   return (
// //     <div className='formbackground'>
// //     <section className=' sm:block mx-auto md:flex md:justify-between  container-fluid max-w-[900px]  ' >
// //     <div className='bg-[#fff] shadow-2xl md:h-[600px] mt-10  mr-8 container text-center rounded-2xl'>
// //         <div className=' tell mt-10 '>
// //      <div className='text-2xl pt-5 pb-3'>Join to the network</div>
// //      <p className='text-center'>Alerady have an account?
// //       <Link className='text-red-400' to='/login'>signin</Link></p>
// //      <form className='mt-2' onSubmit={handleSubmit} >
// //      <div className='mb-5'> <input  type='text' className=' border-current border w-[80%] h-[40px]' placeholder='userName' name='username' ref={usernameDOM}/></div>
      
// //        <div className='mb-5'><input type='text'className='border-current border w-[39%] h-[40px] mr-1' placeholder='firstName' name='firstName' ref={firstnameDOM}/>
// //         <input type='text' className='border-current  border w-[39%] h-[40px]' placeholder='LastName' name='lastName' ref={lastnameDOM}/></div>
       
// //        <div className='mb-5'> <input className=' border-current border w-[80%] h-[40px]' type='email' placeholder='email' name='email' ref={emailDOM} /> </div>
       
// //        <div className='mb-5'><input type='password' className='border border-current w-[80%] h-[40px] ' placeholder='password' name='password' ref={passwordDOM} /> </div>
       
// //        <button type='submit' className='text-white w-[80%] btn-primary bg-blue-600 m-2 p-2 hover:bg-orange-600 rounded-2xl'>Agree and Join</button>
// //        <p className='m-6'>I agree to the <a href='/' className='text-red-600 border-b-2 border-orange-600'>privacy policy</a> and <a  className='text-red-600 border-b-2 border-orange-600 '   href='/'>terms of service</a></p>
// //        <a href='/' className='text-red-600 border-b-2 sm:mb-5  border-orange-600'>Alerady have an account</a>
// //      </form>
// //      </div>
// //     </div>
// //        <div className='  container mt-24 sm:mx-auto sm:max-w-[350px] md:max-w-[800px]'>
// //         <h6 className='text-red-600' >about</h6>
// //         <h1 className=' text-3xl'>Evangadi Networks Question & Answers</h1>
// //         <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint voluptas, illum iste repellat voluptates dignissimos ipsam accusamus maiores ratione numquam! Quasi itaque,m?</p>
// //         <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam magnam cum tenetur tempora nulla rerum magni, doloribus, laudantium odit.</p>
// //         <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi totam veniam debitis ut ipsa delectus.  </p>
// //         <button className='text-center items-center bg-orange-600  m-5  py-2 px-8 rounded'>How it works </button>

// //        </div>
       
// //     </section>
// //     </div>
// //   )
// // }

// // export default Signup


// return (
//   <section className="container mx-auto mt-8 p-4 flex  justify-center ">
//     <div className="max-w-md w-full mx-auto ">
//       <div className="bg-white border border-gray-300 p-2 shadow-sm rounded-lg">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Join the network</h2>
//         <div className="mt-4 text-center">Already have an account? 
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//         </div>
//         <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//             <label className="block text-gray-700" htmlFor="email"></label>
//             <input
//               ref={usernameDOM}
//               type="email"
//               id="email"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//             />
//           </div>
//           <div className="mb-4 flex space-x-2">
//           <div className="flex-1">
//               <label className="block text-gray-700" htmlFor="first-name"></label>
//               <input
//                 ref={firstnameDOM}
//                 type="text"
//                 id="first-name"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="First name"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-gray-700" htmlFor="last-name"></label>
//               <input
//                 ref={lastnameDOM}
//                 type="text"
//                 id="last-name"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Last name"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700" htmlFor="username"></label>
//             <input
//               ref={emailDOM}
//               type="text"
//               id="username"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//             />
//           </div>

          

//           <div className="mb-6">
//             <label className="block text-gray-700" htmlFor="password"></label>
//             <input
//               ref={passwordDOM}
//               type="password"
//               id="password"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//             />
//           </div>

//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-[#ff8500] transition duration-200">
//             Agree and Join
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           I Agree to the
//           <Link to="/" className="text-blue-600 hover:underline">
//             privacy policy and terms of service
//           </Link>
//         </div>
//         <div className="mt-4 text-center">
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Already have an account? Login
//           </Link>
//         </div>
//       </div>
//     </div>
//     {/* Description Section */}
//     <div className="max-w-md p-6 ml-0 "> {/* Removed margin top and bottom */}
//       <h6 className='text-[#ff8500] font-semibold'>About</h6>
//       <h1 className='text-lg font-semibold mb-2'>Evangadi Networks Q&A</h1>
//       <p className='mb-2 text-gray-700'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sint voluptas, illum iste repellat voluptates dignissimos ipsam accusamus maiores ratione numquam! Quasi itaque.
//       </p>
//       <p className='mb-2 text-gray-700'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam magnam cum tenetur tempora nulla rerum magni, doloribus, laudantium odit.
//       </p>
//       <p className='mb-2 text-gray-700'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi totam veniam debitis ut ipsa delectus.
//       </p>
//       <button className="w-full bg-[#ff8500] text-white py-2 rounded hover:bg-blue-700 transition duration-200">
// HOW IT WORKS
// </button>

//     </div>
//   </section>
// );
// }

// export default Signup



import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';


const Signup = () => {
  const navigate = useNavigate();
  const usernameDOM = useRef();
  const firstnameDOM = useRef();
  const lastnameDOM = useRef();
  const emailDOM = useRef();
  const passwordDOM = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernamevalue = usernameDOM.current.value;
    const firstnamevalue = firstnameDOM.current.value;
    const lastnamevalue = lastnameDOM.current.value;
    const emailvalue = emailDOM.current.value;
    const passwordvalue = passwordDOM.current.value;

    if (!usernamevalue || !firstnamevalue || !lastnamevalue || !emailvalue || !passwordvalue) {
      alert("please enter all required fields");
      return;
    }

    try {
      const response = await axios.post('/user/register', {
        username: usernamevalue,
        firstname: firstnamevalue,
        lastname: lastnamevalue,
        email: emailvalue,
        pasword: passwordvalue,
      });
      alert("registration successfully, please login");
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='banner'>
    <section className="sm:block bg-light mx-auto md:flex md:justify-between container-fluid max-w-[1150px] my-16">

      <div className="max-w-xl w-full mx-auto">
        <div className="bg-white border border-gray-500 p-2 shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Join the network</h2>
          <div className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input ref={usernameDOM} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username" />
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:space-x-2">
              <div className="flex-1 mb-4 md:mb-0">
                <input ref={firstnameDOM} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First name" />
              </div>
              <div className="flex-1">
                <input ref={lastnameDOM} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last name" />
              </div>
            </div>
            <div className="mb-4">
              <input ref={emailDOM} type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            </div>
            <div className="mb-6">
              <input ref={passwordDOM} type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-[#ff8500] transition duration-200">Agree and Join</button>
          </form>
          <div className="mt-4 text-center">
            I Agree to the <Link to="/" className="text-blue-600 hover:underline">privacy policy and terms of service</Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-600 hover:underline">Already have an account? Login</Link>
          </div>
        </div>
      </div>
      <div className='mt-5 pt-10 md:mt-0 md:ml-2 max-w-md w-full rounded-lg p-6'>
          <h6 className='text-red-600'>About</h6>
          <h1 className='text-3xl'>Evangadi Networks Q&A</h1>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sint voluptas, illum iste repellat voluptates dignissimos ipsam accusamus maiores ratione numquam! Quasi itaque.
          </p>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente aliquam magnam cum tenetur tempora nulla rerum magni, doloribus, laudantium odit.
          </p>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi totam veniam debitis ut ipsa delectus.
          </p>
          <button className='text-white text-center items-center bg-orange-600 hover:bg-blue-600 m-5 py-2 px-8 rounded'>HOW IT WORKS</button>
        </div>
    </section>
    </div>
  );
};

export default Signup;
