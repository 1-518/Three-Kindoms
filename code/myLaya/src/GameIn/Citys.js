

 export default class Citys {

   constructor(cityID,cityName,cityFood,cityFarm,cityMoney,cityBussiness,cityDefense,citySoldier,cityLoyal,cityBelongFactionID){
    this.cityID=cityID;
    this.cityName=cityName;
    this.cityFood=cityFood;
    this.cityFarm=cityFarm;
    this.cityMoney=cityMoney;
    this.cityBussiness=cityBussiness;
    this.cityDefense=cityDefense;
    this.citySoldier=citySoldier;
    this.cityLoyal=cityLoyal;
    this.cityBelongFactionID=cityBelongFactionID;
}

    
     set CityID(cityID) {
         this.cityID = cityID;
     } 

       get CityID() {
         return this.cityID;
     }

      set CityName(cityName) {
         this.cityName = cityName;
     }

       get CityName() {
         return this.cityName;
     }

      set CityFood(cityFood) {
         this.cityFood = cityFood;
     }
      get CityFood() {
         return this.cityFood;
     }

     set CityFarm( cityFarm) {
         this.cityFarm = cityFarm;
     }
      get CityFarm() {
         return this.cityFarm;
     }

      set CityMoney( cityMoney) {
         this.cityMoney = cityMoney;
     }
      get CityMoney() {
         return this.cityMoney;
     }

     set CityBussiness(cityBussiness) {
         this.cityBussiness = cityBussiness;
     }
     get CityBussiness() {
         return this.cityBussiness;
     }

     set CityDefense(cityDefense) {
         this.cityDefense = cityDefense;
     }
     get CityDefense() {
         return this.cityDefense;
     }

     set CitySoldier( citySoldier) {
         this.citySoldier = citySoldier;
     }
     get CitySoldier() {
         return this.citySoldier;
     }

     set CityLoyal( cityLoyal) {
         this.cityLoyal = cityLoyal;
     }
     get CityLoyal() {
         return this.cityLoyal;
     }

     set CityBelongFactionID( cityBelongFactionID) {
         this.cityBelongFactionID = cityBelongFactionID;
     }
     get CityBelongFactionID() {
         return this.cityBelongFactionID;
     }

     cityChangeFood( number){
         //粮草改变
         Citys.cityFood+=number;
     }

     cityChangeFarm( number){
        number=10; 
        //农业改变
         Citys.cityFarm+=number;
     }

     cityChangeMoney(number){
        //金钱改变
        Citys.cityMoney+=number;
     }

     cityChangeBusiness( number){
        //商业改变
        Citys.cityBussiness+=number;
     }

     cityChangeDefense( number){
        //城防改变
        Citys.cityDefense+=number;
     }
     cityChangeSoldier( number){
        //士兵数改变
        Citys.citySoldier+=number;
     }
     cityChangeLoyal( number){
         //民忠改变
         Citys.cityLoyal+=number;
     }
     cityChangeBelongFactionID( number){
         //所属势力改变
         Citys.cityBelongFactionID=number;
     }
}