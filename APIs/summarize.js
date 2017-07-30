var unirest = require("unirest");

module.exports = {
    key:  "0ZMCFUgJcZmsheN5g0vybr743wQ3p16mXWzjsnkZtcNv6rfY3O",
    summarize: function (url, key, callback) {
        unirest.get("https://community-smmry.p.mashape.com/?SM_API_KEY=B24997C354&SM_URL=" + url + "&SM_WITH_BREAK=true")
        .header("X-Mashape-Key", key)
        .header("Accept", "text/plain")
        .end(function (result) {

            //return ([result.body.sm_api_title, result.body.sm_api_content]);
        });
    }
}