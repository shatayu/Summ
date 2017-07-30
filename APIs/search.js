var unirest = require("unirest");

module.exports = {
    key: "8f4b856c2c89483a920618c3cd92ee0d",
    search: function (keywords, key) {
        var queries = "";
        for (var i = 0; i < keywords.length; i++) queries += (keywords[i] + " ");
        unirest.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + queries)
        .header("Ocp-Apim-Subscription-Key", key)
        .send()
        .end(function(result) {

            var data = JSON.parse(result.raw_body);
            var websites = [];
            for (var i = 0; i < 3; i++) {
                websites.push(
                    {
                        url: data.webPages.value[i].url,
                        displayUrl: data.webPages.value[i].displayUrl,
                        description: data.webPages.value[i].snippet
                    }
                )
                console.log(websites);
            }
        })
    }
}

// function search (keywords, key) {
//     var queries = "";
//     for (var i = 0; i < keywords.length; i++) queries += (keywords[i] + " ");
//     unirest.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + queries)
//     .header("Ocp-Apim-Subscription-Key", )
//     .send()
//     .end(function(result) {
//         var data = JSON.parse(result.raw_body);
//         var websites = [];
//         for (var i = 0; i < 3; i++) {
//             websites.push(
//                 {
//                     url: data.webPages.value[i].url,
//                     displayUrl: data.webPages.value[i].displayUrl,
//                     description: data.webPages.value[i].snippet
//                 }
//             )
//             console.log(websites);
//         }
//     })
// }

//search(["memes"]);