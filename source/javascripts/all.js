//= require_tree .


$(document).ready(function(){

  console.log("Ready")

  $('.menu').click(function(){
    console.log(this)
    $(this).toggleClass('open');
  });
})
