
const Test = (function(window, document, SimplyDialogs) {
	const gebi = (id) => { return document.getElementById(id) }
	const Dlg = SimplyDialogs

	if (hljs)	{
		hljs.configure({
			ignoreUnescapedHTML: false
		})
		hljs.highlightAll()
	}

	const rf = function(f) { 
		setTimeout(() => {
			f.style.height = (parseInt(f.contentWindow.document.documentElement.scrollHeight) - 10) + 'px'
		}, 200)
	}

	const aside = function() {
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
		screen.orientation.addEventListener('change', () => resize())
		window.addEventListener('orientationchange', () => aresize())
		window.addEventListener('resize', () => aresize())
		window.addEventListener('load', () => {
			aresize()
			new Gumshoe('ul.root a', {
				offset: 30,
				reflow: true,
				nested: false,
				nestedClass: ''
			})
			document.querySelector('html').classList.remove('wait')
		})
		a.style.display = 'block'
		a.style.position = 'fixed'
	}

	const basic = function() {
		gebi('basic-alert').onclick = function() {
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(answer => {	console.log('alert', answer) })
		}
		gebi('basic-confirm').onclick = function() {
			Dlg.confirm('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(answer => {	console.log('confirm', answer) })
		}
		gebi('basic-info').onclick = function() {
			Dlg.information('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(answer => {	console.log('info', answer) })
		}
		gebi('basic-bell').onclick = function() {	
			Dlg.bell('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(answer => { console.log('bell', answer) })
		}
		gebi('basic-error').onclick = function() {
			Dlg.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(answer => {	console.log('error', answer) })
		}
		gebi('basic-wait').onclick = function() {
			const wait = Dlg.wait('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
			setTimeout(function() {
				wait.close()
			}, 1500)
		}
		gebi('basic-input').onclick = function() {
			Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit').then(function(input) {
				console.log('input', input)
			})
		}
	}

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
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(answer => {	console.log('alert', answer) })
		}
		gebi('basic-confirm-es').onclick = function() {
			Dlg.confirm('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(answer => {	console.log('confirm', answer) })
		}
		gebi('basic-info-es').onclick = function() {
			Dlg.information('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(answer => {	console.log('info', answer) })
		}
		gebi('basic-bell-es').onclick = function() {	
			Dlg.bell('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(answer => { console.log('bell', answer) })
		}
		gebi('basic-error-es').onclick = function() {
			Dlg.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(answer => {	console.log('error', answer) })
		}
		gebi('basic-input-es').onclick = function() {
			Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(input => {
				console.log('input', input)
			})
		}
	}

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

	const backdrop = function() {
		gebi('backdrop-none').onclick = function() {
			const o = {
				backdrop: 'background: rgba(0, 0, 0, 0);'
			}
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}
		gebi('backdrop-darker').onclick = function() {
			const o = {
				backdrop: 'background: rgba(0, 0, 0, 0.5);'
			}
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', o).then(answer => {	console.log('alert-backdrop-none', answer) })
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
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', o).then(answer => {	console.log('alert-backdrop-none', answer) })
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
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', o).then(answer => {	console.log('alert-backdrop-none', answer) })
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
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', o).then(answer => {	console.log('alert-backdrop-none', answer) })
		}
	}

	const options = function() {

		gebi('options-alert-no-icon').onclick = function() {
			Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit', { icons: { alert: null }} )
		}

		gebi('btn-options-pyramids').onclick = function() {
			const msg = 'The Great Pyramid of Giza is the largest Egyptian pyramid and tomb of<br> Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during a<br> period of around 27 years. '
			const html = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20great%20pyramids&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>'
			const options = {
				headers: { information: 'The Great Pyramid of Giza' }
			}
			Dlg.information(msg + html, options)
		}

		gebi('options-complex-example').onclick = function() {
				const options = {
				classes: 'x-mas',
				headers: { alert: 'Merry Christmas ...' },
				icons: { alert : '🎄' },
				buttons: { captions: { ok: '✨ Ok ✨' }}
			}
			Dlg.alert('🎀 🎁 Frohe Weihnachten, メリークリスマス, Feliz Navidad, 聖誕快樂, Glædelig Jul ...!', options)
		}
	}

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
			Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(function(input) {
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
			Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(function(input) {
				console.log('result', input)
			})
		}

		gebi('btn-input-radio-select').onclick = function() {
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
						{ type: 'select', label: 'select', name: 'select', selectedIndex: 2,
								options: [
									{ label: 'option1', value: 'option1' },
									{ label: 'option2', value: 'option2' }
								]
						}
					],
          callback: function(state) {
            return state.radio !== '' && state.select !== ''
          }
        }
      }
			Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(function(input) {
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
			Dlg.input('Select image file <br><sup>(PNG, GIF, PNG supported)</sup>', options).then(function(input) {
				console.log('result', input)
			})
		}
	}

	gebi('btn-input-login-dialog').onclick = function() {
		const options = {
			headers: { input: 'Login' },
			icons: { input: '🔑' },
			input: {
				inputs: [	
					{ type: 'input', inputType: 'text', label: 'Username', name: 'username' },
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
	aside()
	basic()
	longTexts()
	options()
	es()
	advancedInputs()
	backdrop()

	return {
		rf
	}		
})(window, document, SimplyDialogs);

