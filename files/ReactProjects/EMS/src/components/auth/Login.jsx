import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Email : ",email);
        console.log("Password : ",password);
        setEmail("");
        setPassword("");  
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center '>
      <div className='border-2 rounded-xl border-emerald-600 p-20 '>
        <form onSubmit={(e)=> submitHandler(e)} className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
             required className='mt-5 border-2 border-emerald-600 outline-none bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='enter your email'/>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required className='mt-5 border-2 border-emerald-600 outline-none bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='enter your password' />
            <button className='mt-5 border-2 border-emerald-600 outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
