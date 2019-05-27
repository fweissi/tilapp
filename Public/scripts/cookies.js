function cookiesConfirmed() {
    $('#cookie-footer').hide();
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 3600 *1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "cookies-accepted=true;" + expires;
}
