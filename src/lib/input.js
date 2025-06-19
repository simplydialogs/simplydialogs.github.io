
import { gebi, qall, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Input = (function() {

/*
	gebi('btn-input-textarea').onclick = function() {
		const options = {
			input: {
				inputs: [
					{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input needed' },
					{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Enter some tekst', rows: 5, cols: 50 }
				]
			}
		}
		Dlg.input(shortText, options).then(function(input) {
			console.log('result', input)
		})
	}
*/

		gebi('btn-input-textarea-autofocus').onclick = function() {
			const options = {
				input: {
					inputs: [
						{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input needed' },
						{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Enter some tekst', rows: 5, cols: 50, autofocus: true }
					]
				}
			}
			Dlg.input(shortText, options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-textarea-spellcheck').onclick = function() {
			const options = {
				input: {
					inputs: [
						{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input needed' },
						{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Enter some tekst', rows: 5, cols: 50, spellcheck: true }
					]
				}
			}
			Dlg.input(shortText, options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-autocomplete-textarea').onclick = function() {
			const options = {
				input: {
					inputs: [
						{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input needed', autocomplete: 'on' },
						{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Enter some tekst', rows: 5, cols: 50 }
					]
				}
			}
			Dlg.input(shortText, options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-all').onclick = function() {
			const options = {
				header: 'inputType',
				input: {
					formLayout: 'left clear-left',
					inputs: [
						{ type: 'input', inputType: 'text', label: 'Text', name: 'input', placeholder: 'Type some text ...' },
						{ type: 'input', inputType: 'checkbox', label: 'Checkbox', name: 'checkbox', checked: true },
						{ type: 'input', inputType: 'color', label: 'Color', name: 'color', value: '#123456' },
						{ type: 'input', inputType: 'number', label: 'Number', name: 'number', value: 42 },
						{ type: 'input', inputType: 'password', label: 'Password', name: 'password', style: 'color:maroon;' },
						{ type: 'input', inputType: 'date', label: 'Date', name: 'date' },
						{ type: 'input', inputType: 'datetime-local', label: 'Datetime-local', name: 'datetime-local' },
						{ type: 'input', inputType: 'week', label: 'Week', name: 'week' },
						{ type: 'input', inputType: 'file', label: 'File', name: 'file' },
						{ type: 'input', inputType: 'url', label: 'Url', name: 'url' },
						{ type: 'input', inputType: 'tel', label: 'Tel', name: 'tel' },
						{ type: 'input', inputType: 'email', label: 'Email', name: 'email' },
						{ type: 'input', inputType: 'range', label: 'Range', name: 'range', value:25, max: 100 },
						{ type: 'input', inputType: 'hidden', label: '', name: 'hidden', value: 'You can pass extra values to the form via hidden inputs' }
					]
				}
			}
			Dlg.input(shortText, options).then(input => console.log('result', input))
		}
/*
*/
/*
		gebi('btn-input-radio-select-no-value').onclick = function() {
			const options = { 
				input: { 
					inputs: [
						{ type: 'radio', label: 'radio', name: 'radio',
							options: [
									{ label: 'option1', value: 'option1' },
									{ label: 'option2', value: 'option2' },
									{ label: 'option3', value: 'option3' }
								]
						},
						{ type: 'select', label: 'select', name: 'select', 
								options: [
									{ label: 'option1', value: 'option1' },
									{ label: 'option2', value: 'option2' },
									{ label: 'option3', value: 'option3' }
								]
						}
					],
          callback: function(state) {
            return state.radio !== '' && state.select !== ''
          }
        }
      }
			Dlg.input(shortText, options).then(function(input) {
				console.log('radio select', input)
			})
		}
*/
		gebi('btn-input-file').onclick = function() {
			const options = {
				headers: { input: 'Upload Image' },
				icons: { input: '🖼' },
				input: {
					inputs: [
						{ type: 'input', inputType: 'image', label: 'Preview', name: 'preview', alt: 'No image yet', disabled: 'disabled',
							src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>',
							style: 'min-height: 20vh; max-height: 50vh; border: 1px solid #dadada; object-fit: contain;' },
						{ type: 'input', inputType: 'file', label: 'Image', name: 'file', accept: 'image/png, image/gif, image/jpeg' }
					],
					callback: function(state, dialog) {
						if (state.file) {
							dialog.querySelector('input[type="image"]').src = URL.createObjectURL(state.file)
							return true
						}
					}
				}
			}
			Dlg.input('Select image file <br><sup>(PNG, GIF, JPG supported)</sup>', options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-login-dialog').onclick = function() {
			const options = {
				headers: { input: 'Login' },
				icons: { input: '🔑' },
				classes: 'md-height sm-width',
				input: {
					formLayout: 'left fullwidth',
					inputs: [	
						{ type: 'input', inputType: 'text', label: 'Username', name: 'username', autocomplete: 'off' },
						{ type: 'input', inputType: 'password', label: 'Password', name: 'password' }  
					],
					callback: function(state) {
						return state.username.length > 0 && state.password.length > 0
					}
				}
			}
			Dlg.input('', options).then(input => {
				console.log('login', input)
			})
		}

//
	gebi('btn-input-simple-login').onclick = function() {
		const options = {
			header: 'Login',
			icon: '🔑',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username', required: true, minlength: 3 },
					{ type: 'input', inputType: 'password', label: 'Password', name: 'password', required: true, minlength: 3 }  
				],
			}
		}
		Dlg.input('', options).then(input => console.log('login', input))
	}

	gebi('btn-input-simple-login-autocomplete').onclick = function() {
		const options = {
			header: 'Login',
			icon: '🔑',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username', required: true, minlength: 3, autocomplete: true },
					{ type: 'input', inputType: 'password', label: 'Password', name: 'password', required: true, minlength: 3, autocomplete: true }  
				],
			}
		}
		Dlg.input('', options).then(input => console.log('login', input))
	}

	gebi('btn-input-simple-login-spellcheck').onclick = function() {
		const options = {
			header: 'Login',
			icon: '🔑',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username', required: true, minlength: 3, spellcheck: true },
					{ type: 'input', inputType: 'password', label: 'Password', name: 'password', required: true, minlength: 3 }  
				],
			}
		}
		Dlg.input('', options).then(input => console.log('login', input))
	}

	gebi('btn-input-simple-login-classes-required').onclick = function() {
		const options = {
			header: 'Login',
			icon: '🔑',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username', required: true, minlength: 3, classes: 'required' },
					{ type: 'input', inputType: 'password', label: 'Password', name: 'password', required: true, minlength: 3, classes: 'required' }  
				],
			}
		}
		Dlg.input('', options).then(input => console.log('login', input))
	}

/*
	gebi('btn-input-simple-login-required').onclick = function() {
		const options = {
			header: 'Login',
			icon: '🔑',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username', required: true, minlength: 3 },
					{ type: 'input', inputType: 'password', label: 'Password', name: 'password', required: true, minlength: 3 }  
				],
			}
		}
		Dlg.input('', options).then(input => console.log('login', input))
	}
*/

//validation
	gebi('btn-validation-required-email').onclick = function() {
		const options = {
			header: 'Enter valid email',
			icon: '📧',
			input: {
				inputs: [	
					{ type: 'input', inputType: 'email', name: 'email', required: true, spellcheck: false },
			]}
		}
		Dlg.input('', options).then(input => {
			console.log('email', input)
		})
	}

	gebi('btn-validation-required-danish-phone-number').onclick = function() {
		const options = {
			header: 'Phone number',
			icon: null, 
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: '+45', name: 'phone', required: true, pattern: '[0-9]{8}' },
			]}
		}
		Dlg.input('Enter 8 digit number, regional code implied', options).then(input => {
			console.log('phone', input)
		})
	}



		gebi('btn-input-validation-callback').onclick = function() {
			const options = {
				headers: { input: 'What is 42 with inflation?' },
				icons: { input: '🖖' },
				input: {
					inputs: [	
						{ type: 'input', inputType: 'password', label: '', name: 'star-trek-number' }
					],
					callback: function(state) {
						return parseInt(state['star-trek-number']) === 47
					}
				}
			}
			Dlg.input(null, options).then(input => {
				console.log(input)
			})
		}

		gebi('btn-input-validation-promise').onclick = function() {
			const options = {
				headers: { input: 'Enter user name' },
				icons: { input: '' },
				input: {
					inputs: [	
						{ type: 'input', inputType: 'text', label: '', name: 'username' }
					],
					promise: function(state) {
						return new Promise(function(resolve) {
							if (state.username.length < 5) return resolve(false)
							const letters = /^[0-9a-zA-Z]+$/
							if (!letters.test(state.username)) return resolve(false)
							setTimeout(function() {
								resolve(true)
							}, 1000)
						})
					}
				}
			}
			Dlg.input('Must be at least 5 characters long and may only contain letters and numbers', options).then(input => {
				console.log(input)
			})
		}

	//formLayout
	const formLayout = (function() {
		const options = {
			formLayout: 'left full-width', //default
			input: {
				inputs: [
					{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input required' },
					{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Additional text', rows: 4 }
				]
			}
		}
		qall('.btn-forms-formlayout').forEach(function(btn) {
			btn.onclick = function() {
				if (this.hasAttribute('data-layout')) options.input.formLayout = this.getAttribute('data-layout')
				options.header = this.hasAttribute('data-layout') ? this.getAttribute('data-layout') : '(not set)'
				Dlg.input(shortText, options)
			}
		})

	})()

})()

export { Input }
