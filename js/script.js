$(document).ready(function () {

    $(window).click()

    $(window).scroll(function () {
        if ($(this).scrollTop() > 135) {
            $('#mobile-navbar').addClass('fixed-nav-mobile');
        } else {
            $('#mobile-navbar').removeClass('fixed-nav-mobile');
        }
    });

    let flag = true;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 135 && flag) {

            $("#nav").animate({"margin-bottom": "-32px"},);
            $("#nav-img").animate({"max-width": "15rem"});
            $("#dropdown-text").animate({"top": "15%"});
            flag=false;
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() < 135 && !flag) {

            $("#nav").animate({"margin-bottom": "10px"},);
            $("#nav-img").animate({"max-width": "20rem"});
            $("#dropdown-text").animate({"top": "21%"});
            flag=true;
        }
    });

    $("#mob-hamburger").click(function () {

        $("#mobile-menu").css("display:", "block").slideToggle("slow")

    });

    $("#dropdown").click(function () {

        $("#dropdown-text").css("display:", "block").slideToggle("slow")

    });


});