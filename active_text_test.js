let a = [];
let timer;
let tStarted = 0;

window.onkeydown = function (e) {
	switch (e.key) {
		case 'Shift':case 'Control':case 'Alt':case 'Meta':case 'Escape':case 'Tab':case 'CapsLock':
		case 'F1':case 'F3':case 'F5':case 'F6':case 'F8':case 'F9':case 'F10':case 'F11':case 'Clear':
		case 'F12':case 'NumLock':case 'Insert':case 'Home':case 'PageUp':case 'PageDown':case 'End':
		case 'Delete':case 'PrintScreen':case 'ScrollLock':case 'Pause':case 'ArrowLeft':case 'ArrowDown':
		case 'ArrowRight':case 'ArrowUp':
			break;

		case 'F4':
			if (tStarted === 0) {
				if (!$('#at_test').length) {
					$('#btn4').click();
				}
				timer = setInterval(out, 1);
				console.debug('Timer started.');
				tStarted = 1;
			} else if (tStarted === 1) {
				console.debug('Timer has already been started, to stop the timer press F2.');
			}
			break;

		case 'F2':
			if (tStarted === 1) {
				//$('#at_test').remove();
				clearInterval(timer);
				console.debug('Cleared Timer. Press F4 to restart it.');
				tStarted = 0;
			} else if (tStarted === 0) {
				console.debug('Timer has not been started, please press F4 to start it.');
			}
			break;

		case 'F7':
			if (a.length > 0) {
				while (a.length > 0) {
					a.pop();
				}
				console.debug('Cleared text array.');
				out();
			} else if (a.length <= 0 || a.length === 'undefined') {
				console.debug('There is no text in the array to clear.');
			}
			break;

		case 'Backspace':
			if (a.length > 0) {
				a.pop();
			}
			break;

		case 'Enter':
			//TODO
			break;

		default:
			if (tStarted === 1) {
				a.push(e.key);
			} else if (tStarted === 0) {
				console.debug('Timer has not been started, please press F4 to start it before typing!');
			}
			break;
	}
};

function out() {
	$('#at_test').html(a.join(''));
}

console.debug('Press F4 to start timer.\nPress F2 to stop the timer.\nPress F7 to clear the text.');

function att() {
	let p = document.createElement('p');
	p.id = 'at_test';

	if (!$('#at_test').length) {
		if (tStarted === 0) {
			alert('Press F4 to start typing.\nView console for further information!');
			a.push('F4 to start typing!\nF2 to stop typing!\nF7 to clear this box!');
		}
		$('body').append(p);
		out();
	} else if ($('#at_test').length && tStarted === 0) {
		$('#at_test').remove();
	}
}