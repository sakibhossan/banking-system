document.getElementById('login-submit').addEventListener('click', function(){
   const emailFilled  = document.getElementById('user-email');
   const userEmail = emailFilled.value;
//    console.log(userEmail);
    // get user password
    const passwordFilled = document.getElementById('user-password');
    const userPassword = passwordFilled.value;
    // console.log(userPassword);
    if(userEmail == 'sontan@gmail.com'&& userPassword == 'secret'){
       window.location.href ='banking.html';
    }
});
