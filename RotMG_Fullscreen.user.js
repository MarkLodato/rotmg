// ==UserScript==
// @name        RotMG Fullscreen
// @description Makes Realm of the Mad God take up the full browser window.
// @version     1
// @namespace   https://github.com/MarkLodato
// @downloadURL https://github.com/MarkLodato/rotmg/raw/master/RotMG_Fullscreen.user.js
// @include     http://www.realmofthemadgod.com/
// ==/UserScript==

// Options
var preserveAspect = true;

function removeElements(p) {
    while (p.length) {
        p[0].parentNode.removeChild(p[0]);
    }
}

// Remove the footer
function removeFooter() {
    removeElements(document.body.getElementsByTagName('div'));
    removeElements(document.body.getElementsByTagName('p'));
}

// Expand window to full size
function resizeEmbed() {
    var e = document.body.getElementsByTagName('embed')[0];
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (preserveAspect) {
        if (h * 4 > w * 3) {
            h = w * 3 / 4;
        } else {
            w = h * 4 / 3;
        }
    }
    e.width = w;
    e.height = h;
}

removeFooter();
resizeEmbed();
window.onresize = resizeEmbed;
