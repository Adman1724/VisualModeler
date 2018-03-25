function createActivityObject(canvas, array,id) {
    var four = new ActivityObject(200, 200, 150, 50, 'Activities', id);

    four.initObject();
    four.draw(canvas);
    
    array.push(four);
}
function createConditionCheck(canvas, array, id) {
    var four = new ConditionCheck(0, 0, 50, id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createStartOfProcess(canvas, array, id) {
    var four = new StartOfProcess(0, 0, 35, id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createTerminator(canvas, array, id) {
    var four = new Terminator(0, 0, 35, id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createClass(canvas, array, id) {
    var first = new ClassObject(0, 0, 200, DEFAULT_NAME, false, 'inteface', canvas, id);
    first.initObject();
    addRightMenuItem();
    first.draw(canvas);
   
    
    array.push(first);
    changeId(id, first);
}
function createActivation(canvas, array, id) {
    var four = new Activation(200, 200, 30, 250, ':Object', id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createLifeline(canvas, array, id) {
    var four = new Lifeline(0, 0, 200, id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createObjectSeq(canvas, array, id) {
    var four = new ObjectSeq(200, 200, 150, 50, ':Object', id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createActor(canvas, array, id) {
    var three = new Actor(0, 0, 100, 'Actor', id);
    three.initObject();
    three.draw(canvas);
    array.push(three);
}
function createSystem(canvas, array, id) {
    var four = new System(200, 200, 200, 200, 'Title', id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}
function createUsecase(canvas, array, id) {
    var four = new UseCase(200, 200, 200, 'Title', id);
    four.initObject();
    four.draw(canvas);
    array.push(four);
}