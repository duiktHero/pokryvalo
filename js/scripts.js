$(document).ready((function () {
  function t(t) {
    return "<span>" + (t = ("00" + t).substr(-2))[0] + "</span><span>" + t[1] + "</span>"
  }
  $("a[href^='#']").click((function () {
    var t = $(this).attr("href");
    return $("html, body").animate({
      scrollTop: $(t).offset().top + "px"
    }), !1
  })),
    function e() {
      var o = new Date,
        n = new Date;
      n.setHours(23), n.setMinutes(59), n.setSeconds(59), 23 === o.getHours() && 59 === o.getMinutes() && 59 === o.getSeconds && n.setDate(n.getDate() + 1);
      var a = Math.floor((n.getTime() - o.getTime()) / 1e3),
        s = Math.floor(a / 3600);
      a -= 3600 * s;
      var r = Math.floor(a / 60);
      a -= 60 * r, $(".timer .hours").html(t(s)), $(".timer .minutes").html(t(r)), $(".timer .seconds").html(t(a)), setTimeout(e, 200)
    }()
})), $(window).on("load", (function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: !0,
    autoHeight: !0,
    smartSpeed: 300,
    mouseDrag: !1,
    pullDrag: !1,
    nav: !0,
    navText: ""
  })
}));