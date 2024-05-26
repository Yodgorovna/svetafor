const redElement = document.querySelector("header .container .svetafor .red");

const yellowElement = document.querySelector(
  "header .container .svetafor .yellow"
);

const greenElement = document.querySelector(
  "header .container .svetafor .green"
);

function startInterval1() {
  let id1 = setInterval(() => {
    if ((redElement.style.backgroundColor = "gray")) {
      greenElement.style.backgroundColor = "gray";
      redElement.style.backgroundColor = "red";

      clearInterval(id1);
      startInterval2();
    }
  }, 5000);
}

function startInterval2() {
  let id2 = setInterval(() => {
    if ((redElement.style.backgroundColor = "red")) {
      yellowElement.style.backgroundColor = "yellow";
      clearInterval(id2);
      startInterval3();
    }
  }, 2000);
}

function startInterval3() {
  let id3 = setInterval(() => {
    if ((yellowElement.style.backgroundColor = "yellow")) {
      redElement.style.backgroundColor = "gray";
      yellowElement.style.backgroundColor = "gray";
      greenElement.style.backgroundColor = "green";
      clearInterval(id3);
      startInterval1();
    }
  }, 5000);
}

startInterval1();
