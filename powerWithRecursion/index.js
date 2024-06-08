// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(num, pow) {
  if (pow === 0) return 1;

  let newNum = num;
  const multiply = (power) => {
    if (power === 1) return;
    newNum = newNum * num;
    power = power - 1;
    multiply(power);
  };

  multiply(pow);
  return newNum;
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16
