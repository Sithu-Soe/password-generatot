let allChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.',
'/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', '_', '`', '{', '|', '}']
// console.log(allChars)
let inputEl = document.querySelector('#quantity');
let errorEl = document.getElementById('length-error');
let gridEls = document.getElementsByClassName('grid-item')
let notficationEL = document.querySelector('#notification')

function getPasswords() {
	if(inputEl.value > 3 && inputEl.value < 21){
		errorEl.innerText = ''
		let passwords = []
		for (let i = 0; i < 4; i++){
			passwords.push(generateRandomPassword())
		}
		for (let i = 0; i < 4; i++){
			gridEls[i].innerText = passwords[i]
		}
	} else {
		
		errorEl.innerText = 'password length is invalid'
	}
}

function generateRandomPassword(){
	let password = '';
	for (let i = 0; i < inputEl.value; i++) {
		let randomIndex = Math.floor(Math.random() * allChars.length)
		password += allChars[randomIndex]
	}

	return password

}

function copyToClipboard(i){
	// navigator.clipboard.writeText(gridEls[i].innerText);
	// notficationEL.style.visibility = 'visible'
	
	navigator.clipboard
		.writeText(gridEls[i - 1].innerText)
		.then(() => {
			notification.style = `
				transition: all 2s;
				visibility: visible;
				opacity: 0;
			`;
			setTimeout(
				() =>
				(notification.style = `
						visibility: hidden;
						opacity: 1;
					`),
				1000
			);
		})
		.catch((err) => {
			alert(err);
		});
}