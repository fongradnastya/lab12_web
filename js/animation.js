const animItems = $("._anim_items");

if ($("._anim_items")){
    $(window).scroll(function()
    {
        if ($(this).scrollTop() > 0) {
            $("._anim_items").each(function(){
                new_animation($(this));
            })
        }
    });
}

function new_animation(block){
    block.animate(
        {
            width: "300px",
            height: "300px"
        }, 
        1000, "linear"
    );
}

new_animation();