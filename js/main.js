
let taReview= document.getElementById('taReview');
let radiousLT= document.getElementById('radiousLT');
let radiousRT= document.getElementById('radiousRT');
let radiousRB= document.getElementById('radiousRB');
let radiousLB= document.getElementById('radiousLB');
let inputLT= document.getElementById('inputLT');
let allRadious= document.getElementById('allRadious');
let inputLB= document.getElementById('inputLB');
let inputRT= document.getElementById('inputRT');
let inputRB= document.getElementById('inputRB');
let widthBorder= document.getElementById('widthBorder');
let border1= document.getElementById('border1');
let border2= document.getElementById('border2');
let borderSolid= document.getElementById('borderSolid');
let borderDotted= document.getElementById('borderDotted');
let borderDashed= document.getElementById('borderDashed');
let borderGroove= document.getElementById('borderGroove');
let borderDouble= document.getElementById('borderDouble');
let borderRidge= document.getElementById('borderRidge');
let borderInset= document.getElementById('borderInset');
let borderOutset= document.getElementById('borderOutset');
let borderHidden= document.getElementById('borderHidden');
let borderNone= document.getElementById('borderNone');
let borderColor= document.getElementById('borderColor');
let alphaBorder= document.getElementById('alphaBorder');
let all= document.getElementById('all');
let topo= document.getElementById('topo');
let right= document.getElementById('right');
let bottom= document.getElementById('bottom');
let left= document.getElementById('left');


var tip= "solid";
var hex ="";
radiousRT.oninput = function (e) {
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';
    inputRT.value= radiousRT.value; 
};
radiousLB.oninput = function (e) {
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';
    inputLB.value= radiousLB.value;
};
radiousRB.oninput = function (e) {
    taReview.style.borderBottomRightRadius = radiousRB.value + 'px';
    inputRB.value= radiousRB.value;
};

radiousLT.oninput = function (e) {
    inputLT.value= radiousLT.value;

    if(allRadious.checked ){
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value= radiousLT.value;
        radiousLB.value = radiousLT.value;  
        inputRB.value= radiousLT.value;
        radiousRB.value = radiousLT.value;
        inputRT.value= radiousLT.value; 
        radiousRT.value = radiousLT.value;

    }else{
        taReview.style.borderTopLeftRadius= radiousLT.value + 'px';
        
    }
};

allRadious.oninput = function(e) {
    if(!allRadious.checked ){
        taReview.style.borderTopLeftRadius=  '0px 0px 0px';
        inputLB.value= 0;
        inputRB.value= 0;
        inputRT.value= 0; 
    }

};
var bordeWid;
widthBorder.oninput=function(e){
    taReview.style.borderWidth = widthBorder.value + "px";
    bordeWid=widthBorder.value;
};

border1.onclick=function(e) {
    taReview.style.borderWidth = "1px";
    
    widthBorder.value=1;
    bordeWid=1;
};

border2.onclick=function(e) {
    alphaBorder.value=100;
    alert(alphaBorder.value);
    /* Se ingresa el conversor de colores para mantener el color */
    var red = parseInt(hex[1]+hex[2],16);
        var green = parseInt(hex[3]+hex[4],16);
        var blue = parseInt(hex[5]+hex[6],16);
        taReview.style.border= widthBorder.value + "px " + tip  + " rgba("+red+", "+green+", "+blue+", "+ (alphaBorder.value/100)+")";
};


borderSolid.onclick = function(e){
        taReview.style.borderStyle= 'solid';
        tip='solid';
};
borderDotted.onclick = function(e){
    taReview.style.borderStyle= 'dotted';
    tip='dotted';
};
borderDashed.onclick = function(e){
    taReview.style.borderStyle= 'dashed';
    tip='dashed';
};
borderDouble.onclick = function(e){
    taReview.style.borderStyle= 'double';
    tip='double';
};
borderGroove.onclick = function(e){
    taReview.style.borderStyle= 'groove';
    tip='groove';
};
borderRidge.onclick = function(e){
    taReview.style.borderStyle= 'ridge';
    tip='ridge';
};
borderInset.onclick = function(e){
    taReview.style.borderStyle= 'inset';
    tip='inset';
};
borderOutset.onclick = function(e){
    taReview.style.borderStyle= 'outset';
    tip='outset';
};
borderHidden.onclick = function(e){
    taReview.style.borderStyle= 'hidden';
    tip='hidden';
};
borderNone.onclick = function(e){
    taReview.style.borderStyle= 'none';
    tip='none';
};
        var red = parseInt(hex[1]+hex[2],16);
        var green = parseInt(hex[3]+hex[4],16);
        var blue = parseInt(hex[5]+hex[6],16);
        console.log(red,green,blue);

borderColor.oninput = function(e){
    taReview.style.borderColor = borderColor.value;
    hex = borderColor.value;
    
}
alphaBorder.oninput = function(e) {
    
    var red = parseInt(hex[1]+hex[2],16);
    var green = parseInt(hex[3]+hex[4],16);
    var blue = parseInt(hex[5]+hex[6],16);
   // alert(widthBorder.value + "px " + tip  + " rgba("+red+", "+green+", "+blue+", "+ (alphaBorder.value/100)+");");
     taReview.style.border= widthBorder.value + "px " + tip  + " rgba("+red+", "+green+", "+blue+", "+ (alphaBorder.value/100)+")";
}

topo.onclick = function(e){
   taReview.style.borderWidth = bordeWid + "px 0px 0px 0px";
    
};
right.onclick = function(e){
    taReview.style.borderWidth =  "0px "+bordeWid+"px 0px 0px";
};
bottom.onclick = function(e){
    taReview.style.borderWidth =  "0px 0px "+bordeWid+"px 0px";
    
};
left.onclick = function(e){
    taReview.style.borderWidth =  "0px 0px 0px "+bordeWid+"px";
};
all.onclick = function(e){
    taReview.style.borderWidth =  bordeWid + "px";
};