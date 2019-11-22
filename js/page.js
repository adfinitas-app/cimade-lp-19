var url_string = window.location.href;
var url = new URL(url_string);
var utmParams = "";

if (url.searchParams.get("utm_campaign")) {
    utmParams += "&utm_campaign=" + url.searchParams.get("utm_campaign");
} else {
    utmParams += "&utm_campaign=LP";
}

if (url.searchParams.get("utm_source")) {
    utmParams += "&utm_source=" + url.searchParams.get("utm_source");
} else {
    utmParams += "&utm_source=FA19";
}

console.log(utmParams);