// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const geonodeHost = 'http://signaltech.us/';
// const clientId = 'Fv10rMeOGcXMdZubBogL2sP9AyQf6mIN7RARGWhw';
// const redirectUrl = 'http://localhost:4200/auth-landing&scope=read%20write%20groups';

const geonodeHost = 'http://localhost:8000/';
const clientId = '9LkyuQ2v8f9nWhN9EqAKUnocFTF520Rq2j9deizE';
const redirectUrl = 'http://localhost:4200/auth-landing&scope=read%20write%20groups';


export const environment = {
  production: false,
  geonode: {
    host: geonodeHost,
    oauth: {
      url: geonodeHost + 'o/authorize/?client_id=' + clientId +
        '&response_type=token&state=random_state_string&' +
        'redirect_uri=' + redirectUrl,
      clientId: 'Fv10rMeOGcXMdZubBogL2sP9AyQf6mIN7RARGWhw'
    }
  },
  signalapi: {
    url: geonodeHost + 'signalapi'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
