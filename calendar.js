<!--

// window.open("timer.htm","timer","width=100,height=25")

var todayDate = new Date()

var dateDate = todayDate.getDate()
var dateDay = todayDate.getDay()
var dateMonth = todayDate.getMonth()
var dateYear = todayDate.getYear()

if(navigator.appName.indexOf("Netscape") != -1){
	dateYear = 1900 + parseInt(dateYear);
}

var dateDayArray = new Array()
dateDayArray[0] = "Sunday"
dateDayArray[1] = "Monday"
dateDayArray[2] = "Tuesday"
dateDayArray[3] = "Wednesday"
dateDayArray[4] = "Thursday"
dateDayArray[5] = "Friday"
dateDayArray[6] = "Saturday"

var dateMonthArray = new Array()
dateMonthArray[0] = "January"
dateMonthArray[1] = "February"
dateMonthArray[2] = "March"
dateMonthArray[3] = "April"
dateMonthArray[4] = "May"
dateMonthArray[5] = "June"
dateMonthArray[6] = "July"
dateMonthArray[7] = "August"
dateMonthArray[8] = "September"
dateMonthArray[9] = "October"
dateMonthArray[10] = "November"
dateMonthArray[11] = "December"

var dateEndArray = new Array()
dateEndArray[0] = ""
dateEndArray[1] = "st"
dateEndArray[2] = "nd"
dateEndArray[3] = "rd"
dateEndArray[4] = "th"
dateEndArray[5] = "th"
dateEndArray[6] = "th"
dateEndArray[7] = "th"
dateEndArray[8] = "th"
dateEndArray[9] = "th"
dateEndArray[10] = "th"
dateEndArray[11] = "th"
dateEndArray[12] = "th"
dateEndArray[13] = "th"
dateEndArray[14] = "th"
dateEndArray[15] = "th"
dateEndArray[16] = "th"
dateEndArray[17] = "th"
dateEndArray[18] = "th"
dateEndArray[19] = "th"
dateEndArray[20] = "th"
dateEndArray[21] = "st"
dateEndArray[22] = "nd"
dateEndArray[23] = "rd"
dateEndArray[24] = "th"
dateEndArray[25] = "th"
dateEndArray[26] = "th"
dateEndArray[27] = "th"
dateEndArray[28] = "th"
dateEndArray[29] = "th"
dateEndArray[30] = "th"
dateEndArray[31] = "st"


var dayInt = parseInt(dateDay);

// get the day of the first of the month!!!

var dateOneDay;

	if ((dateDate == 1)||(dateDate == 8)||(dateDate == 15)||(dateDate == 22)||(dateDate == 29)){
		dateOneDay = dayInt;
	}else if ((dateDate == 2)||(dateDate == 9)||(dateDate == 16)||(dateDate == 23)||(dateDate == 30)){
		dateOneDay = dayInt-1;
	}else if ((dateDate == 3)||(dateDate == 10)||(dateDate == 17)||(dateDate == 24)||(dateDate == 31)){
		dateOneDay = dayInt-2;
	}else if ((dateDate == 4)||(dateDate == 11)||(dateDate == 18)||(dateDate == 25)){
		dateOneDay = dayInt-3;
	}else if ((dateDate == 5)||(dateDate == 12)||(dateDate == 19)||(dateDate == 26)){
		dateOneDay = dayInt-4;
	}else if ((dateDate == 6)||(dateDate == 13)||(dateDate == 20)||(dateDate == 27)){
		dateOneDay = dayInt-5;
	}else if ((dateDate == 7)||(dateDate == 14)||(dateDate == 21)||(dateDate == 28)){
		dateOneDay = dayInt-6;
	}

	if (dateOneDay == -1){
		dateOneDay = 6;
	}else if (dateOneDay == -2){
		dateOneDay = 5;
	}else if (dateOneDay == -3){
		dateOneDay = 4;
	}else if (dateOneDay == -4){
		dateOneDay = 3;
	}else if (dateOneDay == -5){
		dateOneDay = 2;
	}else if (dateOneDay == -6){
		dateOneDay = 1;
	}

	var dateDay1Array = new Array()
	dateDay1Array[0] = "Sunday"
	dateDay1Array[1] = "Monday"
	dateDay1Array[2] = "Tuesday"
	dateDay1Array[3] = "Wednesday"
	dateDay1Array[4] = "Thursday"
	dateDay1Array[5] = "Friday"
	dateDay1Array[6] = "Saturday"

	var getDateOneDay = dateOneDay;



