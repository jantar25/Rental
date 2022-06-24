import React,{ useState } from 'react'
import { useSelector} from 'react-redux';
import { BsCamera } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md';
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
        <div className="flex-1 flex items-center m-4 ">
          <div className="relative h-[250px] w-[250px]">
            <img src={landLord?.img || avatar} alt="ProfilPic" className="w-full h-full rounded-full" />
            <div className='absolute w-[40px] h-[40px] rounded-full text-white bg-orange-600 bottom-[10px] right-[25px] flex justify-center items-center'>
              <input type="file" accept='Image/*' style={{display:'none'}} id="file" onChange={(e:any)=>setImg(e.target.files[0])} />
              <label htmlFor="file"><BsCamera style={{fontSize:'25px',cursor:'pointer'}}/></label>
            </div>
          </div>
        </div>
        <div className="flex-1 m-4">
          <h1 className="flex items-center my-2 text-3xl font-[700] text-orange-600">
            {landLord.names}
            <MdModeEditOutline style={{fontSize:'35px',color:'#002853',cursor:"pointer",marginLeft:'24px'}}/>
          </h1>
          <p className='text-gray-400 text-center mb-8 text-sm w-2/3'>This is not your username or pin. This name will be visible to your Rental customers</p>
          <h2 className="flex items-center my-2 text-lg text-gray-400">
            <p className='mr-4'>Email:</p> 
            <span className='font-[700] mr-8'>{landLord.email}</span>
            <MdModeEditOutline style={{fontSize:'25px',color:'#002853',cursor:"pointer"}}/>
          </h2>
          <p className="flex items-center my-2 text-gray-400">
            <p className='mr-4'>Portable:</p> 
            <span className='font-[700] mr-8'>{landLord.line1}</span>
            <MdModeEditOutline style={{fontSize:'25px',color:'#002853',cursor:"pointer"}}/>
          </p>
          <p className="flex items-center my-2 text-gray-400">
          <p className='mr-4'>Home:</p> 
          <span className='font-[700] mr-8'>{landLord.line2}</span>
          <MdModeEditOutline style={{fontSize:'25px',color:'#002853',cursor:"pointer"}}/>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile