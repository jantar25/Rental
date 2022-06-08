import React from 'react'
import { RiDoubleQuotesL,RiDoubleQuotesR } from 'react-icons/ri';

const ClientSay = ({ClientsComment}:any) => {
  return (
    <div className='relative w-[400px] h-[200px] p-4 rounded mx-2 hover:cursor-grabbing mb-6 shadow'>
        <div className="">
            <RiDoubleQuotesL style={{fontSize:'30px',color:'orange'}} />
            <p className="text-md text-gray-500 mt-2">{ClientsComment.comment}</p>
            {/* <RiDoubleQuotesR style={{fontSize:'30px',color:'orange'}} /> */}
        </div>
        <div className="absolute bottom-4 flex items-center">
            <div className="w-[30px] h-[30px] mr-4">
                <img src={ClientsComment.image} alt="Client image" className="w-full h-full rounded-full" />
            </div>
            <p className="text-purple-900 font-[600]">{ClientsComment.names}</p>
        </div>
    </div>
  )
}

export default ClientSay