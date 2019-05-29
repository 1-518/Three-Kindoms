export default class gameChosetoMain extends Laya.Script {

    constructor() { 
        super(); 
    }
    onClick(){
        Laya.Scene.open("gameMain/gameMain.scene");
    }
}