document.addEventListener("DOMContentLoaded", () => {
    const btnPutar = document.querySelector(".btn-putar");
    const btnUnduh = document.querySelector(".btn-unduh");
    const btnTrailer = document.querySelector(".btn-trailer");

    btnPutar.addEventListener("click", () => {
        alert("Memutar film Do Patti...");
    });

    btnUnduh.addEventListener("click", () => {
        alert("Mengunduh film Do Patti...");
    });

    btnTrailer.addEventListener("click", () => {
        alert("Menonton trailer Do Patti...");
    });
});
