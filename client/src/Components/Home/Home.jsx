import React, {useEffect,useState, useContext} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link,useParams, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig'
import { UserContext } from "../ContextAPI/Context";

const Home = () => {
const navigate= useNavigate();
  const {userData, setUserData} = useContext(UserContext);
const id= useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get('/question/allquestion',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response.data);
        setData(response.data.questions);
      })
      .catch(error => {
        console.log('Error:', error);
      });
      
  }, []);

  
       
   
    
   
  return (
    <div className='container-fluid my-16 '>
<section className='container sm:block md:flex flex-row justify-between max-w-[1400px] sm:mx-auto md:mx-32'>
  
    <div className=''><Link to='/question'><button className='bg-blue-600 px-10 py-2'>Ask Questions</button></Link></div>
    <div className='px-32'>Wellcome: {userData.username}</div>

</section>
<div className=' sm:mx-0 md:mx-24 my-10 text-2xl'><h2 className='my-5 text-sm'>Questions</h2>


<section className=''>
    <div className='' key='id'>
      
      {/* Render the fetched data */}
       {data.map(item => (
        <div className='border-b border-gray-300'>
          <div key={item.questionid}></div>
        <div className='md:flex justify-between max-w-full'>
        <div className='md:flex justify-around '>
            <div className='mr-10'><FaUserCircle size={80}/>
            <div className='text-sm ' >{item.username}</div></div>
          
        <div className='text-sm mt-5'>{item.title}</div>
        
        
        </div>
        
        
        <Link to={`answer/${item.questionid}`}><div className=''><MdArrowForwardIos size={30}/></div></Link>

        </div>
        
        </div>
      ))}       
         </div> 
        
        
 
     </section> 
    
    
    
</div>
    </div>
  )
}
export default Home;



