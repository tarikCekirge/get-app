let toggle = document.querySelector(".toggle");
let mobilMenu = document.querySelector(".mobil-menu");

toggle.addEventListener("click", () => {
    if (mobilMenu.classList.contains("-translate-y-full")) {
        mobilMenu.classList.remove("-translate-y-full");
        document.querySelector(".menu-close").classList.remove("hidden");
        document.querySelector(".menu-open").classList.add("hidden");
    }
    else {
        mobilMenu.classList.add("-translate-y-full");
        document.querySelector(".menu-close").classList.add("hidden");
        document.querySelector(".menu-open").classList.remove("hidden");
    }
})