class ActivityObject {
    constructor(posX, posY, width, height, name, id) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.rx = 30;
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
            rx: this.rx,
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
    changeTitle(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {
        this.height = parseInt(text);
        this.rx = this.height / 2;
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        this.width = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {

        this.group = new fabric.Group([this.head, this.nameText], {


        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
