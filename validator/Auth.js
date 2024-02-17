const messages = require("./../constants/Messages");
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegix = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneReg = /[1-9]{2}\d{9}/;

module.exports = {
    loginValidate: async function(req,res,next){
        let {email,password} = req.body;
        let errors = {};
        if(!email || !email.trim()){
            errors['email'] = messages.required;
        }else if(!emailRE.test(email)){
            errors['email'] = messages.invalidEmail;
        }
        if(!password || !password.trim()){
            errors['password'] = messages.required;
        }
        if(Object.keys(errors).length){
            return res.status(422).send({status: 422,errors: errors});
        }
        return next();
    },
    forgotPasswordValidate: async function(req,res,next){
        let {email} = req.body;
        let errors = {};
        if(!email || !email.trim()){
            errors['email'] = messages.required;
        }else if(!emailRE.test(email)){
            errors['email'] = messages.invalidEmail;
        }
        if(Object.keys(errors).length){
            return res.status(422).send({status: 422,errors: errors});
        }
        return next();
    },
    resetPasswordValidate: async function(req,res,next){
        let {token,password} = req.body;
        let errors = {};
        if(!token || !token.trim()){
            errors['token'] = messages.required;
        }
        if(!password || !password.trim()){
            errors['password'] = messages.required;
        }else if(!passRegix.test(password.trim())){
            errors['password'] = messages.password;
        }
        if(Object.keys(errors).length){
            return res.status(422).send({status: 422,errors: errors});
        }
        return next();
    },
    registerValidate: async function(req,res,next){
        let {first_name,last_name,email,password,confirm_password} = req.body;
        let errors = {};
        if(!first_name || !first_name.trim()){
            errors['first_name'] = messages.required;
        }
        if(!last_name || !last_name.trim()){
            errors['last_name'] = messages.required;
        }
        if(!email || !email.trim()){
            errors['email'] = messages.required;
        }else if(!emailRE.test(email)){
            errors['email'] = messages.invalidEmail;
        }
        if(!password || !password.trim()){
            errors['password'] = messages.required;
        }else if(!passRegix.test(password.trim())){
            errors['password'] = messages.password;
        }
        if(!confirm_password || !confirm_password.trim()){
            errors['confirm_password'] = messages.required;
        }else if(!passRegix.test(confirm_password.trim())){
            errors['confirm_password'] = messages.password;
        }else if(password != confirm_password){
            errors['confirm_password'] = messages.confirmPassword;
        }
        if(Object.keys(errors).length){
            return res.status(200).send({status: 422,errors: errors});
        }
        return next();
    },
    changePassValidate: async function(req,res,next){
        let {old_password,password,confirm_password} = req.body;
        let errors = {};
        if(!old_password || !old_password.trim()){
            errors['old_password'] = messages.required;
        }
        if(!password || !password.trim()){
            errors['password'] = messages.required;
        }else if (!passRegix.test(password.trim())){
            errors['password'] = messages.password;
        }
        if(old_password && password && old_password == password){
            errors["password"] = messages.oldPassword;
        }
        if(!confirm_password || !confirm_password.trim()){
            errors['confirm_password'] = messages.required;
        }else if(password != confirm_password){
            errors['confirm_password'] = messages.confirmPassword;
        }
        if(Object.keys(errors).length){
            return res.status(200).send({status: 422,errors: errors});
        }
        return next();
    }
}