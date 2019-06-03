export default class gameUiCon extends Laya.Scene {

    constructor() { 
        super(); 
       this.loadScene("gameMain/gameMain");
    }
    
    onEnable() {
        Laya.loader.load("midCity.json",Laya.Handler.create(this,this.onLoaded),null,Laya.loader.JSON);
        this.military.on(Laya.Event.CLICK,this,this.militaryCon);
        this.interior.on(Laya.Event.CLICK,this,this.interiorCon);
        this.tricks.on(Laya.Event.CLICK,this,this.tricksCon);
        this.personnel.on(Laya.Event.CLICK,this,this.personnelCon);
        this.information.on(Laya.Event.CLICK,this,this.infListCon);
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
            var json=Laya.loader.getRes("midCity.json");//加载json中的数据
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
    //写入琅琊信息
    setLangya(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[1].cityName;
        this.moneyData.text=arr1[1].cityMoney;
        this.bunessData.text=arr1[1].cityBussiness;
        this.hayData.text=arr1[1].cityFood;
        this.farmData.text=arr1[1].cityFarm;
        this.soldiersData.text=arr1[1].citySoldier;
        this.cityDefData.text=arr1[1].cityDefense;
        this.lovalData.text=arr1[1].cityLoyal;
    }
    //写入黄陵信息
    setHuangLing(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[2].cityName;
        this.moneyData.text=arr1[2].cityMoney;
        this.bunessData.text=arr1[2].cityBussiness;
        this.hayData.text=arr1[2].cityFood;
        this.farmData.text=arr1[2].cityFarm;
        this.soldiersData.text=arr1[2].citySoldier;
        this.cityDefData.text=arr1[2].cityDefense;
        this.lovalData.text=arr1[2].cityLoyal;
    }
    setWu(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[3].cityName;
        this.moneyData.text=arr1[3].cityMoney;
        this.bunessData.text=arr1[3].cityBussiness;
        this.hayData.text=arr1[3].cityFood;
        this.farmData.text=arr1[3].cityFarm;
        this.soldiersData.text=arr1[3].citySoldier;
        this.cityDefData.text=arr1[3].cityDefense;
        this.lovalData.text=arr1[3].cityLoyal;
    }
    setKuaiJi(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[4].cityName;
        this.moneyData.text=arr1[4].cityMoney;
        this.bunessData.text=arr1[4].cityBussiness;
        this.hayData.text=arr1[4].cityFood;
        this.farmData.text=arr1[4].cityFarm;
        this.soldiersData.text=arr1[4].citySoldier;
        this.cityDefData.text=arr1[4].cityDefense;
        this.lovalData.text=arr1[4].cityLoyal;
    }
    setNanPi(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[5].cityName;
        this.moneyData.text=arr1[5].cityMoney;
        this.bunessData.text=arr1[5].cityBussiness;
        this.hayData.text=arr1[5].cityFood;
        this.farmData.text=arr1[5].cityFarm;
        this.soldiersData.text=arr1[5].citySoldier;
        this.cityDefData.text=arr1[5].cityDefense;
        this.lovalData.text=arr1[5].cityLoyal;
    }
    setPingYuang(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[6].cityName;
        this.moneyData.text=arr1[6].cityMoney;
        this.bunessData.text=arr1[6].cityBussiness;
        this.hayData.text=arr1[6].cityFood;
        this.farmData.text=arr1[6].cityFarm;
        this.soldiersData.text=arr1[6].citySoldier;
        this.cityDefData.text=arr1[6].cityDefense;
        this.lovalData.text=arr1[6].cityLoyal;
    }
    setJiBei(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[7].cityName;
        this.moneyData.text=arr1[7].cityMoney;
        this.bunessData.text=arr1[7].cityBussiness;
        this.hayData.text=arr1[7].cityFood;
        this.farmData.text=arr1[7].cityFarm;
        this.soldiersData.text=arr1[7].citySoldier;
        this.cityDefData.text=arr1[7].cityDefense;
        this.lovalData.text=arr1[7].cityLoyal;
    }
    setXiaoPei(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[8].cityName;
        this.moneyData.text=arr1[8].cityMoney;
        this.bunessData.text=arr1[8].cityBussiness;
        this.hayData.text=arr1[8].cityFood;
        this.farmData.text=arr1[8].cityFarm;
        this.soldiersData.text=arr1[8].citySoldier;
        this.cityDefData.text=arr1[8].cityDefense;
        this.lovalData.text=arr1[8].cityLoyal;
    }
    setXiaPi(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[9].cityName;
        this.moneyData.text=arr1[9].cityMoney;
        this.bunessData.text=arr1[9].cityBussiness;
        this.hayData.text=arr1[9].cityFood;
        this.farmData.text=arr1[9].cityFarm;
        this.soldiersData.text=arr1[9].citySoldier;
        this.cityDefData.text=arr1[9].cityDefense;
        this.lovalData.text=arr1[9].cityLoyal;
    }
    setJianYe(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[10].cityName;
        this.moneyData.text=arr1[10].cityMoney;
        this.bunessData.text=arr1[10].cityBussiness;
        this.hayData.text=arr1[10].cityFood;
        this.farmData.text=arr1[10].cityFarm;
        this.soldiersData.text=arr1[10].citySoldier;
        this.cityDefData.text=arr1[10].cityDefense;
        this.lovalData.text=arr1[10].cityLoyal;
    }
    setZhongShan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[11].cityName;
        this.moneyData.text=arr1[11].cityMoney;
        this.bunessData.text=arr1[11].cityBussiness;
        this.hayData.text=arr1[11].cityFood;
        this.farmData.text=arr1[11].cityFarm;
        this.soldiersData.text=arr1[11].citySoldier;
        this.cityDefData.text=arr1[11].cityDefense;
        this.lovalData.text=arr1[11].cityLoyal;
    }
    setGanLing(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[12].cityName;
        this.moneyData.text=arr1[12].cityMoney;
        this.bunessData.text=arr1[12].cityBussiness;
        this.hayData.text=arr1[12].cityFood;
        this.farmData.text=arr1[12].cityFarm;
        this.soldiersData.text=arr1[12].citySoldier;
        this.cityDefData.text=arr1[12].cityDefense;
        this.lovalData.text=arr1[12].cityLoyal;
    }
    setShouChun(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[13].cityName;
        this.moneyData.text=arr1[13].cityMoney;
        this.bunessData.text=arr1[13].cityBussiness;
        this.hayData.text=arr1[13].cityFood;
        this.farmData.text=arr1[13].cityFarm;
        this.soldiersData.text=arr1[13].citySoldier;
        this.cityDefData.text=arr1[13].cityDefense;
        this.lovalData.text=arr1[13].cityLoyal;
    }
    setLuJiang(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[14].cityName;
        this.moneyData.text=arr1[14].cityMoney;
        this.bunessData.text=arr1[14].cityBussiness;
        this.hayData.text=arr1[14].cityFood;
        this.farmData.text=arr1[14].cityFarm;
        this.soldiersData.text=arr1[14].citySoldier;
        this.cityDefData.text=arr1[14].cityDefense;
        this.lovalData.text=arr1[14].cityLoyal;
    }
    setJuLu(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[15].cityName;
        this.moneyData.text=arr1[15].cityMoney;
        this.bunessData.text=arr1[15].cityBussiness;
        this.hayData.text=arr1[15].cityFood;
        this.farmData.text=arr1[15].cityFarm;
        this.soldiersData.text=arr1[15].citySoldier;
        this.cityDefData.text=arr1[15].cityDefense;
        this.lovalData.text=arr1[15].cityLoyal;
    }
    setYe(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[16].cityName;
        this.moneyData.text=arr1[16].cityMoney;
        this.bunessData.text=arr1[16].cityBussiness;
        this.hayData.text=arr1[16].cityFood;
        this.farmData.text=arr1[16].cityFarm;
        this.soldiersData.text=arr1[16].citySoldier;
        this.cityDefData.text=arr1[16].cityDefense;
        this.lovalData.text=arr1[16].cityLoyal;
    }
    setPuYang(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[17].cityName;
        this.moneyData.text=arr1[17].cityMoney;
        this.bunessData.text=arr1[17].cityBussiness;
        this.hayData.text=arr1[17].cityFood;
        this.farmData.text=arr1[17].cityFarm;
        this.soldiersData.text=arr1[17].citySoldier;
        this.cityDefData.text=arr1[17].cityDefense;
        this.lovalData.text=arr1[17].cityLoyal;
    }
    setJiao(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[18].cityName;
        this.moneyData.text=arr1[18].cityMoney;
        this.bunessData.text=arr1[18].cityBussiness;
        this.hayData.text=arr1[18].cityFood;
        this.farmData.text=arr1[18].cityFarm;
        this.soldiersData.text=arr1[18].citySoldier;
        this.cityDefData.text=arr1[18].cityDefense;
        this.lovalData.text=arr1[18].cityLoyal;
    }
    setChenLiu(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[19].cityName;
        this.moneyData.text=arr1[19].cityMoney;
        this.bunessData.text=arr1[19].cityBussiness;
        this.hayData.text=arr1[19].cityFood;
        this.farmData.text=arr1[19].cityFarm;
        this.soldiersData.text=arr1[19].citySoldier;
        this.cityDefData.text=arr1[19].cityDefense;
        this.lovalData.text=arr1[19].cityLoyal;
    }
    setJinYan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[20].cityName;
        this.moneyData.text=arr1[20].cityMoney;
        this.bunessData.text=arr1[20].cityBussiness;
        this.hayData.text=arr1[20].cityFood;
        this.farmData.text=arr1[20].cityFarm;
        this.soldiersData.text=arr1[20].citySoldier;
        this.cityDefData.text=arr1[20].cityDefense;
        this.lovalData.text=arr1[20].cityLoyal;
    }
    setShangTan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[21].cityName;
        this.moneyData.text=arr1[21].cityMoney;
        this.bunessData.text=arr1[21].cityBussiness;
        this.hayData.text=arr1[21].cityFood;
        this.farmData.text=arr1[21].cityFarm;
        this.soldiersData.text=arr1[21].citySoldier;
        this.cityDefData.text=arr1[21].cityDefense;
        this.lovalData.text=arr1[21].cityLoyal;
    }
    setHeNei(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[22].cityName;
        this.moneyData.text=arr1[22].cityMoney;
        this.bunessData.text=arr1[22].cityBussiness;
        this.hayData.text=arr1[22].cityFood;
        this.farmData.text=arr1[22].cityFarm;
        this.soldiersData.text=arr1[22].citySoldier;
        this.cityDefData.text=arr1[22].cityDefense;
        this.lovalData.text=arr1[22].cityLoyal;
    }
    setXuChan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[23].cityName;
        this.moneyData.text=arr1[23].cityMoney;
        this.bunessData.text=arr1[23].cityBussiness;
        this.hayData.text=arr1[23].cityFood;
        this.farmData.text=arr1[23].cityFarm;
        this.soldiersData.text=arr1[23].citySoldier;
        this.cityDefData.text=arr1[23].cityDefense;
        this.lovalData.text=arr1[23].cityLoyal;
    }
    setRuNan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[24].cityName;
        this.moneyData.text=arr1[24].cityMoney;
        this.bunessData.text=arr1[24].cityBussiness;
        this.hayData.text=arr1[24].cityFood;
        this.farmData.text=arr1[24].cityFarm;
        this.soldiersData.text=arr1[24].citySoldier;
        this.cityDefData.text=arr1[24].cityDefense;
        this.lovalData.text=arr1[24].cityLoyal;
    }
    setJiangXia(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[25].cityName;
        this.moneyData.text=arr1[25].cityMoney;
        this.bunessData.text=arr1[25].cityBussiness;
        this.hayData.text=arr1[25].cityFood;
        this.farmData.text=arr1[25].cityFarm;
        this.soldiersData.text=arr1[25].citySoldier;
        this.cityDefData.text=arr1[25].cityDefense;
        this.lovalData.text=arr1[25].cityLoyal;
    }
    setLuoYan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[26].cityName;
        this.moneyData.text=arr1[26].cityMoney;
        this.bunessData.text=arr1[26].cityBussiness;
        this.hayData.text=arr1[26].cityFood;
        this.farmData.text=arr1[26].cityFarm;
        this.soldiersData.text=arr1[26].citySoldier;
        this.cityDefData.text=arr1[26].cityDefense;
        this.lovalData.text=arr1[26].cityLoyal;
    }
    setWan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[27].cityName;
        this.moneyData.text=arr1[27].cityMoney;
        this.bunessData.text=arr1[27].cityBussiness;
        this.hayData.text=arr1[27].cityFood;
        this.farmData.text=arr1[27].cityFarm;
        this.soldiersData.text=arr1[27].citySoldier;
        this.cityDefData.text=arr1[27].cityDefense;
        this.lovalData.text=arr1[27].cityLoyal;
    }
    setXinYe(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[28].cityName;
        this.moneyData.text=arr1[28].cityMoney;
        this.bunessData.text=arr1[28].cityBussiness;
        this.hayData.text=arr1[28].cityFood;
        this.farmData.text=arr1[28].cityFarm;
        this.soldiersData.text=arr1[28].citySoldier;
        this.cityDefData.text=arr1[28].cityDefense;
        this.lovalData.text=arr1[28].cityLoyal;
    }
    setHongNong(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[29].cityName;
        this.moneyData.text=arr1[29].cityMoney;
        this.bunessData.text=arr1[29].cityBussiness;
        this.hayData.text=arr1[29].cityFood;
        this.farmData.text=arr1[29].cityFarm;
        this.soldiersData.text=arr1[29].citySoldier;
        this.cityDefData.text=arr1[29].cityDefense;
        this.lovalData.text=arr1[29].cityLoyal;
    }
    setXianYan(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[30].cityName;
        this.moneyData.text=arr1[30].cityMoney;
        this.bunessData.text=arr1[30].cityBussiness;
        this.hayData.text=arr1[30].cityFood;
        this.farmData.text=arr1[30].cityFarm;
        this.soldiersData.text=arr1[30].citySoldier;
        this.cityDefData.text=arr1[30].cityDefense;
        this.lovalData.text=arr1[30].cityLoyal;
    }
    setJiangLing(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[31].cityName;
        this.moneyData.text=arr1[31].cityMoney;
        this.bunessData.text=arr1[31].cityBussiness;
        this.hayData.text=arr1[31].cityFood;
        this.farmData.text=arr1[31].cityFarm;
        this.soldiersData.text=arr1[31].citySoldier;
        this.cityDefData.text=arr1[31].cityDefense;
        this.lovalData.text=arr1[31].cityLoyal;
    }
    setChangAn(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[32].cityName;
        this.moneyData.text=arr1[32].cityMoney;
        this.bunessData.text=arr1[32].cityBussiness;
        this.hayData.text=arr1[32].cityFood;
        this.farmData.text=arr1[32].cityFarm;
        this.soldiersData.text=arr1[32].citySoldier;
        this.cityDefData.text=arr1[32].cityDefense;
        this.lovalData.text=arr1[32].cityLoyal;
    }
    setShangYong(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[33].cityName;
        this.moneyData.text=arr1[33].cityMoney;
        this.bunessData.text=arr1[33].cityBussiness;
        this.hayData.text=arr1[33].cityFood;
        this.farmData.text=arr1[33].cityFarm;
        this.soldiersData.text=arr1[33].citySoldier;
        this.cityDefData.text=arr1[33].cityDefense;
        this.lovalData.text=arr1[33].cityLoyal;
    }
    setYongAn(){
        var json=Laya.loader.getRes("midCity.json");
        var arr1=json["RECORDS"];
        this.cityName.text=arr1[34].cityName;
        this.moneyData.text=arr1[34].cityMoney;
        this.bunessData.text=arr1[34].cityBussiness;
        this.hayData.text=arr1[34].cityFood;
        this.farmData.text=arr1[34].cityFarm;
        this.soldiersData.text=arr1[34].citySoldier;
        this.cityDefData.text=arr1[34].cityDefense;
        this.lovalData.text=arr1[34].cityLoyal;
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