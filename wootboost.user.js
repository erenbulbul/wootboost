// ==UserScript==
// @name         wootboot
// @namespace    https://wb.karabae.com/
// @version      1.0.0
// @description  The script allows you to boost your level via woot on plug.dj!
// @author       karabae
// @include     https://plug.dj*
// ==/UserScript==

//jshint esversion: 6

function checkThenWoot() {
    let wootElement = document.getElementById("woot");
    if (!wootElement.classList.contains('selected'))
        wootElement.click();
}

setInterval(checkThenWoot, 10000);
