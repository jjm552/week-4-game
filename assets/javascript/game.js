window.onload = function(){

	var playerTotal = 0;
	var wins = 0;
	var losses = 0;
	
	// generats random number between 19 & 120 for #randomStart 
	var randomStart = Math.floor((Math.random() * 101) +19);
	console.log(randomStart);
	$("#randomStart").html(randomStart);

	// generates random crystal values adds them to an array
	var crystalArray = [];
	for (var i = 0; i < 4; i++){
		crystalArray[i] = Math.floor((Math.random() * 12) +1);
	}
	console.log(crystalArray);

	//generates crystal image elements with values equal to crystalArray 
	for (var i = 0; i < crystalArray.length; i++){
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", "assets/image/crystal" + i + ".png");
		imageCrystal.attr("width", 100);
		imageCrystal.attr("height",100);
		imageCrystal.attr("data-crystalValue", crystalArray[i]);
		$("#crystals").append(imageCrystal);

	}
	// on click takes random value of crystal and adds to player total
	// and displays on screen
	// debugger;
	$(".crystal-image").on("click", function(){
		var clickedCrystalValue = ($(this).attr("data-crystalValue"));
		clickedCrystalValue = parseInt(clickedCrystalValue);
		playerTotal += clickedCrystalValue;
		console.log(playerTotal);
		console.log(clickedCrystalValue)
		$("#playerTotal").html(playerTotal);
		console.log(randomStart);
		// add jquery to push wins losses to DOM
		if (playerTotal === randomStart){
			wins++;
		}else if (playerTotal > randomStart){
			losses++;
		}

		





	});



}