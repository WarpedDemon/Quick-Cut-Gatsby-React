import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
    return (
        <div id="PeelParrallaxNav">
          <div id="IconContainer">
            <Link to="tel:0403 243 478">✆</Link>
          </div>
          <div id="SocialIcons">
              <Link to="https://www.facebook.com/quickcutd"><div className="SocialIconImage Facebook"></div></Link>
              <Link to="https://www.facebook.com/quickcutWA"><div className="SocialIconImage Facebook"></div></Link>
              <Link to="https://www.instagram.com/quickcuts_dianella/"><div className="SocialIconImage Insta"></div></Link>
              <Link to="https://g.page/qyickcutw?share"><div className="SocialIconImage GMB"></div></Link>
              <Link to="https://g.page/quickcutd?share"><div className="SocialIconImage GMB"></div></Link>
          </div>
        </div>
    )
}
