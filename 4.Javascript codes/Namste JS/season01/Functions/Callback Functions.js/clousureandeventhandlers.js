function attachEventlistner(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked",++count);
    });
}

attachEventlistner()
