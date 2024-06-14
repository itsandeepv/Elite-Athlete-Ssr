
export const limitText = (text,limit = 500) => {
    let newText = text;
    if(text && text.length >= limit){
        newText = text.substring(0,limit);
    }
    return newText;
}
export const remaingLimit = (text,limit = 500) => {
    let count = (limit - (text ? text.replace(/\r/g,'').length : 0));
    return count + ' characters left';
}
export const focusOnFeild = (name) => {
    if(document.getElementsByName(name)){
        let textbox = document.getElementsByName(name)[0];
        if(textbox){
            textbox.focus();
        }
    }
}
export const focusOnFeildUsingClassName = (name) => {
    if(document.getElementsByClassName(name)){
        let textbox = document.getElementsByClassName(name)[0];
        if(textbox){
            textbox.scrollIntoView();
        }
    }
}
export function hasValidationError(errors, field){
    if(errors.hasOwnProperty(field)){
        return errors[field] ? true : false;
    }
    return null;
}
export function validationError(errors,field,Name = null){
    if(errors.hasOwnProperty(field)){
        if(!Array.isArray(errors[field])){
            return errors[field];
        }else{
            return errors[field].toString();
        }
    }
    return null;
}

export const formatPhoneNumber = (phoneNumberString)  => {
    var cleaned = ('' +phoneNumberString).replace(/\D/g,'');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if(match){
    var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode,'(',match[2],') ',match[3],'-',match[4]].join('');
    }
    return null;
}



export  const validatedFields = (formdata , inputArray ,setErrors) => {
    const newError = {};
    let positionFocus = "";
    var regex = /^[0-9]+$/
    inputArray?.map((inputname)=>{
        if(inputname == "cpassword" ){
            if (!formdata["cpassword"] || !formdata["cpassword"].trim()) {
                newError["cpassword"] = "Confirm  password Required";
                positionFocus = positionFocus || "cpassword"
            }else if(formdata["password"] != formdata["cpassword"]){
                newError["cpassword"] = "Confirm  password is not matched";
                positionFocus = positionFocus || "cpassword"
            }
        }else if(inputname == "password"){
            if (!formdata["password"] || !formdata["password"].trim()) {
                newError["password"] = "Confirm  password Required";
                positionFocus = positionFocus || "password"
            }else if(formdata["password"].length < 8){
                 console.log(formdata["password"].length , "<<<<<<<formdata");
                newError["password"] = "Password length should be greater then 8 ";
                positionFocus = positionFocus || "password"
            }
        }else if(inputname == "phone"){
            var regex = /^[6-9]\d{9}$/;
            // console.log(regex.test(formdata["phone"]) , "<<<<<<<number validate");
            if (!formdata["phone"] || !formdata["phone"].trim()) {
                newError["phone"] = "Phone number is Required";
                positionFocus = positionFocus || "phone"
            }else if(!regex.test(formdata["phone"]) ){
                //  console.log(formdata["phone"].length , "<<<<<<<formdata");
                newError["phone"] = "Please enter a valid number ";
                positionFocus = positionFocus || "phone"
            }
        }else{
            if (!formdata[inputname] || !formdata[inputname].trim()) {
                newError[inputname] = "Please fill Required field";
                positionFocus = positionFocus || inputname
            }
        }
    })
  
    setErrors(newError);
    if (positionFocus) {
        focusOnFeild(positionFocus);
        return false;
    }
    return true;
}


const TruncatedText = ({ text, maxLength }) => {
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  
    return (
      <span title={text}>{truncatedText}</span>
    );
  };
  
  export default TruncatedText;
  

  export  const formatCurrency = (number, currencySymbol = '₹') => {
    // Check if the input is a valid number
    if (isNaN(number)) { return ''; }
    // Convert the number to a string and split it into integer and decimal parts
    const parts = number.toFixed(2).toString().split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    // Add commas to separate thousands
    let formattedIntegerPart = '';
    for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
      formattedIntegerPart = integerPart[i] + (j > 0 && j % 3 === 0 ? ',' : '') + formattedIntegerPart;
    }
    return currencySymbol + formattedIntegerPart + '.' + decimalPart;
  };