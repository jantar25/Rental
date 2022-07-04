import React,{ useState } from 'react'
// import {deleteProduct} from '../../../Redux/apiCalls'
import {useDispatch} from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';



const LandLordProperty = ({property}:any) => {
    const [toggleEdit,setToggleEdit] = useState(false);

    const handleToggleEdit = () => {
        setToggleEdit(!toggleEdit)
      }

    const dispatch=useDispatch();

    const handleDelete = (id:any) => {
        // deleteProduct(id,dispatch)
      };
  return (
<div className=' flex-1 flex flex-col bg-black m-1 max-w-[280px] rounded'>              
            <div className=" flex flex-col w-full h-[400px]">
                <div className="flex-1 w-full h-1/3 justify-center items-center">
                    <img className="w-full h-full object-cover" src={property.OtherImages[0]} alt='itemImg' />
                </div>
                <div className="flex-1 flex flex-col justify-center ml-2 p-2 ">
                        <h1 className="text-lg text-orange-500 mb-2 font-[500]">{property.title}</h1>
                        <p className="text-[11px] mb-2 text-neutral-400">{property.Description.split(' ').splice(0, 15).join(' ')}...</p>
                        <p className="font-[900] text-[#04AA6D]">Rwf {property.price}</p>
                        <div className=" flex flex-col justify-between text-neutral-600 text-sm">
                            <div className=" flex items-center my-2">
                                <h3 className="font-[600] mr-1">District:</h3>
                                <p>{property.District}</p>
                            </div>
                            <div className="flex items-center">
                                <h3 className="font-[600] mr-1">Status:</h3>
                                <p>{property.Avaiable ? (
                                    <span className='text-md font-[700] text-green-500'>Available</span>
                                    ) : (
                                    <span className='text-md font-[700] text-red-500'>Occupied</span>
                                    )}</p>
                            </div>
                         </div>
                    <div className="flex justify-between items-center py-4 px-2">
                        <button className='bg-[#04AA6D] px-2 rounded' onClick={handleToggleEdit}>Edit</button>
                        <AiFillDelete style={{'color':'red','cursor':'pointer',"fontSize":'25px'}}
                        onClick={() => handleDelete(property._id)}/>            
                    </div>
                </div>
            </div>
            {/* {toggleEdit && 
            <div className='h-screen w-screen overflow-auto fixed bottom-0 left-0 right-0 top-0'>
                <div className='h-screen w-screen fixed top-0 bottom-0 left-0 right-0 bg-black/[0.9]'></div>
                <div className='absolute top-16 bottom-16 md:bottom-36 left-0 right-0 w-11/12 max-h-full 
                container ml-auto mr-auto rounded bg-black overflow-auto'>              
                    <div className="w-full h-full">
                        <EditProduct product={product} handleToggleEdit={handleToggleEdit} />
                    </div>
                </div>
            </div>} */}
    </div>
  )
}

export default LandLordProperty