
 export default class Time {
    constructor(year,season){
        this.year=year;
        this.season=season;
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
 
 }