//Crazy Travel Scenario Generator

function pickCountry() {
	let countries = ['Aruba', 'Bermuda', 'Cameroon', 'Dijibouti', 'Estonia', 'Falkland Islands', 'Gabon', 'Hungary', 'Israel', 'Jordan', 'Kyrgyzstan',
					'Lesotho', 'Mongolia', 'Namibia', 'Oman', 'Portugal', 'Romania', 'Singapore', 'Taiwan', 'Zimbabwe'];
	let sidesOfDie = 20;
	let randomNumber = rollDie(sidesOfDie);
	let chosenCountry = countries[randomNumber];
		document.getElementById('countryDisplay').innerHTML = chosenCountry.bold();
 }

function pickMonth() {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let sidesOfDie = 12;
	let randomNumber = rollDie(sidesOfDie);
	let chosenMonth = months[randomNumber];
		document.getElementById('monthDisplay').innerHTML = chosenMonth.bold();
}

function pickTransport() {
	let transport = ['jet plane', 'helicopter', 'submarine', 'ship', 'bus', 'carriage', 'train', 'horse', 'bicycle', 'hitchhiking'];
	let sidesOfDie = 10;
	let randomNumber = rollDie(sidesOfDie);
	let chosenTransport = transport[randomNumber];
		document.getElementById('transportDisplay').innerHTML = chosenTransport.bold();
}

function pickTravelCompanion() {
	let travelCompanions = ['parents', 'siblings', 'in-laws', 'out-laws', 'pet monkey', 'pet parrot', 'pet lizard', 'pet hippo'];
	let sidesOfDie = 8;
	let randomNumber = rollDie(sidesOfDie);
	let chosenCompanion = travelCompanions[randomNumber];
		document.getElementById('companionDisplay').innerHTML = chosenCompanion.bold();
}

function pickLuggage() {
	let luggage = ['purse', 'satchel', 'plastic bag', 'hat box', 'treasure chest', 'saddlebag'];
	let sidesOfDie = 6;
	let randomNumber = rollDie(sidesOfDie);
	let chosenLuggage = luggage[randomNumber];
		document.getElementById('luggageDisplay').innerHTML = chosenLuggage.bold();
}

function pickDuration() {
	let duration = ['3 day', '1 week', '2 month', '6 month'];
	let sidesOfDie = 4;
	let randomNumber = rollDie(sidesOfDie);
	let chosenDuration = duration[randomNumber];
		document.getElementById('durationDisplay').innerHTML = chosenDuration.bold();
}

function rollDie(sidesOfDie) {
	let randomNumber = Math.floor(Math.random() * sidesOfDie);
	return randomNumber;
}
