import moment from 'moment';


const displayDate = (date) => {
    return moment(date).format('dddd, MMMM D, YYYYY');
};


const dateToString = (date) => {
    return date.toJSON().split('T')[0];
};

const stringToDate = (str) => {
    let strPts = str.split('-');
    return new Date(Date.UTC(strPts[0], parseInt(strPts[1] - 1), strPts[2]) + ((new Date()).getTimezoneOffset() * 60000));
};

const displayDateString = (string) => {
    return moment(string).format('dddd, MMMM D, YYYY');
}

module.exports = {
    displayDate: displayDate,
    displayDateString: displayDateString,
    dateToString: dateToString,
    stringToDate: stringToDate
};