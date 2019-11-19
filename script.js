
  function checkForm(form)
  {

    if(form.full_name.value == "") {
      alert("Error: Username cannot be blank!");
      form.full_name.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.full_name.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.full_name.focus();
      return false;
    }

    if(form.password.value != "" && form.password.value == form.password.value) {
      if(form.password.value.length < 8) {
        alert("Error: Password must contain at least six characters!");
        form.password.focus();
        return false;
      }
      if(form.password.value == form.full_name.value) {
        alert("Error: Password must be different from Username!");
        form.password.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.password.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.password.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.password.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.password.focus();
      return false;
    }
    if(form.email.value=="")
    {
       alert("Error: Email cannot be blank!");
      form.email.focus();
      return false;
    }
 email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(!email.test(form.email.value)) {
      alert("Error: Not a valid email_id");
      form.email.focus();
      return false;
    }
   // alert("You entered a valid password: " + form.password.value);
    return true;
  }
