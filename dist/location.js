"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLocationCode = exports.setCountryNames = exports.getCountryNameFromLocationCode = void 0;
const country_list_1 = require("country-list");
exports.getCountryNameFromLocationCode = (locationCode) => {
    if (!locationCode) {
        return null;
    }
    return country_list_1.getName(locationCode);
};
exports.setCountryNames = () => {
    country_list_1.overwrite([
        {
            code: 'GB',
            name: 'United Kingdom',
        },
    ]);
};
exports.validateLocationCode = (locationCode) => {
    if (!locationCode) {
        return true;
    }
    const countryName = country_list_1.getName(locationCode);
    if (!countryName) {
        return false;
    }
    return true;
};
