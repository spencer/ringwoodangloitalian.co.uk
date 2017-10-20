var expect = require('expect.js');

var myFunctions = require('../js/app.js');


describe('compareDates()', function() {
    it('should return past if the event date is before today.', function() {
        event = {dataset: {year: 2017, month: 10, day: 17}};

        expect(myFunctions.compareDates(event)).to.eql('past')
    })
});

describe('getEventDate()', function() {
    it('should get a date from an events data', function() {
        event = {dataset: {year: 2017, month: 10, day: 17}};
        expect(myFunctions.getEventDate(event)).to.be.a(Date)
        expect(myFunctions.getEventDate(event).getFullYear()).to.eql(2017)
        expect(myFunctions.getEventDate(event).getMonth()).to.eql(09)
        expect(myFunctions.getEventDate(event).getDate()).to.eql(17)
    })
});

