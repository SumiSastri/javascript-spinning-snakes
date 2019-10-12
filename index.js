let image = document.querySelector('#snake');

image.onclick = stop;
function stop() {
	if (image.className == 'stop') {
		image.className = 'spinsnake';
	} else {
		image.className = 'stop';
	}
}
