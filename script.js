const credit_button = document.querySelector('#button-credit');
const credit_select = document.querySelector('#dropdown-credit');
const credit_option = document.querySelectorAll('.option-credit');
const credit_label = document.querySelector('#select-label');
const addClass_button = document.querySelector('#button-addClass');
const popup_screen = document.querySelector('#popup');
const cancel_button = document.querySelector('#button-cancel');
const addCategory_button = document.querySelector('#button-addCategory');
const template_category = document.querySelector('#category-template');


let number_of_category = 0;

addClass_button.addEventListener('click', function(e){
    e.preventDefault();
    popup_screen.classList.toggle('hidden');
});

cancel_button.addEventListener('click', function(e){
    e.preventDefault();
    popup_screen.classList.toggle('hidden');
});

/* addCategory_button.addEventListener('click', function(){
    const newCategory = document.createElement("div"); 
    newCategory.classList.add('category-element');
    document.getElementById("display-section").appendChild(newCategory);
}); */
/* addCategory_button.addEventListener('click', function(){
    if (number_of_category > 8) {
        return;
    }
    number_of_category += 1;
    var clone = template_category.content.cloneNode(true);
    
    template_category.parentNode.appendChild(clone);
}); */
addCategory_button.addEventListener('click', function(){
    if (number_of_category > 8) {
        return;
    }
    number_of_category += 1;
    var docFragment = document.importNode(template_category.content, true);
    var listItem = docFragment.querySelector('div');

    listItem.id = "category-" + number_of_category;    
    console.log(listItem.querySelector("input"));
    document.querySelector('#display-section').appendChild(listItem);
    const delete_category = listItem.querySelector('#trash');

    delete_category.addEventListener('click', function(){
        number_of_category -= 1;
        console.log(this.parentNode);
        this.parentNode.remove();
    });
});



credit_button.addEventListener('click', function(e){
    e.preventDefault();
    credit_select.classList.toggle('hidden');
});
credit_option.forEach(function(credit_option){
    credit_option.addEventListener('click', function(e){
        setSelectTitle(e);
    });
});


function setSelectTitle(e) {
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    credit_label.innerText= labelElement;
    credit_select.classList.toggle('hidden');
}


