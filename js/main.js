$(document).ready(function($) {

$('.ourServices:eq(0)').mouseover(function() {
  $(this).children('img').attr('src','./img/start-hover.png').css('transition','0.5s');
})
$('.ourServices:eq(0)').mouseout(function() {
  $(this).children('img').attr('src','./img/start.png').css('transition','0.5s');
})
$('.ourServices:eq(1)').mouseover(function() {
  $(this).children('img').attr('src','./img/seo-hover.png').css('transition','0.5s');
})
$('.ourServices:eq(1)').mouseout(function() {
  $(this).children('img').attr('src','./img/seo.png').css('transition','0.5s');
})
$('.ourServices:eq(2)').mouseover(function() {
  $(this).children('img').attr('src','./img/support-hover.png').css('transition','0.5s');
})
$('.ourServices:eq(2)').mouseout(function() {
  $(this).children('img').attr('src','./img/support.png').css('transition','0.5s');
});
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });
//фнимация цифр
let show = true;
let countbox = ".benefits__inner";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    // let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    let w_height = $(window).height(); // Высота окна браузера
    let d_height = $(document).height(); // Высота всего документа
    let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if  (w_height + w_top == d_height) {
        $('.benefits__number').css('opacity', '1');
        $('.benefits__number').spincrement({
            thousandSeparator: "",
            duration: 1200
        });

        show = false;
    }
});
});
