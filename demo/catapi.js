
let apiKey, apiKeyLoaded = false; 
fetch('./apiKey.json').then((res) => res.json()).then((data) => {
    
    //apiKey = data.TheCatAPI;
    apiKeyLoaded = true;
    //console.log(data);
})


let isFirstLoad = true;

function loadForm()
{
    if (isFirstLoad)
    {
        getBreeds();
        setCounter();
    }
    isFirstLoad = false;
}


function setCounter()
{

    let numMax = 30;
    const breed = document.getElementById('breed').value;
    const numCats = document.getElementById('img-num');
    
    
    for (i=1; i<=numMax; i++)
    {
        const numOption = document.createElement('option');
        numOption.value = i;
        numOption.innerText = i;
        numCats.appendChild(numOption);
    }

}

function getBreeds()
{
    const catArray = fetch('https://api.thecatapi.com/v1/breeds').then((res) => res.json()).then((data) => {
        
    const catBreed = document.getElementById('breed');

        for (let i=0; i<data.length; i++)
        {
            const catOption = document.createElement('option');
            catOption.innerText = data[i].name;
            catOption.id = data[i].id;
            catBreed.appendChild(catOption);
        }
    
    })

    
}

function getCats()
{
    if(apiKeyLoaded) 
    {
        const numCats = document.getElementById('img-num');
        const breed = document.getElementById('breed');
        const form = document.getElementById('cat-api-form');
    
        console.log(numCats);
        console.log(numCats.childNodes);
        console.log(breed);
        console.log(breed.childNodes);

        const url = breed ? `https://api.thecatapi.com/v1/images/search?limit=${numCats}&breed_ids=${breed}` : 
                            `https://api.thecatapi.com/v1/images/search?limit=${numCats}`;
    }
}