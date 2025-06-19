
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Radio = (function() {

	gebi('btn-input-radio').onclick = function() {
		const options = { 
			input: { 
				inputs: [
					{ type: 'radio', label: 'radio', name: 'radio', value: 'option2',
						options: [
							{ label: 'option1', value: 'option1' },
							{ label: 'option2', value: 'option2' },
							{ label: 'option3', value: 'option3' }
						]
					}
				]
      }
		}
		Dlg.input(shortText, options).then(input => console.log('radio', input))
	}

	gebi('btn-input-radio-inline').onclick = function() {
		const options = { 
			input: { 
				inputs: [
					{ type: 'radio', label: 'radio', name: 'radio', value: 'option2', inline: true,
						options: [
							{ label: 'option1', value: 'option1' },
							{ label: 'option2', value: 'option2' },
							{ label: 'option3', value: 'option3' }
						]
					}
				]
      }
		}
		Dlg.input(shortText, options).then(input => console.log('radio', input))
	}

})()

export { Radio }
