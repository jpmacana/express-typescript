"use strict";
//! Los tipos se utilizan de manera FIJA, osea no deberiamos estar modificandolas
//? Las interfaces si son dinamicas, osea pueden ser modificadas.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Cloudy"] = "cloudy";
    Weather["Rainy"] = "rainy";
    Weather["Stormy"] = "stormy";
    Weather["Windy"] = "windy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
    Visibility["VeryPoor"] = "very poor";
})(Visibility || (exports.Visibility = Visibility = {}));
