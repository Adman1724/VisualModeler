class Actor {
    constructor(posX, posY, width, name, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = 150;
        this.h3 = this.height / 2.5;
        this.name = name;
        this.type = 'actor';
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.group = new fabric.Group([], {
            left: this.previousPosX,
            top: this.previousPosY
        });
      
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 3;
    }
    mapper() {
        this.mapper = {
            posX: this.posX,
            posY: this.posY,
            type: this.type,
            typeConstructor: 'Actor',
            width: this.width,
            height: this.height,
            h3: this.h3,
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
        this.h3 = obj.h3;
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
        var groupHeight =  this.group1.height ;
        this.hitBoxArrayCoordinates = [
            { y: 0, x: 0 },
            { y: 0, x: this.width / 2 - 3 },
            { y: 0, x: this.width - 7 },
            { y: groupHeight / 2 - 3, x: this.width - 7 },
            { y: groupHeight - 7 - this.strokeWidth * 2, x: this.width - 7 },
            { y: groupHeight - 7 - this.strokeWidth * 2, x: this.width / 2 - 7 },
            { y: groupHeight - 7 - this.strokeWidth * 2, x: 0 },
            { y: groupHeight / 2 - 3, x: 0 }];
        this.hitBoxArray = [];
        for (var i = 0; i < 8; i++) {
            this.hitBoxArray[i] = new fabric.Circle({
                left: this.hitBoxArrayCoordinates[i].x,
                top: this.hitBoxArrayCoordinates[i].y,
                strokeWidth: 0.5,
                class: 'pointer',
                radius: 1,
                fill: 'black',
                stroke: '#666'
            });
        }
        var groupHitBox = new fabric.Group(this.hitBoxArray, {
            top: 0,
            left: 0
        });

        this.group = new fabric.Group([this.group1], {
          
        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
