import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import React from 'react'

function LocationPin({text}) {
  return (
    <div>
    <div className="pin">
    <PersonPinCircleIcon/>
    <p className="pin-text">{text}</p>
  </div>
  
    </div>
  )
}

export default LocationPin