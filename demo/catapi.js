
let apiKey, apiKeyLoaded = false; 
fetch('./apiKey.json').then((res) => res.json()).then((data) => {
    
    apiKey = data;
    apiKeyLoaded = true;
    console.log(apiKey);
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

    let numMax = 10;
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

    // Add random option
    const catOption = document.createElement('option');
    catOption.innerText = "--any--";
    catOption.value = "any";
    catBreed.appendChild(catOption);

    for (let i=0; i<data.length; i++)
    {
        const catOption = document.createElement('option');
        catOption.innerText = data[i].name;
        catOption.value = data[i].id;
        catBreed.appendChild(catOption);
    }
    
    })

    
}

function getCats()
{
    if(apiKeyLoaded) 
    {
        const numCats = document.getElementById('img-num').value;
        const breed = document.getElementById('breed').value;
        const form = document.getElementById('cat-api-form');
        let url = "";

        if (breed == "any")
            url = `https://api.thecatapi.com/v1/images/search?limit=${numCats}`;
        else
            url = breed ? `https://api.thecatapi.com/v1/images/search?limit=${numCats}&breed_ids=${breed}` : 
                            `https://api.thecatapi.com/v1/images/search?limit=${numCats}`;

        callCatAPI(url, apiKey, numCats)
    }
}




function callCatAPI(url, apiKey, num)
{

    // ***********************
    // *** Post Vote to API***
    // ***********************
    function vote(e, val, apiKey) {
        
        console.log(e)
        console.log(apiKey)

        const imgId = e.target.parentElement.id; //this gets us the div with the id we got the image id we needed
        
        //now we just need to send the post request with the img id, value 
        fetch('https://api.thecatapi.com/v1/votes', {
            method: "POST",
            headers: {
                'x-api-key': apiKey,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "image_id": imgId,
                "value": val
            })
        })
    }

    // ***************************
    // *** Fetch Cats from API ***
    // ***************************
    fetch(url, {
        headers: {
            'x-api-key': apiKey
        },
    }).then((res) => res.json()).then((data) => {
        
        for(let i = 0; i < num; i++) {
            
            console.log(data)
            
            const div = document.createElement('div');
            const imgTag = document.createElement('img');
            
            // image
            div.id = data[i].id;
            imgTag.src = data[i].url;
            imgTag.width = 400;

            // Buttons

            // Vote UP
            const upVoteBtn = document.createElement('button');
            upVoteBtn.innerText = ':)'
            upVoteBtn.onclick = (e) => {vote(e, 1, apiKey)}
            // Vote DOWN
            const downVoteBtn = document.createElement('button');
            downVoteBtn.innerText = ':('
            downVoteBtn.onclick = (e) => {vote(e, -1, apiKey)}
            // add the buttons
            div.appendChild(imgTag)
            div.appendChild(document.createElement('div'))
            div.appendChild(upVoteBtn)
            div.appendChild(downVoteBtn)
            div.appendChild(document.createElement('div'))

            document.getElementById('the-cat-api').appendChild(div);
        }
    })
}