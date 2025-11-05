// header
$(".dropdown-menu .menu-drop").on("click", function (e) {
  e.stopPropagation();
  var Item = $(this).parent();
  if (Item.hasClass("active")) {
    Item.removeClass("active");
    Item.parent().removeClass("active");
  } else {
    $(".dropdown-menu").removeClass("active");
    $(".dropdown-content").parent().parent().removeClass("active");
    Item.parent().addClass("active");
    Item.addClass("active");
  }
});

$(".dropdown-menu .dropdown-content").on("click", function (e) {
  e.stopPropagation();
});

$("body").on("click", function () {
  $(".dropdown-menu").removeClass("active");
  $(".dropdown-content").parent().parent().removeClass("active");
});

var openMenu = function () {
  $(".bottom-header-menu").addClass("open");
  //$("body").addClass('no-scroll');
  $(".mobile-menu-close").addClass("active");
  $(".mobile-menu-open").removeClass("active");
};

var closeMenu = function () {
  $(".bottom-header-menu").removeClass("open");
  //$("body").removeClass('no-scroll');

  $(".mobile-menu_items-container").removeClass("active");
  $(".mobile-menu_items-container").children("ul").slideUp();
  $(".mobile-menu-close").removeClass("active");
  $(".mobile-menu-open").addClass("active");
};

$(".mobile-menu-open").on("click", function () {
  if ($(".bottom-header-menu").hasClass("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

if ($(window).width() <= 768) {
  $(".dga-submenutitle").on("click", function () {
    $(this).next().children().slideToggle();
    $(this).children().eq(1).toggleClass("active");
  });
}

$(".mobile-menu-close").on("click", function () {
  if ($(".bottom-header-menu").hasClass("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// end header
