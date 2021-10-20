/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "digilab",
		password: "digi123"
	},
	{ // Object @ 1 index
		username: "mohanish",
		password: "12345"
	},
	{ // Object @ 2 index
		username: "Engelsir",
		password: "54321"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.location ="https://online.fliphtml5.com/svfjb/asdi/#p=6";
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password");
}
