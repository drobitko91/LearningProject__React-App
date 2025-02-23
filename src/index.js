import reportWebVitals from './reportWebVitals';
import store from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    )
};



renderEntireTree(store.getState());
store.subscribe(renderEntireTree);




// -----
reportWebVitals();
