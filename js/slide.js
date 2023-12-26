$(function(){
    var slideCount=$(".slide").length;
    var slideFestival=0;
    var slidePosition;
    setInterval(function(){
        if(slideFestival<slideCount-1){
            slideFestival++;
        }else{
            slideFestival=0;
        }
        slidePosition=slideFestival*(-800)+"px";
        $(".sliders").animate({ left: slidePosition},400);
    },3000);
})