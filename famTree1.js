let button=document.querySelector('button')
let name=document.getElementById('name')
let age=document.getElementById('age')
let photo= document.getElementById('photo')
let ul1= document.getElementById('ul1')
ul1.hidden=true;
let ul2= document.getElementById('ul1')
ul2.hidden=true;
let ul3= document.getElementById('ul1')
ul3.hidden=true;

// function sayHello(){
//     alert('clicked')
// }

// function createPerson(){
//     const person=document.createElement('div')
//     const newContent= document.createTextNode('acbcs')
//     person.appendChild(newContent);
//     document.u1.
// }


// function lis(currGuess){
//     let ul=document.getElementById('user-guesses')
//    let li=document.createElement('li');
//    li.appendChild(document.createTextNode(currGuess));
//    ul.appendChild(li)
//  }

function createPerson(){
    const person= document.createElement('li')
    const personContent=document.createTextNode(name.value)
    const ageContent=document.createTextNode(age.value)
    person.appendChild(personContent)
    person.appendChild(ageContent)
    ul1.appendChild(person)
    ul1.hidden=false
}



button.addEventListener('click', function(){
    // sayHello();
    createPerson()
})

