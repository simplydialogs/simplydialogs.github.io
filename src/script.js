
import { BasicUsage } from './lib/basicusage.js'
import { Captions } from './lib/captions.js'
import { Sizing } from './lib/sizing.js'
import { Progress } from './lib/progress.js'
import { Wait } from './lib/wait.js'
import { Stacked } from './lib/stacked.js'
import { SimplyDialogs } from './../SimplyDialogs/SimplyDialogs.min.mjs'

const Test = (function(window, document, SimplyDialogs) {
	const gebi = (id) => { return document.getElementById(id) }
	const Dlg = SimplyDialogs
/*
	const shortText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
	const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
*/

	const isElementInViewport = function(e) {
		const rect = e.getBoundingClientRect()
		return (rect.y > -rect.height) && (rect.y < document.documentElement.clientHeight/2)
	}

/*
	const input_sections = [
		gebi('advanced-inputs'),
		gebi('input-inputs'),
		gebi('input-autocomplete'),
		gebi('input-form-layout'),
		gebi('input-input-type'),
		gebi('input-radio-select'),
		gebi('input-form-validation'),
		gebi('input-callback'),
		gebi('input-promise'),
		gebi('input-login-dialog'),
		gebi('input-file'),
	]
	const input_details = gebi('input-details')
	window.addEventListener('scroll', function() {
		let visible = false
		for (const section of input_sections) {
			if (isElementInViewport(section)) {
				console.log(section.id)
				visible = true
			}
		}
		if (visible) {
			if (input_details.style.display !== 'block') input_details.style.display = 'block'
		} else {
			if (input_details.style.display !== 'none') input_details.style.display = 'none'
		}
	})
*/
	const input_details = gebi('input-details')
	window.addEventListener('scroll', function() {
		if (isElementInViewport(gebi('advanced-inputs'))) {
			console.log('true')
			if (input_details.style.display !== 'block') input_details.style.display = 'block'
		} else {
			console.log('false	')
			if (input_details.style.display !== 'none') input_details.style.display = 'none'
		}
	})

	if (hljs)	{
		hljs.configure({
			ignoreUnescapedHTML: false
		})
		hljs.highlightAll()
	}

	const rf = function(f) { 
		setTimeout(() => {
			f.style.height = (parseInt(f.contentWindow.document.documentElement.scrollHeight) + 10) + 'px'
		}, 100)
	}

	const aside = function() {
		if (document.hidden) return
		const a = document.querySelector('aside')
		const m = document.querySelector('main')
		const aresize = function() { 
			if ((m.offsetLeft - 215) > 20) {
				a.style.left = (m.offsetLeft - 215) + 'px' 
			} else {
				const ul = a.querySelector('ul.root')
				ul.style.display = 'none'
				ul.style.marginLeft = '5px'
				ul.style.top = '-20px'
				ul.style.position = 'relative'
				const bm = gebi('burger-menu')
				bm.style.display = 'inline'
				bm.addEventListener('click', () => {
					ul.style.display = ul.style.display === 'none' ? 'inline-block' : 'none'
				})
				a.style.left = 'unset'
				a.style.border = 'none'
				a.style.right = '0px'
				a.style.top = '-5px'
				a.style.paddingBottom = '2px'
			}
		}
		//screen.orientation.addEventListener('change', () => resize())
		window.addEventListener('orientationchange', () => aresize())
		window.addEventListener('resize', () => aresize())
		window.addEventListener('load', () => {
			aresize()
			new Gumshoe('ul.root a', {
				offset: '290px',
				reflow: true,
				nested: false,
				nestedClass: ''
			})
			document.querySelector('html').classList.remove('wait')
		})
		a.style.display = 'block'
		a.style.position = 'sticky'
		m.style.top = '-' + a.scrollHeight + 'px'
	}

/*
//basic
	const basic = function() {
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
			}, 1000)
		}
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
			stackClick(' bottom right')
		}

	}
*/

//es
/*
	const es = function() {
		const options = {
			headers: {
				alert: 'Alerta', 
				error: 'Error',
				confirm: 'Confirmar',
				information: 'Información',
				bell: 'Nota',
				input: 'Input'
			},
			buttons: {
				captions: {
					ok: 'Ok',	
					yes: 'Aceptar',
					no: 'Salir',
					cancel: 'Cancelar'
				}
			}
		}
		gebi('basic-alert-es').onclick = function() {
			Dlg.alert(shortText, options).then(answer => {	console.log('alert', answer) })
		}
		gebi('basic-confirm-es').onclick = function() {
			Dlg.confirm(shortText, options).then(answer => {	console.log('confirm', answer) })
		}
		gebi('basic-info-es').onclick = function() {
			Dlg.information(shortText, options).then(answer => {	console.log('info', answer) })
		}
		gebi('basic-bell-es').onclick = function() {	
			Dlg.bell(shortText, options).then(answer => { console.log('bell', answer) })
		}
		gebi('basic-error-es').onclick = function() {
			Dlg.error(shortText, options).then(answer => {	console.log('error', answer) })
		}
		gebi('basic-input-es').onclick = function() {
			Dlg.input(shortText, options).then(input => {
				console.log('input', input)
			})
		}
	}
*/
//longTexts
/*
	const longTexts = function() {
		const lt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		gebi('basic-alert-long-text').onclick = function() { Dlg.alert(lt).then(answer => { console.log('long text alert', answer) })	}
		gebi('basic-info-long-text').onclick = function() {	Dlg.information(lt).then(answer => { console.log('long text info', answer) }) }
		gebi('basic-confirm-long-text').onclick = function() { Dlg.confirm(lt).then(answer => { console.log('long text confirm', answer) }) }
		gebi('basic-error-long-text').onclick = function() { Dlg.error(lt).then(answer => { console.log('long text error', answer) }) }
		gebi('basic-bell-long-text').onclick = function() { Dlg.bell(lt).then(answer => { console.log('long text bell', answer) }) }
		gebi('basic-wait-long-text').onclick = function() { 
			const wait = Dlg.wait(lt)
			setTimeout(() => { wait.close() }, 1500)
		}
		gebi('basic-input-long-text').onclick = function() { Dlg.input(lt).then(answer => { console.log('long text input', answer) }) }
	}
*/

//backdrop
	const backdrop = function() {
		gebi('backdrop-none').onclick = function() {
			const o = {
				backdrop: 'background: rgba(0, 0, 0, 0);'
			}
			Dlg.alert(shortText, o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}
		gebi('backdrop-darker').onclick = function() {
			const o = {
				backdrop: 'background: rgba(0, 0, 0, 0.5);'
			}
			Dlg.alert(shortText, o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}
		gebi('backdrop-carbon').onclick = function() {
			const o = {
				backdrop: `background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
									linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
									linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
									linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
									linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
									linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
									background-color: #131313;
									opacity: 0.4;
									background-size: 20px 20px;`
			}
			Dlg.alert(shortText, o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}

		gebi('backdrop-stairs').onclick = function() {
			const o = {
				backdrop: `background:
								linear-gradient(63deg, #999 23%, transparent 23%) 7px 0,
								linear-gradient(63deg, transparent 74%, #999 78%),
								linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), #444;
								opacity: 0.4;
								background-size: 16px 48px;`
			}
			Dlg.alert(shortText, o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}

		gebi('backdrop-heart').onclick = function() {
			const o = {
				backdrop: `background:
								radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),
								radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),
								radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%),
								radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%),
								radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%),
								radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
								radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
								radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
								radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
								radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px;
								opacity: 0.4;
								background-color:#b03;
								background-size:100px 100px;`
			}
			Dlg.alert(shortText, o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}
	}

//formLayout
	const formLayout = function() {
		const options = {
			input: {
				inputs: [
					{ type: 'input', inputType: 'text', label: 'Input', name: 'input', placeholder: 'Input required' },
					{ type: 'textarea', label: 'Textarea', name: 'textarea', placeholder: 'Additional text', rows: 4 }
				],
				callback: function(state) {
					return state.input.length > 3
				}
			}
		}
		gebi('btn-input-form-layout-default').onclick = function() {
			options.input.formLayout = 'left full-width'
			Dlg.input(shortText, options)
		}
		gebi('btn-input-form-layout-top').onclick = function() {
			options.input.formLayout = 'top'
			Dlg.input(shortText, options)
		}
		gebi('btn-input-form-layout-top-full-width').onclick = function() {
			options.input.formLayout = 'top full-width'
			Dlg.input(shortText, options)
		}
		gebi('btn-input-form-layout-left').onclick = function() {
			options.input.formLayout = 'left'
			Dlg.input(shortText, options)
		}
		gebi('btn-input-form-layout-left-full-width').onclick = function() {
			options.input.formLayout = 'left full-width'
			Dlg.input(shortText, options)
		}
		gebi('btn-input-form-layout-none').onclick = function() {
			options.input.formLayout = ''
			Dlg.input(shortText, options)
		}
	}

//enterSubmit
	const enterSubmit = function() {
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
		gebi('btn-options-enter-submit-true').onclick = function() {
			options.enterSubmit = true
			Dlg.input(shortText, options).then(fs => {
				console.log('enterSubmit', fs)
			})
		}
		gebi('btn-options-enter-submit-false').onclick = function() {
			options.enterSubmit = false
			Dlg.input(shortText, options).then(fs => {
				console.log('enterSubmit', fs)
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
		gebi('btn-options-escape-entersubmit-false').onclick = function() {
			options.escape = false
			options.enterSubmit = false
			Dlg.input(shortText, options).then(fs => {
				console.log('escape', fs)
			})
		}
	}

//wait
/*
	const wait = function() {
		gebi('btn-wait-settext').onclick = function() {
			let counter = 0
			let interval = undefined
			const wait = Dlg.wait(shortText)
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
			const wait = Dlg.wait(shortText)
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
	}
*/

//options
	const options = function() {

/*
		gebi('options-alert-header-icon-shorthand').onclick = function() {
			Dlg.alert(shortText, { icon: '🔥', header: 'Danger!' })
		}
*/

		gebi('btn-options-pyramids').onclick = function() {
			const msg = 'The Great Pyramid of Giza is the largest Egyptian pyramid and tomb of<br> Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during a<br> period of around 27 years. '
			const html = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20great%20pyramids&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>'
			const options = {
				headers: { information: 'The Great Pyramid of Giza' }
			}
			Dlg.information(msg + html, options)
		}

		gebi('options-complex-example-2').onclick = function() {
			const options = {
				classes: 'x-mas',
				headers: { alert: 'Merry Christmas ...' },
				icons: { alert : '🎄' },
				buttons: { captions: { ok: '✨ Ok ✨' }}
			}
			Dlg.alert('🎀 🎁 Frohe Weihnachten, メリークリスマス, Feliz Navidad, 聖誕快樂, Glædelig Jul ...!', options)
		}

		gebi('options-complex-example-1').onclick = function() {
			const options = {
				classes: 'nasa-earth lg-height sm-width',
				icons: { confirm: '👽' },
				headers: { confirm: null },
				buttons: { captions: { yes: 'No', no: 'Defently not!' }}
			}
			Dlg.confirm('Are There Any Chance of Intelligent Life in The Universe, anywhere?', options)
		}

		gebi('btn-options-image-viewer').onclick = function() {
			const msg = '<img src="assets/images/nasa-bluemarble-reduced.webp" style="max-height:75vh;">'
			const options = {
				headers: { bell: '' },
				icons: { bell: '' },
				buttons: { captions: { ok: null }}
			}
			Dlg.bell(msg, options)
		}
/*
		gebi('btn-options-sizing-xs').onclick = function() {
			Dlg.info('some text ...', { classes: 'xs' })
		}
		gebi('btn-options-sizing-sm').onclick = function() {
			Dlg.alert(shortText, { classes: 'sm' })
		}
		gebi('btn-options-sizing-md').onclick = function() {
			Dlg.error(longText, { classes: 'md' })
		}
		gebi('btn-options-sizing-lg').onclick = function() {
			Dlg.confirm(longText, { classes: 'lg' })
		}
		gebi('btn-options-sizing-sm-overflow').onclick = function() {
			Dlg.info(longText, { classes: 'sm' })
		}
		gebi('btn-options-sizing-xs-width').onclick = function() {
			Dlg.info(longText, { classes: 'xs-width' })
		}
		gebi('btn-options-sizing-sm-height').onclick = function() {
			Dlg.info(longText, { classes: 'sm-height' })
		}
		gebi('btn-options-sizing-md-width').onclick = function() {
			Dlg.info(longText, { classes: 'md-width' })
		}
		gebi('btn-options-sizing-fullsize').onclick = function() {
			Dlg.error(longText, { classes: 'fullsize' })
		}
*/
	}

//advancedInputs
	const advancedInputs = function() {
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
				input: {
					inputs: [
						{ type: 'input', inputType: 'text', label: 'Text', name: 'input', spellcheck: false },
						{ type: 'input', inputType: 'checkbox', label: 'Checkbox', name: 'checkbox', checked: true },
						{ type: 'input', inputType: 'color', label: 'Color', name: 'color', value: '#123456' },
						{ type: 'input', inputType: 'number', label: 'Number', name: 'number', value: 42 },
						{ type: 'input', inputType: 'password', label: 'Password', name: 'password', style: 'color:maroon;' },
						{ type: 'input', inputType: 'date', label: 'Date', name: 'date' },
						{ type: 'input', inputType: 'file', label: 'File', name: 'file' },
						{ type: 'input', inputType: 'url', label: 'Url', name: 'url' },
						{ type: 'input', inputType: 'range', label: 'Range', name: 'range', value:25, max: 100 },
						{ type: 'input', inputType: 'hidden', label: '', name: 'hidden', value: 'You can pass extra values to the form via hidden inputs' }
					]
				}
			}
			Dlg.input(shortText, options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-radio-select').onclick = function() {
			const options = { 
				input: { 
					inputs: [
						{ type: 'radio', label: 'radio', name: 'radio', value: 'option2',
							options: [
									{ label: 'option1', value: 'option1' },
									{ label: 'option2', value: 'option2' },
									{ label: 'option3', value: 'option3' }
								]
						},
						{ type: 'select', label: 'select', name: 'select', value: 'option3',
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
				classes: 'sm',
				input: {
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

//validation
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
	}

//font awesome
	const fontAwesome = function() {
		gebi('btn-fa-alert').onclick = function() {
			const options = {
				icons: { alert: '<i class="fa fa-warning" style="color:brown;"></i>' }
			}
			Dlg.alert(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-info').onclick = function() {
			const options = {
				icons: { information: '<i class="fa fa-info-circle" style="color:royalblue;"></i>' }
			}
			Dlg.info(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-confirm').onclick = function() {
			const options = {
				icons: { confirm: '<i class="fa fa-question-circle" style="color:forestgreen;"></i>' }
			}
			Dlg.confirm(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-bell').onclick = function() {
			const options = {
				icons: { bell: '<i class="fa fa-bell" style="color:orange;"></i>' }
			}
			Dlg.bell(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-error').onclick = function() {
			const options = {
				icons: { error: '<i class="fa fa-times-circle-o" style="color:crimson;"></i>' }
			}
			Dlg.error(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-input').onclick = function() {
			const options = {
				icons: { input: '<i class="fa fa-pencil" style="color:gray;"></i>' }
			}
			Dlg.input(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-wait').onclick = function() {
			const options = {
				icons: { wait: '<i class="fa fa-gear" style="color:gray;"></i>' }
			}
			const wait = Dlg.wait(shortText, options)
			setTimeout(function() {
				wait.close()
			}, 3000)
		}

	}

	//
	aside()
	//basic()
	//longTexts()
	formLayout()
	enterSubmit()
	escape()
	//wait()
	options()
	//es()
	advancedInputs()
	backdrop()
	fontAwesome()

	return {
		rf
	}		
})(window, document, SimplyDialogs);

