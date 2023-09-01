(function($) {
  $(document).ready(function() {
    let $selected = [];

    //ここにセレクタを書く
    $selected = $("label span:hidden");

    //マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);

  });
})(jQuery);