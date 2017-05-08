// $('.gallery-image').draggable();
$('.gallery-video').draggable();

var images = $('.gallery-image');
images.draggable();




$('.gallery-image').each(function(){

	var positionLeft = randomX(-15,60);
    var positionTop = randomY(-20,60);
    var positionZ = randomX(1,10);

    $(this).css("left", positionLeft + "%");
    $(this).css("top", positionTop + "%");

    $(this).css("z-index", positionZ);

 
    images.hover(hovering, notHovering);
    function hovering(){
    	positionZ = positionZ + 1000;
		$(this).css("z-index", positionZ);
	}

	function notHovering(){
		positionZ = positionZ - 1;
		$(this).css("z-index", positionZ);
	}
    
});




function randomX(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}

function randomY(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}



