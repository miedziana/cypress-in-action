import * as jwt from "jsonwebtoken";

Cypress.Commands.add("loginByAuth0Api", (username: string, password?: string) => {
  const log = Cypress.log({
    displayName: "AUTH0 LOGIN",
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  });

  const client_id = Cypress.env("auth0_client_id");
  const client_secret = Cypress.env("auth0_client_secret");
  const audience = Cypress.env("auth0_audience");
  const scope = Cypress.env("auth0_scope");

  log.snapshot("before");

  cy.request({
    method: "POST",
    url: `https://${Cypress.env("auth0_domain")}/oauth/token`,
    body: {
      grant_type: "password",
      username,
      password,
      audience,
      scope,
      client_id,
      client_secret,
    },
  }).then(({body}) => {
    const user: any = jwt.decode(body.id_token);

    const userItem = {
      token: body.access_token,
      user: {
        sub: user.sub,
        nickname: user.nickname,
        picture: user.name,
        email: user.email,
      },
    };

    window.localStorage.setItem("auth0Cypress", JSON.stringify(userItem));

    log.snapshot("after");
    log.end();
  });

  cy.visit("/");
});
//
// Cypress.Commands.add('login', (overrides = {}) => {
//   Cypress.log({
//     name: 'loginViaAuth0',
//   });
//
//   const options = {
//     method: 'POST',
//     url: `https://${Cypress.env("auth0_domain")}/oauth/token`,
//     body: {
//       grant_type: 'password',
//       username: Cypress.env('auth0_username'),
//       password: Cypress.env('auth0_password'),
//       audience: Cypress.env('auth0_audience'),
//       scope: 'openid profile email',
//       client_id: Cypress.env('auth0_client_id'),
//       client_secret: Cypress.env('auth0_client_secret'),
//     },
//   };
//   cy.request(options.method, options.url, options.body);
// });
