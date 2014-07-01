// ==UserScript==
// @name        RotMG Fullscreen
// @description Makes Realm of the Mad God fullscreen and have a better cursor.
// @version     1
// @namespace   https://github.com/MarkLodato
// @downloadURL https://github.com/MarkLodato/rotmg/raw/master/RotMG_Fullscreen.user.js
// @include     http://www.realmofthemadgod.com/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

// Options
var preserveAspect = true;
var cursor = "url(http://www.macupdate.com/util/iconmd/17513.png) 28 25, auto";

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

// Set the crosshair
document.body.style.cursor = cursor;

// We need to create a div over the flash so the cursor is overridden.
var shimDiv = document.createElement('div');
shimDiv.id = 'shim';
shimDiv.style.position = 'absolute';
shimDiv.style.top = 0;
shimDiv.style.left = 0;
shimDiv.style.width = "100%";
shimDiv.style.height = "100%";
shimDiv.style.zIndex = 3;
document.body.appendChild(shimDiv);

// We also need to reload the flash to allow overlays.
$('embed param[name="wmode"]').val('transparent');
var newEmbed = $('embed').clone(true);
$('embed').replaceWith(newEmbed);
