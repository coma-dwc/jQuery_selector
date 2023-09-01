(function($) {
  $(document).ready(function() {
    let $selected = [];

    //ここにセレクタを書く
    $selected = $("[data-name='brian'][data-age='26']");

    //マッチした要素にスタイルを付与する
    $selected.each(function(index) {
      $(this).addClass("bingo");
    });
    $(".count").text($selected.length);

  });
})(jQuery);