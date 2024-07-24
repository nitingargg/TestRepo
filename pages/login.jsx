import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.min.css"

import Link from "next/link"

export default function Login(){
    
    const [formData, setFormData] = useState({"email":"", "password":""})

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/signin", formData)
            localStorage.setItem("auth_token", res.data["AUTH_TOKEN"])
            toast.info(`Login Successful! for ${formData.email}`,{"theme":"light", "icon":false})
        }
        catch(err){
            toast.info(`${err}`,{"theme":"light", "icon":false})
        }
    }



    return <div className="flex flex-col items-center bg-slate-50 justify-center h-[90vh]">
        <ToastContainer/>
        <div className="p-8 bg-white rounded-lg shadow-md">
            <p className="font-semibold text-xl mb-6">Login to get started</p>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="mb-2 font-semibold">Email</label>
                <input required type="email" value={formData.email} onChange={t=>setFormData({...formData, "email":t.target.value})} className="mb-4 p-2 w-96 outline-none border-2 rounded-lg"/>
                <label className="mb-2 font-semibold">Password</label>
                <input  required type="password" value={formData.password} onChange={t=>setFormData({...formData, "password":t.target.value})} className="mb-4 p-2 w-96 outline-none border-2 rounded-lg"/>
                <input className="font-semibold mt-2 text-white bg-black rounded-lg p-2" type="submit"/>
            </form>
            <p className="mt-4 text-center">or</p>
            <p className="mt-2 text-center"><Link href="/signup"><span className="font-bold cursor-pointer text-blue-500">Signup</span></Link> for a new account</p>
        </div>
    </div>

}