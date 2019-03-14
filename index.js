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

function exactMatch(drivers, someObject) {
  return drivers.filter(function (driver) {
    return driver[key] > someObject[key]
  });
}

function exactMatchToList() {
  
}


for (const key in address) {
  console.log(address.key);
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