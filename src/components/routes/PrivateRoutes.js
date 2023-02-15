import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import React from 'react'

const PrivateRoutes = () => {

    const [auth, setAuth] = useState();
    const [ok, setOk] = useState(false);

    useEffect(() => {
    
    if(auth?.token) getCurrentUser()
        
    }, [auth?.token])

    const getCurrentUser = async () => {
        try {
            const {data} = await fetch
        } catch (error) {
            setOk(false)
        }
    }
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes