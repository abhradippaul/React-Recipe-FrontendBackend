import React from 'react'

function Recipe(props) {
  return (
    <div className='card'>
        <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
        <h1>{props.menu.name}</h1>
        {
            props.menu.description.map(e => (
              <h2>{e}</h2>
            ))
        }
    </div>
  )
}

export default Recipe