function reg() {
    console.log("\n Going into reg");
    let newName = document.getElementById("registName").value;
    let newEmail = document.getElementById("registEmail").value;
    let newGender = document.getElementById("registGender").selectedOptions[0].textContent;
    let newBirthday = String(document.getElementById("registBirthday").value);
    let newPassword = document.getElementById("registPassword").value;

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    if(users.some((user) => user.email === newEmail)){
        alert("Користувач з такою електронною поштою вже існує");
        return;
    }
    else {
        let newUser = {
            name: newName,
            email: newEmail,
            gender: newGender,
            birthday: newBirthday,
            password: newPassword
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Користувач " + newName + " зареєструвався");
    }
}

function log() {

    let inEmail = document.getElementById("loginEmail").value;
    let inPassword = document.getElementById("loginPassword").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    if(users.some((user) => user.email === inEmail)) {
        for(let i = 0; i < users.length; i++) {
            if(users[i].email === inEmail) {
                if(users[i].password === inPassword) {
                    alert("Ласкаво просимо " + users[i].name + "!");
                    sessionStorage.setItem('logged', true);
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                    sessionStorage.setItem('gender', users[i].gender);
                    sessionStorage.setItem('birthday', users[i].birthday);

                    document.getElementById()
                }
                else {
                    alert("Було введено невірний пароль");
                    break;
                }
            }
        }
    }
    else {
        alert("Користувача з такою електронною поштою не існує");

    }
}