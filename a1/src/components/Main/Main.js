// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './Main.css';


export default function Main(){
    return(
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>    
    </>
    );                        
}