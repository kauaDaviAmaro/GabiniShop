const dropbuttons = document.querySelectorAll(".dropbtn");

dropbuttons.forEach((dropbtn) => {
    const dropdown = dropbtn.nextElementSibling;

    dropbtn.addEventListener("mouseover", () => {
        dropdown.classList.toggle("show");
    });
})