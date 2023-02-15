import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callDash = async () =>{
    try {
      const res = await fetch('/buyers',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/jason'
        },
        credentials: "include"
      })
      const data = res.json();
      console.log(data)
      setUserData(data);
      if(!res.status === 200){
        console.log(res.error)
      }

    } catch (error) {
      console.log(error)
      navigate("/login")
    }
  }
useEffect(()=> {
  callDash()
},[])
//     console.log(data)
//     setProfileData(data)
//     // console.log(profileData)
//     if(res.status === 200){
//       const error = new Error(res.error)
//       throw error;
//     }

//   } catch (error) {
//     console.log(error)

//   }
// }


     
  return (
    <div>Dashboard
        <Sidebar />
        <div>
      
        <div className="container emp-profile">
                <form method="GET">
                            <div className="profile-head">
                                <h5>{ userData.name}</h5>
                                <h6>{ userData.email}</h6>
                                </div>
                                </form>
                                 
                 </div>
    </div>
    </div>
  )
}

export default Dashboard