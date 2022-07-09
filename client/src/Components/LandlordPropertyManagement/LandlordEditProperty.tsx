import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { storage } from '../../Firebase/firebase'
import {useDispatch} from 'react-redux'
import {updateProperty} from '../../Redux/apiCalls'
import {AiOutlineClose } from 'react-icons/ai';



const LandlordEditProperty = ({property}:any) => {
  const dispatch = useDispatch();
  const [selectedFiles,setSelectedFiles] = useState<string[]>([]);
  const [images,setImages] = useState<string[]>([]);
  const [inputs,setInputs] = useState({
    title:property.title,
    Description:property.Description,
    address:property.address,
    price:property.price,
    Bedroom:property.Bedroom,
    Livingrooms:property.Livingrooms,
    BathRooms:property.BathRooms,
    Kitchen:property.Kitchen,
    Floors:property.Floors,
    Avaiable:property.Avaiable,
    District:property.District,
    eror:'',
    loading:false,
  });
  const {title,Description,address,price,Bedroom,Livingrooms,BathRooms,Kitchen,
    Floors,Avaiable,District,eror,loading} = inputs;
  const {error} = useSelector((state:any)=> state.properties)

  const deleteSelectedImg = (index: any) => {
    setSelectedFiles(selectedFiles.filter((e:any)=>e !== selectedFiles[index]))
    setImages(images.filter((e:any)=>e !== images[index]))
  }

  const handleChange = (e:any)=>{
  setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const selectedImages = (e:any) => {
    const selectedImage = Array.from(e.target.files).map((image:any)=> URL.createObjectURL(image))
    setImages((prevImgs)=>prevImgs.concat(selectedImage))
    for (let i=0; i<e.target.files.length;i++) {
      const images = e.target.files[i];
      images['id'] = Math.random();
      setSelectedFiles((previousImages)=>[...previousImages,images])
    }
  }



  const handleClick = (e:any)=>{
    e.preventDefault();
    setInputs({ ...inputs,eror:'',loading:true });
    if (selectedFiles.length > 10) {
      setInputs({ ...inputs,eror: 'You are not allowed to Upload more than 10 Pictures' })
    } else if(!title || !Description || !address || !price || !Bedroom || !Livingrooms || !BathRooms || !Kitchen ||
        !Floors || !Avaiable || !District) {
        setInputs({ ...inputs,eror: 'All fields are required' })
    } else {
      const promises = selectedFiles.map((file:any) => {
        const ref = storage.ref().child(`images/${file.name}`);
        return ref
          .put(file)
          .then(() => ref.getDownloadURL())
      });
      
      Promise.all(promises)
      .then((fileDownloadUrls) => {
        const updatedProperty = ({...inputs,_id:property._id,OtherImages:fileDownloadUrls.length>0?fileDownloadUrls : property.OtherImages,
          OwnerDetails:property.OwnerDetails,coordinates:property.coordinates})
        const id = property._id
        updateProperty(id,updatedProperty,dispatch)
        setSelectedFiles([])
        setImages([])
        setInputs({
          title:'',
          Description:'',
          address:'',
          price:'',
          Bedroom:'',
          Livingrooms:'',
          BathRooms:'',
          Kitchen:'',
          Floors:'',
          Avaiable:'',
          District:'',
          eror:'',
          loading:false,
        })
      })
      .catch(err => console.log(err)); 
    }
  }

  return (
        <div className='border border-[#04AA6D] rounded p-2 bg-gray-200'>
          <h1 className='text-xl text-orange-600'>Update Property</h1>
          <form className='my-4 flex flex-col md:flex-row items-center justify-between'>
              <div className="flex-1 w-full md:mr-4">
                <div className='flex flex-col my-2'>
                    <label>Title</label>
                    <input className='px-4 py-2 my-2 rounded' name="title" value={title} type="text" onChange={handleChange} />
                </div>
                <div className='flex flex-col my-2'>
                      <label>Description</label>
                      <input className='px-4 py-2 my-2 rounded' name="Description" value={Description} type="text" onChange={handleChange}  />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Address</label>
                      <input className='px-4 py-2 my-2 rounded' name="address" value={address} type="text" onChange={handleChange}  />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Price</label>
                      <input className='px-4 py-2 my-2 rounded'name="price" value={price} type="number" onChange={handleChange} />
                  </div>
              </div>
              <div className='flex-1 w-full md:mr-4'>
                  <div className='flex flex-col my-2'>
                      <label>Bedroom</label>
                      <input className='px-4 py-2 my-2 rounded' name="Bedroom" value={Bedroom} type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Livingroom</label>
                      <input className='px-4 py-2 my-2 rounded' name="Livingrooms" value={Livingrooms} type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>BathRoom</label>
                      <input className='px-4 py-2 my-2 rounded' name="BathRooms" value={BathRooms} type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Kitchen</label>
                      <input className='px-4 py-2 my-2 rounded' name="Kitchen" value={Kitchen} type="number" onChange={handleChange} />
                  </div>
              </div>
              <div className='flex-1 w-full md:ml-4'>
                  <div className='flex flex-col my-2'>
                      <label>Floor</label>
                      <input className='px-4 py-2 my-2 rounded' name="Floors" value={Floors} type="number" onChange={handleChange} />
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Status</label>
                      <select className='px-4 py-2 my-2 rounded' name="Avaiable" value={Avaiable} onChange={handleChange} >
                          <option value="">Select</option>
                          <option value="true">Available</option>
                          <option value="false">Occupied</option>
                      </select>
                  </div>
                  <div className='flex flex-col my-2'>
                      <label>Disctict</label>
                      <select className='px-4 py-2 my-2 rounded' name="District" value={District} onChange={handleChange} >
                          <option value="">Select</option>
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
                  </div>
              </div>
          </form>
          <div className="flex flex-wrap my-2">
            {images && images.map((image:any,index)=>{
              return (
                  <div key={index} className="w-[40px] h-[40px] relative m-2">
                    <img src={image} alt="fileImg" className="w-full h-full" />
                    <button className='text-[12px] absolute top-0 right-0 p-[2px] text-white bg-red-600 rounded-full' 
                    onClick={()=>deleteSelectedImg(index)}>
                      <AiOutlineClose /></button>
                      <p className='font-[600] text-[12px]'>{index + 1}</p>
                  </div>
              )
            })}
          </div>
          {eror? (<p className='text-red-500 font-[600] my-2'>{`*${inputs.eror}*`}</p>)
          : error? (<p className='text-red-500 font-[600] my-2'>{`*${error.payload}*`}</p>) : null}
          <button className='py-2 px-8 my-4 bg-[#04AA6D] text-white rounded' onClick={handleClick} >{loading? 'Updating ...' : 'Update'}</button>
      </div>
  )
}

export default LandlordEditProperty