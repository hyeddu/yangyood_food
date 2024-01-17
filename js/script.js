$(document).ready(function(){
    let menu = $('.nav > ul > li');

    menu.mouseenter(function(){
        $(this).addClass('active');
    });

    menu.mouseleave(function(){
        $(this).removeClass('active');
    });

    let open = $('.header .open'),
        close = $('.drawer .close');
        
    open.click(function(){
        $('.drawer').addClass('active');
    });

    close.click(function(){
        $('.drawer').removeClass('active');
    });


});