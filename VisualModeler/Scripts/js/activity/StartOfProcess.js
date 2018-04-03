class StartOfProcess {
    constructor(posX, posY, height, id) {
        this.posX = posX;
        this.type = 'actor';
        this.posY = posY;
        this.width = height;
        this.name = "StartOfProcess";
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 0;
        this.strokeWidth = 0;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;

        this.startOfProcessBox = new fabric.Circle({
            scaleX: (this.width/2)/(this.height/2),
            radius: this.height/2,
            fill: 'black',
            left: 0,
            top: 0
        });
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeName(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {
        this.height = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {

        this.group = new fabric.Group([this.startOfProcessBox], {


        });
        this.group.height = this.height ;
        this.group.width = this.width ;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
