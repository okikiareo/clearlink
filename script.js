var btns = document.querySelectorAll('.btn')
var toggle = document.querySelectorAll(".toggle")
var p = document.querySelectorAll(".p")

btns.forEach((btn, i) =>{
  var changeicons = true;
    btn.addEventListener("click", function(){
        console.log(btn.src)
        if(changeicons === true){
            changeicons = false
            btn.src = "img/minus-circle.svg";
            toggle[i].style.background = "#EAECF0";
            p[i].style.display = "inline";
        }
        else{
            changeicons = true;
            btn.src = "img/plus-circle.svg";
            toggle[i].style.background = "none";
            p[i].style.display = "none";
        }
    })
})

  
    var now, year;
now = new Date();
year = now.getFullYear();

document.querySelector(".year").textContent = `${year}`;




// var Mobile = document.getElementById = ("Mobile")
// function showMenu() {
//     Mobile.style.right = "0";
// }
// function hideMenu() {
//     Mobile.style.right = "-200px";
// }