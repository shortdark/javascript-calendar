let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dateEndSt = [1, 21, 31]
let dateEndNd = [2, 22]
let dateEndRd = [3, 23]
let thirtyDayMonths = [3, 5, 8, 10];

let outputText;
let dayInWords, shortenedDay;

let todayDate = new Date()
let currentDate = todayDate.getDate()
let currentDay = todayDate.getDay()
let currentMonth = todayDate.getMonth()
let currentYear = todayDate.getFullYear()
let currentMonthWord = monthArray[currentMonth];
let firstDayOfMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
let dateOneDay = firstDayOfMonth.getDay();
let numDays = numberOfDaysInMonth();


function coordMap() {
    writeTitle(currentMonthWord);
    writeTableHead();
    writeCalendarSquares();
    writeTitle();
}


function numberOfDaysInMonth() {
    if (thirtyDayMonths.indexOf(currentMonth) !== -1) {
        return 30;
    } else if (currentMonth === 1) {
        if (currentYear % 4 === 0) {
            return 29;
        }
        return 28;
    }
    return 31;
}

function getTitle() {
    return dayArray[currentDay] + ", " + currentDate + getDateEnd() + " " + currentMonthWord + " " + currentYear;
}

function writeTitle(title = '') {
    if ('' === title) {
        title = getTitle();
    }
    document.writeln("<h2>" + title + "</h2>");
}

function writeTableHead() {
    document.writeln("<div>");
    for (let d = 0; d < 7; d++) {
        dayInWords = dayArray[d];
        shortenedDay = dayInWords.substring(0, 3).toLowerCase();
        document.writeln("	<img src=\"images/" + shortenedDay + ".gif\"  alt=\"" + dayInWords + "\">");
    }
    document.writeln("</div>");
}

function getDateEnd() {
    if (dateEndSt.indexOf(currentDate) !== -1) {
        return 'st';
    } else if (dateEndNd.indexOf(currentDate) !== -1) {
        return 'nd';
    } else if (dateEndRd.indexOf(currentDate) !== -1) {
        return 'rd';
    }
    return 'th';
}

function writeDaySquare(i, thisDay) {
    if (i < dateOneDay) {
        outputText = "<img src='images/blank.gif'  alt=''>";
    } else if (thisDay === currentDate) {
        outputText = "<img src='images/today" + thisDay + ".gif'  alt='" + thisDay + "'>";
        thisDay++;
    } else if (thisDay > numDays) {
        outputText = "<img src='images/blank.gif'  alt=''>";
    } else {
        outputText = "<img src='images/day" + thisDay + ".gif'  alt='" + thisDay + "'>";
        thisDay++;
    }
    document.writeln(outputText);
    return thisDay;
}

function writeCalendarSquares() {
    let thisDay = 1;
    for (let i = 0; i < 42; i++) {
        if (continueRows(i, thisDay) === false) {
            break;
        }
        thisDay = writeDaySquare(i, thisDay);
        endRow(i);
    }
}

function continueRows(i, thisDay) {
    if (i % 7 === 0) {
        if (thisDay > numDays) {
            return false;
        }
        document.writeln("<DIV>");
    }
    return true;
}

function endRow(i) {
    if ((i + 1) % 7 === 0) {
        document.writeln("</DIV>");
    }
}