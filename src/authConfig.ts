import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "a86ffacb-4cbc-483c-b9ca-7942ed2e2fc4",
        authority: "https://svfriotdemo.ciamlogin.com/0484e3c3-e93f-4d52-bbb0-4af88d1c1b44",
        redirectUri: "http://localhost:3000/redirect",
        postLogoutRedirectUri: "/",
    },
    system: {
        allowPlatformBroker: false, // Disables WAM Broker
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["api://91ebe7e6-5d94-4663-ac8e-91287cfd5df2/WebApi.Read"],
};
