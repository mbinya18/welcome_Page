const submit = document.getElementById('submission');
const message = document.querySelector('p');
const username = document.getElementById('name');

let message_value;
submit.addEventListener('click', function(){
    message_value = username.value;

    message.innerHTML = `Hello, ${message_value} and welcome`;

    submit.disabled = true;



});