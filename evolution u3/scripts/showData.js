async function makeAPIRequest(url){
    let res = await fetch(url); 
    let data = await res.json();
    console.log(data);
    if(data.recipes !== undefined){
        return data.recipes;
    }
    if(data.meals !== undefined){
        return data.meals;
    }
    if(data.results !== undefined){
        return data.results;
    }
}

function onPageLoad(parrent, url, flag){
    let data = makeAPIRequest(url);

    data.then((res) => {
        let parrent = document.getElementById('popular');
        appendData(res, parrent, flag);
    })
    .catch((error) => {
        console.log(error);
    })
}

function appendData(data, parrent, flag){

    data.forEach(({image, title, dishTypes, pricePerServing}, el) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'detailsBox');
        if(flag === undefined){
            div.onclick = () =>{
                console.log(data[el]);

                window.location.href = "./menu.html";
            }
        }
        
        let img = document.createElement('img');
        img.src = image;

        let titleName = document.createElement('h2');
        titleName.textContent = title;

        let typeDish = document.createElement('p');
        typeDish.innerHTML = "<span>Dish Type: </span>" + dishTypes;

        let price = document.createElement('p');
        price.innerHTML = "<span>Price: </span>" + pricePerServing + " INR";

        div.append(img, titleName, typeDish, price);

        parrent.append(div);
    

});

}

let timeOut = false;
function searchKeyword(d){
    let keyword = document.getElementById("keyword").value;
    let search = document.getElementById("search");

    if(timeOut){
        clearTimeout(timeOut);
    }
    if(keyword.length < 1){
        search.style.display = 'none';
        return false;
    }
    timeOut = setTimeout( () =>{
        makeAPIRequest(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then( (res) => {
            console.log(res);
            showdata(search, res);
        })
        .catch( (error) => {
            console.log(error);
        })
    },1000)
}


function clickButton(){

    makeAPIRequest(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then( (res) => {
        appendResult(res, parrent, search);
    })
    .catch( (error) => {
        console.log(error);
    })
}

export {onPageLoad, searchKeyword, clickButton, appendData};