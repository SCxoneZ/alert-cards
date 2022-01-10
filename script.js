function checkAlert(){
	document.querySelectorAll('.card')
	.forEach(el => {
	el.querySelector('.alert-close').addEventListener('click', (e) => e.target.parentElement.remove())
	})
}

checkAlert();