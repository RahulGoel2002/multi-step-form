import React, { useEffect, useState } from 'react';
import "./InputFieldComponent.css"

const InputFieldComponent = ({type, setContent, submit, placeholder, title, setSubmitted}) => {

    const [inp, setInp] = useState("")

    useEffect(() => {
        setContent(prev => {
            return {
                ...prev,
                [type]: inp
            }
        })
    }, [submit])

    return (
        <div className='inp-field-component'>
            <div className="text-container">
                <div className="title">{title}</div>
                {(submit && inp === "") ? <div className="reqd">This field is required</div> : null}
            </div>
            <input placeholder={placeholder} onChange={e => {setInp(e.target.value); setSubmitted(false)}} value={inp} type={type} />
        </div>
    );
}

export default InputFieldComponent;
