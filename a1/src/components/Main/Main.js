// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prime from '../routes/Landing/Prime';
import Terms from '../routes/Landing/Terms/Terms';
import './Main.css';


export default function Main(){
    return(
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Prime />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </div>
        </Router>    
    </>
    );                        
}