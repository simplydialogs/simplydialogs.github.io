
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Captions = (function() {

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
		},
		input: {
			inputs: [
				{ type: 'input', inputType: 'text', label: 'Input ', name: 'input', placeholder: 'Introducir texto ..' },
			],
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

})()

export { Captions }
