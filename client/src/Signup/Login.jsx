import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import { UserContext } from "../Components/ContextAPI/Context";

const Login = () => {
  const navigate = useNavigate();
  const emailDOM = useRef();
  const passwordDOM = useRef();
  const [userData, setUserData] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please enter all required fields");
      return;
    }

    try {
      const { data } = await axios.post('/user/login', {
        email: emailValue,
        pasword: passwordValue
      });
      setUserData({data});
      console.log(userData);
      alert("Login successfully, you can access the home page");
      navigate('/');
      // window.location.reload(false);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=' banner'>
      <section className='sm:block bg-light mx-auto md:flex md:justify-between container-fluid max-w-[1150px]'>
        <div className=' mt-24 shadow-2xl h-[500px] bground mr-8 container text-center rounded-2xl'>
          <div>
            <div className='text-xl pt-32 pb-3'>Login into your Account</div>
            <p className='text-center'>
              Don't have an account? <Link to='/signup' className='text-red-400'>Create an account</Link>
            </p>
            <form onSubmit={handleSubmit} className='mt-2'>
              <div className='mb-5'>
                <input className='w-[80%] h-[40px] border-4 focus:border-b-red-500' type='email' placeholder='Email' name='email' ref={emailDOM} />
              </div>
              <div className='mb-5'>
                <input type='password' className='border-4 focus:border-b-red-500 w-[80%] h-[40px]' placeholder='Password' name='pasword' ref={passwordDOM} />
              </div>
              <button className=' text-white btn-primary bg-orange-600 m-2 px-14 py-2 hover:bg-blue-600 rounded'>Submit</button>
              <p><Link to='/signup' className='text-red-600 border-b-1 sm:mb-10 border-orange-600'>Create an account</Link></p>
            </form>
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
}

export default Login;
