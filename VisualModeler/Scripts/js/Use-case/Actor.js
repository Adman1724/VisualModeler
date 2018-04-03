class Actor {
    constructor(posX, posY, width, name, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = 150;
        this.h3 = this.height / 2.5;
        this.name = name;
        this.type = 'actor';
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 3;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.h3 = this.height / 2.5;
        this.head = new fabric.Circle({
            left: this.width/2,
            top: 0,
            strokeWidth: this.strokeWidth,
            radius: this.h3*(12/50),
            fill: '#fff',
            stroke: '#000'
        });

        this.neck = new fabric.Line([this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.h3 / 2],{
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.leftHand = new fabric.Line([this.head.left - this.h3 / 2, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.h3 / 2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.rightHand = new fabric.Line([this.head.left + (this.head.radius * 2) + this.h3 / 2, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.h3 / 2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.body = new fabric.Line([this.neck.left, this.neck.top + this.h3 / 2, this.neck.left, this.neck.top + this.h3], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.leftLeg = new fabric.Line([this.body.left, this.body.top + this.h3 / 2, this.head.left - this.h3 / 2, this.body.top + this.h3  + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.rightLeg = new fabric.Line([this.body.left, this.body.top + this.h3 / 2, this.head.left + (this.head.radius * 2) + this.h3 / 2, this.body.top + this.h3  + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth
        });
        this.nameText = new fabric.Textbox(this.name, {
            width: this.width,
            top: this.body.top + this.h3 + (this.h3/5),

            fontSize: this.fontSize,
            textAlign: 'center'
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
        this.groupMan = new fabric.Group([this.head, this.neck, this.leftHand, this.rightHand, this.body, this.leftLeg, this.rightLeg], {
           
        });
        this.groupMan.left = (this.width - this.groupMan.width) / 2;
        this.group1 = new fabric.Group([this.groupMan, this.nameText], {
           
        });
        this.group = new fabric.Group([this.group1], {
          
        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
