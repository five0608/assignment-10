$(function(){
    $(".main").mouseenter(function(){
        $(this).find(".drop").stop().slideDown();
    })
    $(".main").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
})