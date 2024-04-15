console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  actualHour = new Date().getHours();
  // actualHour = 1;
  console.log(actualHour);
  if (actualHour > 5 && actualHour < 13) {
    return "Good Morning";
  } else if (actualHour > 12 && actualHour < 19) {
    return "Good Afternoon";
  } else if (actualHour > 18 && actualHour < 23) {
    return "Good Evening";
  } else if (actualHour > 22 || actualHour < 6) {
    return "Good Night";
  }
}
getGreeting();

function getDayColor() {
  // Code here
  actualDay = new Date().getDay();
  // actualDay = 6;
  if (actualDay === 1) {
    return "darkgray";
  } else if (actualDay > 1 && actualDay < 6) {
    return "lightblue";
  } else if (actualDay > 5) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
