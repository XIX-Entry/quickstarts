import { useAuth } from "react-oidc-context";

export function ProfilePage() {
    const auth = useAuth();

    const handleLogoutClick = () => {
      auth.signoutRedirect();
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px'}}>
        <h3>Your user data:</h3>
        <pre style={{ padding: '20px'}}>
          {JSON.stringify(auth.user?.profile, null, 2)}
        </pre>
        <button style={{ padding: '20px'}} onClick={handleLogoutClick}>Log out</button>
      </div>
      );
}