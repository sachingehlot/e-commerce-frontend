import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter} from 'react-router-dom';
import Header from "./common/Header";
import Signin from './common/Signup';
import Login from './common/Login';
import LoginForm from './common/Login';
import Placeorder from './common/Placeorder';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Home/>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

