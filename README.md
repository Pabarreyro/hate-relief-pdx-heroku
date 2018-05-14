# Hate Relief PDX

#### Bringing [Hate Crime Help](https://hatecrimehelp.com/) to Portland , 2018

#### By Pablo Barreyro

## Description

<strong>Hate Relief PDX</strong> is a web app where Portlanders can report hate crime/incidents and find resources they need to heal or take action. The functionality is modeled after Hatecrimehelp.com, a website that displays legal resources for targets of hate incidents based on the nature and location of the incident.

<strong>Hate Relief PDX</strong> expands on this functionality by displaying local community-based organizations and government agencies that provide other resources (<em>e.g.</em>, trainings, mental health guidance, safe space, advocacy and political action). Users will also have the option of submitting their reports non-anonymously, in which case their reports will be made available to relevant CBOs and/or agencies, allowing those organizations to follow up.

<strong>[View demo](https://salty-woodland-52751.herokuapp.com/)</strong>
#### Specifications

Behavior | Input | Output
--- | --- | ---
Home component displays home page containing summaries of other components with links | [home URL] | "Welcome to Hate Relief Portland..."
About component provides a background on hate crimes, victims' rights, and [Portland United Against Hate](https://www.portlandoregon.gov/oni/72583) |  ['Learn More' button] | "What you need to know to Combat Hate..."
Report component dynamically displays incident report form based on whether user wants to report anonymously, non-anonymously, or in person |  ['File report' button] | "How would you like to make your report?..."
Review component displays incident report details and lets user edit before submission |  ['Save & Review' button] | "Please take a moment to review your report and make changes..."
Connect component displays incident report confirmation number, a customized list of recommended organizations and a separate form for browsing through the full directory of organizations | 'Submit button' | "Thank you for sharing your experience, we recommend talking to..."
Admin component displays list of resources and allows authenticated users to create, update or delete resources | 'Admin link' | "Admin dashboard..."

## Setup/Installation Requirements

_This project was built and deployed  with  [Heroku CLI](https://cli.heroku.com/), [Node.js](https://nodejs.org/en/download/) 9.11.1, and [Angular CLI](https://github.com/angular/angular-cli) 5.6.0._

#### Getting started

* [Create](https://signup.heroku.com/?c=7013A000001yL5XQAU) & [verify](https://devcenter.heroku.com/articles/account-verification) a free account with Heroku
* Install [Heroku CLI](https://cli.heroku.com/) & [Node.js](https://nodejs.org/en/download/)
* [Clone directory](https://github.com/pabarreyro/super-galactic).
* Run `npm install` in cloned repo root directory.

#### Create an app on Heroku

Use Heroku CLI to run `heroku create` in root directory. This will generate a random name for your app and return both a git and deployment url. Example:

```$ heroku create
Creating app... done, ⬢ tranquil-shore-75468
https://tranquil-shore-75468.herokuapp.com/ | https://git.heroku.com/tranquil-shore-75468.git
```
#### Provision MongoDB using mLab add-on

Run `heroku addons:create mongolab` in root directory (you will need to have [verified your heroku account](https://devcenter.heroku.com/articles/account-verification) first). This will contribute a config variable to your Heroku environment called `MONGODB_URI`. You can confirm this by using the `heroku config` command. Example:
```$ heroku config:get MONGODB_URI
MONGODB_URI => mongodb://heroku_12345678:random_password@ds029017.mLab.com:29017/heroku_12345678
```

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Push to heroku & deploy

After committing your changes, push to heroku by running `git push heroku master`. View the app by running `heroku open` and navigating to your app's url.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Known Bugs

None to date. Please be sure to leave any encountered bugs in the issues section of this repo.

## Technologies Used

* HTML, CSS, JavaScript
* [Node.js](https://nodejs.org/en/download/package-manager/#macos) & [Node Package Manager](https://www.npmjs.com/get-npm)
* [Bootstrap 4.1](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [ExpressJS](https://expressjs.com/)
* [ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)
* [jQuery 3.2.1](https://jquery.com/upgrade-guide/3.0/)
* [Webpack](https://webpack.js.org/concepts/)
* [ESLint](https://eslint.org/docs/user-guide/configuring)
* [Jasmine](https://jasmine.github.io/pages/docs_home.html)
* [Karma](https://karma-runner.github.io/2.0/index.html)
* [Babel](https://babeljs.io/docs/setup/)

## License

[MIT](https://opensource.org/licenses/MIT)

Pablo Barreyro © 2018
