import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "react-oidc-context";
import App from './app';

import { oidcConfig  } from './oidc-config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig} response_mode="fragment">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
        }}>
        <App />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
