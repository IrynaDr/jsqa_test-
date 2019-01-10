// src/app/course/index.js

// (function() {
//     startDate = new Date('May 7, 2018 00:00:00');
//     return {
//         getStartDate: function () {
//             //return console.log(startDate);
//             return startDate;
//         }
//     }
//
// })();
//
// module.exports.getStartDate;

(function () {
    startDate = new Date('May 7, 2018 00:00:00');
        exports.getStartDate = function () {
            //return console.log(startDate);
            return startDate;
        }
})();