import React from 'react'

const Location = (props) => {
  return (
    <div className='apartment-location'  style={{display: props.infoNum === 3 ? 'flex' : 'none'}}>
        <div className="map">

        </div>
    </div>
  )
}

export default Location