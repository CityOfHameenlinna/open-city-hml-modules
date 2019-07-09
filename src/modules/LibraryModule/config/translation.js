/* @flow */
const translations = {
  en: {
    logIn: 'Log in',
    logOut: 'Log out',
    libraryCardNumber: 'Library card number',
    pinCode: 'PIN code',
    loading: 'Loading ...',
    wrongBarcodeOrPIN: 'Incorrect credentials',
    missingPwd: 'Incorrect username or password',
    emptyCardOrPin: 'Card number or PIN code cannot be empty',
  },
  fi: {
    logIn: 'Kirjaudu sisään',
    logOut: 'Kirjaudu ulos',
    libraryCardNumber: 'Kirjastokortin numero',
    pinCode: 'PIN -koodi',
    loading: 'Ladataan ...',
    wrongBarcodeOrPIN: 'Virheelliset tunnukset',
    missingPwd: 'Virheellinen kortin numero tai PIN -koodi',
    emptyCardOrPin: 'Kortin numero tai PIN -koodi ei voi olla tyhjä',
  },
};

let locale = 'fi';
const changeLanguage = (lang: string) => {
  if (Object.keys(translations).includes(lang)) {
    locale = lang;
  }
};
const t = (key: $Keys<typeof translations.fi>) => translations[locale][key];
export { changeLanguage, t };