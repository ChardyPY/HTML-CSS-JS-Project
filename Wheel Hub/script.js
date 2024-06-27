
// apabila di form compponent isinya ada button type "submit" dipencet
// maka akan mengtrigger event 'submit' pada form tersebut

// add event listener (jenis event, function yang di lakukan)
document.getElementById('registrationForm').addEventListener("submit", (event) => {
    event.preventDefault();
    // ini mencegah page ke refresh\
    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let pwField = document.getElementById('password');
    let confirmPwField = document.getElementById('confirmPassword');
    let genderField = document.getElementById('gender');
    let dobField = document.getElementById('dob');
    let termBox = document.getElementById('terms');

    let username = usernameField.value
    let email = emailField.value
    let pw = pwField.value 
    let confirmPw = confirmPwField.value
    let gender =  genderField.value
    let dob = dobField.value
    let term = termBox.checked

    // console.log(username)
    // console.log(email)
    // console.log(pw)
    // console.log(confirmPw)
    // console.log(gender)
    // console.log(dob)
    // console.log(term)

    if(username ===""){
        alert("username kosong")
        return;
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert("email salah")
        return;
    }
    if(pw.length < 8){
        alert("password kependekan")
        return;
    }
    if(confirmPw !== pw){
        alert("password gak sama")
        return;
    }
    if (gender === ""){
        alert("install kelamin terlebih dahulu")
        return;
    }
    if (!dob){
        alert("tanggal harus di isi")
        return;
    }
    let dobDate = new Date(dob);
    let currDate = new Date()
    let age = currDate.getFullYear() - dobDate.getFullYear()
    let monthDiff = currDate.getMonth() - dobDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && currDate.getDate() < dobDate.getDate())){
        age --;
    }
    if (age < 18){
        alert("umur lu blom cukup");
        return;
    }
    if (!term){
        alert("ceklis agreement");
        return;
    }
    alert("dah kelar registrasi")
})
