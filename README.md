# bug-tracker-frontend

This will be a frontend angular client for simple bug tracking

# reqs

- issue should have title and description
- if issue is pending, it cannot be set back to open
- if issue is closed, it cannot be set back to pending or open

# Running app

- npm install
- npm run start

App will try to connect to the backend endpoint (http://localhost:3000/bugs). You must have it run in order to be able to communicate with backend side.

# testing

- npm run test

# e2e tests

- npm run e2e // no tests so far

#TODO list
Due to lack of time the following points could be improved/implemented:

- add tests to increase covergage
- add tests for abnormal backend responses
- add coverage reported to monitor code coverage (instanbul?)
- add e2e tests (I would use some Page Object Patter for this and add automation id to identify objects to make e2e tests not vulnerable to code changes )
- add api tests (with the use of real backend running)
- improve logging, introduce log levels, add configurable logging
- add config service to enable different configurations (dev, stage, prod, local etc.)
- add better error handling
- add retry mechanism in case request failed (along with use notifications)
- organize modules in a better way (not to have a single app.module)
- some static analysic ?
- add strict null checks ?
- add localization (i18n for angular?)