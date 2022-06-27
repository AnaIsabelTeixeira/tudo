$(document).ready(function () {
  let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  let scrollOn = true;

  //FOR SETTING A LIMIT OF ENTRIES IN CHATBOX
  $(document).keypress(function () {
    let count = $("#textbox p").length;
    if (count >= 15) {
      console.log(count);
      $("#textbox p:first-of-type").remove();
      $("#textbox p:nth-of-type(1)").css("opacity", "0.25");
      $("#textbox p:nth-of-type(2)").css("opacity", "0.5");
      $("#textbox p:nth-of-type(3)").css("opacity", "0.75");
    }

    //TURN SCROLLING ON AND OFF
    if (keyCode === 48) {
      scrollOn = !scrollOn;
    }
  });


  $(function () {
    let curDown = false,
      curYPos = 0,
      curXPos = 0;
    $(window).mousemove(function (m) {
      if (curDown && scrollOn == true) {
        window.scrollBy(curXPos - m.pageX, curYPos - m.pageY);
      }
    });
    $(window).mousedown(function (m) {
      curYPos = m.pageY;
      curXPos = m.pageX;
      curDown = true;
    });
    $(window).mouseup(function () {
      curDown = false;
    });
  });

  //PREVENT OTHER TYPES OF SCROLLING
  function preventDefault(e) {
    e.preventDefault();
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}
  let wheelOpt = supportsPassive ? { passive: false } : false;
  let wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);

//MAKE IMAGES FOLLOW CURSOR
  $("#magpieimg").click(function () {
    $(document).mousemove(function (e) {
      $("#magpieimg").offset({ left: e.pageX, top: e.pageY });
      $("#magpieimg").css("padding-left", 0);
      $("#magpieimg").css("pointer-events", "none");
    });
  });

  $("#dahliaimg").click(function () {
    $(document).mousemove(function (e) {
      $("#dahliaimg").offset({ left: e.pageX, top: e.pageY });
      $("#dahliaimg").css("padding-left", "70px");
      $("#dahliaimg").css("padding-top", "50px");
      $("#dahliaimg").css("pointer-events", "none");
    });
  });
});

//MAKE IMAGES GROW 
if ((scrollOn = true)) {
  $("#canvascontainer").css("pointer-events", "none");
  $("canvas").css("pointer-events", "none");

  $("#landscape1, #landscape2, #landscape3, #landscape4, #landscape5, #landscape6").mouseenter(function () {
    $(this).css("width", "90vw");
  });
  $("#landscape1, #landscape2, #landscape3, #landscape4, #landscape5, #landscape6").mouseleave(function () {
    $(this).css("width", "");
  });
} else {
  $("#canvascontainer").css("pointer-events", "auto");
  $("canvas").css("pointer-events", "auto");
}