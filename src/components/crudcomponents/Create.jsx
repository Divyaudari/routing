import React, { useState } from 'react'

const Create = () => {
    const[name, setName]=useState('');
    const[email, setEmail]= useState('');
    const[tel,setTel]= useState('');

    let handleSubmit=e=>{
        e.preventDefault();
        let payload ={name, email, phone};
        axios.post("http://localhost:8000/users", payload)
        .then(res=>{
            toast.sucess("user c")
        })
    }
  return (
    <div>Create</div>
  )
}

export default Create