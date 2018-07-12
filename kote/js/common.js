const fua    = document.getElementById('fua')
const lax    = document.getElementById('lax')
const chiken = document.getElementById('chiken')

let cheked = false

const arr = []
arr.push(fua, lax, chiken)
for (let i = 0; i < arr.length; i++) {
	arr[i].onclick = func
}

function func() {
	if (this.cheked != true && this != chiken) {
		this.style.borderStyle = 'solid'
		this.cheked = true
	} else  {
		this.style.borderStyle = 'none'
		this.cheked = false
	}
	
}