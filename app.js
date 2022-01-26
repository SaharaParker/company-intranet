//index.html
const errorDiv = document.getElementById('errorMsg')
const loginForm = document.getElementById('login')
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

loginForm.addEventListener('submit',(evt)=> {
    evt.preventDefault();

    if(
        checkIsNotEmpty(emailInput,"Email address is required")&&
        checkIsNotEmpty(passwordInput,"Password is required.")
){
        window.location.href='/company-news.html';

    }
    // console.log("hello")
});

function checkIsNotEmpty (domInput, errorMessage){

    if (domInput.value === ""){
        // alert("Email or Password Required!");
        console.log(errorMessage);

        const div = document.createElement('div');
        div.innerHTML = `<p class="bg-red-400 text-white"> ${errorMessage}</p>`;

        errorDiv.appendChild(div);

        return false;
    }
    return true;
}

//company-news.html


