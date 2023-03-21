var nameIsValid = false;
var birthYearIsValid = false;
var name;
var birthYear;

// Prompt user to enter their name and validate input
while (!nameIsValid) {
  name = prompt("Please enter your name:");
  if (typeof name === "string" && name.trim().length > 0) {
    nameIsValid = true;
  }
}

// Prompt user to enter their birth year and validate input
while (!birthYearIsValid) {
  birthYear = prompt("Please enter your birth year (e.g. 1981):");
  if (!isNaN(birthYear) && parseInt(birthYear) < 2010) {
    birthYearIsValid = true;
  }
}

// Calculate the user's age
var age = new Date().getFullYear() - birthYear;

// Write all user input to the page in the specified format
document.write("Name: " + name + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Age: " + age);
window.location.href ="./userdata.html"