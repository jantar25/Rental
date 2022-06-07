import React from 'react'
import { useLocation } from 'react-router-dom'

const Residence = () => {
    const location = useLocation()
    const user = location.pathname.split('/')[2];
  return (
    <div>
        {user}
    </div>
  )
}

export default Residence