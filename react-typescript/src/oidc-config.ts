const url = window.location.origin;

export const oidcConfig = {
  authority: "https://entry.xix.ai/auth/realms/YOUR_WORKSPACE_NAME",
  client_id: "YOUR_APP_ID",
  client_secret: 'YOUR_APP_SECRET',
  redirect_uri: url,
  post_logout_redirect_uri: url,
  response_type: "code",
  scope: "openid profile email"
};