import React, { useState } from 'react'

export default function ContactForm() {
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const [contactFormState, setContactFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = e => {
        setContactFormState({
            ...contactFormState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...contactFormState })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    }
    return (
        <div id="contactFormContainer">
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label>
                <input id="contact_name" name="name" type="text" onChange={handleChange} value={contactFormState.name} placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
