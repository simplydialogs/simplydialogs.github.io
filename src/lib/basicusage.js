
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const BasicUsage = (function() {
	if (!gebi('basic-alert')) return

	gebi('basic-alert').onclick = function() {
		Dlg.alert(shortText).then(answer => {	console.log('alert', answer) }) 
	}

	gebi('basic-confirm').onclick = function() {
		Dlg.confirm(shortText).then(answer => {	console.log('confirm', answer) })
	}

	gebi('basic-info').onclick = function() {
		Dlg.information(shortText).then(answer => {	console.log('info', answer) })
	}

	gebi('basic-bell').onclick = function() {	
		Dlg.bell(shortText).then(answer => { console.log('bell', answer) })
	}

	gebi('basic-error').onclick = function() {
		Dlg.error(shortText).then(answer => {	console.log('error', answer) })
	}

	gebi('basic-wait').onclick = function() {
		const wait = Dlg.wait(shortText)
		setTimeout(function() {
			wait.close()
		}, 1500)
	}

	gebi('basic-progress').onclick = function() {
		const progress = Dlg.progress(shortText)
		setTimeout(function() {
			progress.close()
		}, 2500)
	}

/*
	advanced, save that for later
		gebi('basic-progress').onclick = function() {
			const progress = Dlg.progress(shortText, { progress: { value: 0, max: 100 }})
			let value = 0
			const interval = setInterval(function() {
				value++
				progress.setValue(value)
				if (value === 100) {
					progress.close()
					clearInterval(interval)
				}
			}, 10)
		}
*/

		gebi('basic-input').onclick = function() {
			Dlg.input(shortText).then(function(input) {
				console.log('input', input)
			})
		}

		const stackClick = function(cls) {
			cls = typeof cls === 'string' ? cls : ''
			Dlg.info('Info ...', { classes: 'lg'+cls }).then(function(answer) {	console.log(answer)	})
			setTimeout(function() {
				Dlg.confirm('Confirm ...', { classes: 'md'+cls }).then(function(answer) {	console.log(answer)	})
			}, 100)
			setTimeout(function() {
				Dlg.alert('Alert ...', { classes: 'sm'+cls }).then(function(answer) {	console.log(answer)	})
			}, 250)
			setTimeout(function() {
				Dlg.bell('Bell ...', { classes: 'xs'+cls }).then(function(answer) {	console.log(answer)	})
			}, 400)
		}
		gebi('basic-stack').onclick = stackClick

		gebi('basic-stack-middle-positioning').onclick = function() {
			stackClick(' top right')
		}

	//long text
	gebi('basic-alert-long-text').onclick = function() { Dlg.alert(longText).then(answer => { console.log('long text alert', answer) })	}
	gebi('basic-info-long-text').onclick = function() {	Dlg.information(longText).then(answer => { console.log('long text info', answer) }) }
	gebi('basic-confirm-long-text').onclick = function() { Dlg.confirm(longText).then(answer => { console.log('long text confirm', answer) }) }
	gebi('basic-error-long-text').onclick = function() { Dlg.error(longText).then(answer => { console.log('long text error', answer) }) }
	gebi('basic-bell-long-text').onclick = function() { Dlg.bell(longText).then(answer => { console.log('long text bell', answer) }) }
	gebi('basic-input-long-text').onclick = function() { Dlg.input(longText).then(answer => { console.log('long text input', answer) }) }
	gebi('basic-wait-long-text').onclick = function() { 
		const wait = Dlg.wait(longText)
		setTimeout(() => { wait.close() }, 1500)
	}

	//defaults
	gebi('options-alert-header-icon-shorthand').onclick = function() {
		Dlg.alert(shortText, { icon: '🔥', header: 'Danger!' })
	}


})()

export { BasicUsage }
