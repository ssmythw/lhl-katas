const talkingCalendar = function (date) {
  let month = "";
  let day = "";
  let dayNum = "0";
  date = date.split("/");

  if (date[2][0] === "0") {
    dayNum = date[2][1];
  } else {
    dayNum = date[2];
  }

  switch (date[2]) {
    case "01":
      day = "st";
      break;
    case "02":
      day = "nd";
      break;
    case "03":
      day = "rd";
      break;
    default:
      day = "th";
      break;
  }

  switch (date[1]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }
  return month + " " + dayNum + day + ", " + date[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
