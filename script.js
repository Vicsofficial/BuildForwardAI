
$(".main").hover(()=>{
    $(".main").animate({
        height: '550px',
        width: '750px'
    }), 10000, ()=>{
        $(".main").animate({
            height: '500px',
            width: '700px'
        }), 10000;
    };
});