
const list = document.querySelector(".list-unstyled");
const elForm = document.querySelector(".js-form");
const elNameInput = elForm.querySelector(".user-name");
const elPersonalityInput = elForm.querySelector(".user-personality");
const elPhone = elForm.querySelector(".user-phone");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  const user = {
    userName : elNameInput.value,
    userPersonality: elPersonalityInput.value,
    userPhone: elPhone.value,
  }

  const arr = [];
  arr.push(user);
  elForm.reset();
  list.innerHTML = "";

  for (let i = 0; i < arr.length ; i++){
    const item = document.createElement("li");

    const inputName = document.createElement("h3");
    const inputPersonality = document.createElement("h4");
    const inputPhone = document.createElement("a");
    const buttonElement = document.createElement("button");

    inputName.textContent =  arr[i].userName;
    inputPersonality.textContent =  arr[i].userPersonality;
    inputPhone.textContent =  arr[i].userPhone;
    buttonElement.textContent = "Delete";

    item.classList.add("bg-primary");
    item.classList.add("rounded-2");
    item.classList.add("bg-opacity-25");
    item.classList.add("mb-2");
    item.classList.add("p-2");

    inputPhone.classList.add("text-decoration-none");
    inputPhone.href = `tel:${arr[i].userPhone}`;

    buttonElement.classList.add("btn")
    buttonElement.classList.add("btn-danger");
    buttonElement.classList.add("d-block");
    buttonElement.classList.add("mt-2");


    buttonElement.dataset.id = i;
    item.appendChild(inputName);
    item.appendChild(inputPersonality);
    item.appendChild(inputPhone);
    item.appendChild(buttonElement)
    list.appendChild(item);
  }


})
