
 export default class Time {
    constructor(year,season){
        this.year=year;//一般从184年开始
        this.season=season;//1为春，2为夏，3为秋，4为冬
    }

      set Year( year) {
          this.year = year;
      }
      get Year() {
          return this.year;
      }
 
      set Season( season) {
          this.season = season;
      }
      get Season() {
          return this.season;
      }
 
      timeChange( season){
          this.season++;
          if(this.season==5){
              this.season=1;
              this.year++;
          }
      }
 }