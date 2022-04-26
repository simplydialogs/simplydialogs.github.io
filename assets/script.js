const Test = (function(window, document) {
	const gebi = (id) => { return document.getElementById(id) }
	const Dlg = SimplyDialogs

	const aside = function() {
		const a = document.querySelector('aside')
		const m = document.querySelector('main')
		a.style.left = (m.offsetLeft - 200)+'px';

		window.addEventListener('load', (event) => {
			new Gumshoe('menu a', {
				reflow: true,
				nested: true,
				nestedClass: 'active-parent'
			})
		})
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
				console.log('result', input)
			})
		}
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
		gebi('backdrop-yingyang').onclick = function() {
			const o = {
				backdrop: `background: radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,
								radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,
								radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,
								radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,
								radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),
								radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),
								radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,
								radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px;
								background-color:#fff; 
								opacity: 0.4;
								background-size:100px 100px;`
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



	}

	//
	aside()
	basic()
	backdrop()
		
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

