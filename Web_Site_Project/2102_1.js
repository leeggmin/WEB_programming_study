document.addEventListener("DOMContentLoaded", function () {
  var arrow = document.getElementById("arrow");

  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var maxScroll = scrollHeight - windowHeight;
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll >= maxScroll) {
      arrow.style.opacity = "0";
    } else {
      arrow.style.opacity = "1";
    }
  });

  arrow.addEventListener("click", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var maxScroll = (scrollHeight - windowHeight) / 3;

    window.scrollBy({
      top: maxScroll,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var top = document.getElementById("top");

  window.addEventListener("scroll", function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var maxScroll = scrollHeight - windowHeight;
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll >= maxScroll) {
      top.style.opacity = "1";
    } else {
      top.style.opacity = "0";
    }
  });

  top.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
