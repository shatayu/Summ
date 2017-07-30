var unirest = require("unirest");
var express = require("express");
var app     = express();
var bodyParser = require("body-parser");

var summarize = require("./summarize.js");
var topic = require("./topic.js");
var search = require("./search.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;   
var router = express.Router();     
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.route('/summary/:url')
    .get(function(req, res) {     
    // first GET request summarizes URL
    unirest.get("https://community-smmry.p.mashape.com/?SM_API_KEY=B24997C354&SM_URL=" + req.params.url + "&SM_WITH_BREAK=true")
        .header("X-Mashape-Key", "0ZMCFUgJcZmsheN5g0vybr743wQ3p16mXWzjsnkZtcNv6rfY3O")
        .header("Accept", "text/plain")
        .end(function (summary) {
        // second GET request gets topics of summarized article
        unirest.post("https://proxem-thematization.p.mashape.com/api/wikiAnnotator/GetCategories?nbtopcat=20")
            .header("X-Mashape-Key", "0ZMCFUgJcZmsheN5g0vybr743wQ3p16mXWzjsnkZtcNv6rfY3O")
            .header("Accept", "application/json")
            .header("Content-Type", "text/plain")
            .send(summary.body.sm_api_content)
            .end(function (topics) {
            // third GET request gets links

            var queries = topics.body.categories[0].name + " " + topics.body.categories[1].name + " " + topics.body.categories[2].name;
            console.log(queries);
            unirest.get("https://api.cognitive.microsoft.com/bing/v5.0/search?q=" + queries)
                .header("Ocp-Apim-Subscription-Key", "8f4b856c2c89483a920618c3cd92ee0d")
                .send()
                .end(function(result) {
                var data = JSON.parse(result.raw_body);
                //console.log(data);
                var websites = [];
                for (var i = 0; i < 3; i++) {
                    websites.push(
                        {
                            name: data.webPages.value[i].name,
                            url: data.webPages.value[i].url,
                            displayUrl: data.webPages.value[i].displayUrl,
                            description: data.webPages.value[i].snippet
                        }
                    )
                    var final = {
                        name: summary.body.sm_api_title,
                        sentences: summary.body.sm_api_content,
                        links: websites
                    }
                    }
                res.json(final);
            })
        });
    });
});

