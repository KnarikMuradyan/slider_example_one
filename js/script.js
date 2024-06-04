
window.addEventListener("load", () => {

    const slider = document.querySelector(".slider");
    const next = document.querySelector(".slider .sliderBtn.next");
    const prev = document.querySelector(".slider .sliderBtn.prev");
    const dots = document.querySelectorAll(".slider .dots input");


    const images = [
        "../img/m3.jpg",
        "../img/m8.jpg",
        "../img/m9.jpg",
        "../img/m4.jpg",
        "../img/m7.jpg",
        "../img/m6.jpg"
    ];

    let current = 0;

    next.addEventListener("click", () => {
        current++;
        current === images.length ? current = 0 : "";
        slider.style.cssText = `
 background:url(${images[current]});
 background-repeat: no-repeat;
    background-size: cover;
 `;

        dots[current].checked = true;

    });

    prev.addEventListener("click", () => {
        current--;
        current < 0 ? current = images.length - 1 : "";
        slider.style.cssText = `

  background:url(${images[current]});
  background-repeat: no-repeat;
     background-size: cover;
  `;
        dots[current].checked = true;

    })


    dots.forEach((item ,i ) => { 
        item.addEventListener("change", () => {
        current = i;
        slider.style.cssText = `
        background :url(${images[current]});
        background-repeat: no-repeat;
         background-size: cover;
        `;

    })})



    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].addEventListener("change", () => {
    //         current = i;
    //         slider.style.cssText = `
    //     background :url(${images[current]});
    //     background-repeat: no-repeat;
    //      background-size: cover;
    //     `;

    //     })

    // };

});
