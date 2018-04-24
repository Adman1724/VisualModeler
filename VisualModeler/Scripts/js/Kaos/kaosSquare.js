class kaosSquare {
    constructor(posX, posY, width, height, name, id) {
        this.posX = posX;
        this.type = 'actor';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.group = new fabric.Group([], {
            left: this.previousPosX,
            top: this.previousPosY
        });
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 2;
    }
    mapper() {
        this.mapper = {
            posX: this.posX,
            posY: this.posY,
            type: this.type,
            typeConstructor: 'kaosEntityArrow',
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
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;

        

        this.right = new fabric.Triangle({
            top: 0,
            left: this.width,
            width: this.height,
            height: this.width / 2,
            stroke: 'white',
            strokeWidth: this.strokeWidth,
            fill: 'white',
            angle: 90
        });
      

        this.left = new fabric.Triangle({
            top: this.height,
            left: 0,
            width: this.height,
            height: this.width / 2,
            stroke: 'white',
            strokeWidth: this.strokeWidth,
            fill: 'white',
            angle: 270
        })
        this.nameText = new fabric.Textbox(this.name, {
            width: this.width,
            top: (this.height - 17) / 2,
            left: 0,
            fontSize: this.fontSize,
            textAlign: 'center'



        });
        this.line1 = new fabric.Line([this.width/2, 0, 0, this.height/2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth

        });



        this.line3 = new fabric.Line([0, this.height / 2, this.width/2, this.height], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth

        });
        this.line4 = new fabric.Line([this.width / 2, this.height, this.width, this.height / 2], {
            fill: 'black',
            stroke: 'black',
            strokeWidth: this.strokeWidth

        });
        this.line5 = new fabric.Line([this.width, this.height / 2, this.width / 2, 0], {
            fill: 'black',
            stroke: 'black',
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
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {
        this.group1 = new fabric.Group([this.left, this.right, this.line1, this.line3, this.line4, this.line5, this.nameText], {
            left: 0,
            top: 0

        });
        var groupHeight = this.group1.height;
        this.hitBoxArrayCoordinates = [
            { y: 0, x: 0 },
            { y: 0, x: this.width / 2 },
            { y: 0, x: this.width },
            { y: groupHeight / 2, x: this.width },
            { y: groupHeight, x: this.width },
            { y: groupHeight, x: this.width / 2 },
            { y: groupHeight, x: 0 },
            { y: groupHeight / 2, x: 0 }];
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
