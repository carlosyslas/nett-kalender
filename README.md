# Nett Kalender

## Small code introduction

The app was structured in a modular way. The idea is to contain all modules in different directories. Each module contains *components*, *reducers*, *selectors*, *actions* and *styles* required in the module.

The modules included are:

- **monthly:** The montly view of the calendar.
- **delete_modal:** The confirmation modal for deleting an event.
- **edit_modal:** The modal for creating or updating events.
- **events:** The shared logic for managing events.

Missing modules to add:

- **weekly:** The weekly view of the calendar.
- **daily:** The daily view of the calendar.

The styles were written in [sass](https://sass-lang.com/) by following the [rscss](https://rscss.io/) guide.


## Runnig the app

### Install yarn

```sh
npm install -g yarn
```

### Install project dependencies

```sh
yarn install
```

### Run

```sh
yarn start
```

### Open in browser

[http://localhost:3000](http://localhost:3000)

## Running the tests

```sh
yarn test
```

## Screenshots

![Desktop](./screenshots/desktop.png)

![iPhone7 Portrait](./screenshots/iphone7_portrait.png)

![iPhone7 Landscape](./screenshots/iphone7_landscape.png)
