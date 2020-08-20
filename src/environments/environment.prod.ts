// The list of file replacements can be found in `angular.json`.

const geonodeHost = 'http://portal.signaltech.us/';
const clientId = 'wn3BiioINRLbmKs2V4bdCILRb8G0iRJUCo807kjg';
const redirectUrl = 'http://dashboard.signaltech.us/auth-landing&scope=read%20write%20groups';


export const environment = {
  production: true,
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
