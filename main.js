// Mobile Menu function
function openMenu(){
    const menu = document.getElementById("menuItems");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}