class Actor {
    constructor(posX, posY, width, name, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = 50;
        this.name = name;
        this.type = 'actor';
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.head = new fabric.Circle({
            left: this.width/2,
            top: 0,
            strokeWidth: 3,
            radius: this.height*(12/50),
            fill: '#fff',
            stroke: '#000'
        });

        this.neck = new fabric.Line([this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.height / 2],{
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.leftHand = new fabric.Line([this.head.left - this.height / 2, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.height / 2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.rightHand = new fabric.Line([this.head.left + (this.head.radius * 2) + this.height / 2, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + this.height / 2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.body = new fabric.Line([this.neck.left, this.neck.top + this.height / 2, this.neck.left, this.neck.top + this.height], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.leftLeg = new fabric.Line([this.body.left, this.body.top + this.height / 2, this.head.left - this.height / 2, this.body.top + this.height  + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.rightLeg = new fabric.Line([this.body.left, this.body.top + this.height / 2, this.head.left + (this.head.radius * 2) + this.height / 2, this.body.top + this.height  + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.nameText = new fabric.Textbox(this.name, {
            width: this.width,
            top: this.body.top + this.height + (this.height/5),
            
            fontSize: 17,
            textAlign: 'center'
        });
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
        this.groupMan = new fabric.Group([this.head, this.neck, this.leftHand, this.rightHand, this.body, this.leftLeg, this.rightLeg,], {
            width: this.width,
            left: 0
        });
        this.group = new fabric.Group([this.groupMan,this.nameText], {
            left: this.previousPosX,
            top:this.previousPosY
        });
       
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
