


const section = document.getElementById('scoreboard');

const leaddiv = document.getElementById('scoreboard-div');

const form = document.getElementById('getname');



let a = 0;




function populate() {
    console.log('success');
    while (a < 5) {
    const fill = document.createElement('p');
    let pname = username + a;
    fill.setAttribute('id', pname);
    fill.setAttribute('class', 'names');
    fill.innerText = username;
    leaddiv.appendChild(fill);
    a++;

    }
}
const submit = document.querySelector('#submit');



// function getname (event) {

// let uname = document.querySelector('#username');
// let username = uname.value;


//     console.log(username);
//     event.preventDefault();
    
// }

form.addEventListener('submit', function (event) {
event.preventDefault();
    let uname = document.querySelector('#username');
    let username = uname.value;
    console.log('success');
    while (a < 5) {
        const fill = document.createElement('p');
        let pname = 'name' + a;
        fill.setAttribute('id', pname);
        fill.setAttribute('class', 'names');
        fill.innerText = username;
        leaddiv.appendChild(fill);
        a++;

    }

    console.log(username);
    form.style.display= 'none';
    event.preventDefault();
});


