document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("#whatsappButton");
    var message = encodeURIComponent("Halo, saya tertarik dengan layanan Anda.");

    button.addEventListener("click", function () {
        window.location.href = "https://wa.me/message/CAEUR4YUGOTIO1?text=" + message;
    });
});
