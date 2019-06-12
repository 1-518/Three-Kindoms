export default class gameStarttoNew extends Laya.Script {

    constructor() { 
        super(); 
    }
    onClick(){
        Laya.Scene.open("gameStart/gameChose.scene");
    }
}