window.onload = function(){
const canvas = document.getElementById("myCanvas");
const ctx=canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  const width = 500;
  const height = 500;

  // CSS velikost (kako velik je na ekranu)
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  // prava ločljivost (koliko pikslov se dejansko riše)
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  // skaliraj kontekst
  ctx.scale(dpr, dpr);

  // kakovost
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // zdaj rišeš normalno
  ctx.save();
  ctx.scale(0.2, 0.2);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";;
ctx.beginPath();
ctx.moveTo(663.43,332.94);
ctx.moveTo(343.68,755.59);
ctx.bezierCurveTo(216.63,616.35,388.57,500.41,515.69,655.59);
ctx.bezierCurveTo(573.78,502.73,726.17,654.14,768.85,778.65);
ctx.bezierCurveTo(878.87,528.75,1006.27,575.97,1020.08,657.04);
ctx.bezierCurveTo(1144.36,503.36,1324.77,607.59,1192.37,754.62);
ctx.bezierCurveTo(1455.49,652.46,1506.63,482.95,1464.1,370.6);
ctx.bezierCurveTo(1431.71,259.79,1218.75,153.31,1078.29,121.24);
ctx.bezierCurveTo(1158.08,205.3,1101.2,333.35,985.37,340.14);
ctx.bezierCurveTo(970.23,346.11,884.34,326.4,880.22,299.51);
ctx.bezierCurveTo(880.22,299.51,852.08,87.91,852.08,87.91);
ctx.bezierCurveTo(852.08,87.91,806.22,168.62,806.22,168.62);
ctx.bezierCurveTo(806.22,168.62,729.78,169.29,729.78,169.29);
ctx.bezierCurveTo(729.78,169.29,685.34,85.27,685.34,85.27);
ctx.bezierCurveTo(678.68,72.09,673.45,301.06,640.75,320.27);
ctx.bezierCurveTo(599.86,347.07,533.57,344.63,484.53,320.61);
ctx.bezierCurveTo(430.22,285.06,392.13,207.97,457.84,119.8);
ctx.bezierCurveTo(457.84,119.8,457.29,119.99,457.29,119.99);
ctx.bezierCurveTo(-174.05,308.43,69.11,646.3,343.68,755.59);
ctx.closePath();
ctx.fill();
ctx.stroke();

};


