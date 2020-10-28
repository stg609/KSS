import { createUserManager } from 'redux-oidc';

const settings = {
    // the user manager settings for oidc-client
    authority: "https://demo.identityserver.io/",
    client_id: "interactive.confidential.short",
    client_secret: "secret",
    redirect_uri: "http://localhost:3001/signin-oidc",
    response_type: "code",
    scope: "openid profile",
    post_logout_redirect_uri: "http://localhost:3001/signout-oidc",
};

export const userManager = createUserManager(settings);