import React from 'react'
import {Link} from 'gatsby'
import Carousel from './Carousel';

export default function SingleParrallaxPage() {


    function OpenNavMenu(e) {
      var hamburger = document.getElementById("MobileNavButton")
      var navbar = document.getElementById("Nav");
      if(navbar.style.display === "none" || navbar.style.display === ""){
        navbar.style.display = "grid";
        navbar.style.animation = "SlideIn .6s ease";
        hamburger.classList.add("is-active");
      }
      else{
        hamburger.classList.remove("is-active");
        navbar.animate([{ height: '0px' }], {duration: 300});
        setTimeout(()=> {navbar.style.display = "none"; }, 300);
      }
    }

    return (
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205628146-1"></script>
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-205628146-1');
    </script>
    <div className="Fullpage">
      <div className="PeelParrallax img1" id="img1">
        <div id="PeelParrallaxNav">
          <div id="IconContainer">
            <div id="Nav">
              <Link to="#img2"><p>Times</p></Link>
              <Link to="#img3"><p>Details</p></Link>
              <Link to="#img4"><p>Maps</p></Link>
              <Link to="#img6"><p>Gallery</p></Link>
              <Link to="#FooterText"><p>FAQ</p></Link>
            </div>
          </div>
          <div id="SocialIcons">
              <div>
                Whitfords:
                <div>
                  <Link to="https://www.facebook.com/quickcutWA"><div className="SocialIconImage Facebook"></div></Link>
                  <Link to="https://g.page/qyickcutw?share"><div className="SocialIconImage GMB"></div></Link>
                </div>
              </div>
              <div>
                Dianella:
                <div>
                  <Link to="https://www.instagram.com/quickcuts_dianella/"><div className="SocialIconImage Insta"></div></Link>
                  <Link to="https://www.facebook.com/quickcutd"><div className="SocialIconImage Facebook"></div></Link>
                  <Link to="https://g.page/quickcutd?share"><div className="SocialIconImage GMB"></div></Link>
                </div>
              </div>
          </div>
          <button id="MobileNavButton" className="hamburger hamburger--elastic" aria-label="Mobile Menu Drop down button" onClick={OpenNavMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <a href="tel:040324347" id="Phone">✆</a>
        </div>

        <div className="Spacer"></div>

        <div id="ConentContainer">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h1 id="MainConentTitle">Quick & Cheap</h1>
              <h2 id="MainConentTitle">Professional Haircuts Perth</h2>
              <hr/>
              <br/>
              <p>We specialise in a quick professional hair cutting service, from $10 ~ 10 Min*</p>
              <br/>
            </div>
          </div>
        </div>
      </div>

      <div className="PeelParrallax img2" id="img2">
        <div id="ConentContainerRight">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleRight">Whitfords Opening Times</h2>
              <hr id="hrRight"/>
              <br/>
              <div>
                <ul className="TimeContainer">
                  <li>
                  Monday: 9am to 5pm
                  </li>
                  <li>
                  Tuesday: 9am to 5pm
                  </li>
                  <li>
                  Wednesday: 9am to 5pm
                  </li>
                  <li>
                  Thursday: 9am to 5:30pm
                  </li>
                  <li>
                  Friday: 9am to 5pm
                  </li>
                  <li>
                  Saturday: 9am to 5pm
                  </li>
                  <li>
                  Sunday: 11am to 5pm
                  </li>
                </ul>
                <br/>
              </div>
            </div>
          </div>
        </div>

        <div id="ConentContainerLeft">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleLeft">Dianella Opening Times</h2>
              <hr id="hrLeft"/>
              <br/>
              <div>
                <ul className="TimeContainer">
                  <li>
                  Monday: 9am to 5pm
                  </li>
                  <li>
                  Tuesday: 9am to 5pm
                  </li>
                  <li>
                  Wednesday: 9am to 5pm
                  </li>
                  <li>
                  Thursday: 9am to 5:30pm
                  </li>
                  <li>
                  Friday: 9am to 5pm
                  </li>
                  <li>
                  Saturday: 9am to 5pm
                  </li>
                  <li>
                  Sunday: 11am to 5pm
                  </li>
                </ul>
                <br/>
              </div>
            </div>
          </div>
        </div>
        <div className="Spacer"></div>
      </div>

      <div className="PeelParrallax img3" id="img3">
        <div id="ConentContainerRight">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleRight">Whitfords Details</h2>
              <hr id="hrRight"/>
              <br/>
              <div>
                <div>
                  <u>Phone:</u>
                  <br/>
                  <br/>
                  0403 243 478
                  <br/>
                  <br/>
                  <u>Address:</u>
                  <br/>
                  <br/>
                  Shop 9,470 Westfield Whitfords, Whitfords Avenue Hillarys 6025
                  <br/>
                  <br/>
                  <u>Manager:</u>
                  <br/>
                  <br/>
                  Email:jngo@jgup.com.au
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>

        <div id="ConentContainerLeft">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleLeft">Dianella Details</h2>
              <hr id="hrLeft"/>
              <br/>
              <div>
                <div>
                  <u>Phone:</u>
                  <br/>
                  <br/>
                  0403 243 478
                  <br/>
                  <br/>
                  <u>Address:</u>
                  <br/>
                  <br/>
                  Shop 40, Dianella Plaza, 366 Grand Promenade Dianella 6059
                  <br/>
                  <br/>
                  <u>Manager:</u>
                  <br/>
                  <br/>
                  Email: jngo@jgup.com.au
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>

        <div className="Spacer"></div>

      </div>

      <div className="PeelParrallax img4" id="img4">
        <div id="ConentContainerRight">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleRight">Whitfords On Maps</h2>
              <hr id="hrRight"/>
              <br/>
              <div>
                <div className="iframeContainer">
                  <iframe title="Whitfords Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.030448945579!2d115.74898611515749!3d-31.796920081279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ab649bed9a45%3A0xaf8e27dfbcb3ab1c!2sQuickCut%20Whitfords!5e0!3m2!1sen!2sau!4v1626785614418!5m2!1sen!2sau" width={"600"} height={"450"} allowFullScreen={""} loading={"lazy"}></iframe>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>

        <div id="ConentContainerLeft">
          <div id="IntroContentBox">
            <div id="MainContent">
              <h2 id="MainConentTitleLeft">Dianella On Maps</h2>
              <hr id="hrLeft"/>
              <br/>
              <div>
                <div className="iframeContainer" id="ContentContainerLeftContent">
                  <iframe title="Dianella Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.416902906192!2d115.87057521515985!3d-31.895268181247328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa0d0e5a0c265bd6!2sQuickCut%20Dianella!5e0!3m2!1sen!2sau!4v1626785581824!5m2!1sen!2sau" width={"600"} height={"450"} allowFullScreen={""} loading={"lazy"}></iframe>
                </div>
                <br/>
              </div>

            </div>
          </div>
        </div>

        <div className="Spacer"></div>

      </div>

      <div className="PeelParrallax img6" id="img6">
        <div className="carouselHeader Gallery">
          <div id="IntroContentBox" className="DontRotate">
            <div id="MainContent">
              <h3 id="MainConentTitle">Gallery</h3>
              <hr/>
              <br/>
            </div>
          </div>
        </div>

        {/* Carousel Item */}
        <Carousel />
      </div>

      <div className="PeelParrallax img5">
        <div id="Footer">
          <hr id="FooterRibben"/>

          <div id="FooterContent">
            <div id="FooterText">
              <h3 className="FAQTitle"><u>Frequently Asked Questions:</u></h3>
              <br/>
              <br/>
              <ul id="FooterFaq">
                <li>Does Quick Cuts currently offer any products?</li>
                <li>    -    No Quick Cuts does not sell any products.</li>
                <li>Does Quick Cuts currently offer any bookings?</li>
                <li>    -    No Quick Cuts does not offer any bookings.</li>
                <li>Is Quick Cuts a walk in only business?</li>
                <li>    -    Yes Quick Cuts is a walk in business.</li>
              </ul>
              <br/>
              <br/>
              Thanks for visiting Quick Cuts!
              <br/>
              <br/>
              Please save us in your bookmarks!
              <br/>
              <br/>
              <br/>
              <Link to="#img1" className="FAQTitle">Back To Top</Link>
            </div>
          </div>
        </div>

      </div>

    </div>
    )
}
