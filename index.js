// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  });
}

function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
    const matches = driver
   
  });
}

function exactMatchToList (drivers, match) {
  return exactMatch(drivers, match).map(function (driver) {
      return driver.name;
    });
}

for (const element of myArray) {
  console.log(element);
}
 
 
 function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

const equippedEngineers = newEngineers.map(function(eng) {