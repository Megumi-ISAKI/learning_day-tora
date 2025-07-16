// ドロワーメニュー

$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

// アコーディオン
$(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
})

// swiper
const swiper = new Swiper('#js-gallery-swiper', {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },

});

//modal
$(".js-modal-open").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].showModal();
});

$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].close();
});

//scroll

$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
});

$('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = $(this).attr("href");
  const target = $("#" == id ? "html" : id);
  const position = $(target).offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // or linear
  );
});

// go top
$(window).on("scroll", function () {
  if (100 < $(window).scrollTop()) {
    $("#js-pagetop").addClass("is-show");

  } else {
    $("#js-pagetop").removeClass("is-show");
  }
});

// ふわっと表示
// .fade-in-upをつけて非表示にしている部分(.js-in-view)に.is-in-viewを追加する

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");  //一度表示させて消さないならここをコメントアウト
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem)
});