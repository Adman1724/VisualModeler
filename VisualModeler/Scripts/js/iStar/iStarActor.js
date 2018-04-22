class iStarActor {
    constructor(posX, posY, width, name, height, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.widthText = width;
        this.type = 'usecase';
        this.name = 'Actor';
        this.height = height;
        this.group = new fabric.Group([], {
            top: this.posY,
            left: this.posX,
            width: this.width,

        });
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 2;
    }
    mapper() {
        this.mapper = {
            posX: this.posX,
            posY: this.posY,
            type: this.type,
            typeConstructor: 'iStarActor',
            width: this.width,
            widthText: this.widthText,
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
        this.widthText = obj.widthText;
        this.height = obj.height;
        this.name = obj.name;
        this.previousPosX = obj.previousPosX;
        this.previousPosY = obj.previousPosY;
        this.id = obj.id;
        this.fontSize = obj.fontSize;
        this.strokeWidth = obj.strokeWidth;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        this.group.width = this.previousWidth;

    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.previousWidth = this.group.width;


        this.nameText = new fabric.Textbox(this.name, {

            fontSize: this.fontSize,
            textAlign: 'center',
            width: this.width,
            originX: 'center',
            originY: 'center',
            breakWords: true

        });

        this.head = new fabric.Circle({

            strokeWidth: this.strokeWidth,
            scaleX: 1,
            radius: this.height / 2,
            fill: '#fff',
            stroke: '#000',
            originX: 'center',
            originY: 'center'
        });
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeName(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {

        this.height = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        this.width = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {

        this.group1 = new fabric.Group([this.head, this.nameText], {
            top: 0,
            left: 0
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

        this.group.height = this.height
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
