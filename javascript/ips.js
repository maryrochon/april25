//animation
$(document).scroll(function(){
    $("#cars1").addClass("move1")
    $("#cars2").addClass("move2")
    $("#cars3").addClass("move3")
    $("#cars4").addClass("move4")
    $("#cars5").addClass("move5")
    $("#cars6").addClass("move6")
    $("#cars7").addClass("move7")
    $("#cars8").addClass("move8")
    $("#cars9").addClass("move9")
    $("#cars10").addClass("move10")
    $("#ips1").addClass("move11")
    $("#ips2").addClass("move12")
    $("#ips3").addClass("move13")
 })
//graph
$("#ips1").hover(function(){
    $(".graph").toggleClass("ps1")
    if($("#ips1:hover").length == 1) {
    $("#yel1").css("opacity", "1")
    }
 else{
    $("#yel1").css("opacity", "0")
 }
})
$("#ips2").hover(function(){
    $(".graph").toggleClass("ps2")
    if($("#ips2:hover").length == 1) {
    $("#yel2").css("opacity", "1")
    }
 else{
    $("#yel2").css("opacity", "0")
 }
})
$("#ips3").hover(function(){
    $(".graph").toggleClass("ps3")
    if($("#ips3:hover").length == 1) {
    $("#yel3").css("opacity", "1")
    }
 else{
    $("#yel3").css("opacity", "0")
 }
})