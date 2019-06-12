export default class gameChosetoMain extends Laya.Script {

    constructor() { 
        super(); 
    }
    onClick(){
        var newOrLoad=1;
        Laya.Scene.open("gameMain/gameMain.scene",true,newOrLoad);
    }
}