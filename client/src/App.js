import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Signup/Home";
import Login from "./Signup/Login";
//import Register from "./Components/";
import { useEffect, useState,useContext} from "react";
import axios from "./axiosConfig";
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signup from './Signup/Signup';
import Question from './Components/Pages/Question';
import Answer from './Components/Pages/Answer';
import Notfound from './Components/NotFound/NotFound';
import { UserContext } from "./Components/ContextAPI/Context";
import 'bootstrap/dist/css/bootstrap.min.css';




// export const AppState = createContext()
// function App() {

//   const [user, setUser] = useState({})
// const token = localStorage.getItem("token")
// const navigate = useNavigate()
//   async function checkUser() {
//     try {
//      const {data} = await axios.get("/user/check" , {
//       headers:{
//         Authorization:'Bearer ' + token
//       }
      
//      }) 

//      setUser(data);
     
//     }catch (error) {
//       console.log(error.response);
//       navigate("/login")
//     }

//   }
//   useEffect(() => {
//     checkUser()
//   }, [])
  
//   return (
//     <Footer >
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="signup" element={<Signup/>}/>
//         <Route path='/question/' element={<Question/>}/>
//         <Route path='/answer/' element={<Answer/>}/> 
//         <Route path='answer/:id' element={<Answer/>}/>
//         <Route path='*' element={<Notfound/>}/> 

//         <Route path="/register" element={<Register />} />
//       </Routes>
      
//     <Footer/>
//     </Footer>
//   );
// }

// export default App;

function App() {
  const navigate= useNavigate()
const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  const checkUserLoggedIn = async () => {
    try {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      } else {
        const  {data } = await axios.get(
          "/user/check",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(data)
        
        setUserData(data );
        console.log(setUserData);
       
      }
    } catch (error) {
      console.log(error?.data);
      navigate("/login");
    }
  };
  
    
    return (
      <div className="">
      <Navbar/>
     <Routes>
     <Route path='/' element={< Home/>}/>
      <Route path='/login/' element={<Login/>}/>
      <Route path='/signup/' element={<Signup/>}/>
      <Route path='/question/' element={<Question/>}/>
       <Route path='/answer/' element={<Answer/>}/> 
  
       
      {/* <Route path='question/getanswer/:questionId' element={<Answer/>} /> */}
      <Route path='answer/:id' element={<Answer/>}/>
      <Route path='*' element={<Notfound/>}/> 
     </Routes>
     <Footer/>
      </div>
    );
  }
  
  export default App;
  