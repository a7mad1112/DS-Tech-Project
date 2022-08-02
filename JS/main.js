//Whatsapp icon
setTimeout( () =>document.getElementsByClassName("whatsIcon")[0].style.display = "unset", 3000);


// Add and Remove active class from main navigation
let mySections = document.querySelectorAll("header .navigation .mainList li");
mySections.forEach(section => {
    section.addEventListener("click", function() {
        mySections.forEach(sec => sec.classList.remove("activeLi"))
        this.classList.add("activeLi");
    })
});
const currentLocation = location.href;
const menuItem = document.querySelectorAll("header .navigation .mainList li a");
document.body.onload = function() {
    menuItem.forEach(item => {
        item.classList.remove("activeLi");
        if(item.href === currentLocation)
        item.classList.add("activeLi");
    });
};
