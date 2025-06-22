$("#js-drawer-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $(".drawer").toggleClass("is-active");
});

$('.drawer__nav a[href^="#"]').on("click", function (e) {
    $("#js-drawer-btn").removeClass("is-active");
    $(".drawer").removeClass("is-active");
  });

$('a[href^="#"]').on("click", function (e) {
    const speed = 300;
    const id = $(this).attr("href");
    const target = $("#" == id ? "html" : id);
    const position = $(target).offset().top;

    // ヘッダーの高さを取得（固定ヘッダー分を差し引く）
    const headerHeight = $('.header').outerHeight();
    const offset = 20; // 少し余白を追加
    const adjustedPosition = position - headerHeight - offset;

    $("html, body").animate(
        {
            scrollTop: adjustedPosition,
        },
        speed,
        "swing" // or linear
    );
});