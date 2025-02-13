import React from 'react'
import { useState } from 'react'
const Dashboard = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [gender, setGender] = useState('');
const [address, setaddress] = useState('');
const [file, setFile] = useState('');  




return (
    <div>
      <form action="">
        <input type='text' placeholder='username'/> <br/>
        <input type='email' placeholder='Email'/> <br/>
        <input type='password' placeholder='password'/> <br/>

        <input type='radio' placeholder='gender'/><label htmlFor="" >Male</label>
        <input type='radio' placeholder='gender'/><label htmlFor="" >Female</label>
        <input type='radio' placeholder='gender'/><label htmlFor="" >others</label>
        <br/>
        <textarea name="" id="add"
        value={address}
        ></textarea>

      </form>
      
    </div>
  )
}

export default Dashboard