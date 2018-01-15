$(function () {
    $("#bio").toggle();
    $(".Timetable").toggle();
    $(".RefreshMe").toggle();
    $(".Beanzy").toggle();
    $("#title").toggle();


    $("#title").fadeIn(3000);

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $("#bio").fadeIn(2000);
        }

        if ($(window).scrollTop() > 900) {
            $(".Timetable").slideDown(2000);
        }

        if ($(window).scrollTop() > 1300) {
            $(".RefreshMe").slideDown(2000);
        }

        if ($(window).scrollTop() > 1600) {
            $(".Beanzy").slideDown(2000);
        }
    });

  
});