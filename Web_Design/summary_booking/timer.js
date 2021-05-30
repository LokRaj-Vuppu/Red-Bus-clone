alert('linked')

const startingMinutes = 0.4;
let time = startingMinutes * 60;

const countDownElement = document.getElementById('countdown');

setInterval(updateCountDown, 1000)

function updateCountDown() {
	
	const minutes = Math.floor(time / 60);

	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countDownElement.innerHTML = minutes +':' +seconds;
	
	time--;

	time = time < 0 ? 0 : time;

	if (time == 0) {
		window.location.href = "end.html";
	} 
}