$(document).ready(function () {

	var myStack = new Array();

	$(".pusher").on('click', function(){
		var x = $('.input').val();
		myStack.push(x);
		var n = $( "div" ).length;
		if(n < 3){
			$('#main').append("<div class='item'>" + x + "</div>");
		}
		else{
			$('#main div:first-child').before("<div class='item'>" + x + "</div>");
		}
		$('.input').val(" ");
	}) 

	$(".popper").on('click', function(){
		myStack.pop(); 
		$('.item:first-child').animate({
			marginLeft:"+=100px",
		},1000).fadeOut()
		setTimeout(function (){
			$('.item:first-child').remove()
		}, 1500)
	})

})