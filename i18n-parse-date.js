var i18n = require('i18n'),
    moment = require('momentjs');

module.exports = function(input) {
    input = String(input || '');
    var patterns = [
        [
            //y-m-d AND y.m.d
            /^(\d{4})(-|\.)(\d{1,2})(-|\.)(\d{1,2})$/,
            {
                year: 1,
                month: 3,
                day: 5
            }
        ],
        [
            //d-m-y AND d.m.y AND d/m-y
            /^(\d{1,2})(-|\.|\/)(\d{1,2})(-|\.)(\d{2,4})$/,
            {
                year: 5,
                month: 3,
                day: 1
            }
        ],
        [
            //m/d/y
            /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/,
            {
                year: 3,
                month: 1,
                day: 2
            }
        ],
        [
            //d-m
            /^(\d{1,2})-(\d{1,2})$/,
            {
                month: 2,
                day: 1
            }
        ],
        [
            //m/d
            /^(\d{1,2})\/(\d{1,2})$/,
            {
                month: 1,
                day: 2
            }
        ],
        [
            //d
            /^(\d{1,2})$/,
            {
                day: 1
            }
        ]
    ];

    if (i18n.locale() === 'da_DK') {
        patterns.push([
            //dmy
            /^(\d{2})(\d{2})(\d{2,4})$/,
            {
                year: 3,
                month: 2,
                day: 1
            }
        ]);
        patterns.push([
            //dm
            /^(\d{2})(\d{2})$/,
            {
                month: 2,
                day: 1
            }
        ]);
    } else {
        patterns.push([
            //mdy
            /^(\d{2})(\d{2})(\d{2,4})$/,
            {
                year: 3,
                month: 1,
                day: 2
            }
        ]);
        patterns.push([
            //md
            /^(\d{2})(\d{2})$/,
            {
                month: 1,
                day: 2
            }
        ]);
    }

    var value = null;
    patterns.find(function(pattern) {
        var match = input.match(pattern[0]),
            year,
            month,
            day;
        if (match) {
            var now = moment();
            year = match[pattern[1].year];
            if (!year) {
                year = now.format('YYYY');
            }
            year = year.length == 2 ? "20" + year : year ;
            month = match[pattern[1].month];
            if (!month) {
                month = now.format('MM');
            }
            day = match[pattern[1].day];
            value = moment([year, month-1, day]);
            if (!value.isValid()) {
                value = null;
            }
            if (value) {
                return true;
            }
        }
    });
    return value;
}
