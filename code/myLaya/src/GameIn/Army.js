
 export default class Army {
        constructor(armyID,armyMainID,armyAssisiant1ID,armyAssisiant2ID,armySoldier,armyFood,armyMoney){
            this.armyID=armyID;
            this.armyMainID=armyMainID;
            this.armyAssisiant1ID=armyAssisiant1ID;
            this.armyAssisiant2ID=armyAssisiant2ID;
            this.armySoldier=armySoldier;
            this.armyFood=armyFood;
            this.armyMoney=armyMoney;
        }
     
      set ArmyID(armyID) {
          this.armyID = armyID;
      }
      get ArmyID() {
          return this.armyID;
      }
 
      set ArmyMainID( armyMainID) {
          this.armyMainID = armyMainID;
      }
      get ArmyMainID() {
          return this.armyMainID;
      }
 
      set ArmyAssisiant1ID( armyAssisiant1ID) {
          this.armyAssisiant1ID = armyAssisiant1ID;
      }
      get ArmyAssisiant1ID() {
          return this.armyAssisiant1ID;
      }
 
      set ArmyAssisiant2ID( armyAssisiant2ID) {
          this.armyAssisiant2ID = armyAssisiant2ID;
      }
      get ArmyAssisiant2ID() {
          return this.armyAssisiant2ID;
      }
 
      set ArmySoldier(  armySoldier) {
          this.armySoldier = armySoldier;
      }
      get ArmySoldier() {
          return this.armySoldier;
      }
 
      set ArmyFood(  armyFood) {
          this.armyFood = armyFood;
      }
      get ArmyFood() {
          return this.armyFood;
      }
 
      set ArmyMoney(  armyMoney) {
          this.armyMoney = armyMoney;
      }
      get ArmyMoney() {
          return this.armyMoney;
      }
 
 
 }