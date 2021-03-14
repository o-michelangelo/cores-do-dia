function loader() {
	const msg = document.querySelector("div.msg");
	const img = document.querySelector(".image");
	const backSection = document.querySelector("section#content");
	const title = document.getElementById("title");

	let data = new Date();
	let hours = data.getHours();

	if (hours >= 18) {
		msg.innerText = `Agora são ${hours} hora(s) da noite`;
		img.src = "src/noite150.png";
		title.style.color = "#e1d5a7e";
		document.body.style.background = "#2d2d5c";
		backSection.style.background = "#706d76";
	} else if (hours >= 12 && hours < 18) {
		msg.innerText = `Agora são ${hours} hora(s) da tarde`;
		img.src = "src/tarde150.png";
		title.style.color = "#523320";
		document.body.style.background = "#ffa64e";
		backSection.style.background = "#ffda25";
	} else {
		msg.innerText = `Agora são ${hours} hora(s) da manhã`;
		img.src = "src/dia150.png";
		title.style.color = "#ffffff";
		document.body.style.background = "#007bff";
		backSection.style.background = "#d0e2f0";
	}
}
