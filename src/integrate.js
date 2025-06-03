
import { gebi, shortText, longText } from './lib/util.js'
import { SimplyDialogs as Dlg } from './../SimplyDialogs/SimplyDialogs.min.mjs'

const Integrate = (function(window, document, Dlg) {

	let s = `	
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<!--
<script src="SimplyDialogs/SimplyDialogs.min.js"></script>
-->
<link rel="stylesheet" type="text/css" href="SimplyDialogs/SimplyDialogs.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/languages/javascript.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/stackoverflow-light.min.css">
</head>
<body>
<p>Dialog buttons have <code>btn btn-*</code>-classes; default unicode icons are replaced with BS5 <code>bi-*</code> icons ...</p>
<p>
<button class="btn btn-primary" id="basic-alert">Alert</button>
<button class="btn btn-secondary" id="basic-info">Info</button>
<button class="btn btn-success" id="basic-confirm">Confirm</button>
<button class="btn btn-warning" id="basic-bell">Bell</button>
<button class="btn btn-danger" id="basic-error">Error</button>
<button class="btn btn-link" id="basic-wait">Wait</button>
<button class="btn btn-dark" id="basic-input">Input</button>
</p>
</body>`

	const test = gebi('test')
	const frame = document.createElement('IFRAME')
/*
	const doc = frame.contentWindow.document
	doc.open()
	doc.write(s)
	doc.close()
*/
	frame.innerHTML = s
	console.log(frame)

	test.appendChild(frame)	
/*
	console.log('ok')
	console.log(gebi('basic-alert'))

	setTimeout(function() {
	gebi('basic-alert').onclick = function() {
		Dlg.alert(shortText).then(answer => {	console.log('alert', answer) }) 
	}

	gebi('basic-confirm').onclick = function() {
		Dlg.confirm(shortText).then(answer => {	console.log('confirm', answer) })
	}

	gebi('basic-info').onclick = function() {
		Dlg.information(shortText).then(answer => {	console.log('info', answer) })
	}

	gebi('basic-bell').onclick = function() {	
		Dlg.bell(shortText).then(answer => { console.log('bell', answer) })
	}

	gebi('basic-error').onclick = function() {
		Dlg.error(shortText).then(answer => {	console.log('error', answer) })
	}

	gebi('basic-wait').onclick = function() {
		const wait = Dlg.wait(shortText)
		setTimeout(function() {
			wait.close()
		}, 1500)
	}

	gebi('basic-progress').onclick = function() {
		const progress = Dlg.progress(shortText)
		setTimeout(function() {
			progress.close()
		}, 2500)
	}

	},100)
*/

})(window, document, Dlg);

export { Integrate }

