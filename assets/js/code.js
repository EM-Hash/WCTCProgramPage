$(onReady);

function onReady(){
    $(".collapse-button").on("click",function(event){
        let target = $(event.target).data('target');
        $(target).collapse('toggle');
    });

    $(".navTab").on("click",function(event){
       event.preventDefault();
       $(this).tab('show');
    });

    $(".dropdown-toggle").hover(function(){
        $(this).dropdown('show');
    }, function(){
        $(this).dropdown('hide');
    });

    $(".dropdown-menu").hover(function(){
        $(this).dropdown('show');
    }, function(){
        $(this).dropdown('hide');
    });
}

