
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Classes = (function() {

	gebi('btn-classes-no-padding').onclick = function() {
		Dlg.alert(shortText, { header: 'no-padding', classes: 'no-padding' })
	}

	gebi('btn-classes-no-shadow').onclick = function() {
		Dlg.alert(shortText, { header: 'no-shadow', classes: 'no-shadow' })
	}

	gebi('btn-classes-no-backdrop').onclick = function() {
		Dlg.alert(shortText, { header: 'no-backdrop', classes: 'no-backdrop' })
	}

	gebi('btn-classes-dark-backdrop').onclick = function() {
		Dlg.alert(shortText, { header: 'dark-backdrop', classes: 'dark-backdrop' })
	}


})()

export { Classes }
