const password = prompt('Please enter a new password');

// Password cannot include spaces

if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log('Valid Password')
} else {
    console.log('Password Too Short (or) Contains Spaces! MUST be 6+ characters and not contain any spaces. Please Try Again!')
} 
