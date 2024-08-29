const dropbuttons = document.querySelectorAll(".dropbtn");

dropbuttons.forEach((dropbtn) => {
    const dropdown = dropbtn.nextElementSibling;

    dropbtn.addEventListener("mouseover", () => {
        dropdown.classList.add("show");
    });

    dropbtn.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!dropdown.matches(':hover')) {
                dropdown.classList.remove("show");
            }
        }, 400);
    });

    dropdown.addEventListener("mouseover", () => {
        dropdown.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
    });
});

const repetitions = 50;

const marquees = document.querySelectorAll(".marquee");

marquees.forEach(marquee => {
    const originalText = marquee.innerHTML;

    let repeatedText = '';
    for (let i = 0; i < repetitions; i++) {
        repeatedText += originalText + ' ';
    }

    marquee.innerHTML = repeatedText;    
});


const initializeCountdown = (duration) => {
    let timer = duration;

    const elementHours = document.getElementById('hours');
    const elementMinutes = document.getElementById('minutes');
    const Seconds = document.getElementById('seconds');

    setInterval(() => {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = Math.floor(timer % 60);

        animateScroll(elementHours, hours);
        animateScroll(elementMinutes, minutes);
        animateScroll(Seconds, seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const padZero = (value) => {
    return value.toString().padStart(2, '0');
}

const animateScroll = (element, value) => {
    element.innerHTML = padZero(value);
}

initializeCountdown(3600);