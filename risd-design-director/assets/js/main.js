// $('.gallery-image').draggable();
$('.gallery-video').draggable();

var images = $('.gallery-image');
images.draggable();


console.log('%c Web savvy folks are greatly appreciated. ', 'font-family:gotham, helvetica, sans-serif; font-weight:bold;marign-bottom:1em; background: rgb(0,255,0); color: rgb(0,0,0); font-size:24px; padding:0.5em;');


$('.gallery-image').each(function(){

	var positionLeft = randomX(-15,60);
    var positionTop = randomY(-20,75);
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

console.log($('.gallery-image').css("left"));



function randomX(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}

function randomY(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}

$('.icon').click(function(){
	$('.gallery-image').toggleClass('deselected');
	$(this).closest("figure").toggleClass("big").removeClass('deselected');

	var leftCoordinate = $(this).closest("figure").css("left");
	var galleryContainerWidth = galleryContainer[0].clientWidth;
	var leftCoordinateClean = parseInt(leftCoordinate,10);

	grow(); 
	console.log(leftCoordinateClean);
	console.log("gallery center " + galleryCenter + " left coordinate " + leftCoordinateClean);

	if(leftCoordinateClean >= galleryCenter){
		console.log('woo hoo!');
		$(this).closest("figure").toggleClass("bottom-right");
	} else {
		$(this).closest("figure").toggleClass("bottom-left");

	}
	
	
});



var galleryContainer = $('.gallery-of-work');
var galleryContainerWidth = galleryContainer[0].clientWidth;
var galleryCenter = galleryContainerWidth / 2;

function grow(){
	var galleryContainerWidth = galleryContainer[0].clientWidth;
	var galleryCenter = galleryContainerWidth / 2;

	console.log(galleryContainerWidth);
	console.log(galleryCenter);
}

// console.log(galleryContainerWidth);

$(window).resize(function(){
	grow();
	
});