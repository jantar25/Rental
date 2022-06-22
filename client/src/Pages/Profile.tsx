import React,{ useState } from 'react'
import { useSelector} from 'react-redux';
import { BsCamera } from 'react-icons/bs'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const avatar = require("../Images/avatar.png")


const Profile = () => {
  const [img,setImg] = useState<any>("");
  const landLord= useSelector((state:any)=>state.landLord.currentLandLord);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center px-4 lg:px-20 py-4">
        <div className="relative m-4 h-[300px] w-[300px]">
          <img src={landLord?.img || avatar} alt="ProfilPic" className="w-full h-full rounded-lg" />
          <div className='absolute w-[60px] h-[40px] rounded-lg text-white bg-orange-600 bottom-[2px] right-[2px] flex justify-center items-center'>
            <input type="file" accept='Image/*' style={{display:'none'}} id="file" onChange={(e:any)=>setImg(e.target.files[0])} />
            <label htmlFor="file"><BsCamera style={{fontSize:'25px',cursor:'pointer'}}/></label>
          </div>
        </div>
        <div className="m-4">
          <h1 className="my-2 text-3xl font-[700] text-orange-600">{landLord.names}</h1>
          <h2 className="my-2 text-lg text-gray-400">Email: <span className='font-[700]'>{landLord.email}</span></h2>
          <p className="my-2 text-gray-400">Portable: <span className='font-[700]'>{landLord.line1}</span></p>
          <p className="my-2 text-gray-400">Home: <span className='font-[700]'>{landLord.line2}</span></p>
          <button className='rounded-lg text-white bg-orange-600 py-2 px-4 mt-4'>Edit User</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile