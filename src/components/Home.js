import React,{useEffect} from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { GiCash } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import axios from "axios"
import Users from './Users';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const [emotions, setEmotions] = useState([])
    const [showUsers, setShowUsers] = useState(true)
    const [showEmotions, setShowEmotions] = useState(true)


    // useEffect(() => {
    //   if (!localStorage.getItem("loginEmail")) {
    //     navigate("/login")
    //   } else {
    //     navigate("/")
    //   }
    // }, [])



//     useEffect(() => {
// try {

//   const getUsers = async () => {

//     const res = await fetch('/admin/getAllUsers')
//     const data = await res.json()
//     console.log(data,"eeeeeeeee") 
//   }
//   getUsers()
  
// } catch (error) {
//   console.log(error,"error")
  
// }
   
//     }, [])



    useEffect(() => {
         
      try {
       const getUsers = async () => {
        //  const res = await axios.get("https://cominks.app/admin/getAllUsers")
         const res = await axios.get("https://commention-backend.onrender.com/admin/getAllUsers")
         console.log(res.data.data,"allUsers")
         setUsers(res.data.data)
         dispatch({ type: "SETUSERDETAILS", payload: res.data.data })


      }
      getUsers()
      console.log(users,"uuuuuuuuuuuuuuuuuuuu")
      } catch (error) {
       console.log(error)
       
      }
   }, [])


  //   useEffect(() => {
         
  //     try {
  //      const getEmotions = async () => {
  //        const res = await axios.get("https://cominks.app/admin/getAllEmotions")
  //        console.log(res.data.data,"Emotions")
  //        setEmotions(res.data.data)
  //     }
  //     getEmotions()
  //     } catch (error) {
  //      console.log(error)
       
  //     }
  //  }, [])
    


//get All Users Details

// router.get("/admin/getAllUsers", getAllUsersCtrl);
//get All Emotions

// router.get("/admin/getAllEmotions", getAllEmotionsCtrl);
//add emotion

// router.post("/admin/addEmotion", addEmotionCtrl);
//delete emotion

// router.delete("/admin/deleteEmotion/:name", deleteEmotionCtrl);
// update emotion

// router.put("/admin/updateEmotion", updateEmotionController);


const toggleChangeEmotions = () => {
  setShowUsers(true)
setShowEmotions(false)
}

const toggleChangeUsers = () => {
  setShowUsers(false)
setShowEmotions(true)
}





    
    return (
        <>
        
<Sidebar/>
<div className="dashboard">

      {/* <nav className="navbar">
        <ul>
          <li><a onClick={() => navigate("/")}>Dashboard</a></li>
          <li><a onClick={() => navigate("message")}>Send SMS</a></li>
          <li><a onClick={() => navigate("/contact")}>Manage Contacts</a></li>
          <li><a href="#">View DLR</a></li>
          <li><a className="smsCount">SMS:24544</a></li>
        </ul>
      </nav> */}
      


      <div className="mainPage">

      <h1>Dashboard</h1>
      <div className="box-container">
      <div onClick={toggleChangeUsers} className="box">
    <p >Users</p>
  </div>
  <div onClick={toggleChangeEmotions} className="box">
    <p>Emotions</p>
  </div>
  <div className="box">
    <p>Querries</p>
  </div>

      </div>

     { !showUsers ? <Users data={users}/> : ""}

     <div className="emotions-container">
  {!showEmotions ? (
    <div className="emotion">
      <p>The following are the emotions:</p>
      {emotions.map(curElem => {
        return <p> {curElem.name}</p>
      })}
    </div>
  ) : ""}
</div>
      </div>
    </div>
        </>
    )
}

export default Home