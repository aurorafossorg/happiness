var coolColors = [
	'red',
	'orange',
	'purple',
	'green',
	'light-green',
	'lime',
	'amber',
	'light-blue',
	'cyan',
	'teal',
	'pink',
	'deep-purple',
	'indigo',
	'blue',
	'yellow',
	'deep-orange',
	'brown',
	'grey'
];

$.ajax({
	url: ("/res/values/" + (navigator.language || navigator.userLanguage) + "/challenges.xml"),
	success: function (result) {
		var challenges = result.getElementsByTagName("challenges")[0];
		var randomChallenge = challenges.children[Math.floor((Math.random() * challenges.childElementCount))];
		$("#challenge-id").append(randomChallenge.getAttribute("id"));
		$("#challenge").append(randomChallenge.innerHTML);
		$("#challenge-content").toggleClass("challenge-hidden");
		$(".challenge-front").toggleClass(coolColors[Math.floor(Math.random() * coolColors.length)]);
		$(".challenge-front").toggleClass("lighten-2");
	}
});

function flip() {
	$('.challenge-card').toggleClass('challenge-flipped');
}