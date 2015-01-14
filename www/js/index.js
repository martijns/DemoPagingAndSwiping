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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    onDeviceReady: function() {
        var listeningElement = $('.listening');
        var readyElement = $('.ready');

        listeningElement.toggleClass('hide');
        readyElement.toggleClass('hide');
    }
};