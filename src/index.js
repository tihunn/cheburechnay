import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from "./AppContainer";
import store from "./store/reduxStore";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
)
