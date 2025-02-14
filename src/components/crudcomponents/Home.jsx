import React, { useEffect } from 'react'
import "./home.css";
import axios from 'axios';
const Home = () => {
    useEffect(()=>{
        axios.get("http://localhost:8000/users");
    })
  return (
    <div>Home</div>
  )
}

export default Home