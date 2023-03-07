import fs from 'fs';
import  { createCanvas, registerFont, loadImage } from 'canvas';

const canvas = createCanvas(1200, 630);
const context = canvas.getContext('2d');
context.font = '55px "Times New Roman"';
context.fillStyle = "#000";

const background = createCanvas(1200, 630);
const backgroundctx = background.getContext('2d');
backgroundctx.fillStyle = '#f2f2f2';
backgroundctx.fillRect(0, 0, 1200, 630);


const backgroundText = createCanvas(1200, 630);
const backgroundCtx = backgroundText.getContext('2d');
backgroundCtx.font = '30px "Times New Roman"';
backgroundCtx.fillStyle = '#d3d3d3';

const backgroundMetrics = backgroundCtx.measureText("@sebastiantuyu");
// backgroundCtx.fillText("@sebastiantuyu", (width / 2) - ((backgroundMetrics.width / 2)), canvas.height/2 + 200);
backgroundCtx.fillText("@sebastiantuyu", (1200 / 2) - ((backgroundMetrics.width / 2)), canvas.height/2 + 200);


export const renderCanvas = async (
  width: number, height: number, titulo: string
) => {
  const metrics = context.measureText(titulo);
  context.drawImage(background  , 0, 0, width, height);
  context.drawImage(backgroundText, 0, 0, width, height);
  context.fillText(titulo, (width / 2) - (metrics.width / 2), canvas.height/2 - 50);

  return  canvas.toBuffer("image/png");
}
