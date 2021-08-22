import React from 'react'
import "../styles/carousel.css"

export default function Carousel() {


    var CarouselIndex = 1; //Carousel First position
    var MaxPosition = 3; //Carousel Final position

    //Move the carousel forward once.
    function Next() {
        CarouselIndex = (CarouselIndex+1 > MaxPosition) ? 1 : CarouselIndex+1;
        console.log("Index:" + CarouselIndex);
        UpdateCount(CarouselIndex);

        var contentElement = document.getElementById("BA_Content");
        contentElement.classList.add("animated");
        contentElement.classList.add("fadeOutLeft");
        ShowNewContentInOneSecond(contentElement, "Right");
    }

    //Move the carousel backwards once.
    function Previous() {
        CarouselIndex = (CarouselIndex-1 <= 0) ? (MaxPosition) : (CarouselIndex-1);
        console.log("Index:" + CarouselIndex);
        UpdateCount(CarouselIndex);

        var contentElement = document.getElementById("BA_Content");
        contentElement.classList.add("animated");
        contentElement.classList.add("fadeOutRight");
        ShowNewContentInOneSecond(contentElement, "Left");
    }

    function ShowNewContentInOneSecond(contentElement, direction) {
        setTimeout(()=>{
            contentElement.classList.remove("animated");
            contentElement.classList.remove("fadeOutLeft");
            contentElement.classList.remove("fadeOutRight");
            contentElement.classList.add("animated");
            contentElement.classList.add("fadeIn"+direction);

            setTimeout(()=>{
                contentElement.classList.remove("animated");
                contentElement.classList.remove("fadeInLeft");
                contentElement.classList.remove("fadeInRight");
            },1000);
        }, 700);
    }

    //Update the carousel progress display div.
    function UpdateCount(position) {
        var infoElement = document.getElementById("Carousel_Info_Box");
        infoElement.innerHTML = position + "/" + MaxPosition;
    }

    return (
        <div id="BA_Carousel">
            <div id="Carousel_Controls">
                <div id="Carousel_Control_Left" aria-label="Left Chevron Container" className="Control_Button" role="button" onClick={Previous} onKeyDown={Previous}>
                    <i className="fas fa-chevron-left" aria-label="Left Chevron Button" role="button" onClick={Previous} onKeyDown={Previous}></i>
                </div>
                <div id="Carousel_Control_Right" className="Control_Button" aria-label="Right Chevron Container" role="button" onClick={Next} onKeyDown={Next} >
                    <i className="fas fa-chevron-left" aria-label="Right Chevron button" role="button" onClick={Next} onKeyDown={Next}></i>
                </div>
                <div className="Carousel_Info">
                    <span id="Carousel_Info_Box">{CarouselIndex}/3</span>
                </div>
            </div>
            <div id="BA_Content">
                <div id="ConentContainerRight" className="BeforeAfter cancelMarginLeft">
                    <div id="IntroContentBox">
                        <div id="MainContent" classname="DontRotate">
                            <h3 id="MainConentTitleRight">Model</h3>
                            <hr id="hrRight"/>
                            <br/>
                            <div>
                                <div className="Before"></div>
                                <br/>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
