import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// TODO: Change the links in the readme
// TODO: Upload on a public git repository
// TODO: Host the website on google firestore or netlify
// TODO: Take Screenshots of the website
// TODO: Screen Record of the deployed website and its working
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
