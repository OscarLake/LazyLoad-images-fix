// ==UserScript==
// @name     Add some name here
// @version  1
// @match https:\\* //add some url here
// @require https://code.jquery.com/jquery-3.6.3.min.js
// @grant none
// @run-at document-end
// ==/UserScript==

$( ".jetpack-lazy-image" ).each(function() {
    var curElem = $(this);
    curElem.attr("src", curElem.attr('data-src')).removeAttr('data-src');
});
