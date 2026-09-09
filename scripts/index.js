const sayHi = () => {
  console.log("Hi");
};
sayHi();
function blockline() {
  console.log("---------------------");
}
blockline();

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Shafeek");

blockline();

const greeting = function (name = "unknown") {
  console.log(`Hello ${name}`);
};

greeting("Doctor");
greeting();

blockline();

function welcome(isRegistered) {
  if (isRegistered === false) {
    console.log("access denied");
    return;
  }

  console.log("passed");
}

welcome(true);
welcome(false);

blockline();

function multiplication(number_1, number_2) {
  return number_1 * number_2;
}

let number_1 = 3;
let number_2 = 6;

console.log(
  `The result of ${number_1} x ${number_2} is ${multiplication(number_1, number_2)}`,
);

blockline();

function printDetails(username, age, ...courses) {
  console.log(
    `Hi, my name is ${username}, I'm ${age} years old. My courses are:`,
  );

  courses.forEach(function (course) {
    console.log(`\t- ${course}`);
  });
}

printDetails("Shafeek", 22, "HTML", "CSS", "JS", "SQL");

blockline();

setTimeout(function () {
  console.log("Hi after 3 seconds");
}, 3000);

blockline();

const arrowSayHi = () => {
  console.log("Hi");
};

arrowSayHi();

blockline();

const arrowGreeting = (name) => {
  console.log(`Hi ${name}`);
};

arrowGreeting("Shafeek");

blockline();

const summation = (number_1, number_2) => {
  return number_1 + number_2;
};

console.log(`The result of ${10} + ${33} is ${summation(10, 33)}`);

blockline();

const function_1 = () => {
  console.log("Hi from function_1");

  const function_2 = () => {
    console.log("Hi from function_2");
  };

  function_2();
};

function_1();

blockline();

const division = (x) => {
  return (y) => {
    if (y === 0) {
      return null;
    }

    return x / y;
  };
};

console.log(`The result of 10 / 0 is ${division(10)(0)}`);
console.log(`The result of 10 / 5 is ${division(10)(5)}`);

blockline();

const arrowSummation = (n1, n2) => {
  return n1 + n2;
};

const arrowSubtraction = (n1, n2) => {
  return n1 - n2;
};

const arrowDivision = (n1, n2) => {
  if (n2 === 0) {
    return null;
  }

  return n1 / n2;
};

const arrowMultiplication = (n1, n2) => {
  return n1 * n2;
};

const calculator = (callback, n1, n2) => {
  return callback(n1, n2);
};

console.log(`The result of 10 + 5 is ${calculator(arrowSummation, 10, 5)}`);
console.log(`The result of 10 - 5 is ${calculator(arrowSubtraction, 10, 5)}`);
console.log(`The result of 10 / 5 is ${calculator(arrowDivision, 10, 5)}`);
console.log(
  `The result of 10 * 5 is ${calculator(arrowMultiplication, 10, 5)}`,
);

blockline();
