const timerDeadline = '2021-02-01'
function getTimeRemaining(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date()),
				days = Math.floor(t / (1000*60*60*24)),
				hours = Math.floor((t / (1000*60*60)) % 24),
				minutes = Math.floor((t / (1000*60)) % 60),
				seconds = Math.floor((t / (1000))%60)
	return {
		total : t,
		days,
		hours,
		minutes,
		seconds
	}
}

function setTime(selector, endtime) {
	let timeInterval = setInterval(updateClock,1000)
	const timer = document.querySelector(selector),
				days = timer.querySelector('#days'),
				hours = timer.querySelector('#hours'),
				minutes = timer.querySelector('#minutes'),
				seconds = timer.querySelector('#seconds')
	function updateClock() {
		const t = getTimeRemaining(endtime)
		days.textContent = getZero(t.days)
		hours.textContent = getZero(t.hours)
		minutes.textContent = getZero(t.minutes)
		seconds.textContent = getZero(t.seconds)
		if (t.total <= 0 ){
			clearInterval(timeInterval)
		}
	}

	function getZero(num){
		return num<10 ? `0${num}` : num
	}
	updateClock()
}
setTime('.timer', timerDeadline)
