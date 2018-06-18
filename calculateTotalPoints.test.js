const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  it('Should return 122.6 points', () => {
    const actual = calculateTotalPoints(125, 'big', 120, [18.0, 18.5, 17.5, 18.5, 18.5], -14.4, 13);

    const expected = 122.6;

    assert.equal(actual, expected);
  });

  it('Should return 118.7 points', () => {
    const actual = calculateTotalPoints(103.5, 'normal', 98, [18.0, 18.0, 18.0, 18.5, 18.5], -13.2, 6.4);

    const expected = 118.7;

    assert.equal(actual, expected);
  });

  it('Should return 126.9 points', () => {
    const actual = calculateTotalPoints(170, 'mamut', 200, [16.0, 15.5, 14.5, 16.0, 16.0], -4.6, 0);

    const expected = 126.9;

    assert.equal(actual, expected);
  });

});