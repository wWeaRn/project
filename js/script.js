//Список контактов
export const contactList = {
    data:[],
    addContact: function (json){
        this.data.push(json);
    },
    loadContactList: function (){
        for (let contacts in contactList){
        while (contacts != null){
            console.log(1);
        }
    }
    }
};
