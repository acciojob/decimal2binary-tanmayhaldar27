function convertToBinary() {
  // Get the decimal number input value
  var decimalInput = document.getElementById("decimal-input").value;

  // Convert decimal to binary
  var binaryOutput = decimalToBinary(decimalInput);

  // Set the binary number output value
  document.getElementById("binary-output").value = binaryOutput;
}

function decimalToBinary(decimal) {
  // Check for the base case
  if (decimal === 0) {
    return "0";
  }

  var binary = "";

  // Convert decimal to binary using division and remainder
  while (decimal > 0) {
    var remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
