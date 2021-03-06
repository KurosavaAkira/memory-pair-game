//import './MainPage.sass';
import blackScreen from "../PageTransition/BlackScreenTransition";
import sundtrack from "../Sound";
import renderGameScene from "./GameScene";
import { renderBattlegroundStats } from "./BattlegroundStats";
import renderBattlegroundBoard from "./BattlegroundBoard";
import { renderSentryGun } from "./SentryGun";
import { renderCage } from "./Cage";
import { renderBlood } from "./Blood";
import renderDialogBox from "./DialogBox";

const mainPage = () => {
  blackScreen.fromBlack();
  sundtrack.change("main-page.mp3");
  renderGameScene();
  renderBattlegroundBoard();
  renderSentryGun();
  renderCage();
  renderBattlegroundStats();
  renderBlood();
  const dialogText =
    "Hey, sergeant! You are in the alpha version of the game,<br>so you can't save a princess or lost your life.<br>She will wait for you in next update.";
  renderDialogBox("captain-sad.png", "capitan", dialogText);
};

export default mainPage;
