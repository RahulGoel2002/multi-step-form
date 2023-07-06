import React, { useEffect, useState } from 'react';
import "./PersonalInfoPage.css"
import InputFieldComponent from '../InputFieldComponent/InputFieldComponent';

const PersonalInfoPage = () => {

    const [submitted, setSubmitted] = useState(false)
    const [content, setContent] = useState({
        
    })

    useEffect(() => {
        const checkContent = () => {
            for (const x in content)
                if (content[x] == "") return false
            return true 
        }
        if (submitted && checkContent())
            console.log("Submitted")
    }, [submitted])

    return (
        <div className='pi'>
            <h1>Personal info</h1>
            <div className="p">
                Please provide your name, email address, and phone number.
            </div>
            <InputFieldComponent type="text" val="Vanessa Mint" setContent={setContent} setSubmitted={setSubmitted} submit={submitted} title="Name" placeholder={`Eg. Vanessa Mint`} />
            <InputFieldComponent type="email" val="vanessamint@" setContent={setContent} setSubmitted={setSubmitted} submit={submitted} title="Email Address" placeholder={`Eg. vanessamint@`} />
            <InputFieldComponent type="tel" val="" setContent={setContent} setSubmitted={setSubmitted} submit={submitted} title="Phone Number" placeholder={`Eg. +1 234 567 890`} />
            <div className="submit">
                <button onClick={() => setSubmitted(true)} className="submit-btn">Next Step</button>
            </div>
        </div>
    );
}

export default PersonalInfoPage;
