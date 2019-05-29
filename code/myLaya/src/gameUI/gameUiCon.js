export default class gameUiCon extends Laya.Scene {

    constructor() { 
        super(); 
       this.loadScene("gameMain/gameMain");
    }
    
    onEnable() {
        this.military.on(Laya.Event.CLICK,this,this.openMilitary);
        this.returnMilitary.on(Laya.Event.CLICK,this,this.retMilitary);
        this.interior.on(Laya.Event.CLICK,this,this.openInterior);
        this.returnInte.on(Laya.Event.CLICK,this,this.retInte);
        this.tricks.on(Laya.Event.CLICK,this,this.openTricks);
        this.returnTricks.on(Laya.Event.CLICK,this,this.retTricks);
        this.personnel.on(Laya.Event.CLICK,this,this.openPersonnel);
        this.returnPersonnel.on(Laya.Event.CLICK,this,this.retPersonnel);
        this.information.on(Laya.Event.CLICK,this,this.openInfList);
        this.closeInf.on(Laya.Event.CLICK,this,this.closeInfList);
    }
    //打开军事游戏菜单，关闭其他子菜单
    openMilitary() {
        this.militaryMenu.visible=true;
        this.interiorMenu.visible=false;
        this.tricksMenu.visible=false;
        this.personnelMenu.visible=false;
    }
    //军事菜单返回游戏主界面
    retMilitary(){
       this.militaryMenu.visible=false;
    }
    //打开内政游戏菜单，关闭其他子菜单
   openInterior(){
        this.interiorMenu.visible=true;
        this.militaryMenu.visible=false;
        this.tricksMenu.visible=false;
        this.personnelMenu.visible=false;
    }
    //内政菜单返回游戏主界面
   retInte(){
        this.interiorMenu.visible=false;
   }
   //打开计策游戏菜单，关闭其他子菜单
   openTricks(){
        this.tricksMenu.visible=true;
        this.interiorMenu.visible=false;
        this.militaryMenu.visible=false;
        this.personnelMenu.visible=false;
   }
   //计策游戏菜单返回游戏主界面
   retTricks(){
        this.tricksMenu.visible=false;
   }
   //打开人事游戏菜单，关闭其他子菜单
   openPersonnel(){
        this.personnelMenu.visible=true;
        this.tricksMenu.visible=false;
        this.interiorMenu.visible=false;
        this.militaryMenu.visible=false;
   }
   //人事游戏菜单返回游戏主界面
   retPersonnel(){
        this.personnelMenu.visible=false;
   }
   //打开详细信息界面
   openInfList(){
        this.infList.visible=true;
   }
   //关闭详细信息界面
   closeInfList(){
        this.infList.visible=false;
   }

}