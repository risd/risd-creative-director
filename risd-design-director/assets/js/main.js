// $('.gallery-image').draggable();
$('.gallery-video').draggable();

var images = $('.gallery-image');
images.draggable();





$('.gallery-image').each(function(){
	// var image = this.images
	var positionLeft = randomX(-15,120);
    var positionTop = randomY(-10,100);
    var positionZ = randomX(1,10);

    $(this).css("z-index", positionZ);

    if (positionLeft < 50){
		 $(this).css("left", positionLeft + "%");
    } else if (positionLeft > 50){
    	positionLeft = 100 - positionLeft; 
    	$(this).css("right", positionLeft + "%");
    }

    if(positionTop < 50){
		$(this).css("top", positionTop + "%" );
    } else if (positionTop > 50){
    	positionTop = 100 - positionTop; 
    	$(this).css("bottom", positionTop + "%");
    }

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


// console.log(images[0].dataset.title);
// console.log(randomX(0,100));
// console.log(randomY(0,100));

function randomX(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}

function randomY(min, max){
	return Math.floor(Math.random() * (max - min)) + min;		
}




// images.css("top", positionTop + "%");