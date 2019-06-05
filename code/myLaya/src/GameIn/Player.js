
 export default class Player {
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
          if(MaxScore>Player.playerScore){
              Player.playerScore=MaxScore;
          }
          else
          return Player.playerScore;
      }
 
 }