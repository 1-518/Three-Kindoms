import Citys from "../GameIn/Citys";
import Persons from "../GameIn/Persons";
import Factions from "../GameIn/Factions";


    export default class gameUiCon extends Laya.Scene {
        
    constructor() { 
        super(); 
        this.loadScene("gameMain/gameMain");
        this.cityNum;
        this.personNum={};

        this.arrCity=[];
        Laya.loader.load("midCity.json",Laya.Handler.create(this,this.onCityStart),null,Laya.loader.JSON);
        this.arrFaction=[];
        Laya.loader.load("midFaction.json",Laya.Handler.create(this,this.onFactionStart),null,Laya.loader.JSON);
        this.arrPerson=[];
        Laya.loader.load("midPerson.json",Laya.Handler.create(this,this.onPersonStart),null,Laya.loader.JSON);
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

        //
        //var this.arrCity=json["RECORDS"]; //arry[35]从json读取进来。
       
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
       if(
            this.infList.visible==false){
            this.infList.visible=true;
            this.downData.visible=false;
       }
       else{
            this.infList.visible=false;
            this.downData.visible=true;
       }
        
   }
   //写入城池北海信息
   setBeiHai(){
           // var json=Laya.loader.getRes("midCity.json");//加载json中的数据
            //var this.arrCity=json["RECORDS"];
            this.cityName.text=this.arrCity[0].cityName;
            this.moneyData.text=this.arrCity[0].cityMoney;
            this.bunessData.text=this.arrCity[0].cityBussiness;
            this.hayData.text=this.arrCity[0].cityFood;
            this.farmData.text=this.arrCity[0].cityFarm;
            this.soldiersData.text=this.arrCity[0].citySoldier;
            this.cityDefData.text=this.arrCity[0].cityDefense;
            this.lovalData.text=this.arrCity[0].cityLoyal;
            this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    //写入琅琊信息
    setLangya(){
        //var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[1].cityName;
        this.moneyData.text=this.arrCity[1].cityMoney;
        this.bunessData.text=this.arrCity[1].cityBussiness;
        this.hayData.text=this.arrCity[1].cityFood;
        this.farmData.text=this.arrCity[1].cityFarm;
        this.soldiersData.text=this.arrCity[1].citySoldier;
        this.cityDefData.text=this.arrCity[1].cityDefense;
        this.lovalData.text=this.arrCity[1].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    //写入黄陵信息
    setHuangLing(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[2].cityName;
        this.moneyData.text=this.arrCity[2].cityMoney;
        this.bunessData.text=this.arrCity[2].cityBussiness;
        this.hayData.text=this.arrCity[2].cityFood;
        this.farmData.text=this.arrCity[2].cityFarm;
        this.soldiersData.text=this.arrCity[2].citySoldier;
        this.cityDefData.text=this.arrCity[2].cityDefense;
        this.lovalData.text=this.arrCity[2].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setWu(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[3].cityName;
        this.moneyData.text=this.arrCity[3].cityMoney;
        this.bunessData.text=this.arrCity[3].cityBussiness;
        this.hayData.text=this.arrCity[3].cityFood;
        this.farmData.text=this.arrCity[3].cityFarm;
        this.soldiersData.text=this.arrCity[3].citySoldier;
        this.cityDefData.text=this.arrCity[3].cityDefense;
        this.lovalData.text=this.arrCity[3].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setKuaiJi(){
       // var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[4].cityName;
        this.moneyData.text=this.arrCity[4].cityMoney;
        this.bunessData.text=this.arrCity[4].cityBussiness;
        this.hayData.text=this.arrCity[4].cityFood;
        this.farmData.text=this.arrCity[4].cityFarm;
        this.soldiersData.text=this.arrCity[4].citySoldier;
        this.cityDefData.text=this.arrCity[4].cityDefense;
        this.lovalData.text=this.arrCity[4].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setNanPi(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[5].cityName;
        this.moneyData.text=this.arrCity[5].cityMoney;
        this.bunessData.text=this.arrCity[5].cityBussiness;
        this.hayData.text=this.arrCity[5].cityFood;
        this.farmData.text=this.arrCity[5].cityFarm;
        this.soldiersData.text=this.arrCity[5].citySoldier;
        this.cityDefData.text=this.arrCity[5].cityDefense;
        this.lovalData.text=this.arrCity[5].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setPingYuang(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[6].cityName;
        this.moneyData.text=this.arrCity[6].cityMoney;
        this.bunessData.text=this.arrCity[6].cityBussiness;
        this.hayData.text=this.arrCity[6].cityFood;
        this.farmData.text=this.arrCity[6].cityFarm;
        this.soldiersData.text=this.arrCity[6].citySoldier;
        this.cityDefData.text=this.arrCity[6].cityDefense;
        this.lovalData.text=this.arrCity[6].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJiBei(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[7].cityName;
        this.moneyData.text=this.arrCity[7].cityMoney;
        this.bunessData.text=this.arrCity[7].cityBussiness;
        this.hayData.text=this.arrCity[7].cityFood;
        this.farmData.text=this.arrCity[7].cityFarm;
        this.soldiersData.text=this.arrCity[7].citySoldier;
        this.cityDefData.text=this.arrCity[7].cityDefense;
        this.lovalData.text=this.arrCity[7].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setXiaoPei(){
        //var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[8].cityName;
        this.moneyData.text=this.arrCity[8].cityMoney;
        this.bunessData.text=this.arrCity[8].cityBussiness;
        this.hayData.text=this.arrCity[8].cityFood;
        this.farmData.text=this.arrCity[8].cityFarm;
        this.soldiersData.text=this.arrCity[8].citySoldier;
        this.cityDefData.text=this.arrCity[8].cityDefense;
        this.lovalData.text=this.arrCity[8].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setXiaPi(){
       //var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityNum=9;
        this.cityName.text=this.arrCity[9].cityName;
        this.moneyData.text=this.arrCity[9].cityMoney;
        this.bunessData.text=this.arrCity[9].cityBussiness;
        this.hayData.text=this.arrCity[9].cityFood;
        this.farmData.text=this.arrCity[9].cityFarm;
        this.soldiersData.text=this.arrCity[9].citySoldier;
        this.cityDefData.text=this.arrCity[9].cityDefense;
        this.lovalData.text=this.arrCity[9].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJianYe(){
       // var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[10].cityName;
        this.moneyData.text=this.arrCity[10].cityMoney;
        this.bunessData.text=this.arrCity[10].cityBussiness;
        this.hayData.text=this.arrCity[10].cityFood;
        this.farmData.text=this.arrCity[10].cityFarm;
        this.soldiersData.text=this.arrCity[10].citySoldier;
        this.cityDefData.text=this.arrCity[10].cityDefense;
        this.lovalData.text=this.arrCity[10].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setZhongShan(){
        //var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[11].cityName;
        this.moneyData.text=this.arrCity[11].cityMoney;
        this.bunessData.text=this.arrCity[11].cityBussiness;
        this.hayData.text=this.arrCity[11].cityFood;
        this.farmData.text=this.arrCity[11].cityFarm;
        this.soldiersData.text=this.arrCity[11].citySoldier;
        this.cityDefData.text=this.arrCity[11].cityDefense;
        this.lovalData.text=this.arrCity[11].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setGanLing(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[12].cityName;
        this.moneyData.text=this.arrCity[12].cityMoney;
        this.bunessData.text=this.arrCity[12].cityBussiness;
        this.hayData.text=this.arrCity[12].cityFood;
        this.farmData.text=this.arrCity[12].cityFarm;
        this.soldiersData.text=this.arrCity[12].citySoldier;
        this.cityDefData.text=this.arrCity[12].cityDefense;
        this.lovalData.text=this.arrCity[12].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setShouChun(){
        //var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[13].cityName;
        this.moneyData.text=this.arrCity[13].cityMoney;
        this.bunessData.text=this.arrCity[13].cityBussiness;
        this.hayData.text=this.arrCity[13].cityFood;
        this.farmData.text=this.arrCity[13].cityFarm;
        this.soldiersData.text=this.arrCity[13].citySoldier;
        this.cityDefData.text=this.arrCity[13].cityDefense;
        this.lovalData.text=this.arrCity[13].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setLuJiang(){
       // var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[14].cityName;
        this.moneyData.text=this.arrCity[14].cityMoney;
        this.bunessData.text=this.arrCity[14].cityBussiness;
        this.hayData.text=this.arrCity[14].cityFood;
        this.farmData.text=this.arrCity[14].cityFarm;
        this.soldiersData.text=this.arrCity[14].citySoldier;
        this.cityDefData.text=this.arrCity[14].cityDefense;
        this.lovalData.text=this.arrCity[14].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJuLu(){
       // var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[15].cityName;
        this.moneyData.text=this.arrCity[15].cityMoney;
        this.bunessData.text=this.arrCity[15].cityBussiness;
        this.hayData.text=this.arrCity[15].cityFood;
        this.farmData.text=this.arrCity[15].cityFarm;
        this.soldiersData.text=this.arrCity[15].citySoldier;
        this.cityDefData.text=this.arrCity[15].cityDefense;
        this.lovalData.text=this.arrCity[15].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setYe(){
        //var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[16].cityName;
        this.moneyData.text=this.arrCity[16].cityMoney;
        this.bunessData.text=this.arrCity[16].cityBussiness;
        this.hayData.text=this.arrCity[16].cityFood;
        this.farmData.text=this.arrCity[16].cityFarm;
        this.soldiersData.text=this.arrCity[16].citySoldier;
        this.cityDefData.text=this.arrCity[16].cityDefense;
        this.lovalData.text=this.arrCity[16].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setPuYang(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[17].cityName;
        this.moneyData.text=this.arrCity[17].cityMoney;
        this.bunessData.text=this.arrCity[17].cityBussiness;
        this.hayData.text=this.arrCity[17].cityFood;
        this.farmData.text=this.arrCity[17].cityFarm;
        this.soldiersData.text=this.arrCity[17].citySoldier;
        this.cityDefData.text=this.arrCity[17].cityDefense;
        this.lovalData.text=this.arrCity[17].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJiao(){
        //var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[18].cityName;
        this.moneyData.text=this.arrCity[18].cityMoney;
        this.bunessData.text=this.arrCity[18].cityBussiness;
        this.hayData.text=this.arrCity[18].cityFood;
        this.farmData.text=this.arrCity[18].cityFarm;
        this.soldiersData.text=this.arrCity[18].citySoldier;
        this.cityDefData.text=this.arrCity[18].cityDefense;
        this.lovalData.text=this.arrCity[18].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setChenLiu(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[19].cityName;
        this.moneyData.text=this.arrCity[19].cityMoney;
        this.bunessData.text=this.arrCity[19].cityBussiness;
        this.hayData.text=this.arrCity[19].cityFood;
        this.farmData.text=this.arrCity[19].cityFarm;
        this.soldiersData.text=this.arrCity[19].citySoldier;
        this.cityDefData.text=this.arrCity[19].cityDefense;
        this.lovalData.text=this.arrCity[19].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJinYan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[20].cityName;
        this.moneyData.text=this.arrCity[20].cityMoney;
        this.bunessData.text=this.arrCity[20].cityBussiness;
        this.hayData.text=this.arrCity[20].cityFood;
        this.farmData.text=this.arrCity[20].cityFarm;
        this.soldiersData.text=this.arrCity[20].citySoldier;
        this.cityDefData.text=this.arrCity[20].cityDefense;
        this.lovalData.text=this.arrCity[20].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setShangTan(){
      //  var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[21].cityName;
        this.moneyData.text=this.arrCity[21].cityMoney;
        this.bunessData.text=this.arrCity[21].cityBussiness;
        this.hayData.text=this.arrCity[21].cityFood;
        this.farmData.text=this.arrCity[21].cityFarm;
        this.soldiersData.text=this.arrCity[21].citySoldier;
        this.cityDefData.text=this.arrCity[21].cityDefense;
        this.lovalData.text=this.arrCity[21].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setHeNei(){
        //var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[22].cityName;
        this.moneyData.text=this.arrCity[22].cityMoney;
        this.bunessData.text=this.arrCity[22].cityBussiness;
        this.hayData.text=this.arrCity[22].cityFood;
        this.farmData.text=this.arrCity[22].cityFarm;
        this.soldiersData.text=this.arrCity[22].citySoldier;
        this.cityDefData.text=this.arrCity[22].cityDefense;
        this.lovalData.text=this.arrCity[22].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setXuChan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[23].cityName;
        this.moneyData.text=this.arrCity[23].cityMoney;
        this.bunessData.text=this.arrCity[23].cityBussiness;
        this.hayData.text=this.arrCity[23].cityFood;
        this.farmData.text=this.arrCity[23].cityFarm;
        this.soldiersData.text=this.arrCity[23].citySoldier;
        this.cityDefData.text=this.arrCity[23].cityDefense;
        this.lovalData.text=this.arrCity[23].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setRuNan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[24].cityName;
        this.moneyData.text=this.arrCity[24].cityMoney;
        this.bunessData.text=this.arrCity[24].cityBussiness;
        this.hayData.text=this.arrCity[24].cityFood;
        this.farmData.text=this.arrCity[24].cityFarm;
        this.soldiersData.text=this.arrCity[24].citySoldier;
        this.cityDefData.text=this.arrCity[24].cityDefense;
        this.lovalData.text=this.arrCity[24].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJiangXia(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[25].cityName;
        this.moneyData.text=this.arrCity[25].cityMoney;
        this.bunessData.text=this.arrCity[25].cityBussiness;
        this.hayData.text=this.arrCity[25].cityFood;
        this.farmData.text=this.arrCity[25].cityFarm;
        this.soldiersData.text=this.arrCity[25].citySoldier;
        this.cityDefData.text=this.arrCity[25].cityDefense;
        this.lovalData.text=this.arrCity[25].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setLuoYan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[26].cityName;
        this.moneyData.text=this.arrCity[26].cityMoney;
        this.bunessData.text=this.arrCity[26].cityBussiness;
        this.hayData.text=this.arrCity[26].cityFood;
        this.farmData.text=this.arrCity[26].cityFarm;
        this.soldiersData.text=this.arrCity[26].citySoldier;
        this.cityDefData.text=this.arrCity[26].cityDefense;
        this.lovalData.text=this.arrCity[26].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setWan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[27].cityName;
        this.moneyData.text=this.arrCity[27].cityMoney;
        this.bunessData.text=this.arrCity[27].cityBussiness;
        this.hayData.text=this.arrCity[27].cityFood;
        this.farmData.text=this.arrCity[27].cityFarm;
        this.soldiersData.text=this.arrCity[27].citySoldier;
        this.cityDefData.text=this.arrCity[27].cityDefense;
        this.lovalData.text=this.arrCity[27].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setXinYe(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[28].cityName;
        this.moneyData.text=this.arrCity[28].cityMoney;
        this.bunessData.text=this.arrCity[28].cityBussiness;
        this.hayData.text=this.arrCity[28].cityFood;
        this.farmData.text=this.arrCity[28].cityFarm;
        this.soldiersData.text=this.arrCity[28].citySoldier;
        this.cityDefData.text=this.arrCity[28].cityDefense;
        this.lovalData.text=this.arrCity[28].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setHongNong(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[29].cityName;
        this.moneyData.text=this.arrCity[29].cityMoney;
        this.bunessData.text=this.arrCity[29].cityBussiness;
        this.hayData.text=this.arrCity[29].cityFood;
        this.farmData.text=this.arrCity[29].cityFarm;
        this.soldiersData.text=this.arrCity[29].citySoldier;
        this.cityDefData.text=this.arrCity[29].cityDefense;
        this.lovalData.text=this.arrCity[29].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setXianYan(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[30].cityName;
        this.moneyData.text=this.arrCity[30].cityMoney;
        this.bunessData.text=this.arrCity[30].cityBussiness;
        this.hayData.text=this.arrCity[30].cityFood;
        this.farmData.text=this.arrCity[30].cityFarm;
        this.soldiersData.text=this.arrCity[30].citySoldier;
        this.cityDefData.text=this.arrCity[30].cityDefense;
        this.lovalData.text=this.arrCity[30].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setJiangLing(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[31].cityName;
        this.moneyData.text=this.arrCity[31].cityMoney;
        this.bunessData.text=this.arrCity[31].cityBussiness;
        this.hayData.text=this.arrCity[31].cityFood;
        this.farmData.text=this.arrCity[31].cityFarm;
        this.soldiersData.text=this.arrCity[31].citySoldier;
        this.cityDefData.text=this.arrCity[31].cityDefense;
        this.lovalData.text=this.arrCity[31].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
        
    }
    setChangAn(){
       // var json=Laya.loader.getRes("midCity.json");
       // var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[32].cityName;
        this.moneyData.text=this.arrCity[32].cityMoney;
        this.bunessData.text=this.arrCity[32].cityBussiness;
        this.hayData.text=this.arrCity[32].cityFood;
        this.farmData.text=this.arrCity[32].cityFarm;
        this.soldiersData.text=this.arrCity[32].citySoldier;
        this.cityDefData.text=this.arrCity[32].cityDefense;
        this.lovalData.text=this.arrCity[32].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setShangYong(){
       // var json=Laya.loader.getRes("midCity.json");
        //var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[33].cityName;
        this.moneyData.text=this.arrCity[33].cityMoney;
        this.bunessData.text=this.arrCity[33].cityBussiness;
        this.hayData.text=this.arrCity[33].cityFood;
        this.farmData.text=this.arrCity[33].cityFarm;
        this.soldiersData.text=this.arrCity[33].citySoldier;
        this.cityDefData.text=this.arrCity[33].cityDefense;
        this.lovalData.text=this.arrCity[33].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
    }
    setYongAn(){
       // var json=Laya.loader.getRes("midCity.json");
      //  var this.arrCity=json["RECORDS"];
        this.cityName.text=this.arrCity[34].cityName;
        this.moneyData.text=this.arrCity[34].cityMoney;
        this.bunessData.text=this.arrCity[34].cityBussiness;
        this.hayData.text=this.arrCity[34].cityFood;
        this.farmData.text=this.arrCity[34].cityFarm;
        this.soldiersData.text=this.arrCity[34].citySoldier;
        this.cityDefData.text=this.arrCity[34].cityDefense;
        this.lovalData.text=this.arrCity[34].cityLoyal;
        this.farmDeve.on(Laya.Event.CLICK,this,this.farmAdd);
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
    farmAdd(){
        let data = Number(this.arrCity[this.cityNum].cityFarm);
        data+=5;
        this.farmData.text=data;
        this.arrCity[this.cityNum].cityFarm=data;
    }
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