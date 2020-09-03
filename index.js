const main = () => {
  let temp = document.getElementById("number").value;
  temp = parseFloat(temp);
  if (isNaN(temp)) {
    console.log("not valid input");
    return -1;
  }
  return temp;
};
const printoutput = (format, result) => {
  let resulttext = `The file size is ${result}${format}`;
  document.getElementById("result1").innerHTML = resulttext;
  console.log(resulttext);
};
const ConvertToGigabyte = () => {
  let temp = main();
  if (temp === -1) {
    return;
  }
  let result = +(temp / 10 ** 9).toFixed(9);
  printoutput("GB", result);
};
const ConvertToMegabyte = () => {
  let temp = main();
  if (temp === -1) {
    return;
  }
  let result = +(temp / 10 ** 6).toFixed(6);
  printoutput("MB", result);
};
const convertToKilobyte = () => {
  let temp = main();
  if (temp === -1) {
    return;
  }
  let result = +(temp / 10 ** 3).toFixed(3);
  printoutput("KB", result);
};
