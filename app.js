var display = document.getElementById("display");

function isEqualTo() {
  try {
    let expression = display.innerText.replace(/x/g, '*');
    display.innerText = eval(expression);
  } catch {
    display.innerText = "error!";
  };
};

function clearAll() {
  display.innerText = "";
};

function btn(ele) {
// console.log(ele);
if (display.innerText === "error!") {
  display.innerText = "";
};
display.innerText += ele;
};