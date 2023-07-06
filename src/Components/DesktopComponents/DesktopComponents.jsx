import React from 'react';
import "./DesktopComponents.css"
import PersonalInfoPage from '../PersonalInfoPage/PersonalInfoPage';

const DesktopComponents = () => {
    return (
        <div className='desktop'>
            <div className="panel">
                <div className="left-panel">

                </div>
                <div className="right-panel">
                    <PersonalInfoPage />
                </div>
            </div>
        </div>
    );
}

export default DesktopComponents;
