$(document).ready(function()
{

   $("img").hover(function()
   {
	   $(this).css("background-color", "red"); 
	   $("#infotag").show();
   },
   
   function()
   {
	   $(this).css("background-color", "white"); 
	   $("#infotag").hide();
   });
   



$("img").on({
	
	mouseenter: function()
	{
		$("infotag").show();
	},
	
	mouseleave: function()
    {
		$("#infotag").hide();
	}
	
});




$("button").mouseenter(function()
{
	$(this).toggleClass("top bottom");	
});




$("tr > td:first").click(function()
{
	$("div").toggle();
});



});


