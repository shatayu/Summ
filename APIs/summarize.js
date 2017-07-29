// These code snippets use an open-source library. http://unirest.io/nodejs
var unirest = require("unirest");

function summarize (url, callback) {
    unirest.get("https://community-smmry.p.mashape.com/?SM_API_KEY=B24997C354&SM_URL=" + url + "&SM_WITH_BREAK=true")
        .header("X-Mashape-Key", "0ZMCFUgJcZmsheN5g0vybr743wQ3p16mXWzjsnkZtcNv6rfY3O")
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log([result.body.sm_api_title, result.body.sm_api_content]);
        });
}

summarize("http://money.cnn.com/2017/07/29/news/companies/faa-airline-seat-sizes/index.html");