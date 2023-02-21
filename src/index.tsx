import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloProvider, gql} from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import client from './apollo/client'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
