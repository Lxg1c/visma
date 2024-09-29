//Получаем объекты
//Плеер
var videoPlayer = document.getElementById('video')
var actionButton = document.getElementById('play-btn')
function videoAct() {
	//Запускаем или ставим на паузу
	if (videoPlayer.paused) {
		videoPlayer.play()
		actionButton.style.display = 'none'
	} else {
		videoPlayer.pause()
		actionButton.style.display = 'block'
	}
	if (durationTime.innerHTML == '00:00') {
		durationTime.innerHTML = videoTime(videoPlayer.duration) //Об этой функции чуть ниже
	}
}

actionButton.addEventListener('click', videoAct)
videoPlayer.addEventListener('click', videoAct)
