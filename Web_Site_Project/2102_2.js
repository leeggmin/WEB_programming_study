const addClass = document.getElementById("addClass");
const div1 = document.getElementById("div1");
const arrow = document.getElementById("arrow2");
let isClick = false;

addClass.addEventListener("click", () => {
  isClick = !isClick;

  if (isClick) {
    var newP1 = document.createElement("p");
    var newP2 = document.createElement("p");
    var newP3 = document.createElement("p");
    var newP4 = document.createElement("p");
    var newP5 = document.createElement("p");
    var newP6 = document.createElement("p");
    newP6.id = "classType";
    var newP7 = document.createElement("p");
    newP7.className = "classTag";
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var br4 = document.createElement("br");
    var newH = document.createElement("hr");
    var newDiv1 = document.createElement("div");
    newDiv1.className = "mainContent";
    var newDiv2 = document.createElement("div");
    newDiv2.className = "content";
    var newDiv3 = document.createElement("div");
    newDiv3.className = "divForClass";
    newDiv3.id = "newDiv";
    var img = document.createElement("img");
    img.className = "contentImg";

    var newContent1 = document.createTextNode(
      "안녕하세요! 저희는 2-3 반입니다."
    );
    var newContent2 = document.createTextNode(
      "2-3 반은 밝고 유쾌한 학생들이 모인 반입니다."
    );
    var newContent3 = document.createTextNode(
      "2-3 반은 서로를 이해하고 존중하는 분위기를 중요시합니다."
    );
    var newContent4 = document.createTextNode(
      "함께 성장하고 발전하기 위해 서로를 도와주고 배려하는 마음을 가지고 있습니다."
    );
    var newContent5 = document.createTextNode(
      "우리 반은 화합과 긍정적인 에너지로 가득 차 있습니다."
    );
    var newContent6 = document.createTextNode("임베디드소프트웨어과");
    var newContent7 = document.createTextNode("2-3반");

    newP1.appendChild(newContent1);
    newP2.appendChild(newContent2);
    newP3.appendChild(newContent3);
    newP4.appendChild(newContent4);
    newP5.appendChild(newContent5);
    newDiv1.appendChild(newContent1);
    newDiv1.appendChild(br1);
    newDiv1.appendChild(newContent2);
    newDiv1.appendChild(br2);
    newDiv1.appendChild(newContent3);
    newDiv1.appendChild(br3);
    newDiv1.appendChild(newContent4);
    newDiv1.appendChild(br4);
    newDiv1.appendChild(newContent5);

    newP6.appendChild(newContent6);
    newDiv2.appendChild(newP6);
    newDiv2.appendChild(newH);
    newDiv2.appendChild(newDiv1);

    img.setAttribute("src", "./img/2-3.jpg");

    newP7.appendChild(newContent7);
    newDiv3.appendChild(newP7);
    newDiv3.appendChild(newDiv2);
    newDiv3.appendChild(img);

    div1.appendChild(newDiv3);

    addClass.style.color = "#ededed";
    addClass.style.backgroundColor = "#4281f5";

    arrow.style.opacity = "1";
  } else {
    const rmDiv = document.getElementById("newDiv");
    div1.removeChild(rmDiv);

    addClass.style.color = "";
    addClass.style.backgroundColor = "#ededed";

    arrow.style.opacity = "0";
  }
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

document.addEventListener("DOMContentLoaded", function () {
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
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  });
});