// Accommodate Months with different numbers of days

	var numDays;


	if ((dateMonth == 3)||(dateMonth == 5)||(dateMonth == 8)||(dateMonth == 10)){
		numDays = 30;
	}else if ((dateMonth == 0)||(dateMonth == 2)||(dateMonth == 4)||(dateMonth == 6)||(dateMonth == 7)||(dateMonth == 9)||(dateMonth == 11)){
		numDays = 31;
	}else{
		numDays = 28;
	}

	if((dateYear - 2000 == 4)||(dateYear - 2000 == 8)){
		if (dateMonth == 1){
			numDays = 29;
		}
	}

	var getNumDays = numDays;

// Map out coords


var num = new Array()
var x;
var endNum;
var currentDay;

function coordMap(numDays, dateOneDay){

	for(var i=0; i<42; i++){
		if(i < dateOneDay){
			num[i] = "<img src='images/blank.gif' border=0 width=50 height=50>";
		} else if (i == dateOneDay){
			currentDay = 1;
			if (dateDate == 1){
				num[i] = "<img src='images/today" + 1 + ".gif' border=0 width=50 height=50 alt='" + currentDay + "'>";
			}else{
				num[i] = "<img src='images/day" + 1 + ".gif' border=0 width=50 height=50 alt='" + currentDay + "'>";
			}
		} else if (currentDay+1 == dateDate){
			currentDay += 1;
			num[i] = "<img src='images/today" + currentDay + ".gif' border=0 width=50 height=50 alt='" + currentDay + "'>";	
		} else if (currentDay == numDays){
			num[i] = "<img src='images/blank.gif' border=0 width=50 height=50>";
			endNum = currentDay + dateOneDay;
		} else if (currentDay > numDays){
			num[i] = "<img src='images/blank.gif' border=0 width=50 height=50>";
		} else {
			currentDay += 1;
			num[i] = "<img src='images/day" + currentDay + ".gif' border=0 width=50 height=50 alt='" + currentDay + "'>";
		}
	}


			document.writeln("<DIV>");
			document.writeln(num[0]);
			document.writeln(num[1]);
			document.writeln(num[2]);
			document.writeln(num[3]);
			document.writeln(num[4]);
			document.writeln(num[5]);
			document.writeln(num[6]);
			document.writeln("</DIV>");

			document.writeln("<DIV>");
			document.writeln(num[7]);
			document.writeln(num[8]);
			document.writeln(num[9]);
			document.writeln(num[10]);
			document.writeln(num[11]);
			document.writeln(num[12]);
			document.writeln(num[13]);
			document.writeln("</DIV>");

			document.writeln("<DIV>");
			document.writeln(num[14]);
			document.writeln(num[15]);
			document.writeln(num[16]);
			document.writeln(num[17]);
			document.writeln(num[18]);
			document.writeln(num[19]);
			document.writeln(num[20]);
			document.writeln("</DIV>");

			document.writeln("<DIV>");
			document.writeln(num[21]);
			document.writeln(num[22]);
			document.writeln(num[23]);
			document.writeln(num[24]);
			document.writeln(num[25]);
			document.writeln(num[26]);
			document.writeln(num[27]);
			document.writeln("</DIV>");

			document.writeln("<DIV>");
			document.writeln(num[28]);
			document.writeln(num[29]);
			document.writeln(num[30]);
			document.writeln(num[31]);
			document.writeln(num[32]);
			document.writeln(num[33]);
			document.writeln(num[34]);
			document.writeln("</DIV>");

	if (endNum > 35){

			document.writeln("<DIV>");
			document.writeln(num[35]);
			document.writeln(num[36]);
			document.writeln(num[37]);
			document.writeln(num[38]);
			document.writeln(num[39]);
			document.writeln(num[40]);
			document.writeln(num[41]);
			document.writeln("</DIV>");
	} else {
			document.writeln("");
	}

}

var lastYear;
var lastMonth;
var nextMonth;
lastMonth = dateMonthArray[dateMonth - 1];
nextMonth = dateMonthArray[dateMonth + 1];
lastYear = dateYear-1;

if (dateMonth == 0){
	lastMonth = dateMonthArray[11];
}

if (dateMonth == 11){
	nextMonth = dateMonthArray[0];
}

//-->
