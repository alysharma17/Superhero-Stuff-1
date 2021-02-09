var c=new fabric.Canvas("mycanvas");
var hero_x=10;
var hero_y=10;
var hero_object="";
hero_image_width=50;
hero_image_height=50;
hero_image_object="";
function hero() {
fabric.image.fromURL("", function(img){
hero_object=img;
hero_object.scaleToWidth(150);
hero_object.scaleToHeight(150);
hero_object.set({
    top:hero_y, left:hero_x
});
c.add(hero_object);
})

}
function new_image(get_image) {
    fabric.image.fromURL(get_image, function(img) {
hero_image_object=img;
hero_image_object.scaleToWidth(hero_image_width);
hero_image_object.scaleToHeight(hero_image_height);
heero_image_object.set({
    top:player_y, left:player_x
})
c.add(hero_image_object);
}
}

