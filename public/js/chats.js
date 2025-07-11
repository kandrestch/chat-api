import AuthApi from "./api/auth.api.js";
import GroupChatApi from "./api/group-chat.api.js";
import GroupMessageApi from "./api/group-message.api.js";
import PrivateMessageApi from "./api/private-message.api.js";
import UserApi from "./api/user.api.js";

const chat_list=document.getElementById("chat-list");

let user=null;

const createChatItemHTML=(data)=>{
    return `
        <a class="chat-item" href="${data.url}">
            <div class="chat-image">
                <img src="${data.image_url}" alt="">
            </div>
            <div class="chat-content">
                <span class="chat-name">${data.name}</span>
                <span class="chat-last-message">${data.last_message}</span>
            </div>
            <div class="chat-meta">
                ${data.unread_count>0?`
                    <span class="unread-count">${data.unread_count}</span>
                `:""}
                <span class="timestamp">${data.timestamp}</span>
            </div>
        </a>
    `;
}

document.addEventListener("DOMContentLoaded",async()=>{
    const me = await AuthApi.me();
    user= await UserApi.getById(me.sub);

    let user_data = await UserApi.getAll();
    let group_chat_data = await GroupChatApi.getByUserId(user.id);

    let list=[];
    for (const item of group_chat_data){
        let last_message="";
        let timestamp="";
        let unread_count=0;

        let messages= await GroupMessageApi.getByChatId(item.id);
        
        if(messages && messages.length>0){
            const last = messages[messages.length - 1];
            last_message = (last.sender.id===user.id?"Tu: ":(last.sender.username+": ")) + (last.content || "");
            timestamp = last.timestamp || "";
            //unread_count=0;//---obeter el count---/
        }

        list.push({
            image_url:item.image_url,
            name:item.name,
            unread_count:unread_count,
            last_message:last_message,
            timestamp:timestamp,
            url:`/group/${item.name}`
        });
    };
    for (const item of user_data){
        let last_message="";
        let timestamp="";
        let unread_count=0;

        let messages= await PrivateMessageApi.getByUserIds(item.id,user.id);
        
        if(messages && messages.length>0){
            const last = messages[messages.length - 1];
            last_message = (last.sender.id===user.id?"Tu: ":"")+ (last.content || "");
            timestamp = last.timestamp || "";
            unread_count = messages.filter(m => !m.seen && m.sender.id !== user.id).length;
        }

        list.push({
            image_url:item.profile_picture_url,
            name:item.username,
            unread_count:unread_count,
            last_message:last_message,
            timestamp:timestamp,
            url:`/chat/${item.username}`
        });
    };

    //aqui falta va para ordenar por timestammp

    const html = list.map(item => createChatItemHTML(item)).join('');
    chat_list.innerHTML=html;
    
})