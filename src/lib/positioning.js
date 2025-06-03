
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Positioning = (function() {

	gebi('btn-positioning-top').onclick = function() {
		Dlg.alert(shortText, { classes: 'top', header: 'top' })
	}
	gebi('btn-positioning-middle').onclick = function() {
		Dlg.alert(shortText, { classes: 'middle', header: 'middle' })
	}
	gebi('btn-positioning-bottom').onclick = function() {
		Dlg.alert(shortText, { classes: 'bottom', header: 'bottom' })
	}

	gebi('btn-positioning-left').onclick = function() {
		Dlg.alert(shortText, { classes: 'left', header: 'left' })
	}
	gebi('btn-positioning-center').onclick = function() {
		Dlg.alert(shortText, { classes: 'center', header: 'center' })
	}
	gebi('btn-positioning-right').onclick = function() {
		Dlg.alert(shortText, { classes: 'right', header: 'right' })
	}

	gebi('btn-positioning-all-stacked').onclick = function() {
		const show = function(pos, bell) {
			Dlg[bell ? 'bell' : 'info']('Lorem ipsum dolor sit amet, consectetur adipiscing elit', { header: pos, classes: pos })
		}
		;[
			'top left', 'top center', 'top right', 
			'middle left', 'middle center', 'middle right', 
			'bottom left', 'bottom center', 'bottom right'].forEach(function(pos, index) {
			if (index === 0) {
				show(pos)
			} else {
				setTimeout(function() {
					show(pos, index === 8)
				}, 40 * index)
			}
		})
	}


})()

export { Positioning }

