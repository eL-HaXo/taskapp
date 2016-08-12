import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;
/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['en-US'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/fr');
}

const _dtFormat = new DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}).format;

const displayDate = (date) => {
    return _dtFormat(date);
};


const dateToString = (date) => {
    return date.toJSON().split('T')[0];
};

const stringToDate = (str) => {
    let strPts = str.split('-');
    return new Date(Date.UTC(strPts[0], parseInt(strPts[1] - 1), strPts[2]) + ((new Date()).getTimezoneOffset() * 60000));
};

const displayDateString = (string) => {
    return _dtFormat(stringToDate(string));
}

module.exports = {
    displayDate: displayDate,
    displayDateString: displayDateString,
    dateToString: dateToString,
    stringToDate: stringToDate
};