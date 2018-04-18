function createActivityObject(canvas, array,id,x,y,width,height) {
    var four = new ActivityObject(x, y, width, height, 'Activities', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createConditionCheck(canvas, array, id,x,y,height) {
    var four = new ConditionCheck(x, y, height, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createStartOfProcess(canvas, array, id, x, y, height) {
    var four = new StartOfProcess(x, y, height, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createTerminator(canvas, array, id, x, y, height) {
    var four = new Terminator(x, y, height, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createClass(canvas, array, id, x,y,width) {
    var first = new ClassObject(x,y, width, DEFAULT_NAME, false, 'inteface', id);
    first.initObject();
    addRightMenuItem();
    first.draw(canvas);
   
    
    array.push(first);
    changeId(id, first);
    finddArrowAndReloadConnection();
}
function createArrowClass(canvas, array, id,tH,tB,tF,x,y,width) {
    var first = new ArrowClass(x, y, width, 'Relation', canvas, id,tH,tB,tF);
    first.initObject();
    addRightMenuItemRelation();
    first.draw(canvas);
    array.push(first);
    changeIdRelation(id, first);
    finddArrowAndReloadConnection();
}
function createActivation(canvas, array, id, x, y, width, height) {
    var four = new Activation(x, y, width, height, 'Activation', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createLifeline(canvas, array, id,x ,y,height,width) {
    var four = new Lifeline(x, y, height, id,width);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createObjectSeq(canvas, array, id,x,y,width,height) {
    var four = new ObjectSeq(x, y, width, height, ':Object', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createActor(canvas, array, id,x,y,width) {
    var three = new Actor(x, y, width, 'Actor', id);
    three.initObject();
    addRightMenuItemActor();
    three.draw(canvas);
    array.push(three);
    changeIdActor(id, three);
    finddArrowAndReloadConnection();
}
function createSystem(canvas, array, id,x,y,width,height) {
    var four = new System(x, y, width, height, 'Title', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createUsecase(canvas, array, id,x,y,width,height) {
    var four = new UseCase(x, y, width, 'Title', height,id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}