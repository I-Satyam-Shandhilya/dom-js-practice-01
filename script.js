const myFruits = document.getElementById('myFruits');
myFruits.insertAdjacentHTML('beforeend','<li>Banana</li>');


document.getElementById('myFruits').setAttribute('value' , 'Aisha');

const myNewTag = document.createElement('div');
myNewTag.setAttribute('class' , 'modify');
myNewTag.textContent = 'My first tag is here';
document.body.appendChild(myNewTag);

let newFruits = document.getElementById('myFruits');
 let myList = ["pears","Mosmbi" ,"Papaya"];
for(let x of myList)
{
    const newListItem = document.createElement('li');
    newListItem.textContent = x;
    myFruits.appendChild(newListItem);
}


const newList = document.getElementById('newList');
const docfrag = document.createDocumentFragment();
let item1 = document.createElement('li');
let item2 = document.createElement('li');
let item3 = document.createElement('li');
item1.textContent = 'Momos';
item2.textContent = 'Noodles';
item3.textContent = 'Samosa';
docfrag.appendChild(item1);
docfrag.appendChild(item2);
docfrag.appendChild(item3);
newList.appendChild(docfrag);

const myPara = document.getElementById('myPara');
myPara.classList.add('bold' , 'green-bg');


const dtdiv = document.getElementById('myFruits');
dtdiv.dataset.name = 'Satyam Kumar Jha';
dtdiv.dataset.Pursuing = 'Graduation in Computer Science';


const newfruit = document.getElementById('myFruits');
const orange = document.getElementById('orange');
const f = document.createElement('li');
f.textContent = 'Avocados';
newfruit.insertBefore(f , orange);


const clonefruit = document.getElementById('myFruits');
const listchildren = clonefruit.children;
const Avocadositem = listchildren[1];
const Avocadoscopy = Avocadositem.cloneNode(true);
clonefruit.appendChild(Avocadoscopy);


document.title = 'Js-Dom-Practice-01';

const adjacentadd = document.getElementById('myPara');
myPara.insertAdjacentHTML('beforebegin' , '<em><strong>Inserted by adjacent html method</strong></em>');

const adjacentelement = document.getElementById('newList');
const box = document.createElement('div');
box.id = 'box';
adjacentelement.insertAdjacentElement('beforebegin' , box);

const ed = document.getElementById('newList');
ed.addEventListener("click" , function (e) {
   const target = e.target;
   if(target.matches("li"))
   {
    target.style.backgroundColor = 'red' ;
   }
} )

