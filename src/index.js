import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Auth0Provider
        domain="dev-mndvd8ab.us.auth0.com"
        clientId="i4ujJuERQQgOthET6reM4VD9zqxh5y9x"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


