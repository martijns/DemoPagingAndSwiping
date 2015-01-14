$(document).ready(function(){
    app.initialize();
});

$(document).on( "mobileinit", function() {
    $.mobile.defaultPageTransition = "slidefade";
}); 

$(document).on( "pageinit", "[data-role='page']", function() {
    var page = "#" + $( this ).attr( "id" );

    $(document).on( "swipeleft", page, function() {
        var next = $(this).jqmData("next");
        if(next){
            $.mobile.changePage("#" + next, { transition: "slidefade"});
        }
    });

    $(document).on( "swiperight", page, function() {
        var prev = $(this).jqmData("prev");
        if(prev){
            $.mobile.changePage("#" + prev, { reverse: true, transition: "slidefade"});
        }
    });
});

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceReady', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    onDeviceReady: function() {
        $('.listening').addClass('hide');
        $('.ready').removeClass('hide');
    }
};

// whenever the share button is clicked
    $(".share").click(function() {
 
        // get the information we want to share, the url
        var linkToShare = $(this).prev().attr('href');
 
        // next we can define the webintent,
        var params = {
            'action': 'http://webintents.org/share',
            'type': 'text/uri-list',
            'data': linkToShare
        };
 
        // create the intent
        var intent = new WebKitIntent(params);
 
        // start the intent, and pass in the callback
        // that is called on succes.
        window.navigator.webkitStartActivity(intent, function(data) {
            $("#callback").text("Received from invoked intent: " + data);
        });
    });