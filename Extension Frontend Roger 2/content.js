window.onload = function() {
    console.log("content script running...");

    $.get(chrome.extension.getURL('./overlay.html'), function(data) {
        $(data).appendTo('body');
            console.log("overlay appended...");

        //    $($.parseHTML(data)).appendTo('body');
    }); 
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if( request.message === "start" ) {
                start();
            }
        }
    );

    function start(){
       
    }
}