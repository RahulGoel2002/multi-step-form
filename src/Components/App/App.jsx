import React from 'react';
import "./App.css"
import {useWindowSize} from  "../ResizeHandler/ResizeHandler"
import MobileComponent from '../MobileComponent/MobileComponent';
import DesktopComponents from '../DesktopComponents/DesktopComponents';

const App = () => {
    const {width} = useWindowSize()
    return (
        <div className='app'>
            {
                (width <= 768) ?
                <MobileComponent /> :
                <DesktopComponents />
            }
        </div>
    );
}

export default App;
