
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Examples = (function() {

	gebi('btn-examples-image-viewer').onclick = function() {
		const msg = '<img src="assets/images/nasa-bluemarble-reduced.webp" style="max-height:75vh;">'
		//const msg = '<img src="https://eoimages.gsfc.nasa.gov/images/imagerecords/0/885/modis_wonderglobe_lrg.jpg" style="max-height:75vh;"	>'
		const options = {
			classes: 'image-viewer',
			headers: { bell: '' },
			icons: { bell: '' },
			buttons: { captions: { ok: null }}
		}
		Dlg.bell(msg, options)
	}


})()

export { Examples }
