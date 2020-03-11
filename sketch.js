var boxes = [];
var gSlider; 
 
function setup() {
    createCanvas(400, 400);

    boxes = createSprite(20,20,20,20);
    boxes.shapeColor = "black";

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    boxes.x = World.mouseX;
    boxes.y = World.mouseY;

    if (mousePressedOver("leftButton")) {
        // Every time a mouse press occures create a new box.
        boxes.velocityY = boxes.velocityY + 1;
        World.mouseX != boxes.x;
        boxes.y != World.mouseY;
    }
}