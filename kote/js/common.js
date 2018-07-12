const fua    = document.getElementById('fua')
const lax    = document.getElementById('lax')
const chiken = document.getElementById('chiken')

let cheked = false

const arr = []
arr.push(fua, lax, chiken)
console.log(arr)
for (let i = 0; i < arr.length; i++) {
	arr[i].onclick = func
	console.log(cheked)
}

function func() {
	console.log(cheked)
	if (cheked != true) {
		this.style.borderStyle = 'solid'
		cheked = true
		console.log(cheked)
	} else  {
		this.style.borderStyle = 'none'
		cheked = false
	}
	
}