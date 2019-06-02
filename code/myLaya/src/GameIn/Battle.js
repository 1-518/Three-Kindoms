import Factions from "./Factions";
import FactionID from "./Factions";
import FactionName from "./Factions";
import cityName from "./Citys";
import Citys from "./Citys";
import citySoldier from "./Citys";
import cityID from "./Citys";
import Army from "./Army";
import armyID from "./Army";
import armyMainID from "./Army";
import armyAssisiant1ID from "./Army";
import armyAssisiant2ID from "./Army";
import Persons from "./Persons";
import personID from "./Persons";
import personCommand from "./Persons";
import personMilitary from "./Persons";
import personTrick from "./Persons";

 export default class Battle {
    constructor(BattleID,BattleName,BattleAttackArmyID,BattleAttackCityName,BattleDefendArmyID,BattleFieldCityID,BattleResult){
        this.BattleID=BattleID;
        this.BattleName=BattleName;
        this.BattleAttackArmyID=BattleAttackArmyID;
        this.BattleDefendArmyID=BattleDefendArmyID;
        this.BattleFieldCityID=BattleFieldCityID;
        this.BattleResult=BattleResult;
        this.BattleAttackCityName=BattleAttackCityName;
    }

      set BattleID( BattleID) {
          this.BattleID = BattleID;
      }
      get BattleID() {
          return this.BattleID;
      }
 
      set BattleName( BattleName) {
          this.BattleName = BattleName;
      }
      get BattleName() {
          return this.BattleName;
      }
 
      set BattleAttackArmyID( BattleAttackArmyID) {
          this.BattleAttackArmyID = BattleAttackArmyID;
      }
      get BattleAttackArmyID() {
          return this.BattleAttackArmyID;
      }
 
      set BattleDefendArmyID( BattleDefendArmyID) {
          this.BattleDefendArmyID = BattleDefendArmyID;
      }
      get BattleDefendArmyID() {
          return this.BattleDefendArmyID;
      }
 
      set BattleFieldCityID( BattleFieldCityID) {
          this.BattleFieldCityID = BattleFieldCityID;
      }
      get BattleFieldCityID() {
          return this.BattleFieldCityID;
      }
 
      set BattleResult( BattleResult) {
          this.BattleResult = BattleResult;
      }
      get BattleResult() {
          return this.BattleResult;
      }

      set BattleAttackCityName(BattleAttackCityName){
          this.BattleAttackCityName = BattleAttackCityName;
      }
      get BattleAttackCityName(BattleAttackCityName){
          return this.BattleAttackCityName;
      }

      BattleNameGeneration(FactionID){
        //战役名称生成
        this.BattleName=Factions.FactionName+Citys.cityName+'之战';
      }
      BattleResultGeneration( BattleAttackArmyID, BattleDefendArmyID, Army,Citys){
        //战役结果生成
        var p,z;
        var x=BattleAttackArmyID;
        var y=BattleDefendArmyID;
        if(x=BattleAttackArmyID){
            this.BattleAttackArmyID=Army.armyID;
            this.BattleFieldCityID=Citys.cityID;
            Army.armyMainID=Persons.personID;
            p=(Persons.personCommand*10+Persons.personMilitary*8+Persons.personTrick*6)*Citys.citySoldier;
        }

        if(y=BattleDefendArmyID){
            this.BattleDefendArmyID=Army.armyID;
            Army.armyMainID=Persons.personID;
            Persons.personCityID=Citys.cityID;
            z=(Persons.personCommand*10+Persons.personMilitary*8+Persons.personTrick*6)*Citys.citySoldier;
        }
        if(p>z){
            return BattleAttackArmyID;
        }
        else
        return BattleAttackCityName;
      }
 }