
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Wait = (function() {

	gebi('btn-wait-settext').onclick = function() {
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

})()

export { Wait }
