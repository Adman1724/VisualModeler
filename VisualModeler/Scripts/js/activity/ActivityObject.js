class ActivityObject {
    constructor(posX, posY, width, height, name) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;

        this.head = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'white',
            width: this.width,
            height: this.height,
            stroke: 'black',
            strokeWidth: 2,
            originX: 'left',
            originY: 'top',
            rx: 30,
            ry:0
           
        });


        this.nameText = new fabric.Textbox(this.name, {
            width: this.width,
            top: (this.head.height - 17) / 2,
            left: 0,
            fontSize: 17,
            textAlign: 'center'
           


        });
    }
    draw(canvas) {

        this.group = new fabric.Group([this.head, this.nameText], {


        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
function createActivityObject(canvas, array) {
    var four = new ActivityObject(200, 200, 150, 50, 'Activities');
    four.initObject();
    four.draw(canvas);
    array.push(four);


}