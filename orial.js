const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

const counters = document.querySelectorAll("[data-target]");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

        const increment = target / 50;

        if(count < target){

            count += increment;

            counter.innerText = Math.ceil(count);

            setTimeout(updateCounter, 30);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});



const filterBtns =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const filter =
        btn.dataset.filter;

        projects.forEach(project => {

            if(
                filter === "all" ||
                project.dataset.category === filter
            ){
                project.style.display = "block";
            }else{
                project.style.display = "none";
            }

        });

    });

});


const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

});

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

    });

});