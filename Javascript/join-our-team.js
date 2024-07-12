
const firstnameInput = document.getElementById("firstname")
const firstnameErr = document.getElementById("firstnameErr")
const lastnameInput = document.getElementById("lastname")
const lastnameErr = document.getElementById("lastnameErr")
const emailInput = document.getElementById("email")
const emailErr = document.getElementById("emailErr")
const phoneInput = document.getElementById("phone")
const phoneErr = document.getElementById("phoneErr")
const volunteering_reason_Input = document.getElementById("volunteering_reason")
const volunteering_reason_Err = document.getElementById("volunteering_reason_Err")
const skills_possessed_Input = document.getElementById("skills_possessed")
const skills_possessed_Err = document.getElementById("skills_possessed_Err")
const alert = document.getElementById("alert")
const send_btn = document.getElementById("send-btn")


const isValidUSPhoneNumber = (inputString) => {
    const regex = /^[2-9][\d]{2}[\d]{3}[\d]{4}$/;
    let onlyNumbers = inputString.replace(/\D/g, '');
    
    if (onlyNumbers.length === 11 && onlyNumbers[0] === "1") {
        let newPhoneNumber = onlyNumbers.slice(1);
        
        if (regex.test(newPhoneNumber) === true) {

            const areaCode = newPhoneNumber.slice(0, 3);
            const firstThree = newPhoneNumber.slice(3, 6);
            const lastFour = newPhoneNumber.slice(6, 10);

            return `(${areaCode}) ${firstThree}-${lastFour}`;
            
        } else {
            return false;
        }
    } else if (onlyNumbers.length === 10) {
        
        if (regex.test(onlyNumbers) === true) {
            
            const areaCode = onlyNumbers.slice(0, 3);
            const firstThree = onlyNumbers.slice(3, 6);
            const lastFour = onlyNumbers.slice(6, 10);

            return `(${areaCode}) ${firstThree}-${lastFour}`;
        } else {
            return false;
        }
    } else {
        return false
    }
}


const formatName = (input) => {

    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        throw new Error('A name cannot contain only spaces')
    }


    // Regular expression to check for invalid characters (anything not a letter)
    const invalidCharRegex = /[^a-zA-Z]/;

    if (invalidCharRegex.test(trimmedInput)) {
        throw new Error('A name should contain only alphabetical letters');
    }

    // Ensure no spaces within the trimmed input
    if (trimmedInput.includes(' ')) {
        throw new Error('A name should be one word');
    }

    // Convert the first character to uppercase if the string is not only spaces
    if (trimmedInput.length > 0) {
        return trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1);
    }

    return trimmedInput;
}

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email) === false) {
        return false;
    } else {
        return email;
    }
}

const validateTextValue = (text) => {
    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
        throw new Error('The text field cannot be empty');
    } else {
        return trimmedText;
    }
}

const submitForm = () => {

    let emailParameters = {};

    //for firstname
    try {
        const input = firstnameInput.value;
        emailParameters["from_firstname"] = formatName(input);
        firstnameErr.classList.remove("err-message");
        firstnameErr.innerHTML = "";
        firstnameInput.classList.remove("input-border-err"); 
    } catch (error) {
        firstnameErr.classList.add("err-message");
        firstnameErr.innerHTML = error.message;
        firstnameInput.classList.add("input-border-err");
        return;
    }

    // for lastname
    try {
        const input = lastnameInput.value;
        emailParameters["from_lastname"] = formatName(input);
        lastnameErr.classList.remove("err-message");
        lastnameErr.innerHTML = "";
        lastnameInput.classList.remove("input-border-err"); 
    } catch (error) {
        lastnameErr.classList.add("err-message");
        lastnameErr.innerHTML = error.message;
        lastnameInput.classList.add("input-border-err");      
        return;
    }
    //for email
    let email = isValidEmail(emailInput.value);
    if (email === false) {
        emailErr.classList.add("err-message")
        emailInput.classList.add("input-border-err")
        emailErr.innerHTML = "Enter a valid email";
        return;
    } else {
        emailParameters["reply_to"] = email;
        emailErr.classList.remove("err-message")
        emailInput.classList.remove("input-border-err")
        emailErr.innerHTML = "";
    }

    //for phone number
    let phoneNumber = isValidUSPhoneNumber(phoneInput.value)
    if (phoneNumber === false) {
        phoneErr.classList.add("err-message")
        phoneInput.classList.add("input-border-err")
        return;
    } else {
        emailParameters["from_phone"] = phoneNumber
        phoneErr.classList.remove("err-message")
        phoneInput.classList.remove("input-border-err")
    }
    
    //for volunteering reason
    try {
        emailParameters["volunteering_reason"] = validateTextValue(volunteering_reason_Input.value);
        volunteering_reason_Err.classList.remove("err-message");
        volunteering_reason_Err.innerHTML = "";
        volunteering_reason_Input.classList.remove("input-border-err"); 
    } catch (error) {
        volunteering_reason_Err.innerHTML = error.message
        volunteering_reason_Err.style.color = "#dc2626"
        volunteering_reason_Input.classList.add("input-border-err")
        return;
    }

    //for skills possessed
    try {
        emailParameters["skills_possessed"] = validateTextValue(skills_possessed_Input.value);
        skills_possessed_Err.classList.remove("err-message");
        skills_possessed_Err.innerHTML = "";
        skills_possessed_Input.classList.remove("input-border-err"); 
    } catch (error) {
        skills_possessed_Err.innerHTML = error.message
        skills_possessed_Err.style.color = "#dc2626"
        skills_possessed_Input.classList.add("input-border-err")
        return;
    }

    //for to_name
    emailParameters["to_name"] = "Life Care Source"; 
        
    console.log(emailParameters);
    send_btn.disabled = true;
    send_btn.innerHTML = "Submitting...";

    // emailjs.send('service_ibp4p94','template_string',emailParameters)
    //     .then(function (res) {
    //         alert.classList.add("successful-alert");
    //         alert.classList.remove("error-allert")
    //         alert.innerHTML = "Application submitted successfully";
    //         send_btn.disabled = false;
    //         send_btn.innerHTML = "Submit";
    //     }).catch((err) => {
    //         alert.classList.remove("successful-alert");
    //         alert.classList.add("error-allert")
    //         alert.innerHTML = err.message;
    //         send_btn.disabled = false;
    //         send_btn.innerHTML = "Submit";
    //     })
}

send_btn.addEventListener("click", (e) => {
    e.preventDefault();
    submitForm();
})


