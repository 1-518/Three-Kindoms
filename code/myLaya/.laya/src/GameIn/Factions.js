
 export default class Factions {

    constructor(FactionID,FactionName,FactionLeaderPersonID,FactionCapitalID){
        this.FactionID=FactionID;
        this.FactionName=FactionName;
        this.FactionLeaderPersonID=FactionLeaderPersonID;
        this.FactionCapitalID=FactionCapitalID;
    }  

      set FactionID( FactionID) {
          this.FactionID = FactionID;
      }
      get FactionID() {
          return this.FactionID;
      }
 
      set FactionName(FactionName) {
          this.FactionName = FactionName;
      }
      get FactionName() {
          return this.FactionName;
      }
 
      set FactionLeaderPersonID( FactionLeaderPersonID) {
          this.FactionLeaderPersonID = FactionLeaderPersonID;
      }
      get FactionLeaderPersonID() {
          return this.FactionLeaderPersonID;
      }
 
      set FactionCapitalID( FactionCapitalID) {
          this.FactionCapitalID = FactionCapitalID;
      }
      get FactionCapitalID() {
          return this.FactionCapitalID;
      }
      
      FactionChangeLeaderPersonID( number){
          //势力主公武将更换
          Faction.FactionLeaderPersonID=number;
      }
      FactionChangeCapitalID( number){
          //势力首都城池更换
          Faction.FactionCapitalID=number;
      }
 }