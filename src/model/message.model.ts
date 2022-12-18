const messages: Array<string> = ["name", "age", "direction","image", "phone", "url","email"];


export const messageModel = {
    getMessages:()=>{
        return messages;
    },

    saveMessage:(message:string)=>{
        console.log(message)
        messages.push(message)
        const id = messages.findIndex(element => element===message);
        return id;
    }
}

