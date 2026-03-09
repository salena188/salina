


// scroll
function scrollToSection(){
 document.getElementById("projects").scrollIntoView({
    behavior:"smooth"
});
}


// form validate
// document.getElementById("contactForm").onsubmit = function(e){

//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const error = document.getElementById("error");

//     if(!email.includes("@")){
//         error.textContent = "Invalid Email";
//     }

//     else if(message.length < 5){
//         error.textContent = "Message too short";
//     }

//     else{
//         error.textContent = "Message Sent Successfully!";
//     }

// };


document.getElementById("contactForm").onsubmit = function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error = document.getElementById("error");

   if(!(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") || email.endsWith("@hotmail.com"))){

        // alert("Invalid email");
        error.textContent = "Please use Gmail, Yahoo, or Hotmail";
    }

    else if(message.length < 5){
        error.textContent = "Message too short";
    }

    else{
        error.textContent = "Message Sent Successfully!";
    }

};
