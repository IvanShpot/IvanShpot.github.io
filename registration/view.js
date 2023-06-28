function profile() {
    var isLogged = sessionStorage.getItem('logged');
    if(isLogged) {
        const name = document.getElementById("profileName");
        name.textContent = sessionStorage.getItem('name');

        const email = document.getElementById("profileEmail");
        email.textContent = sessionStorage.getItem('email');

        const gender = document.getElementById("profileGender");
        gender.textContent = sessionStorage.getItem('gender');

        const birthday = document.getElementById("profileBirthday");
        birthday.textContent = sessionStorage.getItem('birthday');
    }
}