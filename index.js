// Code your solution here


function findMatching(driversArray, string) {
    return driversArray.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(driver => {
        return driver[0].toLowerCase() === string[0].toLowerCase()
    })
}

function matchName(driversArray, string) {
    return driversArray.filter(function(driver) {
        return driver.name === string
    })
}