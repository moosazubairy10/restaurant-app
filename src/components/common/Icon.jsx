import React from 'react'

const Icon = ({ iconImage, ml, mr ,mt }) => {
    
  return (
    <span style={{marginLeft: ml && ml, marginRight: mr && mr , marginTop : mt && mt}}><img src={iconImage} alt="" /></span>
  )
}

export default Icon