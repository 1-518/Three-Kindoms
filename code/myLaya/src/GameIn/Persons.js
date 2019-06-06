import Citys from "./Citys";
import cityID from "./Citys";
import cityMoney from "./Citys";

  export default class Persons {
 
    constructor(personID,personName,personBirthYear,personCommand,personMilitary,personPolitics,personTrick,personLoyal,personCityID,personState){
        this.personID=personID;
        this.personName=personName;
        this.personBirthYear=personBirthYear;
        this.personCommand=personCommand;
        this.personMilitary=personMilitary;
        this.personPolitics=personPolitics;
        this.personTrick=personTrick;
        this.personLoyal=personLoyal;
        this.personCityID=personCityID;
        this.personState=personState;
    }  
       set PersonID( personID) {
          this.personID = personID;
      }
        get PersonID() {
          return this.personID;
      }
 
      set PersonName( personName) {
          this.personName = personName;
      }
      get PersonName() {
          return this.personName;
      }
 
      set PersonBirthYear( personBirthYear) {
          this.personBirthYear = personBirthYear;
      }
      get PersonBirthYear() {
          return this.personBirthYear;
      }
 
      set PersonCommand( personCommand) {
          this.personCommand = personCommand;
      }
      get PersonCommand() {
          return this.personCommand;
      }
 
      set PersonMilitary( personMilitary) {
          this.personMilitary = personMilitary;
      }
      get PersonMilitary() {
          return this.personMilitary;
      }
 
      set PersonPolitics( personPolitics) {
          this.personPolitics = personPolitics;
      }
      get PersonPolitics() {
          return this.personPolitics;
      }
 
      set PersonTrick( personTrick) {
          this.personTrick = personTrick;
      }
      get PersonTrick() {
          return this.personTrick;
      }
 
      set PersonLoyal( personLoyal) {
          this.personLoyal = personLoyal;
      }
      get PersonLoyal() {
          return this.personLoyal;
      }
 
      set PersonCityID( personCityID) {
          this.personCityID = personCityID;
      }
      get PersonCityID() {
          return this.personCityID;
      }
 
      set PersonState( personState) {
          this.personState = personState;
      }
      get PersonState() {
          return this.personState;
      }

      personChangeLoyal(Citys ){
          //武将忠诚改变
          Citys.cityMoney=Citys.cityMoney-this.personLoyal*10;

      }
      PersonChangeCityID(Citys ){
        //所在城池改变
        Person.personCityID=Citys.cityID;
      }
      personChangeState(state){
        //状态改变
        this.personState=state;
      }
 }