window.addEventListener("load",()=>{
  const canvas=document.querySelector("#canvas");
  const ctx=canvas.getContext("2d");

  //resizing canvas
  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;

  //variable
  let paint=false;
  function startPosition(e){
    painting=true;
    draw(e);
  }
  function finishedPosition(){
    painting=false;
    ctx.beginPath();
  }

  function draw(e){
    if (!painting) return;
    ctx.lineWidth=4;
    ctx.lineCap="round";

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);

  }
  //eventListerners
  canvas.addEventListener("mousedown",startPosition);
  canvas.addEventListener("mouseup",finishedPosition);
  canvas.addEventListener("mousemove",draw);

});