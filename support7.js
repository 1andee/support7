var hour = new Date().getHours();
var day = new Date().getDay();
var minutes = new Date().getMinutes();


//Glenn	Availability: 0300 to 1500 Mon to Thurs
//	Fri-Sun 24 hrs

if (day == 0 || day == 5 || day == 6) {
   console.log("Call Glenn");
}
if (day >= 1 && day <= 4 && hour >= 3 && hour <= 15) {
   console.log("Call Glenn");
}


//Louis	Availability:	Friday 1630 to Sunday 2000

if (day == 5 && hour == 16 && minutes >= 30 || day == 5 && hour > 16 || day == 6 || day == 0 && hour < 20) {
   console.log("Call Louis");
}


// Wayne Availability: Friday 1830 to Sunday 2100

if (day == 5 && hour == 18 && minutes >= 30 || day == 5 && hour > 18 || day == 6 || day == 0 && hour < 21) {
   console.log("Call Wayne");
}


// Everyone else that is available 24/7:

var membersAlwaysAvail = ["Desmond","Eric","Gord","Jennifer","Jeremy","Jim","John C","Kevin","Linda","Michael","Paul","Tony","Will"];

for (name in membersAlwaysAvail) {
  console.log(membersAlwaysAvail[name] + " (avail 24/7)");
}
