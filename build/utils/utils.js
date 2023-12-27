"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest) || typeof commentFromRequest !== 'string') {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date: ' + dateFromRequest);
    }
    return dateFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather: ' + weatherFromRequest);
    }
    return weatherFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility: ' + visibilityFromRequest);
    }
    return visibilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
