import AuthApi from "./api/auth.api.js";

const auth_form=document.getElementById("auth-form");
const username_input=document.getElementById("username");
const password_input=document.getElementById("password");


document.addEventListener("DOMContentLoaded",async ()=>{
    await AuthApi.logout()
})
auth_form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    const data={
        username:username_input.value,
        password:password_input.value,
    }

    const res=await AuthApi.login(data)
    if(res){
        window.location.href = "/";
    }
})