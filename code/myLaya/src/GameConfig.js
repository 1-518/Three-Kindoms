/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import gameUiCon from "./gameUI/gameUiCon"
import gameChosetoMain from "./gameUI/gameChosetoMain"
import gameNewtoChose from "./gameUI/gameNewtoChose"
import startUi from "./gameUI/startUi"
import gameStarttoNew from "./gameUI/gameStarttoNew"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("gameUI/gameUiCon.js",gameUiCon);
		reg("gameUI/gameChosetoMain.js",gameChosetoMain);
		reg("gameUI/gameNewtoChose.js",gameNewtoChose);
		reg("gameUI/startUi.js",startUi);
		reg("gameUI/gameStarttoNew.js",gameStarttoNew);
    }
}
GameConfig.width = 1136;
GameConfig.height = 640;
GameConfig.scaleMode ="fixedheight";
GameConfig.screenMode = "horizontal";
GameConfig.alignV = "middle";
GameConfig.alignH = "right";
GameConfig.startScene = "gameStart/gameStart.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
