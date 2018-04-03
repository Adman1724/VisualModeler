class Terminator {
    constructor(posX, posY, height, id) {
        this.posX = posX;
        this.type = 'actor';
        this.posY = posY;
        this.width = height;
        this.name = "Terminator";
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 0;
        this.strokeWidth = 2;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.terminatorBig = new fabric.Circle({
            scaleX: (this.width/2)/(this.height/2),
            radius: this.height/2,
            fill: 'white',
            stroke: 'black',
            left: 0,
            top: 0,
            originX: 'center',
            originY: 'center',
            strokeWidth: this.strokeWidth
        });
        this.terminatorSmall = new fabric.Circle({
            scaleX: this.terminatorBig.scaleX,
            radius: (this.height/2)/1.5,
            fill: 'black',
            left: 0,
            top: 0,
            originX: 'center',
            originY: 'center'
        });



    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);;
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

        this.group = new fabric.Group([this.terminatorBig, this.terminatorSmall], {
            originX:'center',
            originY: 'center'

        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
