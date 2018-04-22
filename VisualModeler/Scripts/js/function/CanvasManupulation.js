var selectedObject
function canvasAdd(array, canvas) {
    for (var i = 0; i < array.length; i++) {
        
        canvas.add(array[i].group);
       
    }
}
function removeItem(array, canvas) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].group == canvas.getActiveObject()) {
            array.splice(i, 1);
        }
    }
    reloadRightMenu();
    canvas.remove(canvas.getActiveObject());
}
function loader(array1) {
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
            canvasItems.push(four);
        }
        else if (array[i].typeConstructor == "class") {
            var four = new ClassObject(0, 0, 50,'class', false, 'inteface', 0);
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
            var four = new Lifeline(0, 0,100, 0, 5);
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
            var four = new Actor(0, 0,200, 'Actor', 0);
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


        

        
    }
}


