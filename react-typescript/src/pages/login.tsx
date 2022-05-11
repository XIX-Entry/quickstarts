import { useAuth } from "react-oidc-context";

export function LoginPage() {
    const auth = useAuth();
    return <div>
      <button 
        onClick={() => void auth.signinRedirect({extraQueryParams: { prompt: 'login'}})}
        style={{ padding: '20px'}}
      >Log in</button>
    </div>
}