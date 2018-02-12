$(document).ready(function (event) {

	$("div#swipe_like").on("click", function () {
		swipeLike();
	});

	$("div#swipe_dislike").on("click", function () {
		swipeDislike();
	});


	var photoNumber = -1;

	var totalPhotoNum = 17;

	addNewProfile();

	function toggleCraigSwipeModal() {
		var element = document.getElementById("modal-1");
		var textElement = document.getElementById("modal-text");

		var elementPick = photoNumber
		
		if (photoNumber == 1) {
			elementPick = totalPhotoNum - 1;
		}

		var contentToWrite = 'Okay. Really funny. You cant swipe right since it would break the website!';

		if (!element.checked) {
			element.checked = true;
			textElement.textContent = contentToWrite;
		} else {
			element.checked = false;
		}
	}

	function toggleModal() {
		var element = document.getElementById("modal-1");
		var textElement = document.getElementById("modal-text");

		var elementPick = photoNumber
		
		if (photoNumber == 1) {
			elementPick = totalPhotoNum - 1;
		}

		var contentToWrite = ['A Raccoon is just gonna take you out to eat at a trashy restaurant, and make you feel insecure about how much better his mascara is than yours.',
			'One of the worst choices you could make! He will just honk at you all night and get mad if you try to eat anything off his plate.',
			'Will most likely just creep your photos from afar and stare at you. Also sparkles in the sunlight so you cant go for picnics, should be an obvious NO THANKS!', 
			'There is not much going on between his ears. He thinks rolling around in the dirt is a fun activity, and you will have to chase him if you want to go out for a walk.', 
			'While still very cute, you will end up like his maid: always cleaning up after his messes!',
			'Okay you got me, this might beat having a boyfriend.', 
			'Incredibly jacked, cool accent, and stars in all the best movies (plus was a Governor!). Cant fault you for swiping right!', 
			'While he will be very sweet to you at first, after you spend a lot of time with him you will end up getting a headache!', 
			"You really like this guy. Like a lot. Like a lot a lot. But you can't shake the feeling that there is something fishy about him.", 
			'So incredibly sweet to you. He really opens up, and makes you melt! But you cant seem to handle hanging out with him for more than two days in a row.',
			"Asks you: 'Are you really going out... wearing that?' all the time. Refuses to eat ANYTHING before taking a photo of the meal. NEXT!!", 
			'Lead singer of GWAR, the coolest rock band ever. Is also a space alien that kills humans, so while awesome would probably not make a great bofyriend.', 
			"He broke his first wife's poor heart, and barely ever sees his son. Not a good Dad, not a good boyfriend!", 
			'Seriously? Really? Is unlimited milk worth dating THAT?', 
			'His ideal dates: Drinking fresh blue milk, and doing flips with a small green alien on his back. Pass!',
			'If he took you back to his place, you would have to go to Dagobah the swamp planet, probably get eaten by a snake on the way, and even if you did make it he would serve you soup in his weird tiny mud hut.',
			'Definitely a keeper. He made you this entire website! You should get ready for your date!']
			[photoNumber];

		if (photoNumber == totalPhotoNum - 1) {
			document.getElementById("modal-title").textContent = "Swipe Accepted!";
		}

		if (!element.checked) {
			element.checked = true;
			textElement.textContent = contentToWrite;
		} else {
			element.checked = false;
		}
	}

	function swipe() {
		Draggable.create("#photo", {
			throwProps: true,
			onDragEnd: function (endX) {
				if (Math.round(this.endX) > 0) {
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

		var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
		screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;

		screenWidth = screenWidth;

		var photoElement = document.getElementById("photo");

		var rect = photoElement.getBoundingClientRect();

		var distToMoveX = screenWidth - rect.left - 400;

		var distToMoveY = screenHeight - rect.bottom - 100;

		console.log(rect.left);

		var $photo = $("div.content").find('#photo');

		var swipe = new TimelineMax({ repeat: 0, yoyo: false, repeatDelay: 0, onComplete: remove, onCompleteParams: [$photo] });
		swipe.staggerTo($photo, 0.8, { bezier: [{ left: "+="+distToMoveX, top: "+="+distToMoveY, rotation: "60" }], ease: Power1.easeInOut });

		toggleModal();

		addNewProfile();
	}

	function swipeDislike() {

		var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
		screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;

		screenWidth = screenWidth;

		var photoElement = document.getElementById("photo");

		var rect = photoElement.getBoundingClientRect();

		var distToMoveX = 0 - rect.left + 100;

		var distToMoveY = screenHeight - rect.bottom - 100;

		var $photo = $("div.content").find('#photo');

		var swipe = new TimelineMax({ repeat: 0, yoyo: false, repeatDelay: 0, onComplete: remove, onCompleteParams: [$photo] });
		swipe.staggerTo($photo, 0.8, { bezier: [{ left: "+="+distToMoveX, top: "+="+distToMoveY, rotation: "-60" }], ease: Power1.easeInOut });

		if (photoNumber == totalPhotoNum - 1) {
			toggleCraigSwipeModal();
			photoNumber--;
		}

		addNewProfile();
	}

	function remove(photo) {
		$(photo).remove();
	}

	function addNewProfile() {

		photoNumber++;
		photoNumber = photoNumber % totalPhotoNum;

		var names = ['A Raccoon', 'A Goose', 'Edward Cullen', 'A Puppy', 'A really Cute Puppy',
			'A REALLY Cute Puppy', 'Arnold Schwarzenegger', 'Ice Cream', 'Sushi', 'Lava Cake',
			'The App Instagram', 'Oderus Urungus', 'Darth Vader', 'Star Wars Creature', 'Luke Skywalker',
			'Yoda', 'Craig Loewen'][photoNumber];

		var ages = ['8', '22', '19', '1', '2',
			'1', '22', '0', '0', '0',
			'0', '32', '45', '120', '14',
			'928','23'][photoNumber];

		$("div.content").prepend('<div class="photo" id="photo" style="background-image:url(img/' + photoNumber + '.jpg)">'
			+ '<span class="meta">'
			+ '<p>' + names + ', ' + ages + '</p>'
			+ '<span class="moments">0</span>'
			+ '<span class="users">0</span>'
			+ '</span>'
			+ '</div>');


		console.log(photoNumber);
		

		swipe();
	}

});