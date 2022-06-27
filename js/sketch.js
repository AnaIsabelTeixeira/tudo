p5.disableFriendlyErrors = true;

$(document).ready(function () {});

let r;
let g;
let b;
let strWeight;
let cnv;
let on;
let clicks = 0;
let cWidth;
let cHeight;
let bgSetter;

function setup() {

  cWidth = $("#canvascontainer").width();
  cHeight = $("#canvascontainer").height();

  cnv = createCanvas(cWidth, cHeight);
  cnv.parent("#canvascontainer");

  strWeight = 50;

  r = 255;
  g = 255;
  b = 255;
}

//START DRAWING
function draw() {
  if (mouseIsPressed === true && on === true) {
    stroke(r, g, b);
    strokeWeight(strWeight);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

//SET DRAWING PROPERTIES
function keyPressed() {

  if (keyCode === 48) {
    if (on == true) {
      on = false;
    } else {
      on = true;
    }
    console.log(clicks);

    //CHATBOX MESSAGES
    if (clicks == 0) {
      $("#textbox").append(
        $("<p style='font-weight:bold'>drawing mode is on</p>")
      );
      $("#textbox").append(
        $(
          "<p class='drawinginstructions'><span style='color:red';>1</span> = red  <span style='color:orange';>2</span> = orange  <span style='color:gold';>3</span> = yellow  <span style='color:lime';>4</span> = green  <span style='color:cyan';>5</span> = cyan  <span style='color:blue';>6</span> = blue  <span style='color:blueviolet';>7</span> = purple  <span style='color:magenta';>8</span> = pink 9 = black</p>"
        )
      );
      $("#textbox").append(
        $(
          "<p class='drawinginstructions'><span style='font-weight:bold';>Q</span> = more strokeweight <span style='opacity:0.75';>W</span> = less strokeweight</p>"
        )
      );
      $("#textbox").append($("<p>default color is white</p>"));
      $("#textbox").append(
        $("<p>to return to explore mode press 0 (zero) key again</p>")
      );
    } else if (clicks % 2 == 1) {
      $("#textbox").append(
        $("<p style='font-weight:bold'>drawing mode is off</p>")
      );
    } else if (clicks % 2 == 0) {
      $("#textbox").append(
        $("<p style='font-weight:bold'>drawing mode is on</p>")
      );
    }
    clicks++;
  }

  //SET COLORS/THICKNESS
  if (keyCode === 49 && on == true) {
    $("#textbox").append($("<p style='color:red';>red</p>"));
    r = 255;
    g = 0;
    b = 0;
  } else if (keyCode === 50 && on == true) {
    $("#textbox").append($("<p style='color:orange';>orange</p>"));
    r = 255;
    g = 100;
    b = 0;
  } else if (keyCode === 51 && on == true) {
    $("#textbox").append($("<p style='color:gold';>yellow</p>"));
    r = 255;
    g = 255;
    b = 0;
  } else if (keyCode === 52 && on == true) {
    $("#textbox").append($("<p style='color:lime';>green</p>"));
    r = 0;
    g = 255;
    b = 0;
  } else if (keyCode === 53 && on == true) {
    $("#textbox").append($("<p style='color:cyan';>cyan</p>"));
    r = 0;
    g = 255;
    b = 255;
  } else if (keyCode === 54 && on == true) {
    $("#textbox").append($("<p style='color:blue';>blue</p>"));
    r = 0;
    g = 0;
    b = 255;
  } else if (keyCode === 55 && on == true) {
    $("#textbox").append($("<p style='color:blueviolet';>purple</p>"));
    r = 150;
    g = 0;
    b = 255;
  } else if (keyCode === 56 && on == true) {
    $("#textbox").append($("<p style='color:magenta';>pink</p>"));
    r = 255;
    g = 0;
    b = 255;
  } else if (keyCode === 57 && on == true) {
    $("#textbox").append($("<p style='color:black';>black</p>"));
    r = 0;
    g = 0;
    b = 0;
  } else if (keyCode === 81 && on == true) {
    
    if (strWeight < 100) {
      $("#textbox").append($("<p style='font-weight:bold';>thicker stroke</p>"));
      strWeight = strWeight + 5;
    } else {$("#textbox").append($("<p style='font-weight:bold';>you've reached max stroke thickness</p>"));}

  } else if (keyCode === 87 && on == true) {

    if (strWeight > 5) {
      $("#textbox").append($("<p style='opacity:0.75';>thinner stroke</p>"));
      strWeight = strWeight - 5;
    } else {$("#textbox").append($("<p style='opacity:0.75';>you've reached minimum stroke thickness</p>"));}
  }
}

    //      $("#canvascontainer").css("pointer-events", "none0");
    //$("canvas").css("pointer-events", "none");

//SET TIMER FOR CHANGING PAGE AND SAVING 
  let timer;
  $("#chanclaimg").mouseenter(function () {
      timer = setTimeout(function () {
        $("#chanclaimg").removeClass("hovered");
        $(this).addClass("hovered");
        $("#canvascontainer").css("background-color", "white");
        $("#textbox").css("opacity", "0");
        $("#dahliaimg").css("opacity", "0");
        $("#mamenchisaurusimg").css("opacity", "0");
        $("#magpieimg").css("opacity", "0");
        $("i").css("opacity", "0");
        $("h1").css("opacity", "0");
        $("strong").css("opacity", "0");
      }, 2000);
    setTimeout(function () {
      window.location.href = "p3/index.html";
    }, 20000);
    });
      
    $("#chanclaimg").mouseleave(function () {
      clearTimeout(timer);
    });

    function goAway() {
      window.location.href = "p3/index.html";
    }

/*
function mouseMoved() {
  let mousePosX;
  let mousePosY;

  mousePosX = map(mouseX, 0, cWidth, 0, 100);
  mousePosY = map(mouseY, 0, cHeight, 0, 100);

  if (mousePosX < 25 && mousePosY < 25) {
    $("video").attr("id","lowlow");
  } else if (mousePosX < 25 && mousePosY < 50) {
    $("video").attr("id", "lowmedium");
  } else if (mousePosX < 25 && mousePosY < 75) {
    $("video").attr("id", "lowhigh");
  } else if (mousePosX < 50 && mousePosY < 25) {
    $("video").attr("id", "mediumlow");
  } else if (mousePosX < 50 && mousePosY < 50) {
    $("video").attr("id", "mediummedium");
  } else if (mousePosX < 50 && mousePosY < 75) {
    $("video").attr("id", "mediumhigh");
  } else if (mousePosX < 75 && mousePosY < 25) {
    $("video").attr("id", "highlow");
  } else if (mousePosX < 75 && mousePosY < 50) {
    $("video").attr("id", "highmedium");
  } else if (mousePosX < 75 && mousePosY < 75) {
    $("video").attr("id", "highhigh");
  }
}
*/