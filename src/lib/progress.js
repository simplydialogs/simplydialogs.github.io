
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Progress = (function() {

	gebi('btn-progress-indeterminate').onclick = function() {
		const progress = Dlg.progress(shortText)
		setTimeout(() => progress.close(), 2000)
	}

	gebi('btn-progress-fixed').onclick = function() {
		const progress = Dlg.progress(shortText, { progress: { value: 75, max: 100 }})
		setTimeout(() => progress.close(), 2000)
	}

	gebi('btn-progress-progress').onclick = function() {
		const progress = Dlg.progress(shortText, { progress: { value: 0, max: 100 }})

		let interval, value = 0
		const update = function() {
			value ++
			progress.setValue(value)
			progress.setText(`progress ${value}%`)
			if (value > 100) {
				clearInterval(interval)
				progress.close()
			}
		}
		interval = setInterval(update, 20)
	}

/*
	gebi('btn-progress-setvalue').onclick = function() {
		let counter = 0
		let interval = undefined
		const wait = Dlg.wait('text or message not changed')
		const add = function() {
			counter ++
			wait.setText(`text or message changed ${counter} time(s)`)
			if (counter>5) {
				clearInterval(interval)
				wait.close()
			}
		}
		interval = setInterval(add, 1000)
	}

	gebi('btn-wait-addtext').onclick = function() {
		let counter = 0
		let interval = undefined
		const wait = Dlg.wait('initial line')
		const add = function() {
			counter ++
			wait.addText(`<br>${counter} line(s) added to message`)
			if (counter>5) {
				clearInterval(interval)
				wait.close()
			}
		}
		interval = setInterval(add, 1000)
	}
*/

})()

export { Progress }

