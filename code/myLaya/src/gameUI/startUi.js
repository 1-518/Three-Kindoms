export default class startUi extends Laya.Scene {

    constructor() { 
        super(); 
        this.loadScene("gameStart/gameChose");
        this.arrFaction=[];
    }
   
    onOpened(){
            Laya.loader.load("midFaction.json",Laya.Handler.create(this,this.onFactionStart),null,Laya.loader.JSON);
    }

    onFactionStart(){
        var json=Laya.loader.getRes("midFaction.json");
        this.arrFaction=json["midFaction"]; //arry[35]从json读取进来。  
        let allFaction = [];
            for(let i=0;i<24;i++){
                let data =null;
                data={
                    allFaction:{text:this.arrFaction[i].FactionName}
                }
                allFaction.push(data);
            }
            this.choList.dataSource=allFaction;
            this.choList.mouseHandler=new Laya.Handler(this,this.choChange);
    }
    choChange(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                this.choName.text=this.arrFaction[index].FactionName;
                Laya.LocalStorage.setJSON("fcID",index+1);
                this.loadToGameButton.disabled=false;
            }
        }
    }
}