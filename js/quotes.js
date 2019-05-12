$.ajax({
	url: ("/res/values/" + (navigator.language || navigator.userLanguage) + "/quotes.xml"),
	success: function (result) {
		var quotes = result.getElementsByTagName("quotes")[0];
		$("#quote").append(quotes.children[Math.floor((Math.random() * quotes.childElementCount))].innerHTML);
	}
});