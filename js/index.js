$(document).ready(function(event) {
	
	$("div#swipe_like").on( "click", function() {
		swipeLike();
	});	

	$("div#swipe_dislike").on( "click", function() {
		swipeDislike();
	});	


	var photoNumber = 0;

	var totalPhotoNum = 16;

	addNewProfile();

	

	function swipe() {
		Draggable.create("#photo", {
		   	throwProps:true,
		   	onDragEnd:function(endX) {
	   			if(Math.round(this.endX) > 0 ) {
	   				swipeLike();			
	   			}
	   			else {
	   				swipeDislike();
	   			}
	   			console.log(Math.round(this.endX));
			}
		});
	}

	function swipeLike() {
		
			var $photo = $("div.content").find('#photo');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=400", top:"+=300", rotation:"60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function swipeDislike() {
		
			var $photo = $("div.content").find('#photo');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=-350", top:"+=300", rotation:"-60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function remove(photo) {
	    $(photo).remove();
	}

	function addNewProfile() {
	
		var names = ['A Raccoon', 'A Goose', 'Edward Cullen', 'A Puppy', 'A really Cute Puppy',
		 'A REALLY Cute Puppy', 'Arnold Schwarzenegger', 'Ice Cream',  'Sushi', 'Lava Cake',
		 'The App Instagram', 'Oderus Urungus', 'Darth Vader','Star Wars Creature','Drinking Blue Milk',
		 'Yoda'][photoNumber];

		var ages = ['8','22','19','1','2',
					'1', '22','0','0','0',
					'0','32','45','120','14',
					'928'][photoNumber];

		$("div.content").prepend('<div class="photo" id="photo" style="background-image:url(img/'+photoNumber+'.jpg)">'
    	+ '<span class="meta">' 
    	+ '<p>'+names+', '+ages+'</p>' 
    	+ '<span class="moments">0</span>' 
    	+ '<span class="users">0</span>' 
    	+ '</span>' 
		+ '</div>');
		
		photoNumber++;

		photoNumber = photoNumber % totalPhotoNum;

    	swipe();
	}

});