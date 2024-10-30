import React, { useRef, useEffect, useState, useContext } from 'react';
import axios from '../../axiosConfig';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { UserContext } from "../ContextAPI/Context";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const Answer = () => {
  const [data, setData] = useState([]);
const [singledata, setSingleData] = useState([]);
const [error, setError] = useState(null);
const [message, setmessage]= useState(null);
const [userData, setUserData] = useContext(UserContext);
const navigate = useNavigate();
const answerDom = useRef();
const { id } = useParams();


  const handleEvent = async (e) => {
    e.preventDefault();
    const answerValue = answerDom.current.value;
    
    
    if (!answerValue) {
      alert('Please enter all required fields.');
      return;
    }
    
    try {
      const token = localStorage.getItem('token');
    
      await axios.post(`/answers/addanswer/${id}`, {
        questionid: id,
        userid: userData.userid,
        answer: answerValue,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      setmessage(answerValue)
      setTimeout(()=>{
        setmessage(" ")
        // navigate('/');
      }, 5000)
      console.log(answerValue, userData.userid, id)
    
      
    } catch (error) {
      console.log(error);
    }
    };


useEffect(() => {
  const fetchQuestion = async () => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`/questions/singlequestion/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSingleData(data.question);
      console.log(data);
    } catch ( error ) {
      console.log(error);
      localStorage.setItem("token", "");
      // dispatch({
      //   type: "LOGOUT",
      // });
      navigate("/");
    }
  };

  fetchQuestion();
}, []);
useEffect(() => {
const token = localStorage.getItem('token');
axios.get(`/answers/getanswer/${id}`, {
headers: {
Authorization: `Bearer ${token}`,
},
})
.then(response => {
console.log(response.data);
const { answers } = response.data;
setData(answers);
console.log(answers);
})
.catch(error => {
console.log('Error:', error);
});
}, []);

return (
<div className='answer'>
<div className='mt-14 max-w-[1400px] mx-auto'>
<section className='border-b border-b-gray-400 '>
<div className='flex justify-between'>
<h2 className='mb-3 text-3xl'>Questions</h2>
<h2>Welcome to answer  page:{userData.username}</h2>
</div>
 <section className="" id="map">
 {/* Render the fetched data if available  */}
{ singledata?.map((question) =>(
<div key={question.answerid}>
<div>
<div className="md:flex justify-between max-w-[1400px]">
<div className="md:flex justify-around ">
<div className="mr-10">
<FaUserCircle size={80} />
<p>{userData.username}</p>
<div className="text-sm">{}</div>
</div>
<div>
<div className="text-sm mt-5">{question.title}?</div>
<div className="text-sm mt-5">{question.description}?</div>
</div>
</div>
<Link to={`singlequestion/${question.id}`}>
{/* <div className="">
<MdArrowForwardIos size={40} />
</div> */}
</Link>
</div>
<hr className="text-red-400 my-3" />
</div>
</div>
))}
{/* Fallback content if singleData is empty  */}
{singledata?.length === 0 && !error && (
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi perspiciatis cupiditate optio consequatur
temporibus id quaerat, voluptas ab accusantium, atque animi. Explicabo possimus culpa natus odit obcaecati blanditiis
eius.
</p>
)}
</section> 
</section>

{/* routeros */}
{/* Copy */}
    <section className=' mb-5'>
      <h2 className='mb-3  py-5 text-3xl border-b border-gray-400 text-center text-blue-900'>Answer from the community</h2>
         
      <div className='' key='id'>
        {/* Render the fetched data */}
        {data.map(answer => (
          <div key={answer.keyid}>
            <div className='border-b border-gray-300'>
              <div className='md:flex justify-between max-w-[1400px]'>
                <div className='md:flex justify-around '>
                  <div className='mr-10'>
                    <FaUserCircle size={80} />
                    <div className='text-sm ' >{answer.username}</div>
                  </div>
                  <div className='text-sm mt-5'>{answer.answer}</div>
                </div>
                
              </div>
              
            </div>
          </div>
        ))}
        {/* Fallback content if data is empty */}
        {data.length === 0 && (
          <p>No answers available.</p>
        )}
      </div>
    </section>

    <section>
      
      <h2 className='mb-3 text-2xl'>Your Answer</h2>
      
      <form onSubmit={handleEvent}>
      {message ?(<p  className='text-green-600 text-3xl text-center'> the answer is successfully Submitted </p>):(<p  className='text-red-600 text-center'> * please enter all required fields  </p>) }
        <textarea
          ref={answerDom}
          placeholder='Write your answer here...'
          className='w-full p-3 border border-gray-400 rounded-lg'
          rows='5'
        ></textarea>
      
        <button
          type='submit' 
          className='px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600'
        >
          Submit Answer
        </button>
      </form>
    </section>
  </div>
</div>
);
};

export default Answer;