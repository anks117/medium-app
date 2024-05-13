import { SignupInput } from '@ank117/common'
import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'


const Auth = ({type}:{type:"signup" | "signin"}) => {

    const[postInputs, setPostInputs]=useState<SignupInput>({
        name:"",
        username:"",
        password:""
    })

    const navigate=useNavigate()

    async function sendRequest(){
        try {
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?'signup':'signin'}`,postInputs);

            const jwt=response.data;
            localStorage.setItem('token',jwt);
            navigate('/blogs')
        } catch (error) {
            alert('Error while signing up')
        }
        
    }

  return (
    <div className="h-screen flex justify-center flex-col">
        
            <div className='flex justify-center'>
                <div>
                    <div className='px-4'>
                        <div className="text-3xl font-bold">
                            create an account
                        </div>
                        <div className="text-slate-400">
                            {type==="signup"?"Already have an account?":"Dont have an account?"}
                            <Link className='pl-2 underline' to={type==="signup"?'/signin':'/signup'}>
                                {type==="signup"?"Sign in":"Sign up"}</Link>
                        </div>
                    </div>
                    <div className='pt-4'>
                        {type==="signup"?<LabelledInput label="name" placeholder='your name' 
                        onChange={(e)=>setPostInputs({
                            ...postInputs,
                            name:e.target.value
                        })}/>:""}
                        
                        <LabelledInput label="Username" placeholder='xyz@gmail.com' 
                        onChange={(e)=>setPostInputs({
                            ...postInputs,
                            username:e.target.value
                        })}/>
                        <LabelledInput label="Password" type={"password"} placeholder='password' 
                        onChange={(e)=>setPostInputs({
                            ...postInputs,
                            password:e.target.value
                        })}/>
                    </div>
                    <button onClick={sendRequest} type="button" className="mt-3 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin"?"Sign in":"Sign up"}</button>
                </div>
            </div>
        
    </div>
  )
}

interface LabelledInputType{
    placeholder:string;
    label:string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void;
    type?:string

}

function LabelledInput({placeholder, label, onChange, type}:LabelledInputType){
    return <div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}

export default Auth