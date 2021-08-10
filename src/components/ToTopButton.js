import React from 'react'
import {Link} from 'gatsby'

export default function ToTopButton() {
    return (
        <Link to="#img1" id="ToTopButton" aria-label="To top button">
            <i className="fas fa-arrow-up"></i>
        </Link>
    )
}
