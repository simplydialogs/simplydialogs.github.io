
import { gebi, shortText, longText } from './util.js'
import { SimplyDialogs as Dlg } from './../../SimplyDialogs/SimplyDialogs.min.mjs'

const Icons = (function() {

		gebi('btn-classes-fa-alert').onclick = function() {
			const options = {
				icons: { alert: '<i class="fa fa-warning" style="color:brown;"></i>' }
			}
			Dlg.alert(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-info').onclick = function() {
			const options = {
				icons: { information: '<i class="fa fa-info-circle" style="color:royalblue;"></i>' }
			}
			Dlg.info(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-confirm').onclick = function() {
			const options = {
				icons: { confirm: '<i class="fa fa-question-circle" style="color:forestgreen;"></i>' }
			}
			Dlg.confirm(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-bell').onclick = function() {
			const options = {
				icons: { bell: '<i class="fa fa-bell" style="color:orange;"></i>' }
			}
			Dlg.bell(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-error').onclick = function() {
			const options = {
				icons: { error: '<i class="fa fa-times-circle-o" style="color:crimson;"></i>' }
			}
			Dlg.error(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-input').onclick = function() {
			const options = {
				icons: { input: '<i class="fa fa-pencil" style="color:gray;"></i>' }
			}
			Dlg.input(shortText, options).then(function(answer) {
				console.log(answer)
			})
		}
		gebi('btn-classes-fa-wait').onclick = function() {
			const options = {
				icons: { wait: '<i class="fa fa-gear" style="color:gray;"></i>' }
			}
			const wait = Dlg.wait(shortText, options)
			setTimeout(function() {
				wait.close()
			}, 3000)
		}


})()

export { Icons }
