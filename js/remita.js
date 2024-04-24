
let schoolName = document.querySelector("#school_name")
let registration = document.querySelector("#registration")
let amount = document.querySelector("#amount")
let payer_name = document.querySelector("#payer_name")
let phone_number = document.querySelector("#phone_number")
let Email = document.querySelector("#Email")

// captha
let check = document.querySelector("#check")
let load = check.querySelector(".load")
let checkIcon = check.querySelector("#icon")

// submit
let submit = document.querySelector("#submit")
let reset = document.querySelector("#reset")

window.addEventListener("load", ()=>{
	let loginDetails = JSON.parse(localStorage.getItem("loginDetails"))
	let studentDetails = JSON.parse(localStorage.getItem("studentDetails"))

	let name = studentDetails.firstName + " " + studentDetails.lastName;
	let phoneNumber = studentDetails.phoneNumber
	let email = studentDetails.email
	let money = studentDetails.money
	console.log(studentDetails)

	schoolName.value = "FEDERAL UNIVERSITY OF TECHNOLOGY MINNA - 100050"
	registration.value = "School Fees Registration"
	amount.value = money
	payer_name.value = name
	phone_number.value = phoneNumber
	Email.value = email

	check.addEventListener("click", captha)
	reset.addEventListener("click", resetBtn)
	submit.addEventListener("click", submitBtn)
})
let checkBox = false;
function captha(){
	setTimeout(()=>{
		checkIcon.style.display = "none"
		load.style.display = "block"
	}, 500)
	setTimeout(()=>{
		load.style.display = "none"
		checkIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`
		checkIcon.style.display = "block"
		checkIcon.style.fill = "green"
		checkBox = true;

	}, 5000)
}
function submitBtn(){
	if(checkBox == true){
		location.href = "./e-invoice.html"
	}
}
function resetBtn(){
	schoolName.value = ""
	registration.value = ""
	amount.value = ""
	payer_name.value = ""
	phone_number.value = ""
	Email.value = ""
}