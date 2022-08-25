import React, { useState } from 'react'
import i18next from 'i18next';
import axios from "axios";
import { FaHome } from 'react-icons/fa';

const Newsletter = () => {
    const [email,setEmail] = useState('');
    const [err,setErr] = useState(null);

    const HandleNewsletter = async(e:any) => {
        e.preventDefault();     
        try {
            await axios.post('http://localhost:5000/api/newsletter',{email:email});
            setEmail('')
            setErr(null);
        } catch (error:any) {
            setErr(error.response.data.message);
        }
    }

  return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <h1 className="text-3xl font-[600] mr-4 text-center">{i18next.t('getUpdate')as string}</h1>
                <div className='flex items-center'>
                    <FaHome style={{fontSize:'35px',}}/>
                    <h1 className='text-4xl font-[700] ml-2'>RENTAL</h1>
                </div>
            </div>
            <p className="text-gray-400 text-center">{i18next.t('getUpdateIntro')as string}</p>
            {err? <span className="text-red-800 py-2">{`*${err}*`}</span>: null}
            <form className="flex w-full sm:w-2/3 md:w-1/2 mt-2" onSubmit={HandleNewsletter} >
                <input type="email" required className="flex-1 px-4 py-2 rounded-l w-full text-black" value={email} placeholder={i18next.t('emailPlaceholder')as string} 
                onChange={(e)=>setEmail(e.target.value)} />
                <button className=' bg-green-600 py-2 px-4 rounded-r text-sm font-[600]' type='submit'>{i18next.t('getUpdateBtn')as string}</button>
            </form>
        </div>
  )
}

export default Newsletter