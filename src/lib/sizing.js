
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Sizing = (function() {

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


})()

export { Sizing }
