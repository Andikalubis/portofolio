function redirectToWhatsApp() {
    var phoneNumber = "+628771887905";
    var message = "Halo, saya tertarik dengan layanan Anda.";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.location.href = url;
}