// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    api_url : 'http://127.0.0.1:8000',
    firebase: {
        apiKey: 'AIzaSyAjuY0yRVUEIwW2DquWAcUZ9ZlTmAkM2RQ',
        authDomain: 'projetbele.firebaseapp.com',
        databaseURL: 'https://projetbele.firebaseio.com',
        projectId: 'projetbele',
        storageBucket: 'projetbele.appspot.com',
        messagingSenderId: '197387712935'
    }
};
