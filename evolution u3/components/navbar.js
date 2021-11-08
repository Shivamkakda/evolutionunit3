function navbar(){
    return `
    <div id="main">
    <div id ="left">
    <a href="./index.html">Food Panda</a><img src =""https://www.foodpanda.com/wp-content/uploads/2019/12/food-panda-logo-vector.png/>
    </div>
        <span>
            <input type="text" id="keyword" placeholder="Enter keyword to search" >
            <button class="searchButton">Search</button>
        </span>
        <div id ="right">
        <a href="./signin.html">Signin</a>
        <a href="./login.html">Login</a>
        <a href ="./menu.html">Menu</a>
        <a href ="./cart.html">Cart</a>
        </div>
        </div>`
}

function htmlDetails(){
    return `<div id="navCont">
    </div>
    <div id="navbars"></div>
    <div id="search">
    </div>
   
    <div id="popular"></div>
    <div id =""menubar">
    </div>`
}

export {htmlDetails, navbar};


