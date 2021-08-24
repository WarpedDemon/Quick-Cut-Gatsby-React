import React from 'react'
import "../styles/carousel.css"

export default function Carousel() {

    /*
        ALL CAROUSEL IMAGES GO BELOW
    */

    var Images = [
        '/img/QuickCuts_FirstShoot-Whitfords_FullRes_5.jpg',
        '/img/QuickCuts_FirstShoot-Whitfords_FullRes_20.jpg',
        '/img/QuickCuts_FirstShoot-Whitfords_FullRes_32.jpg',
        '/img/QuickCuts_FirstShoot-Whitfords_FullRes_39.jpg',
        '/img/QuickCuts_FirstShoot-Whitfords_FullRes_40.jpg'
    ]


    var CarouselIndex = 1; //Carousel First position
    var MaxPosition = Images.length; //Carousel Final position


    var firstImage = Images[0];

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

            SetNewImage(CarouselIndex-1);

            setTimeout(()=>{
                contentElement.classList.remove("animated");
                contentElement.classList.remove("fadeInLeft");
                contentElement.classList.remove("fadeInRight");
            },1000);
        }, 700);
    }

    function SetNewImage(imageIndex) {
        var imageElement = document.getElementById("CarouselContentImage");
        imageElement.style.backgroundImage = "url("+ Images[imageIndex] +")";
    }

    //Update the carousel progress display div.
    function UpdateCount(position) {
        var infoElement = document.getElementById("Carousel_Info_Box");
        infoElement.innerHTML = (position) + "/" + (MaxPosition);
    }

    return (
        <div id="BA_Carousel">
            <div id="Carousel_Controls">
                <div id="Carousel_Control_Left" aria-label="Left Chevron Container" className="Control_Button" role="button" onClick={Previous} onKeyDown={Previous} >
                    <i className="fas fa-chevron-left" aria-label="Left Chevron Button"></i>
                </div>
                <div id="Carousel_Control_Right" className="Control_Button" aria-label="Right Chevron Container" role="button" onClick={Next} onKeyDown={Next} >
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Carousel_Info">
                    <span id="Carousel_Info_Box">{CarouselIndex}/3</span>
                </div>
            </div>
            <div id="BA_Content">
                <div id="ConentContainerMiddle" className="BeforeAfter DontRotate">
                    <div id="IntroContentBox" className="DontRotate CenterMargin">
                        <div id="MainContent">
                            <h3 id="MainConentTitleRight">Model</h3>
                            <hr id="hrRight"/>
                            <br/>
                            <div>
                                <div id="CarouselContentImage" style={{backgroundImage: "url(" + firstImage + ")"}}></div>
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
