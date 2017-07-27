// ==UserScript==
// @name         wootboot
// @namespace    https://wb.karabae.com/
// @version      1.0
// @description  The script allows you to boost your level via woot on plug.dj!
// @author       karabae
// @include     https://plug.dj*
// ==/UserScript==

function checkThenWoot() {
    if (!getElementById("woot").classList.contains('selected'))
        getElementById("woot").click();
}

setInterval(checkThenWoot, 10000);


main();
