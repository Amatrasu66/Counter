const decrease = document.getElementById("Decrease");
const reset = document.getElementById("Reset");
const increase = document.getElementById("Increase");
const counter = document.getElementById("counter");

let count = 0;

decrease.onclick = function()
{
    count--;
    counter.textContent = count;
}

reset.onclick = function()
{
    count = 0;
    counter.textContent = count;
}

increase.onclick = function()
{
    count++;
    counter.textContent = count;
}