//завдання один

function isFirstCharUppercase(str) {
  let firstChar = str.charAt(0);

  if (firstChar === firstChar.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

//завдання два

function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//завдання три

function outputString(item) {
  return item.replace(/(.*?)\s(.*?)$/, "$2, $1");
}

//завдання чотири
function validateCreditCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/-/g, "");

  if (cardNumber.length !== 16) {
    return false;
  }

  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  return true;
}

//завдання п'ять

function validateEmail(email) {
  let regex =
    /^[A-Za-z0-9]+([_\-\.][A-Za-z0-9]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  if (regex.test(email)) {
    if (email.indexOf("--") !== -1) {
      return false;
    }
    return true;
  }
  return false;
}

//завдання шість

function validateLogin(login) {
  let regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;

  if (regex.test(login)) {
    let numbers = login.match(/\d+(\.\d+)?/g);
    return numbers || "any";
  }

  return "any";
}

//check one

console.log(
  `task 1: \nHello ${isFirstCharUppercase(
    "Hello"
  )}\nhello ${isFirstCharUppercase("hello")}`
);

//check two

console.log(
  `task 2:\nstudent@gmail.com ${isValidEmail(
    "student@gmail.com"
  )}\nstudentisnotemail ${isValidEmail("studentisnotemail")}`
);

//check three

console.log(`task 3: \nJava Script \n${outputString("Java Script")}`);

//check four

console.log(
  `task 4: \n1234-5678-9123-4567 ${validateCreditCardNumber(
    "1234-5678-9123-4567"
  )}\n1234-5678-9123-456 ${validateCreditCardNumber("1234-5678-9123-456")}`
);

//check five

console.log(
  `task 5:\nroma19052005@gmail.com ${validateEmail(
    "roma19052005@gmail.com"
  )}\nroma19052005gmail.com ${validateEmail("roma19052005gmail.com")}`
);

//check six

console.log(
  `task 6:\nroma123 ${validateLogin("roma123")}\nromarlo ${validateLogin(
    "romarlo"
  )}`
);
