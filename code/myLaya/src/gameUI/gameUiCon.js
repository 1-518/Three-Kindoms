export default class gameUiCon extends Laya.Scene {

    constructor() { 
        super(); 
       this.loadScene("gameMain/gameMain");
    }
    
    onEnable() {
        Laya.loader.load("city.json",Laya.Handler.create(this,this.onLoaded),null,Laya.loader.JSON);
        this.military.on(Laya.Event.CLICK,this,this.militaryCon);
        this.interior.on(Laya.Event.CLICK,this,this.interiorCon);
        this.tricks.on(Laya.Event.CLICK,this,this.tricksCon);
        this.personnel.on(Laya.Event.CLICK,this,this.personnelCon);
        this.information.on(Laya.Event.CLICK,this,this.infListCon);
        this.beiHai.on(Laya.Event.CLICK,this,this.setBeiHai);
        this.city.on(Laya.Event.CLICK,this,this.menuCon);
        this.map.on(Laya.Event.CLICK,this,this.closeMenu);
    }
    //军事游戏菜单控制
    militaryCon() {
        if(this.militaryMenu.visible==false){
            this.militaryMenu.visible=true;
            this.interiorMenu.visible=false;
            this.tricksMenu.visible=false;
            this.personnelMenu.visible=false;
        }
        else
            this.militaryMenu.visible=false;
    }
    //内政游戏菜单控制
   interiorCon(){
        if(this.interiorMenu.visible==false){
            this.interiorMenu.visible=true;
            this.militaryMenu.visible=false;
            this.tricksMenu.visible=false;
            this.personnelMenu.visible=false;
        }
        else
            this.interiorMenu.visible=false;
    }
   //打开计策游戏菜单，关闭其他子菜单
   tricksCon(){
       if(this.tricksMenu.visible==false){
            this.tricksMenu.visible=true;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
            this.personnelMenu.visible=false;
       }
       else
            this.tricksMenu.visible=false;    
   }
   //打开人事游戏菜单，关闭其他子菜单
   personnelCon(){
       if(this.personnelMenu.visible==false){
           this.personnelMenu.visible=true;
            this.tricksMenu.visible=false;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
       }
       else
            this.personnelMenu.visible=false;    
   }
   //详细信息界面控制
   infListCon(){
       if(this.infList.visible==false){
        this.infList.visible=true;
        this.downData.visible=false;
       }
       else{
        this.infList.visible=false;
        this.downData.visible=true;
       }
        
   }
   //写入城池信息
   setBeiHai(){
        var json=Laya.loader.getRes("city.json");//加载json中的数据
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[0].cityName;
        this.moneyData.text=arr1[0].cityMoney;
        this.bunessData.text=arr1[0].cityBussiness;
        this.hayData.text=arr1[0].cityFood;
        this.farmData.text=arr1[0].cityFarm;
        this.soldiersData.text=arr1[0].citySoldier;
        this.cityDefData.text=arr1[0].cityDefense;
        this.lovalData.text=arr1[0].cityLoyal;
    }
    //第一次点击城市隐藏以打开的下方菜单，打开顶部信息
    menuCon(){
        this.personnelMenu.visible=false;
        this.tricksMenu.visible=false;
        this.interiorMenu.visible=false;
        this.militaryMenu.visible=false;
        this.topData.visible=true;
    }
    closeMenu(){
        this.personnelMenu.visible=false;
        this.tricksMenu.visible=false;
        this.interiorMenu.visible=false;
        this.militaryMenu.visible=false;
        this.topData.visible=false;
    }
    //农田开发
    farmAdd(){}
    //商业开发
    bussinessAdd(){}
    //粮草买卖
    foodChange(){}
    //提高民忠
    lovalAdd(){}
    //离间武将

    //蛊惑民众
    lovalDec(){}
    //减低城防
    defenseDec(){}
    //减低商业
    bussinessDec(){}
    //减低农业
    farmDec(){}



}