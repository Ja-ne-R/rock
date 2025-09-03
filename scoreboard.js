


const section = document.getElementById('scoreboard');

const leaddiv = document.getElementById('scoreboard-div');

const form = document.getElementById('getname');

    const scoreboardList = document.getElementById('scoreboard-list');


let a = 0;

// let highscore = playerScore;
// let uname = document.querySelector('#username');
// let username = uname.value;

let uname = '';

let y = 1;




// function populate() {
//     console.log('success');
//     while (a < y) {
//     const fill = document.createElement('li');
//     let pname = uname + a;
//     fill.setAttribute('id', pname);
//     fill.setAttribute('class', 'names');
//     fill.innerText = uname;
//     scoreul.appendChild(fill);
//     a++;
//     }
// }
const submit = document.querySelector('#submit');



// function getname (event) {

// let uname = document.querySelector('#username');
// let username = uname.value;


//     console.log(username);
//     event.preventDefault();
    
// }

function theForm(event) {
    event.preventDefault();
    uname = document.querySelector('#username').value;
    // let username = uname.value;
    console.log('success ' + uname);
    form.style.display = 'none';
    // populate();
}

form.addEventListener('submit', theForm)
// -------------------------------

// form.addEventListener('submit', function (event) {
// event.preventDefault();
//     let uname = document.querySelector('#username');
//     let username = uname.value;
//     console.log('success');
//     while (a < 5) {
//         const fill = document.createElement('p');
//         let pname = 'name' + a;
//         fill.setAttribute('id', pname);
//         fill.setAttribute('class', 'names');
//         fill.innerText = username;
//         leaddiv.appendChild(fill);
//         a++;

//     }

//     console.log(username);
//     form.style.display= 'none';
//     event.preventDefault();
// });


// ------------------------

    
function getScore() {



    // ------------------------

    let nameone = document.getElementById('name0').innerText;
    let nameonerem = nameone.replace('name', '');

    let nametwo = document.getElementById('name1').innerText;
    let nametworem = nametwo.replace('name', '');

    let namethree = document.getElementById('name2').innerText;
    let namethreerem =  namethree.replace('name', '');

    let namefour = document.getElementById('name3').innerText;
    let namefourrem =  namefour.replace('name', '');

    let namefive = document.getElementById('name4').innerText;
    let namefiverem =  namefive.replace('name', '');

    let scores = [nameonerem, nametworem, namethreerem, namefourrem, namefiverem];

    scores.sort((a, b) => a - b);

    console.log(scores);



// ------------------------    



}


// restart.addEventListener('click', function() {

// let paragraphs = Array.from(leaddiv.getElementsByTagName('p'));

// // Extract the numeric values and store them in an array along with the p elements
// let sortedParagraphs = paragraphs.map(p => {
//     return {
//         element: p,
//         value: parseFloat(p.innerText.replace('name', '')) // Adjust the replace as needed
//     };
// });

// // Sort the array based on the numeric values
// sortedParagraphs.sort((a, b) => a.value - b.value);

// // Clear the container
// leaddiv.innerHTML = '';

// // Append the sorted p elements back to the container
// sortedParagraphs.forEach(item => {
//     leaddiv.appendChild(item.element);
// });

// })
// // restart.addEventListener('click', getScore);




// Get the div element


// Get all p elements inside the div
// const paragraphs = Array.from(list.getElementsByTagName('p'));

// // Sort the paragraphs based on the number inside them
// paragraphs.sort((a, b) => {
//     return parseInt(a.textContent) - parseInt(b.textContent);
// });

// // Clear the div and append sorted paragraphs
// leaddiv.innerHTML = '';
// paragraphs.forEach(p => leaddiv.appendChild(p));
let o = 0;
let k = 1;
let p = 0;
function addScoreToBoard(username, score) {
    while (o !== k) {
    let liname = 'name' + p;
    const newScoreItem = document.createElement('li');
    newScoreItem.setAttribute('id', liname);
    newScoreItem.setAttribute('class', 'names');
    newScoreItem.textContent = `${username}: ${score}`;
    newScoreItem.classList.add('names'); // Add the class used for sorting
    scoreboardList.appendChild(newScoreItem);
        o++
        p++
    // After adding a new score, you might want to sort
    sortNamesByScore();
    }
}

function sortNamesByScore() {
    const leaddiv = document.getElementById('scoreboard-div');
    const names = Array.from(document.getElementsByClassName('names'));

    // Sort the names based on the score
    names.sort((a, b) => {
        // Extract the part after the last space as the score
        const textA = a.innerText;
        const partsA = textA.split(' ');
        const scoreA = parseInt(partsA[partsA.length - 1]);

        const textB = b.innerText;
        const partsB = textB.split(' ');
        const scoreB = parseInt(partsB[partsB.length - 1]);

        return scoreB - scoreA; // Sort in descending order (highest score first)
    });

    // Clear the current list
    scoreboardList.innerHTML = '';

    // Append the sorted names back to the div
    names.forEach(name => scoreboardList.appendChild(name));
}