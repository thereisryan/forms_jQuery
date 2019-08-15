$(function(){
  $("#formOne").submit(function(event){
    $(".person1").append("input#person1").val()
    $(".person2").append("input#person2").val()

    $("#story").show()

    event.preventDefault()
  })
})
