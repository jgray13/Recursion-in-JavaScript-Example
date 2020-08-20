function isEvenRecursion(number) {
  if (number < 0)  {
    number = Math.abs(number);
	}
  if (number === 0) {
    return true;
	}
  if (number === 1) {
    return false;
	} else {
    number = number - 2;
    return isEvenRecursion(number);
	}
}
function getNum(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(num);
	var msgEven = num + " is even";
	var msgOdd = num + " is odd";
	var answer = isEvenRecursion(num);
	if (answer === true) {
		document.getElementById("section").innerHTML = msgEven;
	} else {
		document.getElementById("section").innerHTML = msgOdd;
	}
}