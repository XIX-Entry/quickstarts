import { useAuth } from "react-oidc-context";

function App() {
    const auth = useAuth();

    const handleLogoutClick = () => {
      auth.signoutRedirect();
    }

    const btnStyle = { 
      padding: '10px 20px', 
      backgroundColor: 'black', 
      color: 'white', 
      borderRadius: '5px'
    };

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
          style={btnStyle} 
          onClick={handleLogoutClick}>Go Back</button>
      </div>;
    }

    if (auth.isAuthenticated) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px'}}>
          <h3>Your user data:</h3>
          <pre style={{ padding: '20px'}}>
            {JSON.stringify(auth.user?.profile, null, 2)}
          </pre>
          <button style={btnStyle} onClick={handleLogoutClick}>Log out</button>
        </div>
        );
    } 

    return <div>
      <button 
        onClick={() => void auth.signinRedirect({extraQueryParams: { prompt: 'login'}})}
        style={btnStyle}
      >Log in</button>
    </div>
}

export default App;