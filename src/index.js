import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./configureStore"
=======
import { BrowserRouter } from "react-router-dom";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
>>>>>>> dev-ilyas

ReactDOM.render(

    <BrowserRouter>
<<<<<<< HEAD
        <Provider store={store}>
=======

>>>>>>> dev-ilyas
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
