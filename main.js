const navListUl = document.querySelector(".nav-list");
const navListUlAnchorTags = document.querySelectorAll(".nav-list li a");

const navOpenBtn = document.querySelector("#nav-list-open-btn");
const navCloseBtn = document.querySelector("#nav-list-close-btn");

function openNavUl(){
    navListUl.classList.add("show");
}

function hideNavUl(){
    navListUl.classList.remove("show");
}


navOpenBtn.addEventListener("click",openNavUl);

navCloseBtn.addEventListener("click",hideNavUl);

window.addEventListener("click",(e) => {
    const children = e.target;
    if (!children.matches("ul") && !children.matches("button") && navListUl.classList.contains("show")) {
        hideNavUl();
    }
});



function handleNavUltarget(e){
    const children = e.target;
    navListUlAnchorTags.forEach((e) => {
        if(e === children){
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    });
}

navListUl.addEventListener("click",handleNavUltarget);

window.addEventListener('load',() => {
  navListUlAnchorTags[0].classList.add('active');
});