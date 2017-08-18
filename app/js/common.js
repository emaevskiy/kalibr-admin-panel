window.onload = function Time() {
  $(function() {
      (function Time(){
          var date = new Date();
          var hours = date.getHours();
          if(hours < 10) {
            hours = '0'+hours;
          }
          hours = (hours < 10) ? '0' + hours : hours;
          var minutes = date.getMinutes();
          minutes = (minutes < 10) ? '0' + minutes : minutes;
          var day = date.getDate();
          day = (day < 10) ? '0' + day : day;
          var month = date.getMonth() + 1;
          month = (month < 10) ? '0' + month : month;
          var year = date.getFullYear();
          var time =
          $('.c-header__time')[0].innerHTML = hours+':'+minutes;
          var today =
          $('.c-header__date')[0].innerHTML = day+'.'+month+'.'+year;
          window.setTimeout(arguments.callee, 1000);
      })();
  });
};

$(".c-userbar__link:eq(0), .c-ico-btn--close:eq(0)").on("click", function() {
  $(".c-settings").toggleClass("c-settings--is-active");
});

$(".c-datatable__row:gt(0), .c-add-item").on("click", function() {
  $(".c-ctrl-panel").addClass("c-ctrl-panel--is-active");
});

$(".c-ico-btn--close:eq(1)").on("click", function() {
  $(".c-ctrl-panel").removeClass("c-ctrl-panel--is-active");
});

$(".c-datatable__row:gt(0), .c-add-item").on("click", function() {
  $(".l-popup-panel").addClass("l-popup-panel--is-active");
});

$(".c-ico-btn--close:eq(1)").on("click", function() {
  $(".l-popup-panel").removeClass("l-popup-panel--is-active");
});

$(".c-ico-btn--edit").on("click", function() {
  $(this).parent().find("input, span").toggleClass("h-hidden");
});

// $(".c-editor--curentcy").val().on("change", function() {
//   $(this).parent().find("input").val();
//   alert(per);
// });
