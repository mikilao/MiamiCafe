import React from 'react';
import data from './data'

function ImageSlider() {

    return (
        <div>
            <h1>Image</h1>
            {data.map((slide, index)=> {
                    return(
                        <img src={slide.img} alt={slide.title} />
                    )
            }) }
        </div>
    )
}

export default ImageSlider
