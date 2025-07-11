import { io } from 'https://cdn.socket.io/4.7.2/socket.io.esm.min.js';
import UserApi from './api/user.api.js';
import PrivateMessageApi from './api/private-message.api.js';
import AuthApi from './api/auth.api.js';
const socket = io();
const message_input=document.getElementById('message_input');
const message_form=document.getElementById('message_form');
const messages=document.getElementById('messages');



let user=null;
let receiver=null;
let image_url="";

// Función que genera el HTML de un mensaje
const createMessageHTML=(data)=>{
    return `
        <div class="message ${data.sender.id===user.id?"sender":"receiver"}">
            ${!(data.sender.id===user.id)?`
                <small class="message-username">${receiver.username}</small>
            `:""}
            ${data.image_url?`
                <img src="${data.image_url}" alt="">
            `:""}
            ${data.content?`
                <span class="message-content">${data.content}</span>
            `:""}
        </div>
    `;
}

// Al cargar el DOM, se cargan los datos y renderizan los mensajes del chat
document.addEventListener("DOMContentLoaded",async()=>{
    const me = await AuthApi.me();
    user= await UserApi.getById(me.sub);
    receiver=await UserApi.getByUsername(receiver_username);
    const data=await PrivateMessageApi.getByUserIds(user.id,receiver.id);

    const data_html = data.map(message => createMessageHTML(message)).join('');
    messages.innerHTML = data_html;
    messages.scrollTo({ top: messages.scrollHeight, behavior: "auto"});
})

// Envía el mensaje actual
message_form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data={
        image_url:image_url,
        sender:{
            id:user.id,
        },
        receiver:{
            id:receiver.id,
        },
        content:message_input.value
    }

    if(data.content || image_url){
        const response = await PrivateMessageApi.create(data);
        if(response){
            socket.emit("private-chat",data);
        }
    }
});

// Escucha nuevos mensajes
socket.on("private-chat",(data)=>{
    if(
        (data.sender.id===user.id && data.receiver.id===receiver.id)||
        (data.sender.id===receiver.id && data.receiver.id===user.id)
    ){
        message_input.value=""
        messages.innerHTML+=createMessageHTML(data);
        messages.scrollTo({ top: messages.scrollHeight, behavior: "smooth"});
    }
})
