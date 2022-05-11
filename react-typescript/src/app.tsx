import { useAuth } from "react-oidc-context";

import { LoginPage, ProfilePage } from './pages';

function App() {
    const auth = useAuth();

    const handleLogoutClick = () => auth.signoutRedirect();

    switch (auth.activeNavigator) {
        case "signinSilent":
          return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
      return <div>Loading...</div>;
    }

    if (auth.error) {
      return <div>
        <p>Oops... {auth.error.message}</p>
        <button 
          style={{ padding: '20px' }} 
          onClick={handleLogoutClick}>Go Back</button>
      </div>;
    }

    return auth.isAuthenticated ? <ProfilePage /> : <LoginPage />
}

export default App;