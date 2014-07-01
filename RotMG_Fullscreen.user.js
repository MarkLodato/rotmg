// ==UserScript==
// @name        RotMG Fullscreen
// @namespace   mark
// @include     http://www.realmofthemadgod.com/
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

// Options
var preserveAspect = true;
var cursor = "url(http://www.macupdate.com/util/iconmd/17513.png) 28 25, auto";

// Remove the footer
function removeFooter() {
    var p = document.body.getElementsByTagName('p');
    while (p.length) {
        p[0].parentNode.removeChild(p[0]);
    }
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
