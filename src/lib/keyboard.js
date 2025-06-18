
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Keyboard = (function() {

//return
	const _return = function() {
		const options = {
			input: {
				inputs: [
					{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input required', required: true, minlength: 3 },
					{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Additional text', rows: 4 }
				]
/*
				callback: function(state) {
					return state.input.length > 2
				}
*/
			}

		}
		gebi('btn-options-enter-submit-true').onclick = function() {
			options.return = true
			Dlg.input(shortText, options).then(fs => {
				console.log('return', fs)
			})
		}
		gebi('btn-options-enter-submit-false').onclick = function() {
			options.return = false
			Dlg.input(shortText, options).then(fs => {
				console.log('return', fs)
			})
		}
	}

//escape
	const escape = function() {
		const options = {
			input: {
				inputs: [
					{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input required', spellcheck: false },
					{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Additional text', rows: 4, spellcheck: false }
				],
				callback: function(state) {
					return state.input.length > 2
				}
			}

		}
		gebi('btn-options-escape-true').onclick = function() {
			options.escape = true
			Dlg.input(shortText, options).then(fs => {
				console.log('escape', fs)
			})
		}
		gebi('btn-options-escape-false').onclick = function() {
			options.escape = false
			Dlg.input(shortText, options).then(fs => {
				console.log('escape', fs)
			})
		}
		gebi('btn-options-escape-return-false').onclick = function() {
			options.escape = false
			options.return = false
			Dlg.input(shortText, options).then(fs => {
				console.log('escape', fs)
			})
		}
	}

	_return()
	escape()

})()

export { Keyboard }
