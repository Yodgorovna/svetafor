const redElement = document.querySelector("header .container .svetafor .red");

const yellowElement = document.querySelector(
  "header .container .svetafor .yellow"
);

const greenElement = document.querySelector(
  "header .container .svetafor .green"
);

setTimeout(() => {
  if ((redElement.style.backgroundColor = "gray")) {
    redElement.style.backgroundColor = "red";
  }
  redElement.style.backgroundColor = "red";
  if ((redElement.style.backgroundColor = "red")) {
    redElement.style.backgroundColor = "blue";
    yellowElement.style.backgroundColor = "yellow";
  }
  redElement.style.backgroundColor = "blue";
  if ((yellowElement.style.backgroundColor = "yellow")) {
    yellowElement.style.backgroundColor = "blue";
    greenElement.style.backgroundColor = "green";
  }
}, 20000);
