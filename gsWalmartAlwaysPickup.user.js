// ==UserScript==
// @name     Walmart always Pickup
// @version  1
// @grant    none
// @namespace https://www.walmart.com
// @include https://www.walmart.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
console.log('WaitForKeyElements');
waitForKeyElements(".flex.flex-column.h-100, .flex.flex-wrap.w-100.flex-grow-0.flex-shrink-0.ph2.pr0-xl.pl4-xl.mt0-xl.mt3", Greasemonkey_main);

function Greasemonkey_main () {
try {
    var url = document.location.toString();
    var updateUrl = updateQueryStringParameter(url, 'facet', 'fulfillment_method:Pickup');
    console.log(updateUrl);
    console.log(url != updateUrl);
    if (url != updateUrl) {
        document.location = updateUrl;
    }
} catch (e) {}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}

}

