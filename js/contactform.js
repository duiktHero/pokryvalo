jQuery(document).ready((function (t) {
  t(".ajax-contact-form").submit((function () {
    var e = t(this).serialize();
    return t.ajax({
      type: "POST",
      url: "js/contact.php",
      data: e,
      success: function (e) {
        "OK" == e ? (result = "<p>Ваш запит успішно відправлено !<br>Дякуємо!</p>", t(".fields").hide()) : result = e, t(".note").html(result).css("display", "block")
      }
    }), !1
  }))
}));