# @ngrx example application

Example application utilizing @ngrx libraries. See the [demo](https://abhilive.github.io/angular-NgRx/).

This app demonstrates Redux pattern that NgRx follows, store, for managing application state, selectors to access data from store, dispatch action using action creators and process those actions with reducers to create new state. This also includes how to handle side effects such as asynchronous operation and how we can architect angular application for scale and performance using container and presentational component patterns.

This project is an assignment application of this [pluralsight course](https://app.pluralsight.com/library/courses/angular-ngrx-getting-started).

Built with [@angular/cli](https://github.com/angular/angular-cli)

### Included

- [@ngrx/store](../../docs/store/README.md) - RxJS powered state management for Angular apps, inspired by Redux
- [@ngrx/effects](../../docs/effects/README.md) - Side effect model for @ngrx/store
- [@ngrx/store-devtools](../../docs/store-devtools/README.md) - Instrumentation for @ngrx/store enabling time-travel debugging
- [@angular/router](https://github.com/angular/angular) - Angular Router

### Quick start

```bash
# Clone the repository
git clone https://github.com/abhilive/angular-NgRx.git

# Go to the example directory
cd angular-Ngrx

# Install the dependencies
npm install

# Start the server
npm start

```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. To log in, you can use any combination of credentials.
