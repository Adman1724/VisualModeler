class Actor {
    constructor(posX, posY, width, name) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.head = new fabric.Circle({
            left:50,
            top: 0,
            strokeWidth: 3,
            radius: 12,
            fill: '#fff',
            stroke: '#000'
        });

        this.neck = new fabric.Line([this.head.left + (this.head.radius), this.head.top + (this.head.radius*2), this.head.left + (this.head.radius), this.head.top + (this.head.radius*2)+25],{
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.leftHand = new fabric.Line([this.head.left - 25, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + 25], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.rightHand = new fabric.Line([this.head.left +(this.head.radius*2)+ 25, this.head.top + (this.head.radius), this.head.left + (this.head.radius), this.head.top + (this.head.radius * 2) + 25], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.body = new fabric.Line([this.neck.left , this.neck.top+25 , this.neck.left , this.neck.top + 50], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.leftLeg = new fabric.Line([this.body.left, this.body.top+24, this.head.left - 25, this.body.top + 49 + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.rightLeg = new fabric.Line([this.body.left, this.body.top + 24, this.head.left + (this.head.radius*2) + 25, this.body.top + 49 + (this.head.radius)], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: 3
        });
        this.nameText = new fabric.Textbox(this.name, {
            width: this.width,
            top: this.body.top+60,
            
            fontSize: 17,
            textAlign: 'center'
        });
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