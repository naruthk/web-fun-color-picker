"use strict";
var numberColRow = 9;
createGrid(numberColRow);
function createGrid(amount) {
    var divGridWrapper = document.getElementById('grid-wrapper');
    var i = 0;
    for (i; i < (amount * amount); i++) {if (window.CP.shouldStopExecution(1)){break;}
        var divTile = document.createElement('div');
        divTile.classList.add("tiles");
        divTile.innerText = i;
        divTile.id = i;
        divTile.onmouseover = paintBox;
        divGridWrapper.appendChild(divTile);
    }
window.CP.exitedLoop(1);

}
function paintBox() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.innerText = "";
    this.innerHTML = '<span>rgb(</span>' + r + ', ' + g + ', ' + b + '<span>)</span>';
    this.style.background = randomRGB;
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
function removeSettings() {
    this.innerText = this.id;
    if (this.id % 2 == 0) {
        this.style.background = '#FFF';
    }
    else {
        this.style.background = '#ECEFF1';
    }
}
