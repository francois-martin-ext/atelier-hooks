import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import {Home} from "../Home/Home";

export const App = () => {

    //Initialisation du store
    const store = createStore(
        rootReducer
    );

    return <Provider store={store}>
        <Home />
    </Provider>
};