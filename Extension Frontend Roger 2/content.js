$.get(chrome.extension.getURL('./overlay.html'), function(data) {
        $(data).appendTo('body');
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
        alert("started");
    }
