   export default class gameUiCon extends Laya.Scene {
        
    constructor() { 
        super(); 
        this.loadScene("gameMain/gameMain");
        //全局变量
        this.playerFactionID;
        this.cityNum;
        this.cityNum2;
        this.perNum;
        this.personNum=[];
        this.arrCity=[];
        this.arrFaction=[];
        this.arrPerson=[];
        this.nowDate=[];
        this. other=[] ;
    }
    onOpened(newOrLoad){
        //新游戏读数据    
        if(newOrLoad!=0){
            Laya.loader.load("midCity.json",Laya.Handler.create(this,this.onCityStart),null,Laya.loader.JSON);
            Laya.loader.load("midFaction.json",Laya.Handler.create(this,this.onFactionStart),null,Laya.loader.JSON);
            Laya.loader.load("midPerson.json",Laya.Handler.create(this,this.onPersonStart),null,Laya.loader.JSON);
            this.nowDate=[184,1];
            this.playerFactionID=newOrLoad;
        }
        //读取游戏数据
        else if(newOrLoad==0){
            this.arrCity=Laya.LocalStorage.getJSON("midcity");
            this.arrPerson=Laya.LocalStorage.getJSON("midperson");
            this.arrFaction=Laya.LocalStorage.getJSON("midfaction");
            this.nowDate=Laya.LocalStorage.getJSON("time");
            this.playerFactionID=Laya.LocalStorage.getJSON("fID");
        }
    }

    onCityStart(){
        var json=Laya.loader.getRes("midCity.json");
        this.arrCity=json["midCity"]; //arry[35]从json读取进来。
        
        
    }

    onFactionStart(){
        var json=Laya.loader.getRes("midFaction.json");
        this.arrFaction=json["midFaction"]; //arry[35]从json读取进来。    
    }

    onPersonStart(){
        var json=Laya.loader.getRes("midPerson.json");
        this.arrPerson=json["midPerson"]; //arry[35]从json读取进来。    
    }

    onEnable() {
        this.military.on(Laya.Event.CLICK,this,this.militaryCon);
        this.interior.on(Laya.Event.CLICK,this,this.interiorCon);
        this.tricks.on(Laya.Event.CLICK,this,this.tricksCon);
        this.personnel.on(Laya.Event.CLICK,this,this.personnelCon);
        this.information.on(Laya.Event.CLICK,this,this.infListCon);
        this.next1.on(Laya.Event.CLICK,this,this.nextRound);
       
         //arry[35]从json读取进来。
       
        //监听返回值

        //输出arr[返回值]


        this.beiHai.on(Laya.Event.CLICK,this,this.setBeiHai);//北海
        this.langYa.on(Laya.Event.CLICK,this,this.setLangya);//琅琊
        this.huangLing.on(Laya.Event.CLICK,this,this.setHuangLing);//黄陵
        this.wu.on(Laya.Event.CLICK,this,this.setWu);//吴
        this.kuaiJi.on(Laya.Event.CLICK,this,this.setKuaiJi);//会稽
        this.nanPi.on(Laya.Event.CLICK,this,this.setNanPi);//南皮
        this.pingYuang.on(Laya.Event.CLICK,this,this.setPingYuang);//平原
        this.jiBei.on(Laya.Event.CLICK,this,this.setJiBei);//济北
        this.xiaoPei.on(Laya.Event.CLICK,this,this.setXiaoPei);//小沛
        this.xiaPi.on(Laya.Event.CLICK,this,this.setXiaPi);//下邳
        this.jianYe.on(Laya.Event.CLICK,this,this.setJianYe);//建业
        this.zhongShan.on(Laya.Event.CLICK,this,this.setZhongShan);//中山
        this.ganLing.on(Laya.Event.CLICK,this,this.setGanLing);//甘陵
        this.shouChun.on(Laya.Event.CLICK,this,this.setShouChun);//寿春
        this.luJiang.on(Laya.Event.CLICK,this,this.setLuJiang);//庐江
        this.juLu.on(Laya.Event.CLICK,this,this.setJuLu);//锯鹿
        this.ye.on(Laya.Event.CLICK,this,this.setYe);//邺
        this.puYang.on(Laya.Event.CLICK,this,this.setPuYang);//濮阳
        this.jiao.on(Laya.Event.CLICK,this,this.setJiao);//焦
        this.chenLiu.on(Laya.Event.CLICK,this,this.setChenLiu);//陈留
        this.jinYan.on(Laya.Event.CLICK,this,this.setJinYan);//晋阳
        this.shangTan.on(Laya.Event.CLICK,this,this.setShangTan);//上棠
        this.heNei.on(Laya.Event.CLICK,this,this.setHeNei);//河内
        this.xuChan.on(Laya.Event.CLICK,this,this.setXuChan);//许昌
        this.ruNan.on(Laya.Event.CLICK,this,this.setRuNan);//汝南
        this.jiangXia.on(Laya.Event.CLICK,this,this.setJiangXia);//江夏
        this.luoYan.on(Laya.Event.CLICK,this,this.setLuoYan);//洛阳
        this.wan.on(Laya.Event.CLICK,this,this.setWan);//宛
        this.xinYe.on(Laya.Event.CLICK,this,this.setXinYe);//新野
        this.hongNong.on(Laya.Event.CLICK,this,this.setHongNong);//弘农
        this.xianYan.on(Laya.Event.CLICK,this,this.setXianYan);//襄阳
        this.jiangLing.on(Laya.Event.CLICK,this,this.setJiangLing);//江陵
        this.changAn.on(Laya.Event.CLICK,this,this.setChangAn);//长安
        this.shangYong.on(Laya.Event.CLICK,this,this.setShangYong);//上庸
        this.yongAn.on(Laya.Event.CLICK,this,this.setYongAn);//永安
        this.city.on(Laya.Event.CLICK,this,this.menuCon);
        this.map.on(Laya.Event.CLICK,this,this.closeMenu);
        
        
    }
  
       
    
    //军事游戏菜单控制
    militaryCon() {
        if(
            this.militaryMenu.visible==false){
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
        if(
            this.interiorMenu.visible==false){
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
       if(
            this.tricksMenu.visible==false){
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
       if(
            this.personnelMenu.visible==false){
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
            this.perList.visible=false;
            this.topData.visible=false;
            this.otherCityList.visible=false;
       }
       else{
            this.infList.visible=false;
            this.downData.visible=true;
       }
       let allCity=[]
       for(let i=0;i<35;i++){
            let data=null;
            data={
                allCityFaction:{text:this.arrFaction[this.arrCity[i].cityBelongFactionID-1].FactionName},
                allCityName:{text:this.arrCity[i].cityName},
                allCityMoney:{text:"金钱:"+this.arrCity[i].cityMoney},
                allCityBus:{text:"商业:"+this.arrCity[i].cityBussiness},
                allCityFood:{text:"粮草:"+this.arrCity[i].cityFood},
                allCityFarm:{text:"农业:"+this.arrCity[i].cityFarm},
                allCitySol:{text:"兵力:"+this.arrCity[i].citySoldier},
                allCityDef:{text:"城防:"+this.arrCity[i].cityDefense},
                allCityLoy:{text:"民忠:"+this.arrCity[i].cityLoyal}
            }
            allCity.push(data);
       }
        this.infList.dataSource=allCity;
   }
   //写入城池北海信息
   setBeiHai(){
            this.cityNum=0;
            this.cityName.text=this.arrCity[0].cityName;
            this.moneyData.text=this.arrCity[0].cityMoney;
            this.bunessData.text=this.arrCity[0].cityBussiness;
            this.hayData.text=this.arrCity[0].cityFood;
            this.farmData.text=this.arrCity[0].cityFarm;
            this.soldiersData.text=this.arrCity[0].citySoldier;
            this.cityDefData.text=this.arrCity[0].cityDefense;
            this.lovalData.text=this.arrCity[0].cityLoyal;
            this.facName.text=this.arrFaction[this.arrCity[0].cityBelongFactionID-1].FactionName;
            this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
            this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
            this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
            this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
            this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
            this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
            this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
            this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
            this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
            this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
            this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
            this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
            this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
            this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
            this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
            this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
            this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    //写入琅琊信息
    setLangya(){
        this.cityNum=1;
        this.cityName.text=this.arrCity[1].cityName;
        this.moneyData.text=this.arrCity[1].cityMoney;
        this.bunessData.text=this.arrCity[1].cityBussiness;
        this.hayData.text=this.arrCity[1].cityFood;
        this.farmData.text=this.arrCity[1].cityFarm;
        this.soldiersData.text=this.arrCity[1].citySoldier;
        this.cityDefData.text=this.arrCity[1].cityDefense;
        this.lovalData.text=this.arrCity[1].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[1].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    //写入黄陵信息
    setHuangLing(){
        this.cityNum=2;
        this.cityName.text=this.arrCity[2].cityName;
        this.moneyData.text=this.arrCity[2].cityMoney;
        this.bunessData.text=this.arrCity[2].cityBussiness;
        this.hayData.text=this.arrCity[2].cityFood;
        this.farmData.text=this.arrCity[2].cityFarm;
        this.soldiersData.text=this.arrCity[2].citySoldier;
        this.cityDefData.text=this.arrCity[2].cityDefense;
        this.lovalData.text=this.arrCity[2].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[2].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setWu(){
        this.cityNum=3;
        this.cityName.text=this.arrCity[3].cityName;
        this.moneyData.text=this.arrCity[3].cityMoney;
        this.bunessData.text=this.arrCity[3].cityBussiness;
        this.hayData.text=this.arrCity[3].cityFood;
        this.farmData.text=this.arrCity[3].cityFarm;
        this.soldiersData.text=this.arrCity[3].citySoldier;
        this.cityDefData.text=this.arrCity[3].cityDefense;
        this.lovalData.text=this.arrCity[3].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[3].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setKuaiJi(){
        this.cityNum=4;
        this.cityName.text=this.arrCity[4].cityName;
        this.moneyData.text=this.arrCity[4].cityMoney;
        this.bunessData.text=this.arrCity[4].cityBussiness;
        this.hayData.text=this.arrCity[4].cityFood;
        this.farmData.text=this.arrCity[4].cityFarm;
        this.soldiersData.text=this.arrCity[4].citySoldier;
        this.cityDefData.text=this.arrCity[4].cityDefense;
        this.lovalData.text=this.arrCity[4].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[4].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setNanPi(){
        this.cityNum=5;
        this.cityName.text=this.arrCity[5].cityName;
        this.moneyData.text=this.arrCity[5].cityMoney;
        this.bunessData.text=this.arrCity[5].cityBussiness;
        this.hayData.text=this.arrCity[5].cityFood;
        this.farmData.text=this.arrCity[5].cityFarm;
        this.soldiersData.text=this.arrCity[5].citySoldier;
        this.cityDefData.text=this.arrCity[5].cityDefense;
        this.lovalData.text=this.arrCity[5].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[5].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setPingYuang(){
        this.cityNum=6;
        this.cityName.text=this.arrCity[6].cityName;
        this.moneyData.text=this.arrCity[6].cityMoney;
        this.bunessData.text=this.arrCity[6].cityBussiness;
        this.hayData.text=this.arrCity[6].cityFood;
        this.farmData.text=this.arrCity[6].cityFarm;
        this.soldiersData.text=this.arrCity[6].citySoldier;
        this.cityDefData.text=this.arrCity[6].cityDefense;
        this.lovalData.text=this.arrCity[6].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[6].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJiBei(){
        this.cityNum=7;
        this.cityName.text=this.arrCity[7].cityName;
        this.moneyData.text=this.arrCity[7].cityMoney;
        this.bunessData.text=this.arrCity[7].cityBussiness;
        this.hayData.text=this.arrCity[7].cityFood;
        this.farmData.text=this.arrCity[7].cityFarm;
        this.soldiersData.text=this.arrCity[7].citySoldier;
        this.cityDefData.text=this.arrCity[7].cityDefense;
        this.lovalData.text=this.arrCity[7].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[7].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setXiaoPei(){
        this.cityNum=8;
        this.cityName.text=this.arrCity[8].cityName;
        this.moneyData.text=this.arrCity[8].cityMoney;
        this.bunessData.text=this.arrCity[8].cityBussiness;
        this.hayData.text=this.arrCity[8].cityFood;
        this.farmData.text=this.arrCity[8].cityFarm;
        this.soldiersData.text=this.arrCity[8].citySoldier;
        this.cityDefData.text=this.arrCity[8].cityDefense;
        this.lovalData.text=this.arrCity[8].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[8].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setXiaPi(){
        this.cityNum=9;
        this.cityName.text=this.arrCity[9].cityName;
        this.moneyData.text=this.arrCity[9].cityMoney;
        this.bunessData.text=this.arrCity[9].cityBussiness;
        this.hayData.text=this.arrCity[9].cityFood;
        this.farmData.text=this.arrCity[9].cityFarm;
        this.soldiersData.text=this.arrCity[9].citySoldier;
        this.cityDefData.text=this.arrCity[9].cityDefense;
        this.lovalData.text=this.arrCity[9].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[9].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJianYe(){
       
        this.cityNum=10;
        this.cityName.text=this.arrCity[10].cityName;
        this.moneyData.text=this.arrCity[10].cityMoney;
        this.bunessData.text=this.arrCity[10].cityBussiness;
        this.hayData.text=this.arrCity[10].cityFood;
        this.farmData.text=this.arrCity[10].cityFarm;
        this.soldiersData.text=this.arrCity[10].citySoldier;
        this.cityDefData.text=this.arrCity[10].cityDefense;
        this.lovalData.text=this.arrCity[10].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[10].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setZhongShan(){
        
        this.cityNum=11;
        this.cityName.text=this.arrCity[11].cityName;
        this.moneyData.text=this.arrCity[11].cityMoney;
        this.bunessData.text=this.arrCity[11].cityBussiness;
        this.hayData.text=this.arrCity[11].cityFood;
        this.farmData.text=this.arrCity[11].cityFarm;
        this.soldiersData.text=this.arrCity[11].citySoldier;
        this.cityDefData.text=this.arrCity[11].cityDefense;
        this.lovalData.text=this.arrCity[11].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[11].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setGanLing(){
       
        this.cityNum=12;
        this.cityName.text=this.arrCity[12].cityName;
        this.moneyData.text=this.arrCity[12].cityMoney;
        this.bunessData.text=this.arrCity[12].cityBussiness;
        this.hayData.text=this.arrCity[12].cityFood;
        this.farmData.text=this.arrCity[12].cityFarm;
        this.soldiersData.text=this.arrCity[12].citySoldier;
        this.cityDefData.text=this.arrCity[12].cityDefense;
        this.lovalData.text=this.arrCity[12].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[12].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setShouChun(){
        
        this.cityNum=13;
        this.cityName.text=this.arrCity[13].cityName;
        this.moneyData.text=this.arrCity[13].cityMoney;
        this.bunessData.text=this.arrCity[13].cityBussiness;
        this.hayData.text=this.arrCity[13].cityFood;
        this.farmData.text=this.arrCity[13].cityFarm;
        this.soldiersData.text=this.arrCity[13].citySoldier;
        this.cityDefData.text=this.arrCity[13].cityDefense;
        this.lovalData.text=this.arrCity[13].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[13].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setLuJiang(){
       
        this.cityNum=14;
        this.cityName.text=this.arrCity[14].cityName;
        this.moneyData.text=this.arrCity[14].cityMoney;
        this.bunessData.text=this.arrCity[14].cityBussiness;
        this.hayData.text=this.arrCity[14].cityFood;
        this.farmData.text=this.arrCity[14].cityFarm;
        this.soldiersData.text=this.arrCity[14].citySoldier;
        this.cityDefData.text=this.arrCity[14].cityDefense;
        this.lovalData.text=this.arrCity[14].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[14].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJuLu(){
       
        this.cityNum=15;
        this.cityName.text=this.arrCity[15].cityName;
        this.moneyData.text=this.arrCity[15].cityMoney;
        this.bunessData.text=this.arrCity[15].cityBussiness;
        this.hayData.text=this.arrCity[15].cityFood;
        this.farmData.text=this.arrCity[15].cityFarm;
        this.soldiersData.text=this.arrCity[15].citySoldier;
        this.cityDefData.text=this.arrCity[15].cityDefense;
        this.lovalData.text=this.arrCity[15].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[15].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setYe(){
        
        this.cityNum=16;
        this.cityName.text=this.arrCity[16].cityName;
        this.moneyData.text=this.arrCity[16].cityMoney;
        this.bunessData.text=this.arrCity[16].cityBussiness;
        this.hayData.text=this.arrCity[16].cityFood;
        this.farmData.text=this.arrCity[16].cityFarm;
        this.soldiersData.text=this.arrCity[16].citySoldier;
        this.cityDefData.text=this.arrCity[16].cityDefense;
        this.lovalData.text=this.arrCity[16].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[16].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setPuYang(){
       
        this.cityNum=17;
        this.cityName.text=this.arrCity[17].cityName;
        this.moneyData.text=this.arrCity[17].cityMoney;
        this.bunessData.text=this.arrCity[17].cityBussiness;
        this.hayData.text=this.arrCity[17].cityFood;
        this.farmData.text=this.arrCity[17].cityFarm;
        this.soldiersData.text=this.arrCity[17].citySoldier;
        this.cityDefData.text=this.arrCity[17].cityDefense;
        this.lovalData.text=this.arrCity[17].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[17].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJiao(){
        
        this.cityNum=18;
        this.cityName.text=this.arrCity[18].cityName;
        this.moneyData.text=this.arrCity[18].cityMoney;
        this.bunessData.text=this.arrCity[18].cityBussiness;
        this.hayData.text=this.arrCity[18].cityFood;
        this.farmData.text=this.arrCity[18].cityFarm;
        this.soldiersData.text=this.arrCity[18].citySoldier;
        this.cityDefData.text=this.arrCity[18].cityDefense;
        this.lovalData.text=this.arrCity[18].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[18].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setChenLiu(){
       
        this.cityNum=19;
        this.cityName.text=this.arrCity[19].cityName;
        this.moneyData.text=this.arrCity[19].cityMoney;
        this.bunessData.text=this.arrCity[19].cityBussiness;
        this.hayData.text=this.arrCity[19].cityFood;
        this.farmData.text=this.arrCity[19].cityFarm;
        this.soldiersData.text=this.arrCity[19].citySoldier;
        this.cityDefData.text=this.arrCity[19].cityDefense;
        this.lovalData.text=this.arrCity[19].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[19].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJinYan(){
       
        this.cityNum=20;
        this.cityName.text=this.arrCity[20].cityName;
        this.moneyData.text=this.arrCity[20].cityMoney;
        this.bunessData.text=this.arrCity[20].cityBussiness;
        this.hayData.text=this.arrCity[20].cityFood;
        this.farmData.text=this.arrCity[20].cityFarm;
        this.soldiersData.text=this.arrCity[20].citySoldier;
        this.cityDefData.text=this.arrCity[20].cityDefense;
        this.lovalData.text=this.arrCity[20].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[20].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setShangTan(){
      
        this.cityNum=21;
        this.cityName.text=this.arrCity[21].cityName;
        this.moneyData.text=this.arrCity[21].cityMoney;
        this.bunessData.text=this.arrCity[21].cityBussiness;
        this.hayData.text=this.arrCity[21].cityFood;
        this.farmData.text=this.arrCity[21].cityFarm;
        this.soldiersData.text=this.arrCity[21].citySoldier;
        this.cityDefData.text=this.arrCity[21].cityDefense;
        this.lovalData.text=this.arrCity[21].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[21].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setHeNei(){
        
        this.cityNum=22;
        this.cityName.text=this.arrCity[22].cityName;
        this.moneyData.text=this.arrCity[22].cityMoney;
        this.bunessData.text=this.arrCity[22].cityBussiness;
        this.hayData.text=this.arrCity[22].cityFood;
        this.farmData.text=this.arrCity[22].cityFarm;
        this.soldiersData.text=this.arrCity[22].citySoldier;
        this.cityDefData.text=this.arrCity[22].cityDefense;
        this.lovalData.text=this.arrCity[22].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[22].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setXuChan(){
       
        this.cityNum=23;
        this.cityName.text=this.arrCity[23].cityName;
        this.moneyData.text=this.arrCity[23].cityMoney;
        this.bunessData.text=this.arrCity[23].cityBussiness;
        this.hayData.text=this.arrCity[23].cityFood;
        this.farmData.text=this.arrCity[23].cityFarm;
        this.soldiersData.text=this.arrCity[23].citySoldier;
        this.cityDefData.text=this.arrCity[23].cityDefense;
        this.lovalData.text=this.arrCity[23].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[23].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setRuNan(){
       
        this.cityNum=24;
        this.cityName.text=this.arrCity[24].cityName;
        this.moneyData.text=this.arrCity[24].cityMoney;
        this.bunessData.text=this.arrCity[24].cityBussiness;
        this.hayData.text=this.arrCity[24].cityFood;
        this.farmData.text=this.arrCity[24].cityFarm;
        this.soldiersData.text=this.arrCity[24].citySoldier;
        this.cityDefData.text=this.arrCity[24].cityDefense;
        this.lovalData.text=this.arrCity[24].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[24].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJiangXia(){
       
        this.cityNum=25;
        this.cityName.text=this.arrCity[25].cityName;
        this.moneyData.text=this.arrCity[25].cityMoney;
        this.bunessData.text=this.arrCity[25].cityBussiness;
        this.hayData.text=this.arrCity[25].cityFood;
        this.farmData.text=this.arrCity[25].cityFarm;
        this.soldiersData.text=this.arrCity[25].citySoldier;
        this.cityDefData.text=this.arrCity[25].cityDefense;
        this.lovalData.text=this.arrCity[25].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[25].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setLuoYan(){
       
        this.cityNum=26;
        this.cityName.text=this.arrCity[26].cityName;
        this.moneyData.text=this.arrCity[26].cityMoney;
        this.bunessData.text=this.arrCity[26].cityBussiness;
        this.hayData.text=this.arrCity[26].cityFood;
        this.farmData.text=this.arrCity[26].cityFarm;
        this.soldiersData.text=this.arrCity[26].citySoldier;
        this.cityDefData.text=this.arrCity[26].cityDefense;
        this.lovalData.text=this.arrCity[26].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[26].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setWan(){
       
        this.cityNum=27;
        this.cityName.text=this.arrCity[27].cityName;
        this.moneyData.text=this.arrCity[27].cityMoney;
        this.bunessData.text=this.arrCity[27].cityBussiness;
        this.hayData.text=this.arrCity[27].cityFood;
        this.farmData.text=this.arrCity[27].cityFarm;
        this.soldiersData.text=this.arrCity[27].citySoldier;
        this.cityDefData.text=this.arrCity[27].cityDefense;
        this.lovalData.text=this.arrCity[27].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[27].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setXinYe(){
       
        this.cityNum=28;
        this.cityName.text=this.arrCity[28].cityName;
        this.moneyData.text=this.arrCity[28].cityMoney;
        this.bunessData.text=this.arrCity[28].cityBussiness;
        this.hayData.text=this.arrCity[28].cityFood;
        this.farmData.text=this.arrCity[28].cityFarm;
        this.soldiersData.text=this.arrCity[28].citySoldier;
        this.cityDefData.text=this.arrCity[28].cityDefense;
        this.lovalData.text=this.arrCity[28].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[28].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setHongNong(){
       
        this.cityNum=29;
        this.cityName.text=this.arrCity[29].cityName;
        this.moneyData.text=this.arrCity[29].cityMoney;
        this.bunessData.text=this.arrCity[29].cityBussiness;
        this.hayData.text=this.arrCity[29].cityFood;
        this.farmData.text=this.arrCity[29].cityFarm;
        this.soldiersData.text=this.arrCity[29].citySoldier;
        this.cityDefData.text=this.arrCity[29].cityDefense;
        this.lovalData.text=this.arrCity[29].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[29].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setXianYan(){
       
        this.cityNum=30;
        this.cityName.text=this.arrCity[30].cityName;
        this.moneyData.text=this.arrCity[30].cityMoney;
        this.bunessData.text=this.arrCity[30].cityBussiness;
        this.hayData.text=this.arrCity[30].cityFood;
        this.farmData.text=this.arrCity[30].cityFarm;
        this.soldiersData.text=this.arrCity[30].citySoldier;
        this.cityDefData.text=this.arrCity[30].cityDefense;
        this.lovalData.text=this.arrCity[30].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[30].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setJiangLing(){
       
        this.cityNum=31;
        this.cityName.text=this.arrCity[31].cityName;
        this.moneyData.text=this.arrCity[31].cityMoney;
        this.bunessData.text=this.arrCity[31].cityBussiness;
        this.hayData.text=this.arrCity[31].cityFood;
        this.farmData.text=this.arrCity[31].cityFarm;
        this.soldiersData.text=this.arrCity[31].citySoldier;
        this.cityDefData.text=this.arrCity[31].cityDefense;
        this.lovalData.text=this.arrCity[31].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[31].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setChangAn(){
       
        this.cityNum=32;
        this.cityName.text=this.arrCity[32].cityName;
        this.moneyData.text=this.arrCity[32].cityMoney;
        this.bunessData.text=this.arrCity[32].cityBussiness;
        this.hayData.text=this.arrCity[32].cityFood;
        this.farmData.text=this.arrCity[32].cityFarm;
        this.soldiersData.text=this.arrCity[32].citySoldier;
        this.cityDefData.text=this.arrCity[32].cityDefense;
        this.lovalData.text=this.arrCity[32].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[32].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setShangYong(){
       
        this.cityNum=33;
        this.cityName.text=this.arrCity[33].cityName;
        this.moneyData.text=this.arrCity[33].cityMoney;
        this.bunessData.text=this.arrCity[33].cityBussiness;
        this.hayData.text=this.arrCity[33].cityFood;
        this.farmData.text=this.arrCity[33].cityFarm;
        this.soldiersData.text=this.arrCity[33].citySoldier;
        this.cityDefData.text=this.arrCity[33].cityDefense;
        this.lovalData.text=this.arrCity[33].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[33].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    setYongAn(){
       
        this.cityNum=34;
        this.cityName.text=this.arrCity[34].cityName;
        this.moneyData.text=this.arrCity[34].cityMoney;
        this.bunessData.text=this.arrCity[34].cityBussiness;
        this.hayData.text=this.arrCity[34].cityFood;
        this.farmData.text=this.arrCity[34].cityFarm;
        this.soldiersData.text=this.arrCity[34].citySoldier;
        this.cityDefData.text=this.arrCity[34].cityDefense;
        this.lovalData.text=this.arrCity[34].cityLoyal;
        this.facName.text=this.arrFaction[this.arrCity[34].cityBelongFactionID-1].FactionName;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farPersonOpen);
        this.busnessDeve.on(Laya.Event.CLICK,this,this.busPersonOpen);
        this.hayBusiness.on(Laya.Event.CLICK,this,this.hayPersonOpen);
        this.impLoval.on(Laya.Event.CLICK,this,this.lovPersonOpen);
        this.defenceAdd.on(Laya.Event.CLICK,this,this.defPersonOpen);
        this.praise.on(Laya.Event.CLICK,this,this.praPersonOpen);
        this.agent.on(Laya.Event.CLICK,this,this.agePersonOpen);
        this.war.on(Laya.Event.CLICK,this,this.warPersonOpen);
        this.move.on(Laya.Event.CLICK,this,this.movePersonOpen);
        this.bewitchPeo.on(Laya.Event.CLICK,this,this.loDecPersonOpen);
        this.reduceDefen.on(Laya.Event.CLICK,this,this.defDecPersonOpen);
        this.reduceBus.on(Laya.Event.CLICK,this,this.busDecPersonOpen);
        this.reduceFarm.on(Laya.Event.CLICK,this,this.farDecPersonOpen);
        this.exile.on(Laya.Event.CLICK,this,this.banishPersonOpen);
        this.theDraft.on(Laya.Event.CLICK,this,this.soAddPersonOpen);
        this.alienation.on(Laya.Event.CLICK,this,this.pLoDecPersonOpen);
        this.delivery.on(Laya.Event.CLICK,this,this.sendPerOpen);
    }
    //第一次点击城市隐藏以打开的下方菜单，打开顶部信息
    menuCon(){
        
            this.personnelMenu.visible=false;
            this.tricksMenu.visible=false;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
            this.topData.visible=true;
            this.perList.visible=false;
            this.otherCityList.visible=false;
            this.downData.visible=true;
            this.send.visible=false;
    }
    closeMenu(){
            this.personnelMenu.visible=false;
            this.tricksMenu.visible=false;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
            this.topData.visible=false;
            this.perList.visible=false; 
            this.otherCityList.visible=false; 
            this.downData.visible=true;  
            this.send.visible=false;
    }
    farPersonOpen(){
        this.interiorMenu.visible=false;
        this.downData.visible=false;
        this.perList.visible=true;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        //索引找到选择武将
        //引用farmAdd()
        this.perList.mouseHandler=new Laya.Handler(this,this.farmAdd);   
    }
         //农田开发
farmAdd(e,index){
    
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++; 
                    }   
                }
                let perData=citPerson[index];
                let data = Number(this.arrCity[this.cityNum].cityFarm);
                let money=Number(this.arrCity[this.cityNum].cityMoney);
                data+=Number(perData.personPolitics);
                money=this.arrCity[this.cityNum].cityMoney-Number(perData.personCommand*perData.personMilitary);
                perData.personState=0;   
                this.farmData.text=data;
                this.arrCity[this.cityNum].cityFarm=data;
                this.moneyData.text=money;
                this.arrCity[this.cityNum].cityMoney=money;     
                this.perList.visible=false;
                this.downData.visible=true;
            }
        }    
}

busPersonOpen(){
    this.interiorMenu.visible=false;
    this.downData.visible=false;
    this.perList.visible=true;
    let perCount=0;
    let citPerson=[];
    let personData=[];
    for(let j=0;j<220;j++){
        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
            citPerson[perCount]=this.arrPerson[j];
            perCount++;
        }   
    }
    for(let i=0;i<perCount;i++){
        let data=null;
        data={
            personName:{text:citPerson[i].personName},
            personCommand:{text:"统帅:"+citPerson[i].personCommand},
            personMilitary:{text:"武力:"+citPerson[i].personMilitary},
            personPolitics:{text:"政治:"+citPerson[i].personPolitics},
            personTrick:{text:"计策:"+citPerson[i].personTrick},
            personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
        }
        personData.push(data);
    }
            
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.bussinessAdd);
}
    
//商业开发
bussinessAdd(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let citPerson=[];
            let perCount=0;
            for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                            
                }   
            }
            let perData=citPerson[index];
            let data = Number(this.arrCity[this.cityNum].cityBussiness);
            let money=Number(this.arrCity[this.cityNum].cityMoney);
            data+=Number(perData.personPolitics)+Number(perData.personTrick);  //商业改变
            money=this.arrCity[this.cityNum].cityMoney-Number(perData.personPolitics*perData.personTrick);  //金钱改变
            perData.personState=0;   //状态改变
            this.bunessData.text=data;
            this.arrCity[this.cityNum].cityBussiness=data;
            this.moneyData.text=money;
            this.arrCity[this.cityNum].cityMoney=money;
            this.perList.visible=false;
            this.downData.visible=true;
        }
    }
}
    
hayPersonOpen(){
    this.interiorMenu.visible=false;
    this.perList.visible=true;
    this.downData.visible=false;
    let perCount=0;
    let citPerson=[];
    let personData=[];
    for(let j=0;j<220;j++){
        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
            citPerson[perCount]=this.arrPerson[j];
                perCount++;
            }   
    }
    for(let i=0;i<perCount;i++){
        let data=null;
        data={
            personName:{text:citPerson[i].personName},
            personCommand:{text:"统帅:"+citPerson[i].personCommand},
            personMilitary:{text:"武力:"+citPerson[i].personMilitary},
            personPolitics:{text:"政治:"+citPerson[i].personPolitics},
            personTrick:{text:"计策:"+citPerson[i].personTrick},
            personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
        }
            personData.push(data);
    }
            
            this.perList.dataSource=personData;
            this.perList.mouseHandler=new Laya.Handler(this,this.foodChange);
}
//粮草买卖
foodChange(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let citPerson=[];
            let perCount=0;
            for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                            
                }   
            }
            let perData=citPerson[index];
            let data = Number(this.arrCity[this.cityNum].cityFood);
            data+=Number(this.arrCity[this.cityNum].cityFarm);
            perData.personState=0;
            this.hayData.text=data;
            this.arrCity[this.cityNum].cityFood=data;
            this.perList.visible=false;
            this.downData.visible=true;
        }
    }      
}
     
lovPersonOpen(){
    this.interiorMenu.visible=false;
    this.perList.visible=true;
    this.downData.visible=false;
    let perCount=0;
    let citPerson=[];
    let personData=[];
    for(let j=0;j<220;j++){
        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
            citPerson[perCount]=this.arrPerson[j];
            perCount++;
        }   
    }
    for(let i=0;i<perCount;i++){
        let data=null;
        data={
            personName:{text:citPerson[i].personName},
            personCommand:{text:"统帅:"+citPerson[i].personCommand},
            personMilitary:{text:"武力:"+citPerson[i].personMilitary},
            personPolitics:{text:"政治:"+citPerson[i].personPolitics},
            personTrick:{text:"计策:"+citPerson[i].personTrick},
            personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
        }
            personData.push(data);
    }
            
            this.perList.dataSource=personData;
            this.perList.mouseHandler=new Laya.Handler(this,this.lovalAdd);
}
//提高民忠
lovalAdd(e,index){

        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                                
                    }   
                }
                let perData=citPerson[index];
                let data = Number(this.arrCity[this.cityNum].cityFood);
                let money = Number(this.arrCity[this.cityNum].cityMoney);
                let lov=Number(this.arrCity[this.cityNum].cityLoyal);
                data=this.arrCity[this.cityNum].cityFood-Number(perData.personCommand+perData.personMilitary);  //粮草改变
                money=this.arrCity[this.cityNum].cityMoney-Number(perData.personPolitics*perData.personTrick);  //金钱改变
                lov+=Number(perData.personCommand)+Number(perData.personMilitary)+Number(perData.personPolitics)+Number(perData.personTrick);  //民忠改变
                perData.personState=0;
                this.hayData.text=data;
                this.arrCity[this.cityNum].cityFood=data;
                this.moneyData.text=money;
                this.arrCity[this.cityNum].cityMoney=money;
                this.lovalData.text=lov;
                this.arrCity[this.cityNum].cityLoyal=lov;
                this.perList.visible=false;
                this.downData.visible=true;
            }
        } 
    }
     
defPersonOpen(){
        this.interiorMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                citPerson[perCount]=this.arrPerson[j];
                perCount++;
            }   
    }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
                personData.push(data);
        }
            
            this.perList.dataSource=personData;
            this.perList.mouseHandler=new Laya.Handler(this,this.defenseAdd);
}
    
//提高城防
defenseAdd(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let citPerson=[];
            let perCount=0;
            for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                            
                }   
            }
            let perData=citPerson[index];
            let data = Number(this.arrCity[this.cityNum].cityDefense);
            let money=Number(this.arrCity[this.cityNum].cityMoney);
                data+=Number(perData.personCommand)+Number(perData.personTrick);//城防改变
                money=this.arrCity[this.cityNum].cityMoney-Number(perData.personCommand)*Number(perData.personTrick);//金钱改变
                perData.personState=0;
            this.moneyData.text=money;
            this.arrCity[this.cityNum].cityMoney=money;
            this.cityDefData.text=data;
            this.arrCity[this.cityNum].cityDefense=data;
            this.perList.visible=false;
            this.downData.visible=true;
            }
        }  
    }
praPersonOpen(){
    this.personnelMenu.visible=false;
    this.downData.visible=false;
    this.perList.visible=true;
    let perCount=0;
    let citPerson=[];
    let personData=[];
    for(let j=0;j<220;j++){
        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
            citPerson[perCount]=this.arrPerson[j];
                perCount++;
            }   
    }
    for(let i=0;i<perCount;i++){
        let data=null;
        data={
            personName:{text:citPerson[i].personName},
            personCommand:{text:"统帅:"+citPerson[i].personCommand},
            personMilitary:{text:"武力:"+citPerson[i].personMilitary},
            personPolitics:{text:"政治:"+citPerson[i].personPolitics},
            personTrick:{text:"计策:"+citPerson[i].personTrick},
            personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
            
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.praisel);  
    }
//褒奖
praisel(e,index){
    
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                                
                    }   
                }
                    let perData=citPerson[index];
                    let money = Number(this.arrCity[this.cityNum].cityMoney);
                money=this.arrCity[this.cityNum].cityMoney-10;//金钱改变
                perData.personLoyal++;
                perData.personState=0;
                this.moneyData.text=money;
                this.arrCity[this.cityNum].cityMoney=money;
                this.perList.visible=false;
                this.downData.visible=true;
            }
        }
        
    }
     
agePersonOpen(){
        this.personnelMenu.visible=false;
        this.downData.visible=false;
        this.perList.visible=true;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==-1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
            }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
                personData.push(data);
        }
                
                this.perList.dataSource=personData;
                this.perList.mouseHandler=new Laya.Handler(this,this.DengYong);
}
    
//登庸
DengYong(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                    for(let j=0;j<220;j++){
                        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==-1){
                            citPerson[perCount]=this.arrPerson[j];
                            perCount++;
                                
                        }   
                }
                    let perData=citPerson[index];
                    let money = Number(this.arrCity[this.cityNum].cityMoney);
                if(perData.personState==-1){
                money=this.arrCity[this.cityNum].cityMoney-20;//金钱改变
                perData.personState=0;
            }
            this.moneyData.text=money;
            this.arrCity[this.cityNum].cityMoney=money;
            this.perList.visible=false;
            this.downData.visible=true;
        }
    }
                
}
     
//移动
movePersonOpen(){
        this.personnelMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.moveOpen);
}
moveOpen(e,index){ 
    if(e.type==Laya.Event.CLICK){
    if((e.target)instanceof Laya.Button){
        let citPerson=[];
        let perCount=0;
        for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                citPerson[perCount]=this.arrPerson[j];
                perCount++;
            }   
        }
        let perData=citPerson[index];
        this.perNum=perData.personID;
        let arr;
        let Count=0;
        let otherCityData=[];
        let dataSource=[];
        let j;
        arr=this.arrCity[this.cityNum].cityBelongFactionID;   
        //写入数据
       for(j=0;j<35;j++){
           if(this.arrCity[j].cityBelongFactionID==arr){
            otherCityData[Count]=this.arrCity[j];
            Count++;
           }
         } 
        for(let i=0;i<Count;i++){
            let data=null; 
            data={
                allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                allCityName:{text:otherCityData[i].cityName},
                allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
            }
            dataSource.push(data);
        }      
        this.otherCityList.dataSource=dataSource;
        this.otherCityList.vScrollBarSkin="";
        this.otherCityList.visible=true;
        this.perList.visible=false;
        this.otherCityList.mouseHandler=new Laya.Handler(this,this.moveStar);
        }
    }
}
moveStar(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let Count=0;
            let otherCityData=[];
            let arr=this.arrCity[this.cityNum].cityBelongFactionID;
            for(let j=0;j<35;j++){
                if(this.arrCity[j].cityBelongFactionID==arr){
                 otherCityData[Count]=this.arrCity[j];
                 Count++;
                }
              }
            this.arrPerson[this.perNum-1].personCityID=otherCityData[index].cityID;
            this.downData.visible=true;
            this.otherCityList.visible=false;
        }
    } 
}
//流放
banishPersonOpen(){
    this.personnelMenu.visible=false;
    this.perList.visible=true;
    this.downData.visible=false;
    let perCount=0;
    let citPerson=[];
    let personData=[];
    for(let j=0;j<220;j++){
        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
            citPerson[perCount]=this.arrPerson[j];
                perCount++;
            }   
    }
    for(let i=0;i<perCount;i++){
        let data=null;
        data={
            personName:{text:citPerson[i].personName},
            personCommand:{text:"统帅:"+citPerson[i].personCommand},
            personMilitary:{text:"武力:"+citPerson[i].personMilitary},
            personPolitics:{text:"政治:"+citPerson[i].personPolitics},
            personTrick:{text:"计策:"+citPerson[i].personTrick},
            personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
            
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.banish);
}
banish(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let citPerson=[];
            let perCount=0;
            for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                citPerson[perCount]=this.arrPerson[j];
                perCount++;
                        
            }   
        }
            let money = Number(this.arrCity[this.cityNum].cityMoney);
            let perData=citPerson[index];
            perData.personState=0;
            money+=Number(perData.personCommand)+Number(perData.personPolitics);
            this.moneyData.text=money;
            this.arrCity[this.cityNum].cityMoney=money;
            this.banishPersonOpen();
            this.perList.visible=false;
            this.downData.visible=true;
            }
        }
        
}
    //出征
    warPersonOpen(){
        this.militaryMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.warOtherOpen);
     }
    warOtherOpen(e,index){
        if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            let citPerson=[];
            let perCount=0;
            for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                citPerson[perCount]=this.arrPerson[j];
                perCount++;
                }   
            } 
            var perData=citPerson[index];
            this.perNum=perData.personID;
            let arr=[];
            let Count=0;
            let otherCityData=[];
            let dataSource=[];
            let j;
            arr=this.arrCity[this.cityNum].cityConnCityID;
            //写入数据
        for(j=0;j<6;j++){
            if(arr[j]==null)
            break;
                otherCityData[Count]=this.arrCity[arr[j]-1];
            Count++;
            }
            for(let i=0;i<Count;i++){
                let data=null; 
                data={
                    allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                    allCityName:{text:otherCityData[i].cityName},
                    allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                    allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                    allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                    allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                    allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                    allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                    allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                }
                dataSource.push(data);
            }      
            this.otherCityList.dataSource=dataSource;
            this.otherCityList.vScrollBarSkin="";
            this.perList.visible=false;
            this.otherCityList.visible=true;
            this.otherCityList.mouseHandler=new Laya.Handler(this,this.warOpen);
            }
        }
}
warOpen(e,index){
    if(e.type==Laya.Event.CLICK){
        if((e.target)instanceof Laya.Button){
            this.arrPerson[this.perNum-1].personState=0;
            if((this.arrCity[this.cityNum].citySoldier>this.arrCity[this.arrCity[this.cityNum].cityConnCityID[index]-1].cityDefense)&&(this.arrCity[this.cityNum].cityBelongFactionID!=this.arrCity[this.arrCity[this.cityNum].cityConnCityID[index]-1].cityBelongFactionID))
            {
                console.log("V");
                this.otherCityList.visible=false;
            }
            else{
                console.log("D");
                this.otherCityList.visible=false;
            }
            this.downData.visible=true;
        }
    } 
 }
    //征兵
    soAddPersonOpen(){
        this.militaryMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
            if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
                }
                personData.push(data);
            }
                
            this.perList.dataSource=personData;
            this.perList.mouseHandler=new Laya.Handler(this,this.solAdd);
    }
    solAdd(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;  
                }   
            }
                let perData=citPerson[index];
                let money = Number(this.arrCity[this.cityNum].cityMoney);
                let sol=Number(this.arrCity[this.cityNum].citySoldier)
                money=this.arrCity[this.cityNum].cityMoney-Number(perData.personPolitics)-Number(perData.personCommand)-Number(perData.personMilitary);//金钱改变
                sol+=5*perData.personPolitics;
                perData.personState=0;
                this.moneyData.text=money;
                this.soldiersData.text=sol;
                this.arrCity[this.cityNum].cityMoney=money;
                this.arrCity[this.cityNum].citySoldier=sol;
                this.perList.visible=false;
                this.downData.visible=true;
                }
            }
            
    }
    //输送
    sendPerOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.sendCityOpen);
    }
    sendCityOpen(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){}
                this.perList.visible=false;
                let perCount=0;
                let citPerson=[];
                let personData=[];
                for(let j=0;j<220;j++){
                        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                            citPerson[perCount]=this.arrPerson[j];
                            perCount++;
                        }   
                }
                this.perNum=citPerson[index].personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
            for(j=0;j<35;j++){
                if(this.arrCity[j].cityBelongFactionID==arr){
                    otherCityData[Count]=this.arrCity[j];
                    Count++;
                }
                }
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.sendCity);
        }
            
    }
    sendCity(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                this.send.visible=true;
                this.otherCityList.visible=false;
                let arr;
                let Count=0;
                let otherCityData=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;
                for(j=0;j<35;j++){
                    if(this.arrCity[j].cityBelongFactionID==arr){
                     otherCityData[Count]=this.arrCity[j];
                     Count++;
                    }
                  }
                this.cityNum2=otherCityData[index].cityID;
                this.sendBtn.on(Laya.Event.CLICK,this,this.sendTo);
            }
        }
        
    }
    sendTo(){
            let data1= Number(this.arrCity[this.cityNum2-1].cityFood);
            let data2= Number(this.arrCity[this.cityNum].cityFood);
            let foodData=Number(this.sendFood.text);
            let data3= Number(this.arrCity[this.cityNum2-1].cityMoney);
            let data4= Number(this.arrCity[this.cityNum].cityMoney);
            let monData=Number(this.sendMon.text);
            let data5=Number(this.arrCity[this.cityNum2-1].citySoldier);
            let data6=Number(this.arrCity[this.cityNum].citySoldier);
            let soData=Number(this.sendSlo.text);
        if(foodData>data2||foodData<0)
            alert("请输入正确数据");
        else{
            data1+=foodData;
            data2-=foodData;
            this.arrCity[this.cityNum2-1].cityFood=data1;
            this.arrCity[this.cityNum].cityFood=data2;
            this.hayData.text=data2;
            
        }
        // this.sendSlo.text>this.arrCity[this.cityNum].citySoldier||this.sendSlo.text<0
        if(monData>data4||monData<0)
            alert("请输入正确数据");
        else{
            data3+=monData;
            data4-=monData;
            this.arrCity[this.cityNum2-1].cityMoney=data3;
            this.arrCity[this.cityNum].cityMoney=data4;
            this.moneyData.text= this.arrCity[this.cityNum].cityMoney;
        }
        if(soData>data6||soData<0)
            alert("请输入正确数据");
        else{
            data5+=soData;
            data6-=soData;
            this.arrCity[this.cityNum2-1].citySoldier=data5;
            this.arrCity[this.cityNum].citySoldier=data6;
            this.soldiersData.text= this.arrCity[this.cityNum].citySoldier;
        }
        this.send.visible=false;
        this.arrPerson[this.perNum-1].personState=0;
    }
    //离间武将
    pLoDecPersonOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.pLodecOpen1);
    }
    pLodecOpen1(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                this.perNum=perData.personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
               for(j=0;j<35;j++){
                   if(this.arrCity[j].cityBelongFactionID!=arr){
                    otherCityData[Count]=this.arrCity[j];
                    this.other[Count]=this.arrCity[j];
                    Count++;
                   }
                 }
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.perList.visible=false;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.pLodecOpen2);
                }
            }
    }
    pLodecOpen2(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                this.cityNum=this.other[index].cityID
                let perCount=0;
                let citPerson=[];
                let personData=[];
                for(let j=0;j<220;j++){
                        if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum-1].cityID&&this.arrPerson[j].personState==1){
                            citPerson[perCount]=this.arrPerson[j];
                            perCount++;
                        }   
                }
                for(let i=0;i<perCount;i++){
                    let data=null;
                    data={
                        personName:{text:citPerson[i].personName},
                        personCommand:{text:"统帅:"+citPerson[i].personCommand},
                        personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                        personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                        personTrick:{text:"计策:"+citPerson[i].personTrick},
                        personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
                    }
                    personData.push(data);
                }
                this.otherCityList.visible=false;
                this.perList.visible=true;
                this.perList.dataSource=personData;
                this.perList.mouseHandler=new Laya.Handler(this,this.pLodec);
            }
        }
    }
    pLodec(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum-1].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                //算法
                this.arrPerson[perData.personID-1].personLoyal-=1;
                this.arrPerson[this.perNum-1].personState=0;
                this.downData.visible=true;
                this.perList.visible=false;
            }
        }
    }
    //蛊惑民众
    loDecPersonOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.loDecOpen);
     }
    loDecOpen(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                this.perNum=perData.personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
               for(j=0;j<35;j++){
                   if(this.arrCity[j].cityBelongFactionID!=arr){
                    otherCityData[Count]=this.arrCity[j];
                    Count++;
                   }
                 }
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.perList.visible=false;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.lovalDec);
                }
            }
    }
    lovalDec(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let Count=0;
                let otherCityData=[];
                let arr=this.arrCity[this.cityNum].cityBelongFactionID;
                for(let j=0;j<35;j++){
                    if(this.arrCity[j].cityBelongFactionID!=arr){
                     otherCityData[Count]=this.arrCity[j];
                     Count++;
                    }
                  }
                  //算法
                this.arrCity[otherCityData[index].cityID-1].cityLoyal-=this.arrPerson[this.perNum-1].personTrick;
                this.arrPerson[this.perNum-1].personState=0;
                this.downData.visible=true;
                this.otherCityList.visible=false;
            }
        }
    }
    //减低城防
    defDecPersonOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.defDecOpen);
    }
    defDecOpen(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                this.perNum=perData.personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
               for(j=0;j<35;j++){
                   if(this.arrCity[j].cityBelongFactionID!=arr){
                    otherCityData[Count]=this.arrCity[j];
                    Count++;
                   }
                 }                 
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.perList.visible=false;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.defenseDec);
                }
            }
    }
    defenseDec(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let Count=0;
                let otherCityData=[];
                let arr=this.arrCity[this.cityNum].cityBelongFactionID;
                for(let j=0;j<35;j++){
                    if(this.arrCity[j].cityBelongFactionID!=arr){
                     otherCityData[Count]=this.arrCity[j];
                     Count++;
                    }
                  }
                  //算法
                this.arrCity[otherCityData[index].cityID-1].cityDefense-=this.arrPerson[this.perNum-1].personTrick;
                this.arrPerson[this.perNum-1].personState=0;
                this.downData.visible=true;
                this.otherCityList.visible=false;
            }
        }
    }
    //减低商业
    busDecPersonOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.busDecOpen);
    }
    busDecOpen(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                this.perNum=perData.personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
               for(j=0;j<35;j++){
                   if(this.arrCity[j].cityBelongFactionID!=arr){
                    otherCityData[Count]=this.arrCity[j];
                    Count++;
                   }
                 }                 
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.perList.visible=false;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.bussinessDec);
                }
            }
    }
    bussinessDec(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let Count=0;
                let otherCityData=[];
                let arr=this.arrCity[this.cityNum].cityBelongFactionID;
                for(let j=0;j<35;j++){
                    if(this.arrCity[j].cityBelongFactionID!=arr){
                     otherCityData[Count]=this.arrCity[j];
                     Count++;
                    }
                  }
                  //算法
                this.arrCity[otherCityData[index].cityID-1].cityBussiness=this.arrCity[otherCityData[index].cityID-1].cityBussiness-this.arrPerson[this.perNum-1].personTrick-this.arrPerson[this.perNum-1].personCommand;
                this.arrPerson[this.perNum-1].personState=0;
                this.downData.visible=true;
                this.otherCityList.visible=false;
            }
        }
    }
    //减低农业
    farDecPersonOpen(){
        this.tricksMenu.visible=false;
        this.perList.visible=true;
        this.downData.visible=false;
        let perCount=0;
        let citPerson=[];
        let personData=[];
        for(let j=0;j<220;j++){
                if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                    citPerson[perCount]=this.arrPerson[j];
                    perCount++;
                }   
        }
        for(let i=0;i<perCount;i++){
            let data=null;
            data={
                personName:{text:citPerson[i].personName},
                personCommand:{text:"统帅:"+citPerson[i].personCommand},
                personMilitary:{text:"武力:"+citPerson[i].personMilitary},
                personPolitics:{text:"政治:"+citPerson[i].personPolitics},
                personTrick:{text:"计策:"+citPerson[i].personTrick},
                personLoyal:{text:"忠诚:"+citPerson[i].personLoyal}
            }
            personData.push(data);
        }
        
        this.perList.dataSource=personData;
        this.perList.mouseHandler=new Laya.Handler(this,this.farDecOpen);
    }
    farDecOpen(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let citPerson=[];
                let perCount=0;
                for(let j=0;j<220;j++){
                    if(this.arrPerson[j].personCityID==this.arrCity[this.cityNum].cityID&&this.arrPerson[j].personState==1){
                        citPerson[perCount]=this.arrPerson[j];
                        perCount++;
                    }   
                }
                let perData=citPerson[index];
                this.perNum=perData.personID;
                let arr;
                let Count=0;
                let otherCityData=[];
                let dataSource=[];
                let j;
                arr=this.arrCity[this.cityNum].cityBelongFactionID;   
                //写入数据
               for(j=0;j<35;j++){
                   if(this.arrCity[j].cityBelongFactionID!=arr){
                    otherCityData[Count]=this.arrCity[j];
                    Count++;
                   }
                 }                 
                for(let i=0;i<Count;i++){
                    let data=null; 
                    data={
                        allCityFaction:{text:this.arrFaction[otherCityData[i].cityBelongFactionID-1].FactionName},
                        allCityName:{text:otherCityData[i].cityName},
                        allCityMoney:{text:"金钱:"+otherCityData[i].cityMoney},
                        allCityBus:{text:"商业:"+otherCityData[i].cityBussiness},
                        allCityFood:{text:"粮草:"+otherCityData[i].cityFood},
                        allCityFarm:{text:"农业:"+otherCityData[i].cityFarm},
                        allCitySol:{text:"兵力:"+otherCityData[i].citySoldier},
                        allCityDef:{text:"城防:"+otherCityData[i].cityDefense},
                        allCityLoy:{text:"民忠:"+otherCityData[i].cityLoyal}
                    }
                    dataSource.push(data);
                }      
                this.otherCityList.dataSource=dataSource;
                this.otherCityList.vScrollBarSkin="";
                this.otherCityList.visible=true;
                this.perList.visible=false;
                this.otherCityList.mouseHandler=new Laya.Handler(this,this.farmDec);
                }
            }
    }
    farmDec(e,index){
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                let Count=0;
                let otherCityData=[];
                let arr=this.arrCity[this.cityNum].cityBelongFactionID;
                for(let j=0;j<35;j++){
                    if(this.arrCity[j].cityBelongFactionID!=arr){
                     otherCityData[Count]=this.arrCity[j];
                     Count++;
                    }
                  }
                  //算法
                this.arrCity[otherCityData[index].cityID-1].cityFarm-=this.arrPerson[this.perNum-1].personCommand;
                this.arrPerson[this.perNum-1].personState=0;
                this.downData.visible=true;
                this.otherCityList.visible=false;
            }
        }
    }
    nextRound(){
        //时间信息变化
        this.nowDate[1]++;
        if(this.nowDate[1]==5){
            this.nowDate[1]=1;
            this.nowDate[0]++;
        }
        //城池信息变化
        let i=0;
        let t;
        while(i<35){
            t=Number(this.arrCity[i].cityFood);
            t+=Number(this.arrCity[i].cityFarm);
            this.arrCity[i].cityFood=t;
            //粮草+=农业
            t=Number( this.arrCity[i].cityMoney)
            t+=Number(this.arrCity[i].cityBussiness);
            this.arrCity[i].cityMoney=t;
           //金钱+=商业
            i++;
        }
        //武将状态变化
        i=0;
        while(i<220){
            if(this.arrPerson[i].personState==0) this.arrPerson[i].personState=1//状态为0的武将变为1
            i++;
        }
        //保存数据
        Laya.LocalStorage.setJSON("midcity",this.arrCity);
        Laya.LocalStorage.setJSON("midperson",this.arrPerson);
        Laya.LocalStorage.setJSON("midfaction",this.arrFaction);
        Laya.LocalStorage.setJSON("time",this.nowDate);
        Laya.LocalStorage.setJSON("fID",this.playerFactionID);
        //刷新数据
        this.topData.visible=false;
        
    }

}