// src/app/course/index.js

// Define a private property in it named startDate and give it initial value: new Date('May 7, 2018 00:00:00');
// Define a getStartDate method on it and export it

(function() {
    startDate = new Date('May 7, 2018 00:00:00');
    return {
        getStartDate: function () {
            //return console.log(startDate);
            return startDate;
        }
    }

})();

module.exports.getStartDate;

// (function () {
//     startDate = new Date('May 7, 2018 00:00:00');
//         exports.getStartDate = function () {
//             //return console.log(startDate);
//             return startDate;
//         }
// })();