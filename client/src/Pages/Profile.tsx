import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsCamera } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import {updateLandlord} from "../Redux/apiCalls"
import { storage } from '../Firebase/firebase'

const avatar = require("../Images/avatar.png")


const Profile = () => {
  const dispatch = useDispatch();
  const [img,setImg] = useState<any>("");
  const [names,setNames] = useState<any>("");
  const [line1,setLine1] = useState<any>("");
  const [line2,setLine2] = useState<any>("");
  const [toggleEditName,setToggleEditName] = useState<any>(false);
  const [toggleEditLine1,setToggleEditLine1] = useState<any>(false);
  const [toggleEditLine2,setToggleEditLine2] = useState<any>(false);
  const landLord= useSelector((state:any)=>state.landLord.currentLandLord);


  const handleEditname = () => {
    const updatedLandLord = {...landLord,names: names};
    const id=landLord._id;
    updateLandlord(id,updatedLandLord,dispatch);
    setToggleEditName(false)
  }

  const handleEditline1 = () => {
    const updatedLandLord = {...landLord,line1: line1};
    const id=landLord._id;
    updateLandlord(id,updatedLandLord,dispatch);
    setToggleEditLine1(false)
  }
  const handleEditline2 = () => {
    const updatedLandLord = {...landLord,line2: line2};
    const id=landLord._id;
    updateLandlord(id,updatedLandLord,dispatch);
    setToggleEditLine2(false)
  }

  if(img){
        const uploadTask = storage.ref().child(`images/${img.name}`).put(img);
        uploadTask.on(
          'state_changed',
          snapshot => {},
          error => {
            console.log(error)
          },
          () => {
            storage
            .ref('images')
            .child(img.name)
            .getDownloadURL()
            .then(url => {
            const updatedLandLord = {...landLord,img: url};
            const id=landLord._id;
            updateLandlord(id,updatedLandLord,dispatch);
            setImg('')
            })
          }
          )
      }; 
    

 
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
          <div className="relative flex items-center my-2 text-3xl font-[700] text-orange-600">
            {landLord.names}
            <MdModeEditOutline style={{fontSize:'35px',color:'#002853',cursor:"pointer",marginLeft:'24px'}}
            onClick={() => setToggleEditName(true)}/>
            {toggleEditName && 
              <div className='p-1 rounded bg-purple-200 absolute w-[300px]'>
                <input className='w-full text-black text-[16px]' defaultValue={landLord.names} 
                onChange={(e)=>setNames(e.target.value)} />
                <span className='font-[700] mr-8 text-gray-500'>{landLord.email}</span>
                <div className='flex justify-between text-[20px] mt-2 px-4'>
                  <button className='text-green-500' onClick={handleEditname}>Edit</button>
                  <button className='text-red_500' onClick={() => setToggleEditName(false)}>Cancel</button>
                </div>
              </div>
              }
          </div>
          <p className='text-gray-400 text-center mb-8 text-sm w-2/3'>
            This is not your username or pin. This name will be visible to your Rental customers
          </p>
          <p className="flex items-center my-2 text-gray-400">
            <span className='mr-4'>Portable:</span> 
            <span className='font-[700] mr-8 text-gray-700'>{landLord.line1}</span>
            <MdModeEditOutline style={{fontSize:'25px',color:'#002853',cursor:"pointer"}}
            onClick={() => setToggleEditLine1(true)} />
            {toggleEditLine1 && 
              <div className='p-1 rounded bg-purple-200 absolute w-[300px]'>
                <input className='w-full text-black text-[16px]' defaultValue={landLord.line1} 
                onChange={(e)=>setLine1(e.target.value)} />
                <div className='flex justify-between text-[20px] mt-2 px-4'>
                  <button className='text-green-500' onClick={handleEditline1}>Edit</button>
                  <button className='text-red_500' onClick={() => setToggleEditLine1(false)}>Cancel</button>
                </div>
              </div>
              }
          </p>
          <p className="flex items-center my-2 text-gray-400">
            <span className='mr-4'>Home:</span> 
            <span className='font-[700] mr-8 text-gray-700'>{landLord.line2}</span>
            <MdModeEditOutline style={{fontSize:'25px',color:'#002853',cursor:"pointer"}}
             onClick={() => setToggleEditLine2(true)} />
            {toggleEditLine2 && 
              <div className='p-1 rounded bg-purple-200 absolute w-[300px]'>
                <input className='w-full text-black text-[16px]' defaultValue={landLord.line2} 
                onChange={(e)=>setLine2(e.target.value)} />
                <div className='flex justify-between text-[20px] mt-2 px-4'>
                  <button className='text-green-500' onClick={handleEditline2}>Edit</button>
                  <button className='text-red_500' onClick={() => setToggleEditLine2(false)}>Cancel</button>
                </div>
              </div>
              }
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile