function getFormvalue() {
	let inp = document.querySelectorAll("input")
	let first_name = inp[0].value
	let last_name = inp[1].value
	let full_name = first_name + " " + last_name
	alert(full_name)
}
