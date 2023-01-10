let num = 0;

function increment()
{
    num++;
    const countElement = document.getElementById('count');
    countElement.innerText = num;
}

function decrement()
{
    num--;
    const countElement = document.getElementById('count');
    countElement.innerText = num;
}

function reset()
{
    num = 0;
    const countElement = document.getElementById('count');
    countElement.innerText = num;
}


function modifyNum(number)
{
    num += number;
    const countElement = document.getElementById('count');
    countElement.innerText = num;
}