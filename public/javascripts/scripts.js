var focusInput = function(input) { 
  document.getElementById(input).focus();
}

var validateInput = function(input) {
  var value = document.getElementById(input).value;
  var labelError = input + 'Error';
  var labelText, labelStyle;
  switch (input) {
    case 'name':
      labelText = 'Please enter your email address.';
      labelStyle = 'hidden';
      break;
    case 'email':
      if(value !== '' && !validateEmail(value)){
        labelText = 'Not a valid email address.';
        labelStyle = 'visible';
      } else {
        labelText = 'Please enter your email address.';
        labelStyle = 'hidden';
      }
      break;
    case 'phone':
      if(value !== '' && !validatePhone(value)){
        labelText = 'Not a valid phone number.';
        labelStyle = 'visible';
      } else {
        labelText = 'Please enter your phone number.';
        labelStyle = 'hidden';
      }
      break;
    case 'message':
      labelText = 'Please enter your email address.';
      labelStyle = 'hidden';
      break;
  }
  document.getElementById(labelError).innerHTML = labelText;
  document.getElementById(labelError).style.visibility = labelStyle;
}

var validateForm = function() {
  var values = ['name', 'email', 'phone', 'message'], obj = {}, error = false;
  values.forEach(value => {
    obj[value] = document.getElementById(value).value;
    // Validate empty inputs
    if(obj[value] === "") {
      error = true;
      labelError = value + 'Error';
      document.getElementById(labelError).style.visibility = 'visible';
    }
    // Validate email && phone
    if(
      (value === "email" && obj[value] !== "" && !validateEmail(obj[value])) ||
      (value === "phone" && obj[value] !== "" && !validatePhone(obj[value]))
    ) {
      error = true;
    }
  });
  if(error){
    return false;
  }
  var respAr = [];
  for (const prop in obj) {
    if (prop === 'email') { obj[prop] = obj[prop].toLowerCase()}
    respAr.push(`${prop}: ${obj[prop]} `);
  }
  var resp = respAr.join('\r\n');
  alert('The information has been sended correctly:\r\n\r\n' + resp);
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^[0-9]{10}$/;
  return re.test(phone);
}
