//check of todos by clicling
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();

});
event.stopPropagation();
});
$("input[type='text']").keypress(function(e){
  if($("input").val()!=""){
  if(e.which === 13){
    var todoText= $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
  }}
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
