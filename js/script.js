$(document).ready(function () {

    $(window).click()

    $(window).scroll(function () {
        if ($(this).scrollTop() > 135) {
            $('#mobile-navbar').addClass('fixed-nav-mobile');
        } else {
            $('#mobile-navbar').removeClass('fixed-nav-mobile');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 135) {

            $("#nav").css({"margin-bottom": "-32px"},);
            $("#nav-img").css({"max-width": "15rem"});
            $("#dropdown-text").css({"top": "18%"});

        } else {
            $("#nav").css({"margin-bottom": "10px"},);
            $("#nav-img").css({"max-width": "20rem"},);
            $("#dropdown-text").css({"top": "23%"},);
        }

    });

    $("#mob-hamburger").click(function () {

        $("#mobile-menu").css("display:", "block").slideToggle("slow")

    });

    $("#dropdown").click(function () {

        $("#dropdown-text").css("display:", "block").slideToggle("slow")

    });


});