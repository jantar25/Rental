import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { adminLogin } from "../../Redux/apiCalls"
import { FaHome } from 'react-icons/fa';

const LoginAdmin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {isFetching,error} = useSelector((state:any)=> state.admin)
    const dispatch = useDispatch();
    
    const handleClick = (e:any)=>{
        e.preventDefault();
        adminLogin(dispatch,{password,email});
    }

  return (
    <div className='bg-gradient-to-r from-[#002853] to-[#040C18] text-white w-screen h-screen'>
        <div className="relative w-full h-full">
            <div className='absolute top-2 md:top-8 left-2 md:left-8 flex items-center'>
                <FaHome style={{fontSize:'25px',color:'orange'}}/>
                <h1 className='text-2xl font-[700] ml-2'>REN<span className='text-orange-300 mr-3'>TAL</span>ADMIN</h1>
            </div>
            <div className="flex w-full h-full items-center justify-center ">
                <form className="flex w-full items-center flex-col border p-4 rounded-md w-5/6 sm:w-1/2 lg:w-1/3" onSubmit={handleClick}>
                    <input type="text" required className="my-2 px-4 py-2 rounded w-full bg-gray-200 text-black"
                     placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
                    <input type="text" required className="my-2 px-4 py-2 rounded w-full bg-gray-200 text-black"
                     placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
                     {error? <span className='text-red-500 mt-4 font-[700]'>{`*${error.payload}*`}</span> : null}
                    <button className="mt-6 px-4 py-2 text-lg font-[800] text-[#040C18] bg-green-700 rounded-lg w-full"
                     type='submit'>{isFetching? 'Loging...' : 'Login'}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginAdmin