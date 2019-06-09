import Citys from "../GameIn/Citys";
import Persons from "../GameIn/Persons";
import Factions from "../GameIn/Factions";


    export default class gameUiCon extends Laya.Scene {
        
    constructor() { 
        super(); 
        this.loadScene("gameMain/gameMain");
        //全局变量
        this.cityNum;
        this.personNum={};
        this.arrCity=[];
        this.arrFaction=[];
        this.arrPerson=[];
        this.nowDate=[];
        this.isNew=1;
        //新游戏读数据
        if(this.isNew==1){
            Laya.loader.load("midCity.json",Laya.Handler.create(this,this.onCityStart),null,Laya.loader.JSON);
            Laya.loader.load("midFaction.json",Laya.Handler.create(this,this.onFactionStart),null,Laya.loader.JSON);
            Laya.loader.load("midPerson.json",Laya.Handler.create(this,this.onPersonStart),null,Laya.loader.JSON);
            this.isNew=0;
            this.nowDate=[184,1];
        }
        //读取游戏读本地缓存
        else{
            ;
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

        //
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
       if(
            this.infList.visible==false){
            this.infList.visible=true;
            this.downData.visible=false;
            this.perList.visible=false;
            this.topData.visible=false;
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
            this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
        
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
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
        this.farmDeve.on(Laya.Event.CLICK,this,this.personOpen);
    }
    //第一次点击城市隐藏以打开的下方菜单，打开顶部信息
    menuCon(){
        
            this.personnelMenu.visible=false;
            this.tricksMenu.visible=false;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
            this.topData.visible=true;
            this.perList.visible=false;
    }
    closeMenu(){
            this.personnelMenu.visible=false;
            this.tricksMenu.visible=false;
            this.interiorMenu.visible=false;
            this.militaryMenu.visible=false;
            this.topData.visible=false;
            this.perList.visible=false;
    }
    personOpen(){
        this.interiorMenu.visible=false;
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
        if(e.type==Laya.Event.CLICK){
            if((e.target)instanceof Laya.Button){
                data+=Number(perData.personPolitics);
                perData.personState=0;
                console.log(this.perList.dataSource);
            }
        }
        
        this.farmData.text=data;
        this.arrCity[this.cityNum].cityFarm=data;
    }
    //商业开发
    bussinessAdd(){

    }
    //出征
    //输送
    //征兵

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
    //褒奖
    //移动
    //流放
    //登庸
}