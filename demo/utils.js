// Naruth Kongurai
// Project: Color Picker

"use strict";

createGrid(9);

// Creates a grid of n amount of rows and columns.
function createGrid(amount) {
  const divGridWrapper = document.getElementById('grid-wrapper');
  const i = 0;
  for (i; i < amount * amount; i++) {
    if (window.CP.shouldStopExecution(1)) {
      break;
    }
    var divTile = document.createElement('div');
    divTile.classList.add("tiles");
    divTile.innerText = i;
    divTile.id = i;
    divTile.onmouseover = paintBox;
    divGridWrapper.appendChild(divTile);
  }
  window.CP.exitedLoop(1);
}

// Paints each box inside the grid with a randomly created RGB value
function paintBox() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.innerText = "";
    this.innerHTML = '<span>rgb(</span>' + r + ', ' + g + ', ' + b + '<span>)</span>';
    this.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.onclick = function () {
        document.execCommand("copy");
    };
    this.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", this.textContent);
            alert(randomRGB + " copied to clipboard!");
        }
    });
    this.onmouseout = removeSettings;
}

// Removes any existing settings so that a new color can be painted in the box
function removeSettings() {
    this.innerText = this.id;
    if (this.id % 2 == 0) {
      this.style.background = '#FFF';
    } else {
      this.style.background = '#ECEFF1';
    }
}
