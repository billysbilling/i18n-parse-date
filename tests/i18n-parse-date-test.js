var i18n = require('i18n');
var parseDate = require('../i18n-parse-date');

QUnit.module('i18n-parse-date', {
    setUp: function() {
        i18n.locale('en_US');
    }
});

test('y-m-d', function() {
    equal(parseDate('2013-01-02').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013-1-2').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013.01.02').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('2013.1.2').format('YYYY-MM-DD'), '2013-01-02');
});

test('d-m-y', function() {
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

test('m-d-y', function() {
    equal(parseDate('01/02/13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('1/2/13').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('01/02/2013').format('YYYY-MM-DD'), '2013-01-02');
    equal(parseDate('1/2/2013').format('YYYY-MM-DD'), '2013-01-02');
});

test('d-m', function() {
    equal(parseDate('02-01').format('MM-DD'), '01-02');
    equal(parseDate('2-1').format('MM-DD'), '01-02');
});

test('m-d', function() {
    equal(parseDate('01/02').format('MM-DD'), '01-02');
    equal(parseDate('1/2').format('MM-DD'), '01-02');
});

test('d', function() {
    equal(parseDate('02').format('DD'), '02');
    equal(parseDate('2').format('DD'), '02');
});

test('md - en_US', function() {
    equal(parseDate('0411').format('MM-DD'), '04-11');
});

test('md - da_DK', function() {
    i18n.locale('da_DK');
    equal(parseDate('0411').format('MM-DD'), '11-04');
});
