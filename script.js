MAX_DEPTH = 32;
FPS = 32;
MAX_SIZE = 50;
TOTAL_AMOUNT = 32;
GENERATOR_SIZE = 50;
$(function () {
  console.log($("#starfield"));
  $("#starfield").append("<div class='text'>text</div>");
})
/*
var canvas, ctx;
var stars = new Array(TOTAL_AMOUNT);
var mouseX, mouseY;

window.onload = function() {
  canvas = document.getElementById("tutorial");
  if( canvas && canvas.getContext ) {
    ctx = canvas.getContext("2d");
    initStars();
    setInterval(loop,FPS);
   }
}

// Returns a random number in the range [minVal,maxVal]
function randomRange(minVal,maxVal) {
//console.log(Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal);
  return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
}

function initStars() {
  for( var i = 0; i < stars.length; i++ ) {
    stars[i] = {
      x: randomRange(-GENERATOR_SIZE,GENERATOR_SIZE),
      y: randomRange(-GENERATOR_SIZE,GENERATOR_SIZE),
      z: randomRange(-10,MAX_DEPTH)
     }
  }
}

function loop() {
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //console.log(message);
mouseX = mousePos.x;
mouseY = mousePos.y;
  }, false);

  var halfWidth  = mouseX / 3;
  var halfHeight = mouseY / 3;

  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0,0,canvas.width,canvas.height);


  for( var i = 0; i < stars.length; i++ ) {
    stars[i].z -= 0.2;

    if( stars[i].z <= 0 ) {
      stars[i].x = randomRange(-GENERATOR_SIZE,GENERATOR_SIZE);
      stars[i].y = randomRange(-GENERATOR_SIZE,GENERATOR_SIZE);
      stars[i].z = MAX_DEPTH;
    }

//perspective projection formula
//px = 128 * star.x / + star.z + generator_x;
//py = 128 * star.y / + star.z + generator_y;
    var k  = 128.0 / stars[i].z;
    var px = stars[i].x * k + halfWidth;
    var py = stars[i].y * k + halfHeight;

    if( px >= -100 && px <= 600 && py >= -100 && py <= 600 ) {
      var size = (1 - stars[i].z / FPS) * MAX_SIZE;
      var shade = parseInt((1 - stars[i].z / FPS) * 255);
  ctx.font = size + "px Arial";
      ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
      //ctx.fillRect(px,py,size,size);
  ctx.fillText("Hello World",px,py);
    }
  }
}
*/