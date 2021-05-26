Canvas=new fabric.Canvas("MYcanvas1");
var px=10,py=10;
var blockW,blockH=30;
var player_object="";
var block_object="";


function new_Img(GetImg){
    fabric.Image.fromURL(GetImg,function(Img){
        block_object=Img;
        block_object.scaleToWidth(140);
        block_object.scaleToHeight(140);
        block_object.set({
            top:py,
            left:px
        });
        Canvas.add(block_object);
    });
}