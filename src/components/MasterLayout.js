import React from 'react'
import {Helmet} from "react-helmet";

import "../styles/LandingPage.css"
import "../styles/Mobile.css"
import "../styles/Extras.css"
import "../styles/animate.css"
import ToTopButton from './ToTopButton';


export default function MasterLayout({children}) {

    return (

        <div className="MasterLayout">
            <ToTopButton/>
            <Helmet>

                <meta charset="utf-8"/>
                <meta property="title" content={"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"}/>

                <meta name="author" content="James Nicholas Noonan"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="url" content="https://nelgara.com.au"/>
                <meta property="type" content="website"/>
                <meta property="site_name" content="Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>

            </Helmet>
            {children}
            
        </div>
    )
}
