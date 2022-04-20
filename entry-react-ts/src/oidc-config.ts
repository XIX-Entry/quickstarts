const url = window.location.origin;

export const oidcConfig = {
  authority: "https://entry-dev.xix.ai/auth/realms/test-alex-12",
  client_id: "test-oidc",
  client_secret: '93b71998-7b26-4077-83d6-4f06ee9c75f7',
  redirect_uri: url,
  post_logout_redirect_uri: url,
  response_type: "code",
  scope: "openid profile email"
};