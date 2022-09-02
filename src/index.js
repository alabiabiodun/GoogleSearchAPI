import React from "react";
import ReactDOM from "react-dom";
import './css/global.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import {ResultContextProvider} from './contexts/ResultContextProvider';

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App />        
        </Router>
    </ResultContextProvider>,    
    document.getElementById('root')
);
    