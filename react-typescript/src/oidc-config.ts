const url = window.location.origin;

export const oidcConfig = {
  authority: "https://entry-dev.xix.ai/auth/realms/{WORSPACE_NAME}",
  client_id: "{CLIENT_ID}",
  client_secret: '{CLIENT_SECRET}',
  redirect_uri: url,
  post_logout_redirect_uri: url,
  response_type: "code",
  scope: "openid profile email"
};