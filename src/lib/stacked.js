
import { gebi, qsel, qall} from './util.js'
import { SimplyDialogs } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Stacked = (function() {
	
	gebi('stacked-fan').onclick = function() {
		const show = function(pos, bell) {
			SimplyDialogs[bell ? 'bell' : 'info']('Lorem ipsum dolor sit amet, consectetur adipiscing elit', { header: pos, classes: pos })
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

export { Stacked }
