const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('Should return sum of 3 points but first cut lower and upper points of array [18.0, 18.5, 17.5, 18.5, 18.5]', () => {
    const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);

    const expected = 55;

    assert.equal(actual, expected);
  });

  it('Should return sum of 3 points but first cut lower and upper points of array [15.5, 16.5, 15.5, 15.5, 16.0]', () => {
    const actual = calculateStylePoints([15.5, 16.5, 15.5, 15.5, 16.0]);

    const expected = 47;

    assert.equal(actual, expected);
  })

});