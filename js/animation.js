const animItems = $("._anim_items");

if ($("._anim_items")){
    $(window).scroll(function()
    {
        if ($(this).scrollTop() > 300) {
            $("#s1").find("._anim_items").each(function(){
                hide_animation($(this));
            })
        }
        if ($(this).scrollTop() > 0) {
            $("#s1").find("._anim_items").each(function(){
                show_animation($(this));
            })
        }
        if($(this).scrollTop() > 900){
            if($(this).scrollTop() < 1450){
                $(".categories").find("._anim_items").each(function(){
                    show_animation($(this));
                })
            }
        }
        if($(this).scrollTop() > 1400){
            $(".categories").find("._anim_items").each(function(){
                hide_animation($(this));
            })
        }
    });
}

function show_animation(block){
    
    block.animate(
        {
            opacity: 1, 
            left: 0
        }, 
        'slow'
    );
}


function hide_animation(block){
    console.log(2);
    block.animate(
        {
            opacity: 0, 
            left: 0
        }, 
        'slow'
    );
}
