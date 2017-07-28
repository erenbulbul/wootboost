// ==UserScript==
// @name         wootboost
// @namespace    https://wb.karahanbuhan.com/
// @version      1.0.0
// @description  The script allows you to boost your level via woot on plug.dj!
// @author       H Karahan Buhan
// @include     https://plug.dj*
// @downloadURL https://github.com/karahanbuhan/wootboost/raw/master/wootboost.user.js
// @updateURL https://github.com/karahanbuhan/wootboost/raw/master/wootboost.user.js
// ==/UserScript==

//jshint esversion: 6

function checkThenWoot() {
    let wootElement = document.getElementById("woot");
    if (!wootElement.classList.contains('selected'))
        wootElement.click();
}

setInterval(checkThenWoot, 10000);
