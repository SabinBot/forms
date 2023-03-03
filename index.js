
function handleTaskClick(event) {
    const sursa = event.target;
 //classList check if the element has class'elementLista';
  //classList returns a list of all element classes;  
    if (sursa.classList.contains('elementLista')) {
        sursa.style.textDecoration = 'line-through';
        sursa.style.opacity = .6;
    } else {
        sursa.style.textDecoration = '';
    }
}

function addElement(event) {
    event.preventDefault() 

    const campText = document.querySelector('#elementNou');
    const valoareCampText = campText.value;

    const elementLiNou = document.createElement('li');
    elementLiNou.innerHTML = valoareCampText;
    elementLiNou.classList.add('elementLista'); //contains; // add(); //remove();

    const lista = document.querySelector('ul');
    lista.appendChild(elementLiNou);
    campText.value = '';

    hideForm()
}
 function showForm() {
    document.querySelector('.formCont').style.display = 'flex';
 }

 function hideForm() {
    document.querySelector('.formCont').style.display = 'none';
 }


