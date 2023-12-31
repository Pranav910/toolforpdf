import React from 'react'
import "@/styles/loader.css"

function Loader(props) {
    return (
        <>
            <div class="dot-spinner" style={{display : `${props.display}`}}>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
            </div>
        </>
    )
}

export default Loader