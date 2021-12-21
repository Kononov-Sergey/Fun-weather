$(document).ready(function () {
   var childNum = 2;
   $('.slider__arr-left').click(function () {
      if (childNum > 1) {
         childNum--;
         $('#' + childNum).addClass('card-active');
         $('#' + (childNum + 1)).removeClass('card-active');
      }
      else {
         return false
      }
   });
   $('.slider__arr-right').click(function () {
      if (childNum < 3) {
         childNum++;
         $('#' + childNum).addClass('card-active');
         $('#' + (childNum - 1)).removeClass('card-active');

      }
      else {
         return false
      }
   });
   $('.btn-up').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
   });
   $("a.header__scroll").click(function () {
      let elementClick = $(this).attr("href");
      let destination = $(elementClick).offset().top;
      $('html, body').animate({ scrollTop: destination }, 800);
      return false;
   });
})