let password = prompt("write your password");

let ptry = Math.floor(Math.random() * 10 ** (password.length));

var i = 0;

while (ptry !== password) {
	console.log(ptry);
	ptry = Math.floor(Math.random() * 10 ** (password.length));
	if (ptry == password) {
		console.log(`%c${ptry}`, "color: green; font-size: 15px;");
		console.log("%cI got it","color: green; font-size: 15px;");
		document.getElementById("h1").innerHTML = `I got it, it is: ${ptry}`;
		document.getElementById("h1").data_text = `I got it, it is: ${ptry}`;
		break;
	}

}


