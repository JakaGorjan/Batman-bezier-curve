
let canvas, ctx;
const CSS_W = 200;
const CSS_H = 200;

window.addEventListener("load", () => {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  // CSS velikost (vizualna)
  canvas.style.width = CSS_W + "px";
  canvas.style.height = CSS_H + "px";

  // prvi izris
  redraw();

  // ob Ctrl+ / Ctrl- + ob resize okna
  window.addEventListener("resize", redraw);

  // --- TOGGLE SVG <-> CANVAS (dodano) ---
const btn = document.getElementById("toggleBtn");

const svgLogo = document.getElementById("logo1");
const canvasLogo = document.getElementById("myCanvas");
const pngLogo = document.getElementById("logoPng");

btn.addEventListener("click", () => {

  // 1️⃣ če je viden SVG → pokaži CANVAS
  if (svgLogo.style.display !== "none") {
    svgLogo.style.display = "none";
    canvasLogo.style.display = "block";
    pngLogo.style.display = "none";
    redraw();
  }

  // 2️⃣ če je viden CANVAS → pokaži PNG
  else if (canvasLogo.style.display !== "none") {
    svgLogo.style.display = "none";
    canvasLogo.style.display = "none";
    pngLogo.style.display = "block";
  }

  // 3️⃣ če je viden PNG → pokaži SVG
  else if (pngLogo.style.display !== "none") {
    svgLogo.style.display = "block";
    canvasLogo.style.display = "none";
    pngLogo.style.display = "none";
  }

});

});

function redraw() {
  const dpr = window.devicePixelRatio || 1;

  // interna ločljivost (realni piksli)
  canvas.width = Math.round(CSS_W * dpr);
  canvas.height = Math.round(CSS_H * dpr);

  // reset transformacije + DPR mapping
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // počisti v CSS koordinatah
  ctx.clearRect(0, 0, CSS_W, CSS_H);

  draw();
}

function draw() {
  ctx.save();
  ctx.scale(0.13, 0.13);

  ctx.strokeStyle = "black";
  ctx.fillStyle = "green";
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(344, 756);

  ctx.bezierCurveTo(217, 616, 389, 500, 516, 656);
  ctx.bezierCurveTo(574, 503, 726, 654, 769, 779);
  ctx.bezierCurveTo(879, 529, 1006, 576, 1020, 657);
  ctx.bezierCurveTo(1144, 503, 1325, 608, 1192, 755);
  ctx.bezierCurveTo(1455, 652, 1507, 483, 1464, 371);
  ctx.bezierCurveTo(1432, 260, 1219, 153, 1078, 121);
  ctx.bezierCurveTo(1158, 205, 1101, 333, 985, 340);
  ctx.bezierCurveTo(970, 346, 884, 326, 880, 300);
  ctx.bezierCurveTo(880, 300, 852, 88, 852, 88);
  ctx.bezierCurveTo(852, 88, 806, 169, 806, 169);
  ctx.bezierCurveTo(806, 169, 730, 169, 730, 169);
  ctx.bezierCurveTo(730, 169, 685, 85, 685, 85);
  ctx.bezierCurveTo(679, 72, 673, 301, 641, 320);
  ctx.bezierCurveTo(600, 347, 534, 345, 485, 321);
  ctx.bezierCurveTo(430, 285, 392, 208, 458, 120);
  ctx.bezierCurveTo(458, 120, 457, 120, 457, 120);
  ctx.bezierCurveTo(-174, 308, 69, 646, 344, 756);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}







