// Javascript offers two built in ways to send http requests
//1. XML Http Request
//2. Fetch API

// https://http.dog
// https://http.cat
// https://http.garden

// fetch("https://http.dog/200").then(() =>
// {
//     console.log(data);
// })

function fetch()
{
    const inputVal = document.getElementById('status-code').value;

    document.getElementById('status-code-image').src = `https://http.dog/${inputVal}.jpg`;

}

let apiKey;

fetch('./apiKey.json').then((res) => res.json()).then((data) => apiKey = data.theCatAPI)