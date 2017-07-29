var sample = "Real analysis is a branch of mathematical analysis dealing with the real numbers and real-valued functions of a real variable. The theorems of real analysis rely intimately upon the structure of the real number line. While the results in real analysis are stated for real numbers, many of these results can be generalized to other mathematical objects. Real analysis is an area of analysis that studies concepts such as sequences and their limits, continuity, differentiation, integration and sequences of functions. By definition, real analysis focuses on the real numbers, often including positive and negative infinity to form the extended real line. Techniques from the theory of analytic functions of a complex variable are often used in real analysis - such as evaluation of real integrals by residue calculus. Various ideas from real analysis can be generalized from real space to general metric spaces, as well as to measure spaces, Banach spaces, and Hilbert spaces."

var unirest = require('unirest');
var TopicDetection = require('topic-detection');

function topic (text) {
    unirest.post("https://proxem-thematization.p.mashape.com/api/wikiAnnotator/GetCategories?nbtopcat=20")
    .header("X-Mashape-Key", "0ZMCFUgJcZmsheN5g0vybr743wQ3p16mXWzjsnkZtcNv6rfY3O")
    .header("Accept", "application/json")
    .header("Content-Type", "text/plain")
    .send(text)
    .end(function (result) {
        console.log(result.body);
    });
}

topic(sample);
