const countValue = document.querySelector("#counter");
const increaseBtn = document.querySelector("#plus");
const decreaseBtn = document.querySelector("#minus");

function increment(){
    let value = parseInt(countValue.innerText);
    value= value + 1;
    countValue.innerText = value;
}
function decrement() {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}

increaseBtn.addEventListener("click", increment);
decreaseBtn.addEventListener("click", decrement);
