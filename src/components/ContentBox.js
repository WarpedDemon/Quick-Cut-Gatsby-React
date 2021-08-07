import React from 'react'

export default function ContentBox({title, content}) {
    return (
        <div id="ContentContainer">
            <div id="IntroContentBox">
                <div id="MainContent">
                    <h2 id="MainConentTitleLeft">{title}</h2>
                    <hr id="hrLeft"/>
                    <br/>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}
