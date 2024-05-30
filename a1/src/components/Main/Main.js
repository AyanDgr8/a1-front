// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prime from '../routes/Landing/Prime';
import './Main.css';


export default function Main(){
    return(
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Prime />} />
                </Routes>
            </div>
        </Router>    
    </>
    );                        
}