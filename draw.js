
// Flag UA
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

ctx.fillStyle = "rgba(4, 178, 242, 1)";
ctx.fillRect(20, 20, 150, 50);

ctx.fillStyle = "rgba(255, 233, 0, 1)";
ctx.fillRect(20, 70, 150, 50);

ctx.strokeStyle = "black";
ctx.lineWidth = 5;

ctx.beginPath();

ctx.moveTo(20, 20);
ctx.lineTo(20, 170);
ctx.stroke();

// ∕∕ON button
var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,100,0,Math.PI*2,true);
ctx.fillStyle = "black";
ctx.fill();

ctx.lineWidth = 10;
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.moveTo(100, 160);
ctx.bezierCurveTo(160, 160, 190, 100, 130, 50);
ctx.moveTo(100, 160);
ctx.bezierCurveTo(40, 160, 10, 100, 70, 50);
ctx.moveTo(100, 30);
ctx.lineTo(100, 80);
ctx.lineCap = "round";
ctx.stroke();


// Pause button
var c = document.getElementById("canvas3");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,100,0,Math.PI*2,true);
ctx.fillStyle = "black";
ctx.fill();

ctx.clearRect(50,50,100,100);
ctx.fillStyle = "white";





function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(100,100);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";


  // // Marquage des heures
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Marquage des minutes
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // Aiguille des heures
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // Aiguille des minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Aiguille des secondes
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
