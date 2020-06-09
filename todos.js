// check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("checked");
})
// click on X to delete ToDo
$("ul").on("click", "span" ,function(event){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    }
    );
    // to stop bubbling of event listners use stop propagation 
    event.stopPropagation();
});
// Creating a new To-Do
$("input[type ='text'").keypress(function(event){
    if(event.which === 13){
        var str = $(this).val();
        $(this).val("");
        // create a new li and add to list 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+str+"</li>")
        
    }
});
// working of a plus button
$(".fa-plus").click(function(){
    $("input[type ='text'").fadeToggle();
});