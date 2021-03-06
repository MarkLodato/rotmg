// ==UserScript==
// @name        RotMG Cursor
// @description DOES NOT WORK - Replaces the cursor of Realm of the Mad God.
// @version     1.1
// @namespace   https://github.com/MarkLodato
// @downloadURL https://github.com/MarkLodato/rotmg/raw/master/RotMG_Cursor.user.js
// @include     http://www.realmofthemadgod.com/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

// NOTE: Does not work in Chrome Linux (at least) - nothing is clickable.

// Options
var cursor = "url(https://raw.githubusercontent.com/MarkLodato/rotmg/master/rotmg.cur), auto";

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
