/*
	simplydialogs
	(c) 2022 David Konrad 
	https://github.com/davidkonrad/simplydialogs
	https://simplydialogs.github.io
*/

"use strict";

/*
`background: repeating-linear-gradient(
						    45deg,
						    rgba(255, 0, 0, 0.2),
						    rgba(255, 0, 0, 0.2) 1px,
						    rgba(255, 0, 0, 0.3) 1px,
						    rgba(255, 0, 0, 0.3) 20px
						  );`,

*/

/* hearts
background:
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
background-color:#b03;
opacity: 0.4;
background-size:100px 100px;
*/

/* ying yang
background:
radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,
radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,
radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,
radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,
radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),
radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),
radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,
radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px;
background-color:#fff; 
opacity: 0.4;
background-size:100px 100px;
*/

/* bricks
background-color: transparent;
background-image: linear-gradient(335deg, #b00 23px, transparent 23px),
linear-gradient(155deg, #d00 23px, transparent 23px),
linear-gradient(335deg, #b00 23px, transparent 23px),
linear-gradient(155deg, #d00 23px, transparent 23px);
background-size: 58px 58px;
opacity: 0.4;
background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
*/

/* carbon pattern
background:
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
opacity: 0.4;
background-size: 20px 20px;
*/

/* stairs
`background:
linear-gradient(63deg, #999 23%, transparent 23%) 7px 0,
linear-gradient(63deg, transparent 74%, #999 78%),
linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), #444;
opacity: 0.4;
background-size: 16px 48px;
`
*/

/* bluepprint
	background-color: #269;
  background-image:
    linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
*/

//https://projects.verou.me/css3patterns/

