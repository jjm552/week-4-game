window.onload = function(){

	var playerTotal = 0;
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
		imageCrystal.attr("data-crystalValue", crystalArray[i]);
		$("#crystals").append(imageCrystal);

	}

	$(".crystal-image").on("click", function(){
		var clickedCrystalValue = ($(this).attr("data-crystalValue"));
		clickedCrystalValue = parseInt(clickedCrystalValue);
		playerTotal += clickedCrystalValue;
		console.log(playerTotal);
		console.log(clickedCrystalValue)
		$("#playerTotal").html("Current Total: " + playerTotal);

		





	});



}