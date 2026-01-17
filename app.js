// ...existing code...
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HederApp } from './src/HeaderApp';
import BodyApp from './src/BodyApp';
// ...existing code...

const AppLayout = ()=>{
    return(
        <div className='app-root'>
            <HederApp />
            <BodyApp />
        </div>
    )

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);