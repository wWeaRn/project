import {contactList} from "./script.js";

let idIncrement = 0;

const addButton = document.querySelector('#add_button');
//Данные контакта
const inputName = document.querySelector('#name');
const phone = document.querySelector('#phone');
const isElected = document.querySelector('#elected');

//Обработка ивентов формы добавления
isElected.addEventListener("change", function (){
    contact[isElected.value] = isElected.checked;
})

//Объект контакт
let contact = {
    "id": 0,
    "name": " ",
    "phone": " ",
    "isElected": false,
};

addButton.addEventListener("click",function (){
    if (inputName.value !== "" && phone.value !== "")
        {
            idIncrement++;
            contact.id = idIncrement;
            contact.name = inputName.value;
            contact.phone = phone.value;
            let json = JSON.stringify(contact);
            contactList.addContact(json);
        }
    else{
        let error = document.createElement('div');
        error.className = "alert";
        error.innerHTML = "Вы не ввели все данные ! Повторите попытку";
        document.querySelector(".wrapper").before(error);
        sleep(700).then(() => {window.location.reload();})
    }
    }
)


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}