export default class Game_con extends Laya.Script {

    constructor() { 
        super(); 
        /** @prop {name:money, tips:"金钱", type:Int, default:1000}*/
        let money = 1000;
        /** @prop {name:numType, tips:"数字类型示例", type:Number, default:1000}*/
        let numType = 1000;
        /** @prop {name:strType, tips:"字符串类型示例", type:String, default:"hello laya"}*/
        let strType = "hello laya";
        /** @prop {name:boolType, tips:"布尔类型示例", type:Bool, default:true}*/
        let boolType = true;
        // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    }
    
    onClick(){
        
    }
    onEnable() {
    }

    onDisable() {
        
    }
}