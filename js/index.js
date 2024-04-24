let cover = document.querySelector(".cover")

let student_id = document.querySelector("#student_id")
let password = document.querySelector("#password")

let error = document.querySelector(".error")
let show = document.querySelector(".show")

let password_error = document.querySelector(".password_error")

let eleven_cha = password_error.querySelector(".eleven_cha")
let eleven_cha_CheckBox = eleven_cha.querySelector("#eleven_cha")

let lowercase = password_error.querySelector(".lowercase")
let lowerCheckBox = lowercase.querySelector("#lowercase")

let uppercase = password_error.querySelector(".uppercase")
let upperCheckBox = uppercase.querySelector("#uppercase")

let number = password_error.querySelector(".number")
let numberCheckBox = number.querySelector("#number")

let isViewed = false;


setInterval(()=>{
	cover.style.display = "none"
}, 1000)

student_id.addEventListener("keydown", ()=>{
	setInterval(()=>{
		if(
		student_id.value.length > 8 ||
		student_id.value.length < 8 ||
		student_id.value[0] != "M" &&
		student_id.value[0] != "m"
		){
			error.style.display = "block"
		} else{
			error.style.display = "none"
		}
		// let containValue = /[a-zA-Z]/;
		// if(student_id.value.match(containValue)){
		// 	error.style.display = "none"
		// }
		if(student_id.value == ""){
			error.style.display = "none"
		}

	},1000)
		console.log(student_id.value)
})

let allDone = false;
let charcter_length = false;
let character_number = false;
let character_upper = false;
let character_lower = false;

password.addEventListener("focus", ()=>{
	password_error.style.display = "flex"
})
password.addEventListener("blur", ()=>{
	password_error.style.display = "none"
})
password.addEventListener("keydown", ()=>{
	setInterval(()=>{
		// password
		if(password.value.length >= 8 ){
			eleven_cha.style.color = "green"
			eleven_cha.style.fill = "green"
			eleven_cha_CheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			charcter_length = true;
		}
		else {
			eleven_cha.style.color = "red"
			eleven_cha.style.fill = "red"
			eleven_cha_CheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			charcter_length = false;
		}

		let containsNumber =/\d/.test(password.value)
		if(containsNumber){
			number.style.color = "green"
			number.style.fill = "green"
			numberCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_number = true;
		}
		else if(!containsNumber){
			number.style.color = "red"
			number.style.fill = "red"
			numberCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_number = false;
		}

		let containsUppercase = /[A-Z]/.test(password.value);
		if(containsUppercase){
			uppercase.style.color = "green"
			uppercase.style.fill = "green"
			upperCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_upper = true;
		}
		else if(!containsUppercase){
			uppercase.style.color = "red"
			uppercase.style.fill = "red"
			upperCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_upper = false;
		}

		let containsLowercase = /[a-z]/.test(password.value);
		if(containsLowercase){
			lowercase.style.color = "green"
			lowercase.style.fill = "green"
			lowerCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_lower = true;
		}
		else if(!containsLowercase){
			lowercase.style.color = "red"
			lowercase.style.fill = "red"
			lowerCheckBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
			character_lower = false;
		}
		if(
			charcter_length==true &&
			character_number==true &&
			character_upper==true &&
			character_lower==true
			) {
				allDone = true;
			} else {
				allDone = false;
			}
	}, 1000)

})
// view password
function passwordView(){
	isViewed ? hidePassword() : showPassword();
}

function hidePassword(){
	isViewed = false;
	show.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>`
	password.setAttribute("type", "text")
}
function showPassword(){
	isViewed = true;
	show.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>`
	password.setAttribute("type", "password")
}


function submitDetails(){
	if(error.style.display == "block"){
		student_id.focus()
	} else if(allDone == false){
		password.focus()
	} else {
		const loginDetails = {
			studentID: student_id.value
		}
		const saveDetails = localStorage.setItem("loginDetails", JSON.stringify(loginDetails))
		setTimeout(()=>{
			location.href = "./payment.html"
		},1000)
	}
}


// // login page
// function submitDetails() {
// 	// Get input values
// 	var studentId = document.getElementById("student_id").value;
// 	var password = document.getElementById("password").value;

// 	// Perform basic validation (you can add more validation as needed)
// 	if (studentId.trim() === '' || password.trim() === '') {
// 		alert("Please enter both Student ID and Password");
// 		return;
// 	}

// 	// Perform authentication (you can replace this with your actual authentication logic)
// 	if (studentId === 'M1900303' && password === 'MYschool001') {
// 		window.location.href = "payment.html";
// 		// Redirect to dashboard or perform any other action
// 	} else {
// 		alert("Invalid Student ID or Password");
// 	}
// }

// login details
// Define user credentials (replace with your actual user data)
var users = [
    { studentId: "M1900303", password: "MYschool001", nextPage: "payment.html" },
    { studentId: "M1902236", password: "Susankelechi333", nextPage: "payment.html" },
    { studentId: "M2100498", password: "Elijah55555", nextPage: "payment.html" },
	{ studentId: "M2100687", password: "Waziriabdul45", nextPage: "payment.html" },
    { studentId: "M1900279", password: "Abdulsamad12345", nextPage: "payment.html" },
];

function submitDetails() {
    // Retrieve input values
    var studentId = document.getElementById("student_id").value;
    var password = document.getElementById("password").value;

    // Check credentials against the defined users
    var authenticatedUser = users.find(function(user) {
        return user.studentId === studentId && user.password === password;
    });

    if (authenticatedUser) {
        // Redirect to the next page for the authenticated user
        window.location.href = authenticatedUser.nextPage;
    } else {
        alert("Invalid student ID or password. Please try again.");
    }
}
