class UseCase {
    constructor(posX, posY, width, name, height, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.widthText = width;
        this.type = 'usecase';
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
       
      

       
        this.nameText = new fabric.Textbox(this.name, {
            

            fontSize: 17,
            originX: 'center',
            originY: 'center'
        });
        
        this.head = new fabric.Circle({

            strokeWidth: 3,
            scaleY: this.height / (this.width ),
            radius: this.width/1.3,
            fill: '#fff',
            stroke: '#000',
            originX: 'center',
            originY: 'center'
        });
    }
    changeTitle(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {
        this.height = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {
        
        this.group = new fabric.Group([this.head, this.nameText], {
            left: this.previousPosX,
            top: this.previousPosY
        });

        this.group.width = this.width*1.5;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
