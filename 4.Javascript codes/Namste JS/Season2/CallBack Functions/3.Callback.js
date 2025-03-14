function sum (callBack,x,y){
    let result = x+y;
    callBack(result);
}


function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayPage,1,2);