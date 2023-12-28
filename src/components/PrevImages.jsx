import React from 'react'
import "@/styles/previmages.css"


function PrevImages(props) {
  return (
    <>
        <div className="imgdiv">
            <img src={props.src} alt="" />
            <p>{props.imageName}</p>
        </div>
    </>
  )
}

export default PrevImages