export default class gameChosetoMain extends Laya.Script {
    constructor() { 
        super(); 
    }
    onClick(){
        var newOrLoad=Laya.LocalStorage.getJSON("fcID");;
        Laya.Scene.open("gameMain/gameMain.scene",true,newOrLoad);
    }
}