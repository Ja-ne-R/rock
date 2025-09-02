const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

const body = document.querySelector('body');

const container = document.querySelector('.container');

let idx = 0;

updateNum();

function updateNum() {
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateNum, 10);
    }
}

if (counterEl.innerText = '100%') {
    console.log('yep');
    setTimeout(loaded, 2000);

}

function loaded() {
    document.body.style.overflow='auto';
    container.style.display='none';
}

