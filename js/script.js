$(function () {

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween

    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: "100%" })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    $("#Projects").scroll(function () {
        if ($("#Projects").scrollTop() > 300) {
            $("#Projects").fadeIn(2000);
        }
    });
  
});