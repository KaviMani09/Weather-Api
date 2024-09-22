'use strict';

export const weekDaysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

/**
 * Get the date in a formatted string
 * @param {number} dateUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset from UTC in seconds
 * @returns {string} Formatted date string: "Sunday 10, January"
 */
export const getDate = function (dateUnix, timezone) {
    const data = new Date((dateUnix + timezone / 3600) * 1000);
    const weekDayName = weekDaysNames[data.getUTCDay()];
    const monthName = monthNames[data.getUTCMonth()];

    return `${weekDayName} ${data.getUTCDate()}, ${monthName}`;
};

/**
 * Get the time in a formatted string
 * @param {number} timeUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset from UTC in seconds
 * @returns {string} Formatted time string: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const data = new Date((timeUnix + timezone / 3600) * 1000);
    let hours = data.getUTCHours();
    const minutes = String(data.getUTCMinutes()).padStart(2, '0');
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${hours}:${minutes} ${period}`;
};

/**
 * Get the hour in a formatted string
 * @param {number} timeUnix Unix timestamp in seconds
 * @param {number} timezone Timezone offset from UTC in seconds
 * @returns {string} Formatted hour string: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const data = new Date((timeUnix + timezone / 3600) * 1000);
    let hours = data.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${hours} ${period}`;
};

/**
 * Convert meters per second to kilometers per hour
 * @param {number} mps Speed in meters per second
 * @returns {number} Speed in kilometers per hour
 */
export const mps_to_kmh = mps => mps * 3.6;

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
};
