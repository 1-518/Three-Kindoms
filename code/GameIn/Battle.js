
 export default class Battle {
    constructor(BattleID,BattleName,BattleAttackArmyID,BattleDefendArmyID,BattleFieldCityID,BattleResult){
        this.BattleID=BattleID;
        this.BattleName=BattleName;
        this.BattleAttackArmyID=BattleAttackArmyID;
        this.BattleDefendArmyID=BattleDefendArmyID;
        this.BattleFieldCityID=BattleFieldCityID;
        this.BattleResult=BattleResult;
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
 
 }