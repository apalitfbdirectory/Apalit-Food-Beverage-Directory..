document.addEventListener("DOMContentLoaded", function() {
    // Gumawa ng lightbox overlay
    let lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    // Kunin lahat ng images sa page
    let images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("click", function() {
            let enlargedImg = document.createElement("img");
            enlargedImg.src = img.src; // Kopyahin ang image source
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(enlargedImg);
            lightbox.classList.add("active");
        });
    });

    // Pag-click sa labas, mawawala ang zoomed image
    lightbox.addEventListener("click", function() {
        lightbox.classList.remove("active");
    });
});
