export default class gameNewtoChose extends Laya.Script {

    constructor() { 
        super(); 
    }
    onClick(){
        Laya.Scene.open("gameStart/gameChose.scene");
    }
}