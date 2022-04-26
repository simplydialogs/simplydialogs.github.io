const Test = (function(window, document) {
	const gebi = (id) => { return document.getElementById(id) }
	const Dlg = SimplyDialogs

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
				console.log('result', input)
			})
		}
	}

	//
	basic()		
})(window, document)


/*
//alert
	gebi('alert-long-text').onclick = function() {
		Dlg.alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
	}
	gebi('alert-custom').onclick = function() {
		Dlg.alert('Lorem ipsum dolor sit amet, consectetur ...', { 
			headers: { alert: '<strong>Merry X-mas</strong>' },
			icons: { alert : '🎄' },
			buttons: { 
				classes: { 
					ok: 'btn btn-md btn-success' 
				}
			}
		})
	}

//confirm
	gebi('confirm-long-text').onclick = function() {
		Dlg.confirm('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
	}

//info 
	gebi('info-long-text').onclick = function() {
		Dlg.information('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
	}
	gebi('info-fa').onclick = function() {
		Dlg.information('Lorem ipsum dolor sit amet, consectetur adipiscing elit', {
			headers: { information: 'Did you know ...?' },
			icons: { information : '<i class="fa fa-info-circle fa-lg text-primary"></i>' },
		})
	}

//bell
//error
//wait
	
//input
	gebi('input').onclick = function() {
		const options = {
			input: { 
				callback: function(state) {
					console.log(state)
					return state.input.length>3
				}
			}
		}
	}

	gebi('input-input').onclick = function() {
		const options = {
			input: {
				inputs: [	{ type: 'input', inputType: 'text', label: 'dette er en test', name: 'input' } ],
				callback: function(state) {
					console.log(state)
					return state.input.length>3
				}
			}
		}
		Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(function(input) {
			console.log('result', input)
		})
	}

	gebi('input-radio-multiple').onclick = function() {
		const options = {
			input: {
				inputs: [	{ type: 'radio', label: '', name: 'radio', options: [] } ],
				callback: function(state) {
					console.log(state)
					state.radio !== null
				}
			}
		}
		const reasons = [
			'Formentlig i strid med straffeloven',
			'Doxxing',
			'Plagiat',
			'Citatmængde overskrider citatretten / copyright',
			'Porno',
			'Virker til at være en såkaldt splog',
			'Husregel ¤5: Man må ikke berygte eller inkriminere Dfo',
			'Andet'
		];
		reasons.forEach(s => {
			options.input.inputs[0].options.push({ label: s, value: s })
		})
		Dlg.input('Lorem ipsum dolor sit amet, consectetur adipiscing elit', options).then(function(input) {
			console.log('result', input)
		})
	}

//input multiple radips, no label

*/

