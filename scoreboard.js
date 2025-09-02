


const section = document.getElementById('scoreboard');

const leaddiv = document.getElementById('scoreboard-div');

const form = document.getElementById('getname');



let a = 0;

let highscore = playerScore;
let uname = document.querySelector('#username');
let username = uname.value;



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


// ------------------------

    
// function getScore() {



//     // ------------------------

//     let nameone = document.getElementById('name0').innerText;
//     let nameonerem = nameone.replace('name', '');

//     let nametwo = document.getElementById('name1').innerText;
//     let nametworem = nametwo.replace('name', '');

//     let namethree = document.getElementById('name2').innerText;
//     let namethreerem =  namethree.replace('name', '');

//     let namefour = document.getElementById('name3').innerText;
//     let namefourrem =  namefour.replace('name', '');

//     let namefive = document.getElementById('name4').innerText;
//     let namefiverem =  namefive.replace('name', '');

//     let scores = [nameonerem, nametworem, namethreerem, namefourrem, namefiverem];

//     scores.sort((a, b) => a - b);

//     console.log(scores);



// ------------------------    



// }


restart.addEventListener('click', function() {

let paragraphs = Array.from(leaddiv.getElementsByTagName('p'));

// Extract the numeric values and store them in an array along with the p elements
let sortedParagraphs = paragraphs.map(p => {
    return {
        element: p,
        value: parseFloat(p.innerText.replace('name', '')) // Adjust the replace as needed
    };
});

// Sort the array based on the numeric values
sortedParagraphs.sort((a, b) => a.value - b.value);

// Clear the container
leaddiv.innerHTML = '';

// Append the sorted p elements back to the container
sortedParagraphs.forEach(item => {
    leaddiv.appendChild(item.element);
});

})
// restart.addEventListener('click', getScore);


