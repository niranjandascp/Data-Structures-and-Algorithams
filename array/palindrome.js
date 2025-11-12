let arr = [1, 2, 3, 2, 1];

let reversed = [...arr].reverse(); // copy + reverse

if (arr.join('') === reversed.join('')) {
  console.log("✅ Palindrome");
} else {
  console.log("❌ Not a palindrome");
}
