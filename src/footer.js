import React, { useState } from 'react';

function Footer() {

    const [values, setValues] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        text_message: "",
    });

    const [valid, setValid] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleTextMessageInputChange = (event) => {
        setValues({...values, text_message: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email && values.text_message){
            setValid(true);
        }
        setSubmitted(true);
    }

    const formFields = ["First Name", "Last Name", "Email", "Message"];

    return (
        <footer>
            <div className={"form-container"}>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    {submitted && valid ? <div className={"success-message"}>Thank you for contacting us!</div> : null}
                    <input
                        onChange={handleFirstNameInputChange}
                        value={values.firstName}
                        className={"form-field"}
                        placeholder={"First Name"}
                        name={"firstName"}/>
                    {submitted && !values.firstName ? <span className={"error-message"}>Please enter {formFields[0]}</span> : null}
                    <input
                        onChange={handleLastNameInputChange}
                        value={values.lastName}
                        className={"form-field"}
                        placeholder={"Last Name"}
                        name={"lastName"}/>
                    {submitted && !values.lastName ? <span className={"error-message"}>Please enter {formFields[1]}</span> : null}
                    <input
                        onChange={handleEmailInputChange}
                        value={values.email}
                        className={"form-field"}
                        placeholder={"Email"}
                        name={"email"}/>
                    {submitted && !values.email ? <span className={"error-message"}>Please enter {formFields[2]}</span> : null}
                    <input
                        onChange={handleTextMessageInputChange}
                        value={values.text_message}
                        className={"form-field"}
                        placeholder={"Suggestion or comment"}
                        name={"text_message"}/>
                    {submitted && !values.text_message ? <span className={"error-message"}>Please enter {formFields[3]}</span> : null}
                    <button className="form-field" type="submit">
                        Send us a message
                    </button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;