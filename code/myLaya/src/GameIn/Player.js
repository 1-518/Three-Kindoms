
 export default class Citys {
    constructor(playerID,playerScore){
        this.playerID=playerID;
        this.playerScore=playerScore;
    }
 
      set PlayerID( playerID) {
          this.playerID = playerID;
      }
      get PlayerID() {
          return this.playerID;
      }
 
      set PlayerScore( playerScore) {
          this.playerScore = playerScore;
      }
      get PlayerScore() {
          return this.playerScore;
      }
 
      PlayerChangeMaxScore( MaxScore){
          //玩家最高成绩改变
          if(MaxScore>this.playerScore){
              this.playerScore=MaxScore;
          }
          else
          return this.playerScore;
      }
 
 }