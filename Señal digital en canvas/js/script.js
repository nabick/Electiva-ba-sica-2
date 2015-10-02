$(function()
{
    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');

    
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(100, 300);
    context.lineTo(800, 300);
    context.lineWidth = 1.5;
    context.strokeStyle = "grey";
    context.stroke();
    //Flecha...
    context.beginPath();
    context.moveTo(790, 290);
    context.lineTo(800, 300);
    context.lineTo(790, 310);
    context.lineTo(790, 290);
    context.lineWidth = 1;
    context.strokeStyle = "grey";
    context.fillStyle = 'grey';
    context.fill();
    context.stroke();
    context.font = "normal 20px Cambria";
    context.fillStyle = "black"
    context.fillText("Amplitud", 60, 120);
    context.font = "normal 20px Cambria";
    context.fillStyle = "black"
    context.fillText("Tiempo", 810, 300);
    context.font = "normal 20px Cambria";
    context.fillStyle = "black"
    context.fillText("0", 73, 305);
    
    //Flecha2
    context.beginPath();
    context.moveTo(100, 135);
    context.lineTo(90, 150);
    context.lineTo(110, 150);
   
    context.lineWidth = 1;
    context.strokeStyle = "grey";
    context.fillStyle = 'grey';
    context.fill();
    context.stroke();
    
    //Señal Digital
    context.beginPath();
    context.moveTo(100, 300);
    context.lineTo(170, 300);
    context.lineTo(170, 230);
    context.lineTo(240, 230);
    context.lineTo(240, 300);
    context.lineTo(310, 300);
    context.lineTo(310, 230);
    context.lineTo(380, 230);
    context.lineTo(450, 230);
    context.lineTo(450, 300);
    context.lineTo(520, 300);
    context.lineTo(590, 300);
    context.lineTo(590, 230);
    context.lineTo(660, 230);
    context.lineTo(660, 300);
    context.lineTo(730, 300);
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.stroke();
    
    //linea discontinua
    context.setLineDash ([8,15]);
    context.moveTo(90, 230);
    context.lineTo(730, 230);
    context.moveTo(170, 310);
    context.lineTo(170, 190);
    context.moveTo(240, 310);
    context.lineTo(240, 190);
    context.moveTo(310, 310);
    context.lineTo(310, 190);
    context.moveTo(380, 310);
    context.lineTo(380, 190);
    context.moveTo(450, 310);
    context.lineTo(450, 190);
    context.moveTo(520, 310);
    context.lineTo(520, 190);
    context.moveTo(590, 310);
    context.lineTo(590, 190);
    context.moveTo(660, 310);
    context.lineTo(660, 190);
    context.moveTo(730, 310);
    context.lineTo(730, 190);    
    context.lineWidth = 0.7;
    context.strokeStyle = "black";
    context.stroke();
    
    //Números
    context.font = "normal 20px Cambria";
    context.fillStyle = "black"
    context.fillText("0", 130, 210);
    context.fillText("1", 200, 210);
    context.fillText("0", 270, 210);
    context.fillText("1", 340, 210);
    context.fillText("1", 410, 210);
    context.fillText("0", 480, 210);
    context.fillText("0", 550, 210);
    context.fillText("1", 620, 210);
    context.fillText("0", 690, 210);
    context.fillText("5", 73, 237);
    
    
    
  
   
    
    
   
               

}

 
 );
