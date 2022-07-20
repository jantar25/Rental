import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { LandLordLogin } from "../../Redux/apiCalls"

const LoginAdmin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state:any)=> state.landLord)
    const dispatch = useDispatch();
    
    const handleClick = (e:any)=>{
        e.preventDefault();
        LandLordLogin(dispatch,{password,email});
    }

  return (
    <div className='bg-gradient-to-r from-[#002853] to-[#040C18] text-white w-screen h-screen'>
        <div className="relative w-full h-full">
            <div className="absolute top-4 left-4 ">
                <p className="font-[700] text-xl">ADMIN DASHBOARD</p>
            </div>
            <div className="flex w-full h-full items-center justify-center">
                <form className="flex w-full items-center flex-col w-5/6 sm:w-1/2 md:w-1/3" onSubmit={handleClick}>
                    <input type="text" className="my-2 px-4 py-2 rounded w-full bg-gray-200 text-black"
                     placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
                    <input type="text" className="my-2 px-4 py-2 rounded w-full bg-gray-200 text-black"
                     placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
                    <button className="mt-4 px-4 py-2 text-lg font-[800] text-[#040C18] bg-white rounded-sm w-1/2" type='submit'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginAdmin