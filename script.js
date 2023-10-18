var btn = document.querySelector('.btn')
var toggle = document.querySelector(".toggle")
var p = document.querySelector(".p")

btn.addEventListener("click", function(){
    if(btn.src = "img/plus-circle.svg"){
        btn.src = "img/minus-circle.svg";
        toggle.style.background = "none";
        p.style.display = "none";
    }
    else{
        btn.src = "img/plus-circle.svg";
        toggle.style.background = "#EAECF0";
        p.style.display = "inline";
    }
})

// var btn = document.querySelector('.btn');
// var img = btn.previousElementSibling;

// btn.addEventListener("click", function () {
//     if (img.src.endsWith("plus-circle.svg")) {
//         img.src = "img/minus-circle.svg";
//     } else {
//         img.src = "img/plus-circle.svg";
//     }
// });
