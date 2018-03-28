function createActivityObject(canvas, array,id) {
    var four = new ActivityObject(200, 200, 150, 50, 'Activities', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
}
function createConditionCheck(canvas, array, id) {
    var four = new ConditionCheck(0, 0, 50, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createStartOfProcess(canvas, array, id) {
    var four = new StartOfProcess(0, 0, 35, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createTerminator(canvas, array, id) {
    var four = new Terminator(0, 0, 35, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createClass(canvas, array, id) {
    var first = new ClassObject(0, 0, 200, DEFAULT_NAME, false, 'inteface', canvas, id);
    first.initObject();
    addRightMenuItem();
    first.draw(canvas);
   
    
    array.push(first);
    changeId(id, first);
}
function createArrowClass(canvas, array, id,tH,tB,tF) {
    var first = new ArrowClass(0, 0, 300, 'Relation', canvas, id,tH,tB,tF);
    first.initObject();
    addRightMenuItemRelation();
    first.draw(canvas);
    array.push(first);
    changeIdRelation(id, first);
}
function createActivation(canvas, array, id) {
    var four = new Activation(200, 200, 30, 250, 'Activation', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createLifeline(canvas, array, id) {
    var four = new Lifeline(0, 0, 200, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createObjectSeq(canvas, array, id) {
    var four = new ObjectSeq(200, 200, 150, 50, ':Object', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
}
function createActor(canvas, array, id) {
    var three = new Actor(0, 0, 100, 'Actor', id);
    three.initObject();
    addRightMenuItemActor();
    three.draw(canvas);
    array.push(three);
    changeIdActor(id, three);
}
function createSystem(canvas, array, id) {
    var four = new System(200, 200, 200, 200, 'Title', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
}
function createUsecase(canvas, array, id) {
    var four = new UseCase(100, 100, 100, 'Title', 50,id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
}