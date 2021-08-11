import React from 'react'
import ImageSlider from './ImageSlider';
import data from "./data"

function Home() {
    return (
        <div className="home">
            <ImageSlider slides={data.img} />
            <p >
            Ham fatback spare ribs tenderloin strip steak shankle venison filet mignon t-bone beef sirloin. Short ribs pastrami bacon alcatra jerky. Pork chop brisket shoulder tri-tip, salami pastrami ham hock cow frankfurter tail t-bone leberkas drumstick ham buffalo. Shoulder fatback picanha bresaola doner boudin tenderloin jerky shankle burgdoggen landjaeger flank prosciutto cupim salami.
            <br/> Pork pancetta cow biltong, frankfurter hamburger turkey sausage burgdoggen shankle doner landjaeger filet mignon. Strip steak burgdoggen spare ribs tenderloin salami ham. Salami short loin shoulder picanha, flank tongue ball tip pancetta.
            </p>
        </div>
    )
}

export default Home
