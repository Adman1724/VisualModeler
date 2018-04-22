class Lifeline {
    constructor(posX, posY, height, id,width) {
        this.posX = posX;
        this.type = 'actor';
        this.posY = posY;
        this.width = width;
        this.name = "Life line";
     
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
            typeConstructor: 'Lifeline',
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
        this.lifeline1 = new fabric.Line([0, 0, 0, this.height], {
            fill: 'black',
            stroke: 'black',
            strokeDashArray: [5, 5],
            strokeWidth: this.strokeWidth
        });
       


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
        this.strokeWidth = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {

        this.group = new fabric.Group([this.lifeline1], {


        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
