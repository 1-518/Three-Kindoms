import Persons from "./Persons";
import personCommand from "./Persons";
import personMilitary from "./Persons";
import personPolitics from "./Persons";
import personTrick from "./Persons";
import personState from "./Persons";


 export default class Citys {

   constructor(cityID,cityName,cityFood,cityFarm,cityMoney,cityBussiness,cityDefense,citySoldier,cityLoyal,cityBelongFactionID,cityConnCityID){
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
    this.cityConnCityID=cityConnCityID;
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

     set cityConnCityID(cityConnCityID) {
        this.cityConnCityID = cityConnCityID;
    } 

      get cityConnCityID() {
        return this.cityConnCityID;
    }

    cityChangeFood(){
         //粮草改变
         this.cityFood+=this.cityFarm;
     }

     cityChangeFarm( Persons){
         //农业改变
         this.cityMoney=100-Persons.personCommand*Persons.personMilitary;
         this.cityFarm+=Persons.personCommand+Persons.personMilitary;
         Persons.personState=-1;
         
     }

     cityChangeMoney(){
        //金钱改变
        this.cityMoney+=this.cityBussiness;
     }

     cityChangeBusiness(Persons ){
        //商业改变
        this.cityMoney=100-Persons.personPolitics*Persons.personTrick;
        this.cityBussiness+=Persons.personPolitics+Persons.personTrick;
     }

     cityChangeDefense( Persons){
        //城防改变
        this.cityMoney=100-Persons.personCommand*Persons.personTrick;
        this.cityDefense=Persons.personCommand+Persons.personTrick;
     }
     cityChangeSoldier(Persons ){
        //士兵数改变
        this.cityMoney=100-Persons.personPolitics*Persons.personTrick;
        this.cityBussiness+=Persons.personPolitics+Persons.personTrick;
     }
     cityChangeLoyal(Persons ){
         //民忠改变
         this.cityMoney=100-Persons.personPolitics*Persons.personTrick;
         this.cityFood=100-Persons.personCommand-Persons.personMilitary;
         this.cityLoyal=Persons.personCommand+Persons.personMilitary+Persons.personPolitics+Persons.personTrick;
     }
     cityChangeBelongFactionID( number){
         //所属势力改变
        this.cityBelongFactionID=number;
     }
}