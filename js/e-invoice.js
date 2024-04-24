let close = document.querySelector(".close")

let btns = document.querySelector(".btns")
let pay = btns.querySelector("#pay")

let _name = document.querySelector("#name")
let phone_number = document.querySelector("#phone_number")
let _email = document.querySelector("#email")

let money = document.querySelector("#money")
let charges = document.querySelector("#charges")
let vatAmount = document.querySelector("#vatAmount")

let total = document.querySelector("#total")

let link = document.querySelectorAll(".link")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")

let payment_method_box = document.querySelector(".payment_method_box")

let payBtn = box2.querySelector("#pay")
let loader = box2.querySelector(".load")
let success = box2.querySelector(".success")
let redirecting = box2.querySelector(".redirecting")


let remita = document.querySelector(".remita")
let bank_branch = document.querySelector(".bank_branch")

window.addEventListener("load", ()=>{
	const retreiveDetails = JSON.parse(localStorage.getItem("studentDetails"))

	let name = retreiveDetails.firstName + " " + retreiveDetails.lastName;
	let phoneNumber = retreiveDetails.phoneNumber;
	let email = retreiveDetails.email
	let amount = retreiveDetails.money

	_name.textContent = name;
	phone_number.textContent = phoneNumber
	_email.textContent = email

	money.textContent = amount
	charges.textContent = 157.50
	vatAmount.textContent = "0.00"
	total.textContent =  parseFloat( Number(money.textContent) + Number(charges.textContent) + Number(vatAmount.textContent))

	pay.addEventListener("click", ()=>{
		// location.href = "./"
	})
})

function addActive(item){item.classList.add('active')}
function removeActive(item){item.classList.remove('active')}
link.forEach(item =>{
	item.addEventListener("click", ()=>{
		let checked = document.createElement("span")
		checked.classList = "check"

		link.forEach(item => {
			removeActive(item)
		})
		addActive(item)
		item.appendChild(checked)

		if(remita.classList.contains("active")){
			box1.style.display = "none"
			box2.style.display = "flex"
		} else if(bank_branch.classList.contains("active")){
			box1.style.display = "flex"
			box2.style.display = "none"
		}
	})
})
function payment(element){
	element.style.display = "flex"
}
function quit(element){
	element.style.display = "none"
}
payBtn.addEventListener("click", ()=>{
	addActive(loader)
	setTimeout(()=>{
		removeActive(loader)
		success.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Payment successful.`
	},2000)
	setTimeout(()=>{
		redirecting.innerHTML = `Redirecting...`
	},3000)
	setTimeout(()=>{
		location.href = "./course reg.html"
	},5000)
})