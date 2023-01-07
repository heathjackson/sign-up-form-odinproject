const create_account = document.getElementById('create_account');
let error = document.getElementById('error');

console.log(user_password);

create_account.addEventListener('click', () => {
  let user_password = document.getElementById('user_password').value;
  let confirm_password = document.getElementById('confirm_password').value;

  if (user_password === confirm_password) {
    error.textContent = "";
    document.getElementById('user_password').style.border = "2px solid green";
    document.getElementById('confirm_password').style.border = "2px solid green";
  }
  else {
    error.textContent = "* passwords do not match" 
    document.getElementById('user_password').style.border = "2px solid red";
    document.getElementById('confirm_password').style.border = "2px solid red";
  }
});

