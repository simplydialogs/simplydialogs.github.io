
import { gebi, qall } from './lib/util.js'
import { BasicUsage } from './lib/basicusage.js'
import { Captions } from './lib/captions.js'
import { Sizing } from './lib/sizing.js'
import { Positioning } from './lib/positioning.js'
import { Keyboard } from './lib/keyboard.js'
import { Progress } from './lib/progress.js'
import { Wait } from './lib/wait.js'
import { Backdrop } from './lib/backdrop.js'
import { Input } from './lib/input.js'
import { SimplyDialogs as Dlg } from './../SimplyDialogs/SimplyDialogs.min.mjs'

const Test = (function(window, document, Dlg) {

	const isElementInViewport = function(e) {
		const rect = e.getBoundingClientRect()
		return (rect.y > -rect.height) && (rect.y < document.documentElement.clientHeight/2)
	}

	const input_details = gebi('input-details')
	window.addEventListener('scroll', function() {
		if (isElementInViewport(gebi('advanced-inputs'))) {
			if (input_details.style.display !== 'block') {
				input_details.style.display = 'block'
			}
		} else {
			if (input_details.style.display !== 'none') {
				input_details.style.display = 'none'
			}
		}
	})

	const initSyntaxHl = function() {
		const hl = [
			'xcode',
			'stackoverflow-light',
			'stackoverflow-dark',
			'vs',
			'github',
			'github-dark',
			'atom-one-dark', 
		]
		const select = gebi('select-syntax-hl')
		hl.forEach(function(s) {
			const o = document.createElement('OPTION')
			o.value = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/' + s + '.min.css'
			o.innerText = s
			select.append(o)
		})
		select.onchange = function() {
			gebi('link-highlight').setAttribute('href', this.value)
		}
	}

	if (hljs)	{
		hljs.configure({
			ignoreUnescapedHTML: false
		})
		hljs.highlightAll()
	}

	const rf = function(f) { 
		setTimeout(() => {
			f.style.height = (parseInt(f.contentWindow.document.documentElement.scrollHeight) + 10) + 'px'
		}, 100)
	}
	qall('iframe').forEach(function(f) {
		f.onload = () => rf(f)
	})

	const aside = function() {
		if (document.hidden) return
		const a = document.querySelector('aside')
		const m = document.querySelector('main')
		const aresize = function() { 
			if ((m.offsetLeft - 215) > 20) {
				a.style.left = (m.offsetLeft - 215) + 'px' 
			} else {
				const ul = a.querySelector('ul.root')
				ul.style.display = 'none'
				ul.style.marginLeft = '5px'
				ul.style.top = '-20px'
				ul.style.position = 'relative'
				const bm = gebi('burger-menu')
				bm.style.display = 'inline'
				bm.addEventListener('click', () => {
					ul.style.display = ul.style.display === 'none' ? 'inline-block' : 'none'
				})
				a.style.left = 'unset'
				a.style.border = 'none'
				a.style.right = '0px'
				a.style.top = '-5px'
				a.style.paddingBottom = '2px'
			}
		}
		//screen.orientation.addEventListener('change', () => resize())
		window.addEventListener('orientationchange', () => aresize())
		window.addEventListener('resize', () => aresize())
		window.addEventListener('load', () => {
			aresize()
			new Gumshoe('ul.root a', {
				//offset: '290px',
				offset: '125px',
				reflow: true,
				nested: false,
				nestedClass: ''
			})
			document.querySelector('html').classList.remove('wait')
		})
		a.style.display = 'block'
		a.style.position = 'sticky'
		//console.log(a.scrollHeight)
		setTimeout(function() {
			m.style.top = '-' + ((a.scrollHeight-280) + 'px')
		})
	}

//options
	const options = function() {
		gebi('btn-options-pyramids').onclick = function() {
			const msg = 'The Great Pyramid of Giza is the largest Egyptian pyramid and tomb of<br> Fourth Dynasty pharaoh Khufu. Built in the 26th century BC during a<br> period of around 27 years. '
			const html = '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20great%20pyramids&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>'
			const options = {
				headers: { information: 'The Great Pyramid of Giza' }
			}
			Dlg.information(msg + html, options)
		}

		gebi('options-complex-example-2').onclick = function() {
			const options = {
				classes: 'x-mas',
				headers: { alert: 'Merry Christmas ...' },
				icons: { alert : '🎄' },
				buttons: { captions: { ok: '✨ Ok ✨' }}
			}
			Dlg.alert('🎀 🎁 Frohe Weihnachten, メリークリスマス, Feliz Navidad, 聖誕快樂, Glædelig Jul ...!', options)
		}

		gebi('options-complex-example-1').onclick = function() {
			const options = {
				classes: 'nasa-earth lg-height sm-width',
				icons: { confirm: '👽' },
				headers: { confirm: null },
				buttons: { captions: { yes: 'No', no: 'Defently not!' }}
			}
			Dlg.confirm('Are There Any Chance of Intelligent Life in The Universe, anywhere?', options)
		}

		gebi('btn-options-image-viewer').onclick = function() {
			const msg = '<img src="assets/images/nasa-bluemarble-reduced.webp" style="max-height:75vh;">'
			const options = {
				headers: { bell: '' },
				icons: { bell: '' },
				buttons: { captions: { ok: null }}
			}
			Dlg.bell(msg, options)
		}
/*
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
*/
	}


//font awesome
	const fontAwesome = function() {
		gebi('btn-fa-alert').onclick = function() {
			const options = {
				icons: { alert: '<i class="fa fa-warning" style="color:brown;"></i>' }
			}
			Dlg.alert(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-info').onclick = function() {
			const options = {
				icons: { information: '<i class="fa fa-info-circle" style="color:royalblue;"></i>' }
			}
			Dlg.info(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-confirm').onclick = function() {
			const options = {
				icons: { confirm: '<i class="fa fa-question-circle" style="color:forestgreen;"></i>' }
			}
			Dlg.confirm(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-bell').onclick = function() {
			const options = {
				icons: { bell: '<i class="fa fa-bell" style="color:orange;"></i>' }
			}
			Dlg.bell(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-error').onclick = function() {
			const options = {
				icons: { error: '<i class="fa fa-times-circle-o" style="color:crimson;"></i>' }
			}
			Dlg.error(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-input').onclick = function() {
			const options = {
				icons: { input: '<i class="fa fa-pencil" style="color:gray;"></i>' }
			}
			Dlg.input(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-fa-wait').onclick = function() {
			const options = {
				icons: { wait: '<i class="fa fa-gear" style="color:gray;"></i>' }
			}
			const wait = Dlg.wait(shortText, options)
			setTimeout(function() {
				wait.close()
			}, 3000)
		}

	}

	//
	aside()
	initSyntaxHl()
	//basic()
	//longTexts()
	//formLayout()
	//enterSubmit()
	//escape()
	//wait()
	options()
	fontAwesome()

/*
	return {
		rf
	}		
*/
})(window, document, Dlg);

