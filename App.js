import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./reducer/store.js";
import LoginPage from './views/LoginPage.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
);