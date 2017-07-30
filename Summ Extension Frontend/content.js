
window.onload = function() {

    $.get(chrome.extension.getURL('./overlay.html'), function(data) {
        $(data).appendTo('body');
        //    $($.parseHTML(data)).appendTo('body');
    });

}