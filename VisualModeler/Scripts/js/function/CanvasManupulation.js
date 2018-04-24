var selectedObject
function canvasAdd(array, canvas) {
    for (var i = 0; i < array.length; i++) {
        
        canvas.add(array[i].group);
       
    }
}
function move() {
    remove = false;
    $('#removeButton').css("background-color", 'black');
    $('#moveButton').css("background-color", '#3498DB');
    $("title-center").css("cursor", "default");
    canvas.hoverCursor = 'default';
}
function removeItems() {    
remove = true;
$('#removeButton').css("background-color", 'red');
$('#moveButton').css("background-color", 'black');
$("title-center").css("cursor", "crosshair");
canvas.hoverCursor = 'crosshair';
  
}
function loader(array1) {
    var x = 0;
    var y = 0;
    var width = 100;
    var height = 100;
    var id = 0;
    var array = JSON.parse(array1);
    for (var i = 0; i < array.length; i++) {
        if (array[i].typeConstructor == 'ActivityObject') {
            var four = new ActivityObject(0, 0, 100, 100, 'Activities', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'ConditionCheck') {
            var four = new ConditionCheck(0, 0, 100, 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'StartOfProcess') {
            var four = new StartOfProcess(0, 0, 100, 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Terminator') {
            var four = new Terminator(0, 0, 100, 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'arrowClass') {
            var four = new ArrowClass(0, 0, 200, 'Relation', canvas, 0, 0, 0, 0);
            four.loadMapper(array[i]);
            four.initObject();
            
            four.draw(canvas);
            four.recalculateRight();
            four.recalculateLeft();
            
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == "class") {
            var four = new ClassObject(0, 0, 50, 'class', false, 'inteface', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Activation') {
            var four = new Activation(0, 0, 50, 50, 'Activation', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Lifeline') {
            var four = new Lifeline(0, 0, 100, 0, 5);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'ObjectSeq') {
            var four = new ObjectSeq(0, 0, 100, 50, ':Object', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Actor') {
            var four = new Actor(0, 0, 200, 'Actor', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Note') {
            var four = new Note(0, 0, 100, 50, 'Title', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'Package') {
            var four = new Package(0, 0, 100, 50, 'Title', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'System') {
            var four = new System(0, 0, 100, 50, 'Title', 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'UseCase') {
            var four = new UseCase(0, 0, 100, 'Title', 50, 0);
            four.loadMapper(array[i]);
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarActor') {
            var four = new iStarActor(x, y, width, 'Title', width, id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarAgent') {
            var four = new iStarAgent(x, y, width, 'Agent', width, id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarRole') {
            var four = new iStarRole(x, y, width, 'Role', width, id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarResource') {
            var four = new iStarResource(x, y, width, height, 'Resource', id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarPosition') {
            var four = new iStarPosition(x, y, width, 'Position', width, id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'iStarTask') {
            var four = new iStarTask(x, y, width, height, 'Task', id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'kaosBall') {
            var four = new kaosBall(x, y, height, id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'kaosEntityArrow') {
            var four = new kaosEntityArrow(x, y, width, height, 'Agent', id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'kaosSquare') {
            var four = new kaosSquare(x, y, width, height, 'Agent', id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == 'kaosRequirement') {
            var four = new kaosRequirement(x, y, width, height, 'Agent', id);
            four.loadMapper(array[i])
            four.initObject();
            four.draw(canvas);
            canvasItems.push(four);
        }
       

       
       



        

        
    }
    reloadRightMenu();
}


