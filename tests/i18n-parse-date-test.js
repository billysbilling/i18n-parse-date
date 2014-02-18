var parseDate = require('../i18n-parse-date');

QUnit.module('i18n-parse-date');

test('ymd', function() {
    equal(parseDate('2013-01-02').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013-1-2').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013.01.02').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013.1.2').format('YYYY-MM-DD'), '2013-01-02');
});

test('dmy', function() {
    equal(parseDate('02/01-13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2/1-13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('02/01-2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2/1-2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('02-01-13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2-1-13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('02-01-2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2-1-2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('02.01.13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2.1.13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('02.01.2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2.1.2013').format('YYYY-MM-DD'), '2013-01-02');
});

test('mdy', function() {
    equal(parseDate('01/02/13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('1/2/13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('01/02/2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('1/2/2013').format('YYYY-MM-DD'), '2013-01-02');
});

test('dm', function() {
    equal(parseDate('02-01').format('MM-DD'), '01-02');
    equal(parseDate('2-1').format('MM-DD'), '01-02');
});

test('md', function() {
    equal(parseDate('01/02').format('MM-DD'), '01-02');
    equal(parseDate('1/2').format('MM-DD'), '01-02');
});

test('d', function() {
    equal(parseDate('02').format('DD'), '02');
    equal(parseDate('2').format('DD'), '02');
});