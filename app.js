const errorDiv = document.getElementById('errorMsg')
const form = document.getElementById('login')
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

form.addEventListener('submit',(evt)=> {
    evt.preventDefault();
    checkInputIsEmpty(passwordInput);
    checkInputIsEmpty(emailInput);
    // console.log("hello");
})

function checkInputIsEmpty (input){
    // console.log("hello")
    if (input.value === ""){
        // alert("Email or Password Required!");
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = '<p class="p-6 bg-red-500 text-white font-bold">Email or Password required.</p>';
        errorDiv.appendChild(errorMessage);
    }
}

const errorDiv = document.getElementById('error-message')
const form = document.getElementById('')