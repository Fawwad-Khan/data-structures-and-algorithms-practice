// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  const reverse = (str) => {
    if (str.length === 0) return "";

    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  };

  const reverseStr = reverse(str);

  if (str === reverseStr) {
    return true;
  }
  return false;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
