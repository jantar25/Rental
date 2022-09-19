import { format } from 'timeago.js';
import { adminRequest } from '../../requestMethode';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

const AdminResidences = () => {
  const properties = useSelector((state:any) => state.properties.properties);
  const propertiesToSort = [...properties]
  const newProperties = propertiesToSort.sort(function(a:any, b:any) {
    return new window.Date(b.createdAt).getTime()-new window.Date(a.createdAt).getTime();
  });

  const DeleteProperty = async (id:any) => {
    try {
      const res = await adminRequest.delete(`/landLordAuth/${id}`)
    } catch (error) {
      console.log(error)
    }
   
  }
  
  return (
    <div className='flex flex-col items-center text-sm py-4 px-2 w-full'>
      <h1 className="text-2xl my-4 text-[#002853] font-[900]">Residences</h1>
      <table className='w-11/12 border border-[#002853] bg-gray-100 my-4 rounded-sm rounded'>
      <tbody className=''>
          <tr className='bg-[#002853] text-white'>
            <th className='text-center py-2'>Images</th>
            <th className='text-center py-2'>Title</th>
            <th className='text-center py-2'>Price</th>
            <th className='text-center py-2'>Address</th>
            <th className='text-center py-2'>District</th>
            <th className='text-center py-2'>Owner</th>
            <th className='text-center py-2'>Creation Date</th>
            <th className='text-center py-2'>Check</th>
          </tr>
          { newProperties && newProperties.map((property:any)=>(
              <tr key={property._id} className=''>
                <td className='border-solid py-1 flex items-center justify-center'>
                  <div className="w-[25px] h-[25px] ">
                    <img src={property.OtherImages[0]} alt='landlordImg' className='w-full h-full rounded-full'/>
                  </div>
                </td>
                <td className='border-solid text-center py-1'>{property.title}</td>
                <td className='border-solid text-center py-1'>{property.price}</td>
                <td className='border-solid text-center py-1'>{property.address}</td>
                <td className='border-solid text-center py-1'>{property.District}</td>
                <td className='border-solid text-center py-1'>{property.OwnerDetails[0].names}</td>
                <td className='border-solid text-center py-1'>{format(property.createdAt)}</td>
                <td className='border-solid flex items-center justify-center py-1'>
                  <div className="text-red-600">
                    <MdDelete style={{fontSize:'20px',cursor:'pointer'}} onClick={() => DeleteProperty(property._id)}/>
                  </div>
                </td>
            </tr>
        )) } 
          </tbody>
        </table>
    </div>
  )
}

export default AdminResidences