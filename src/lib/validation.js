
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Validation = (function() {

	gebi('btn-validation-example-42').onclick = function() {
		const options = {
			input: {
				callback: function(state, dialog) {
					if (state.input == '42') {
						dialog.querySelector('input').style.outline = '3px solid green'
						return true
					} else {
						dialog.querySelector('input').style.outline = 'none'
						return false
					}
				}
			}
		}
		Dlg.input('The answer to life, the universe and everything', options).then(input => console.log(input))
	}

})()

export { Validation }
