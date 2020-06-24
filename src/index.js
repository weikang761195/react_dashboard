import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import Local_storage from './Local_storage';
import registerServiceWorker from './registerServiceWorker';
import { ClipLoader } from 'react-spinners';
import { BrowserRouter} from 'react-router-dom';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
