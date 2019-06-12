export default class startUi extends Laya.Scene {

    constructor() { 
        super(); 
       this.loadScene("gameStart/gameStart");
    }
    // onEnable() {
    //     this.loadBtn.on(Laya.Event.CLICK,this,this.onpenLoadList);
    //     this.closeLoadList.on(Laya.Event.CLICK,this,this.closeLoad);
    // }
    // //打开读档游戏界面,禁用新游戏按钮
    // onpenLoadList(){
    //     this.loadList.visible=true;
    //     this.newGame.disabled=true;
        
    // }
    // //关闭读档界面，恢复新游戏按钮
    // closeLoad(){
    //     this.loadList.visible=false;
    //     this.newGame.disabled=false;
    // }
}