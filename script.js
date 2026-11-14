
const submit = document.getElementById('submit');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const option = document.querySelector(".select");

submit.addEventListener('click', ()=>{
    const name1 = firstName.value;
    const name2 = lastName.value;
    const mail = email.value;
    const password1 = pass1.value;
    const course = option.value;
    alert(`
        First Name: ${name1}
        Second Name: ${name2}
        Email: ${mail}
        Course: ${course}
        Password: ${password1}
        `)
});