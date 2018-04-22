class Terminator {
    constructor(posX, posY, height, id) {
        this.posX = posX;
        this.type = 'actor';
        this.posY = posY;
        this.width = height;
        this.name = "Terminator";
        this.height = height;
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.group = new fabric.Group([], {
            left: this.previousPosX,
            top: this.previousPosY
        });
        this.id = id;
        this.fontSize = 0;
        this.strokeWidth = 2;
    }
    mapper() {
        this.mapper = {
            posX: this.posX,
            posY: this.posY,
            type: this.type,
            typeConstructor: 'Terminator',
            width: this.width,
            height: this.height,
            name: this.name,
            previousPosX: this.previousPosX,
            previousPosY: this.previousPosY,
            id: this.id,
            fontSize: this.fontSize,
            strokeWidth: this.strokeWidth
        }

    }
    loadMapper(obj) {
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.type = obj.type;
        this.width = obj.width;
        this.height = obj.height;
        this.name = obj.name;
        this.previousPosX = obj.previousPosX;
        this.previousPosY = obj.previousPosY;
        this.id = obj.id;
        this.fontSize = obj.fontSize;
        this.strokeWidth = obj.strokeWidth;

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
