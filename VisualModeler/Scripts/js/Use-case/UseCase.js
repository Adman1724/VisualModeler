class UseCase {
    constructor(posX, posY, width, name, height, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.widthText = width;
        this.type = 'usecase';
        this.name = name;
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
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.previousWidth = this.group.width;  

       
        this.nameText = new fabric.Textbox(this.name, {
            
            fontSize: this.fontSize,
           textAlign: 'center',
           width: this.width,
           originX: 'center',
           originY: 'center'

        });
        
        this.head = new fabric.Circle({
            
            strokeWidth: this.strokeWidth,
            scaleX: this.width / this.height,
            radius: this.height/2,
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
    changeTitle(text) {
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
        this.group = new fabric.Group([this.group1], {
          
        });

        this.group.height = this.height
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
