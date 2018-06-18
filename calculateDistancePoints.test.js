const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  it('Should return 69 points from distance 125, hill big and kpoint 120', () => {
    const actual = calculateDistancePoints(125, 'big', 120);

    const expected = 69;

    assert.equal(actual, expected);
  });

  it('Should return 42 points from distance 110, hill big and kpoint 120', () => {
    const actual = calculateDistancePoints(110, 'big', 120);

    const expected = 42;

    assert.equal(actual, expected);
  });

  it('Should return 84 points from distance 110, hill normal and kpoint 98', () => {
    const actual = calculateDistancePoints(110, 'normal', 98);

    const expected = 84;

    assert.equal(actual, expected);
  });

  it('Should return 46 points from distance 91, hill normal and kpoint 98', () => {
    const actual = calculateDistancePoints(91, 'normal', 98);

    const expected = 46;

    assert.equal(actual, expected);
  });
  it('Should return 158.4 points from distance 232, hill mamut and kpoint 200', () => {
    const actual = calculateDistancePoints(232, 'mamut', 200);

    const expected = 158.4;

    assert.equal(actual, expected);
  });

  it('Should return 115.2 points from distance 232, hill mamut and kpoint 200', () => {
    const actual = calculateDistancePoints(196, 'mamut', 200);

    const expected = 115.2;

    assert.equal(actual, expected);
  });

  it('Should return error', () => {
    const actual = calculateDistancePoints(196, 'mamu', 200);

    const expected = 'Hill size is not correct';

    assert.equal(actual, expected);
  });


});