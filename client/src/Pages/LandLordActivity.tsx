import React,{useState} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../Firebase/firebase'
import {useDispatch} from 'react-redux'
// import {addProduct} from '../../../Redux/apiCalls'
import { AiOutlineCaretDown,AiOutlineCaretUp,AiOutlineClose } from 'react-icons/ai';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const LandLordActivity = () => {
    const dispatch = useDispatch();
    const [toggleCreate,setToggleCreate] = useState(false)
    const [selectedFiles,setSelectedFiles] = useState<string[]>([]);
    const [inputs,setInputs] = useState({});
    const [urls,setUrls] = useState([]);

    const handleChange = (e:any)=>{
    setInputs(prev=>{
        return  {...prev,[e.target.name]:e.target.value} 
    })
    }

    const selectedImages = (e:any) => {
      const images = Array.from(e.target.files)
      const imageArray= images.map((file:any)=>{return file})
      setSelectedFiles((previousImages)=>previousImages.concat(imageArray))
    }

    const handleClick = (e:any)=>{
    e.preventDefault();
      selectedFiles.map((selectedFile:any)=>{
      const fileName:any = new Date().getTime() + Math.random();
      const storage = getStorage(app); 
      const storageRef = ref(storage,fileName);  
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);
      
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
            }, 
            (error) => {
              console.log(error)
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                
              });
              // addProduct(property,dispatch);
              // setToggleCreate(false)
              console.log(selectedFiles)
            }
            );
          })
          }
          

  return (
    <div>
      <Navbar />
      <div className="my-8 p-2 md:px-8">
        <button className='flex items-center bg-[#002853] text-white my-8 font-[600] px-6 py-2 rounded' 
          onClick={()=>setToggleCreate(!toggleCreate)}>ADD NEW PROPERTY
          {toggleCreate? <AiOutlineCaretDown style={{fontSize:'20px'}}/>
          : <AiOutlineCaretUp style={{fontSize:'20px'}}/>} 
        </button>
        {toggleCreate && 
          <div className='border border-[#04AA6D] rounded p-2 bg-gray-200'>
          <h1 className='text-xl text-orange-600'>Create New Product</h1>
          <form className='my-4 flex flex-col md:flex-row items-center justify-between'>
              <div className="flex-1 w-full md:mr-4">
                <div className='flex flex-col my-2'>
                    <label>Title</label>
                    <input className='px-4 py-2 my-2 rounded' name="title" type="text" onChange={handleChange} />
                </div>
                <div className='flex flex-col my-2'>
                      <label>Description</label>
                      <input className='px-4 py-2 my-2 rounded' name="description" type="text" onChange={handleChange}  />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Address</label>
                      <input className='px-4 py-2 my-2 rounded' name="address" type="text" onChange={handleChange}  />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Price</label>
                      <input className='px-4 py-2 my-2 rounded'name="price" type="number" onChange={handleChange} />
                  </div>
              </div>
              <div className='flex-1 w-full md:mr-4'>
                  <div className='flex flex-col my-2'>
                      <label>Bedroom</label>
                      <input className='px-4 py-2 my-2 rounded' name="bedroom" type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Livingroom</label>
                      <input className='px-4 py-2 my-2 rounded' name="livingroom" type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>BathRoom</label>
                      <input className='px-4 py-2 my-2 rounded' name="bathroom" type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Kitchen</label>
                      <input className='px-4 py-2 my-2 rounded' name="kichen" type="number" onChange={handleChange} />
                  </div>
              </div>
              <div className='flex-1 w-full md:ml-4'>
                  <div className='flex flex-col my-2'>
                      <label>Floor</label>
                      <input className='px-4 py-2 my-2 rounded' name="floor" type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Status</label>
                      <select className='px-4 py-2 my-2 rounded' name="status" onChange={handleChange} >
                          <option value="true">Available</option>
                          <option value="false">Occupied</option>
                      </select>
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Disctict</label>
                      <select className='px-4 py-2 my-2 rounded' name="district"  onChange={handleChange} >
                          <option value="Nyarugenge">Nyarugenge</option>
                          <option value="Gasabo">Gasabo</option>
                          <option value="Kicukiro">Kicukiro</option>
                      </select>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className='flex flex-col my-2'>
                        <label>Add Images</label>
                        <input className='rounded' type="file" id="file" multiple onChange={selectedImages} />
                        <span className='font-[600] text-[12px]'>Up to 10 images</span>
                    </div>
                    <button className='px-4 py-2 bg-black text-white rounded-lg font-[600]'>Map</button>
                  </div>
              </div>
          </form>
          <div className="flex flex-wrap my-2">
            {selectedFiles && selectedFiles.map((image:any,index)=>{
              return (
                  <div key={image} className="w-[40px] h-[40px] relative">
                    <img src={image} alt="fileImg" className="w-full h-full" />
                    <button className='text-[12px] absolute top-0 right-0 p-[2px] text-white bg-red-600 rounded-full' 
                    onClick={()=>setSelectedFiles(selectedFiles.filter((e:any)=>e !== image))}>
                      <AiOutlineClose /></button>
                      <p className='font-[600] text-[12px]'>{index + 1}</p>
                  </div>
              )
            })}
          </div>
          <button className='py-2 px-8 my-4 bg-[#04AA6D] text-white rounded' onClick={handleClick} >Create</button>
      </div>}
      
      <div className="my-8">
        <h1 className="text-lg text-orange-600 font-[700]">Your Properties are listed here:</h1>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandLordActivity