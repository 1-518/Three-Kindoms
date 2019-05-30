class City_Test{
    constructor(){
         Laya.init(600,400);
         Laya.loader.load("city.json",Laya.Handler.create(this,this.onLoaded),null,Laya.loader.JSON);
     }
     onLoaded(){
         var json=Laya.loader.getRes("city.json");//加载json中的数据
         var arr1=json["RECORDS"];
         let i=0;
         while(i<51){
             console.log(arr1[i]);
             i++;
         }
         
     }   
 
 }
 new City_Test();