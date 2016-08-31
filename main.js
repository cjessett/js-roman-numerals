// input to heading binding function
(function () {
  var idName = "userInput";
  var previewId = "preview";

  function attachEvent(idName) {
    var userInput = document.getElementById(idName);
    var preview = document.getElementById(previewId);

    userInput.onkeyup = function () {
      preview.innerHTML = toRoman(this.value);
    }
  };
  attachEvent(idName);
})();

// roman numeral converter
function toRoman(numString) {
  var nums = { 1000:'M', 900:'CM', 500:'D', 400:'CD',100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X',9:'IX', 5:'V', 4:'IV', 1:'I' }
  var result = "";
  var keys = Object.keys(nums);
  var i = keys.length - 1;

  while(i >= 0) {
    var int = keys[i]
    while(numString >= parseInt(int)) {
      numString -= int;
      result += nums[int];
    }
    i--;
  }
  return result
}
