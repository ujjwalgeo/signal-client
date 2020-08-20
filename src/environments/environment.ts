// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const geonodeHost = 'http://portal.signaltech.us/';
const clientId = 'wn3BiioINRLbmKs2V4bdCILRb8G0iRJUCo807kjg';
const redirectUrl = 'http://localhost:4200/auth-landing&scope=read%20write%20groups';

// const geonodeHost = 'http://localhost:8000/';
// const clientId = '41zCnhu7D9BiDaWwE1LNyl2PpXoeHN8CP40Zer3F';
// const redirectUrl = 'http://localhost:4200/auth-landing&scope=read%20write%20groups';


export const environment = {
  production: false,
  geonode: {
    host: geonodeHost,
    oauth: {
      url: geonodeHost + 'o/authorize/?client_id=' + clientId +
        '&response_type=token&state=random_state_string&' +
        'redirect_uri=' + redirectUrl,
      clientId: 'Fv10rMeOGcXMdZubBogL2sP9AyQf6mIN7RARGWhw'
    },
    api: geonodeHost + 'api'
  },
  signalapi: {
    url: geonodeHost + 'signalapi'
  }
};
