"use script";

// palindrome = word/phrase/sequence that reads the
// same backwards as forwards, e.g. madam, dad,mom,etc..

const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  // have to assign value to reverseString{otherswise it won't know what to reverse}
  const reverse = reverseString(value); //Calling the reverseString function

  if (value === reverse) {
    alert("🎉 P A L I N D R O M E");
  } else {
    alert("❌ Not today!");
  }
  input.value = ""; // removes the given input, to write new input
}
