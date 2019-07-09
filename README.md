# Open City App Hämeenlinna Modules

This repository contains modules meant to be used in projects derived from [`open-city-hml` repository](https://github.com/CityOfHameenlinna/open-city-hml).

Open City Hämeenlinna Modules has been developed using:

`"react": "16.7.0"`
`"react-native": "0.57.1"`

## Installation

This repository can be imported to an existing project using `npm install`.

`npm install https://github.com/CityOfHameenlinna/open-city-hml` installs the following files:
```
  "files":[
    "src/",
    "assets/",
    "index.js",
    "OCAStyles.js"
  ],
```

The repository also has files `development.js` and `App.js` which can be used to independently develop new and existing modules in this repository, but they're excluded from installed files.

### Standalone installation
Pre-install requirements:
- React Native development environment https://facebook.github.io/react-native/docs/getting-started.html
- Android SDK Build-Tools version `27.0.3`
- Android emulator or a physical device running Android 4.1.2 or higher

Install steps:
- Clone the repository i.e with Git using `git clone https://github.com/CityOfHameenlinna/open-city-hml.git`
- Run `npm install` in the root of the project folder
- Run the project with `react-native run-android`

The rendered module can be changed by modifying the render method of [App.js](../master/App.js) file.

## Modules

### LibraryModule
This module is used to create a virtual library card for the user after entering the card number and the PIN. After the user has entered the card information, it sends a request to an authentication service to check that the entered information is valid, and displays the card number as a barcode.

#### Configuration
The authentication serivce URL and Basic Auth username and password can be changed by editing [`/src/modules/LibraryModule/config/auth.json`](../master/src/modules/LibraryModule/config/auth.json) file.
The properties in the `library` object are used to create the URL used in the authentication request:
* `url`: URL of authentication service
* `username`: Query string variable name for username
* `password`: Query string variable name for password
Values for the Basic Authentication header, which are used when sending the request to the authentication service, are stored in the `basic_auth` object:
* `username`: Username for Basic Auth
* `password`: Password for Basic Auth

### RSSFeedModule
This module fetches an RSS feed from an URL and displays each item in a list. Each list item can be opened to show information of the individual item.

#### Configuration
The feed URL can be changed in the [.src/modules/RSSFeedModule/index.js](../master/src/modules/RSSFeedModule/index.js) file.

The module expects the following props:
`navigation`: `any`, a [`Header`](https://react-native-training.github.io/react-native-elements/docs/header.html) element

### SplashSreen
This module is intended to be shown to the user when the application starts. It's a simple, static module with no functionalities in it.

### TavastEventsModule
This module fetches a list of events from the Tavastia Events API and displays each event in a list. Each event in the list can be opened to show information of the individual event.

Events are ordered in the following order:
 1. Events held today
 2. Multi-date events, which are active today
 3. Future events

#### Configuration
The feed URL can be changed in the [src/modules/TavastEventsModule/index.js](../master/src/modules/TavastEventsModule/index.js) file.

The module expects the following props:
`navigation`: `any`, a [`Header`](https://react-native-training.github.io/react-native-elements/docs/header.html) element

### WebView module
The WebView module is just a simple webview. It shows a warning modal when starting to load a web page, informing the user of being redirected to a web page instead of using an integrated part of the application. This modal automatically fades away after a set period of time.

#### Configuration
The module expects the following props:
`src`: `string`, URL for the website
`modalVisible`: `boolean`, Is a warning modal shown when the page is opened
`modalTimeout`: `number`, How long the is the modal shown in milliseconds (1 s = 1000 ms)
`onLoadEnd`: `function`, Function that is invoked when the WebView load succeeds or fails