const SimplyDialogs = (function(document) {

	let defaults = {
		backdrop: undefined,
		headers: {
			alert: 'Alert', 
			error: 'Error',
			confirm: 'Confirm',
			information: 'Information',
			bell: 'Notice',
			input: ''
		},
		icons: {
			alert: '⚠', 
			error: '⛔',
			confirm: '✔️',
			information: '💡',
			bell: '🔔',
			wait: '⚙️',
			input: '✏️'
		},
		buttons: {
			captions: {
				ok: 'Ok',
				cancel: 'Cancel',
				yes: 'Yes',
				no: 'No'
			},
			classes: {
				ok: '',
				cancel: '',
				yes: '',
				no: ''
			}
		},
		input: {
			callback: undefined,
			classes: {
				label: '',
				input: ''
			},
			inputs: [
				{ type: 'input', inputType: 'text', label: 'Input ', name: 'input', placeholder: 'Enter text ..' },
			]
/*
			inputs : [
				{ type: 'input', inputType: 'text', label: 'input', name: 'input', placeholder: 'Hey! I am a placeholder' },
				{ type: 'textarea', label: 'textarea', name: 'textarea', placeholder: 'Enter some tekst', rows: 5, cols: 80 },
				{ type: 'select', label: 'select', name: 'select', style:'color:red;', selectedIndex: 2,
						options: [
							{ label: 'option1', value: 'option1' },
							{ label: 'option2', value: 'option2' }
						]
				},
				{ type: 'radio', label: 'radio', name: 'radio',
						options: [
							{ label: 'option1', value: 'option1' },
							{ label: 'option2', value: 'option2' },
							{ label: 'option3', value: 'option3' }
						]
				},
				{ type: 'input', inputType: 'checkbox', label: 'checkbox', name: 'checkbox' },
				{ type: 'input', inputType: 'color', label: 'color', name: 'color', value: '#123456' },
				{ type: 'input', inputType: 'password', label: 'password', name: 'password', style: "color:maroon;background-color:gold;font-size:xxx-large" },
				{ type: 'input', inputType: 'date', label: 'date', name: 'date' },
				{ type: 'input', inputType: 'file', label: 'file', name: 'file' },
				{ type: 'input', inputType: 'range', label: 'range', name: 'range' }
			],
			callback: undefined,
			classes: {
				label: '',
				input: ''
			}
*/
		}
	}

	const gebi = function(id) {
		return document.getElementById(id)
	}

	const getCnt = function(html) {
		const cnt = document.createElement("SPAN")
		cnt.innerHTML = html
		document.body.appendChild(cnt)
		return cnt
	}

	const initDialog = function(dialog, type, options) {
		let use = Object.assign({}, defaults) 
		const popBtn = function(name) {
			if (dialog.querySelector(`.dialog-${name}`) && use.buttons.classes[name]) dialog.querySelector(`.dialog-${name}`).classList.add(...use.buttons.classes[name].split(' '))
			if (dialog.querySelector(`.dialog-${name}`) && use.buttons.captions[name]) dialog.querySelector(`.dialog-${name}`).innerHTML = use.buttons.captions[name]
		}
		if (options) Object.keys(options).forEach(key => {
			if (options[key] instanceof Object) {
				use[key] = Object.assign({}, use[key], options[key])
			} else {
				use[key] = options[key]
			}
		})
		if (type !== 'wait') dialog.querySelector('.dialog-header').innerHTML = use.headers[type]
		dialog.querySelector('.dialog-icon').innerHTML = use.icons[type]
		;['ok', 'cancel', 'yes', 'no'].forEach((name) => popBtn(name))
		if (use.backdrop) {
			dialog.backdrop = document.createElement('style')
			dialog.backdrop.id = 'sd' + Math.random()
			dialog.backdrop.innerText = `dialog::backdrop { ${use.backdrop.replace(/\r?\n|\r/g, '')} }`
			document.head.appendChild(dialog.backdrop)
		}
		return use
	}

	const closeDialog = function(dialog, cnt) {
		dialog.classList.add('close')
		setTimeout(function() {
			dialog.close()
			if (dialog.backdrop) gebi(dialog.backdrop.id).remove()
			if (document.body.contains(cnt)) document.body.removeChild(cnt)
		}, dialog.clientHeight - 70)
	}

	const genericHTML = `
		<dialog id="dialog-generic">
		  <h4 class="dialog-header"></h4>
			<span class="dialog-icon"></span>
		  <p class="dialog-message"></p>
		  <div class="dialog-actions">
		    <button role="submit" class="dialog-ok" autofocus></button>
		  </div>
		</dialog>
	`;

//alert
	const alertGeneric = function(message, options, type) {
		return new Promise(function(resolve) {
			const cnt = getCnt(genericHTML)
			const dialog = gebi('dialog-generic')
			initDialog(dialog, type, options)		
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			const ret = function(val) {
				closeDialog(dialog, cnt)
				resolve(val)
			}
			dialog.querySelector('.dialog-ok').onclick = () => { ret(true) }
			dialog.addEventListener('close', () => { ret(true) })
			dialog.addEventListener('cancel', () => { ret(false) })
		})
	}

	const alert = function(message, options) {
		return alertGeneric(message, options, 'alert')
	}

	const information = function(message, options) {
		return alertGeneric(message, options, 'information')
	}

	const error = function(message, options) {
		return alertGeneric(message, options, 'error')
	}

/*
	const alert = function(message, options) {
		return new Promise(function(resolve) {
			const cnt = getCnt(genericHTML)
			const dialog = gebi('dialog-generic')
			initDialog(dialog, 'alert', options)		
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			const ret = function(val) {
				closeDialog(dialog, cnt)
				resolve(val)
			}
			dialog.querySelector('.dialog-ok').onclick = () => { ret(true) })
			dialog.addEventListener('close', () => { ret(true) })
			dialog.addEventListener('cancel', () => { ret(false) })
		})
	}

//information
	const information = function(message, options) {
		return new Promise(function(resolve) {
			const cnt = getCnt(genericHTML)
			const dialog = gebi('dialog-generic')
			initDialog(dialog, 'information', options)		
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			dialog.querySelector('.dialog-ok').onclick = function() {
				closeDialog(dialog, cnt)
				resolve(true)
			}
			dialog.addEventListener('close', () => { resolve(true) })
			dialog.addEventListener('cancel', () => { resolve(false) })
		})
	}

//error
	const error = function(message, options) {
		return new Promise(function(resolve) {
			const cnt = document.createElement("SPAN")
			cnt.innerHTML = genericHTML
			document.body.appendChild(cnt)
			const dialog = gebi('dialog-generic')
			initDialog(dialog, 'error', options)
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			dialog.querySelector('.dialog-ok').onclick = function() {
				closeDialog(dialog, cnt)
				resolve(true)
			}
			dialog.addEventListener('close', () => { resolve(true) })
			dialog.addEventListener('cancel', () => { resolve(false) })
		})
	}
*/

//confirm
	const confirmHTML = `
		<dialog id="dialog-confirm">
		  <h4 class="dialog-header"></h4>
			<span class="dialog-icon"></span>
		  <p class="dialog-message"></p>
		  <div class="dialog-actions">
		    <button role="submit" class="dialog-yes" autofocus></button>
		    <button role="button" class="dialog-no"></button>
		  </div>
		</dialog>
	`;

	const confirm = function(message, options) {
		return new Promise(function(resolve) {
			const cnt = getCnt(confirmHTML)
			const dialog = gebi('dialog-confirm')
			initDialog(dialog, 'confirm', options)
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			const ret = function(val) {
				closeDialog(dialog, cnt)
				resolve(val)
			}
			dialog.querySelector('.dialog-yes').onclick = () => { ret(true) }
			dialog.querySelector('.dialog-no').onclick = () => { ret(false) }
			dialog.addEventListener('close', () => { ret(true) })
			dialog.addEventListener('cancel', () => { ret(false) })
		})
	}

//bell
	const bellHTML = `
		<dialog id="dialog-bell">
			<audio autoplay="autoplay">
				<source	src="data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=">
			</audio>
		  <h4 class="dialog-header"></h4>
			<span class="dialog-icon"></span>
		  <p class="dialog-message"></p>
		  <div class="dialog-actions">
		    <button role="submit" class="dialog-ok" autofocus></button>
		  </div>
		</dialog>
	`;

	const bell = function(message, options) {
		return new Promise(function(resolve) {
			const cnt = getCnt(bellHTML)
			const dialog = gebi('dialog-bell')
			initDialog(dialog, 'bell', options)		
			dialog.querySelector('.dialog-message').innerHTML = message
			dialog.showModal()
			const ret = function(val) {
				closeDialog(dialog, cnt)
				resolve(val)
			}
			dialog.querySelector('.dialog-ok').onclick = () => { ret(true) }
			dialog.addEventListener('close', () => { ret(true) })
			dialog.addEventListener('cancel', () => { ret(false) })
		})
	}

//wait
	const waitHTML = `
		<dialog id="dialog-wait">
			<span class="dialog-icon dialog-spinner"></span>
		  <p class="dialog-message"></p>
		</dialog>
	`;

	const wait = function(message, options) {
		const cnt = getCnt(waitHTML)
		const dialog = gebi('dialog-wait')
		initDialog(dialog, 'wait', options)		
		dialog.querySelector('.dialog-message').innerHTML = message
		dialog.addEventListener('cancel', (e) => { e.preventDefault() })
		dialog.showModal()
		return { 
			close: function() {
				closeDialog(dialog, cnt)
			}
		}				
	}

//input
	const inputHTML = `
		<dialog id="dialog-input">
		  <h4 class="dialog-header"></h4>
			<span class="dialog-icon"></span>
		  <p class="dialog-message"></p>
			<form class="dialog-input"></form>
		  <div class="dialog-actions">
		    <button role="submit" class="dialog-ok" autofocus></button>
		    <button role="button" class="dialog-cancel"></button>
		  </div>
		</dialog>
	`;

	const input = function(message, options) {
		let count = 0
		let userCallback = undefined
		let labelClass = ''
		let inputClass = ''
		const cnt = getCnt(inputHTML)
		const dialog = gebi('dialog-input')

		const getFormState = function() {
			let fs = {}
			Array.from(dialog.querySelector('form').elements).forEach(i => {
				if (i.type && i.type === 'radio') {	
					const checked = dialog.querySelector('form').querySelector(`input[name="${i.name}"]:checked`)
					fs[i.name] = checked ? checked.value : null
				} else {
					fs[i.name] = i.value
				}
			})
			return fs
		}

		const cb = function() {
			if (userCallback(getFormState())) {
				dialog.querySelector('.dialog-ok').removeAttribute('disabled')
			} else {
				dialog.querySelector('.dialog-ok').setAttribute('disabled', 'disabled')
			}
		}

		const br = function() { return document.createElement('BR') }
		const div = function() { return document.createElement('DIV') }

		const getLabel = function(label, forId) {
			const l = document.createElement('LABEL')
      l.htmlFor = forId
			l.innerHTML = label
			l.className = labelClass
			return l
		}

		const createFormTag = function(type, name, label, opt) {
			count++
			const fd = div()
			const fi = document.createElement(type.toUpperCase())
			fi.name = name
			fi.id = type.toLowerCase() + '_' + count
			fi.className = inputClass
			if (count === 1) fi.setAttribute('autofocus', 'autofocus')
			if (opt) for (const [key, value] of Object.entries(opt)) {
				fi.setAttribute(key, value)
			}
			fd.append(fi)
			const fl = div() 
			const l = getLabel(label, fi.id)
			fl.append(l)
			return {
				f: fd,
				l: fl
			}
		}

		const getCustomOptions = function(opt) {
			const ret = {}
			for (const [key, value] of Object.entries(opt)) {
				if (!['type', 'inputType', 'label', 'name'].includes(key)) ret[key] = value 
			}
			return ret	
		}

		const createInput = function(type, label, name, callback, opt) {
			const i = createFormTag('input', name, label, opt)
			i.f.querySelector('input').type = type
			if (type === 'checkbox') i.f.querySelector('input').classList.add('inline')
			if (callback) i.f.querySelector('input').addEventListener('input', cb)
			dialog.querySelector('.dialog-input').append(i.l, i.f)
		}

		const createTextarea = function(label, name, callback, opt) {
			const t = createFormTag('textarea', name, label, opt)
			if (callback) t.f.querySelector('textarea').addEventListener('input', cb)
			dialog.querySelector('.dialog-input').append(t.l, t.f)
		}

		const createSelect = function(label, name, options, callback, opt) {
			const s = createFormTag('select', name, label, opt)
			if (callback) s.f.querySelector('select').addEventListener('change', cb)
			options.forEach(o => {
				const opt = document.createElement('OPTION')
				opt.innerText = o.label
				opt.value = o.value
				s.f.querySelector('select').append(opt)
			})
			dialog.querySelector('.dialog-input').append(s.l, s.f)
		}

		const createRadio = function(label, name, options, callback) {
			const dr = div()
			options.forEach(o => {
				count++
				const r = document.createElement('INPUT')
				r.className = 'inline'
				r.id = 'radio_' + count
				r.type = 'radio'
				r.value = o.value
				r.name = name
				if (callback) r.addEventListener('change', cb)
				const li = getLabel(o.label, r.id)
				li.className = 'inline'
				dr.append(r, li, br())
			})
			const l = getLabel(label, '')
			const dl = div()
			dl.append(l)
			dialog.querySelector('.dialog-input').append(dl, dr)
		}

		return new Promise(function(resolve) {
			options = initDialog(dialog, 'input', options)		
			dialog.querySelector('.dialog-message').innerHTML = message
			userCallback = options.input.callback
			labelClass = options.input.classes.label
			inputClass = options.input.classes.input
			options.input.inputs.forEach(i => {
				if (i.type === 'input') createInput(i.inputType, i.label, i.name, userCallback, getCustomOptions(i))
				if (i.type === 'textarea') createTextarea(i.label, i.name, userCallback, getCustomOptions(i))
				if (i.type === 'select') createSelect(i.label, i.name, i.options, userCallback, getCustomOptions(i))
				if (i.type === 'radio') createRadio(i.label, i.name, i.options, userCallback)
			})
			dialog.showModal()
			const ret = function(val) {
				closeDialog(dialog, cnt)
				resolve(val ? getFormState() : false)
			}
			dialog.querySelector('.dialog-ok').onclick = () => { ret(true) }
			dialog.querySelector('.dialog-cancel').onclick = () => { ret(false) }
			dialog.addEventListener('close', () => { ret(true) })
			dialog.addEventListener('cancel', () => { ret(false) })
		})
	}
	
//api
	return {
		DEFAULTS: defaults,
		alert,
		information, 
		info: information, //alias
		error,
		confirm,
		bell,
		wait,
		input
	}
	
})(document);

