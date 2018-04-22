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
function createNote(canvas, array, id, x, y, width, height) {
    var four = new Note(x, y, width, height, 'Title', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}

function createPackage(canvas, array, id, x, y, width, height) {
    var four = new Package(x, y, width, height, 'Title', id);
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
function createiStarActor(canvas, array, id, x, y, width, height) {
    var four = new iStarActor(x, y, width, 'Title', width, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarAgent(canvas, array, id, x, y, width, height) {
    var four = new iStarAgent(x, y, width, 'Agent', width, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarRole(canvas, array, id, x, y, width, height) {
    var four = new iStarRole(x, y, width, 'Role', width, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarGoal(canvas, array, id, x, y, width, height) {
    var four = new ActivityObject(x, y, width, height, 'Goal', id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarBelief(canvas, array, id, x, y, width, height) {
    var four = new UseCase(x, y, width, 'Belief', height, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarResource(canvas, array, id, x, y, width, height) {
    var four = new iStarResource(x, y, width, height, 'Resource', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createiStarPosition(canvas, array, id, x, y, width, height) {
    var four = new iStarPosition(x, y, width, 'Position', width, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createiStarTask(canvas, array, id, x, y, width, height) {
    var four = new iStarTask(x, y, width, height, 'Task', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosAgent(canvas, array, id, x, y, width, height) {
    var four = new iStarTask(x, y, width, height, 'Agent', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosBall(canvas, array, id, x, y, height) {
    var four = new kaosBall(x, y, height, id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosEntity(canvas, array, id, x, y, width, height) {
    var four = new iStarResource(x, y, width, height, 'Entity', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosGoal(canvas, array, id, x, y, width, height) {
    var four = new UseCase(x, y, width, 'Goal', height, id);
    four.initObject();
    addRightMenuItemUsecase();
    four.draw(canvas);
    array.push(four);
    changeIdUsecase(id, four);
    finddArrowAndReloadConnection();
}
function createKaosEntityArrow(canvas, array, id, x, y, width, height) {
    var four = new kaosEntityArrow(x, y, width, height, 'Agent', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosSquare(canvas, array, id, x, y, width, height) {
    var four = new kaosSquare(x, y, width, height, 'Agent', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}
function createKaosRequirement(canvas, array, id, x, y, width, height) {
    var four = new kaosRequirement(x, y, width, height, 'Agent', id);
    four.initObject();
    addRightMenuItemActor();
    four.draw(canvas);
    array.push(four);
    changeIdActor(id, four);
    finddArrowAndReloadConnection();
}