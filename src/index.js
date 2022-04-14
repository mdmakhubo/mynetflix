import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './authContext/AuthContext';
import App from './App';


const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
    <Router>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </Router>
)



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );