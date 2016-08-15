window.onload = function() {
  var canvas = document.getElementById('main-canvas');
  var captions_textarea = document.getElementById('captions');
  var font_size = 15;
  
  var ctx = canvas.getContext('2d');
  ctx.font = font_size + "px Open Sans";
  ctx.fillStyle = "#285F36";
  ctx.strokeStyle = "#617A66";

  var img = new Image();
  img.src = "/psyduck.jpg";

  var drawImg = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }

  var drawText = function(text, x, y) {
    var text_width = ctx.measureText(text).width;
    var x_left = x - text_width/2;
    var y_top = y + font_size/2;
    var params = [text, x_left, y_top];
    
    ctx.fillText.apply(ctx, params);
    ctx.strokeText.apply(ctx, params);
  }

  var render = function() {
    var up = 157;
    var down = 390;
    var left = 115;
    var right = 345;
    lines = captions_textarea.value.split("\n");
    drawImg();
    drawText(lines[0], left, up);
    drawText(lines[1], right, up);
    drawText(lines[2], left, down);
    drawText(lines[3], right, down);
  }
  

  var downloadCanvas = function(link, filename) {
    link.href = canvas.toDataURL();
    link.download = filename;
  }


  img.addEventListener("load", render, false);
  captions_textarea.addEventListener("keyup", render, false);
}