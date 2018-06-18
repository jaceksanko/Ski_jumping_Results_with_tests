const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let distancePoint;
  function pointAdd(numberPoints) {
    return distancePoint + (distance - kPoint)*numberPoints
  }
  if (hillSize === 'normal' || hillSize ==='big' || hillSize === 'mamut') {
    if (hillSize == 'normal') {
      distancePoint = 60;
      return pointAdd(2);
    }
    else if (hillSize === 'big') {
      distancePoint = 60;
      return pointAdd(1.8);
    }
    else {
      distancePoint = 120;
      return pointAdd(1.2);
    }
  } else { 
    console.log('Hill size is not correct');
    return 'Hill size is not correct'
  }

};

module.exports = calculateDistancePoints;
