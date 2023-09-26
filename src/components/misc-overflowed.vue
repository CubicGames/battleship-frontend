<template>
  <v-dialog v-model="dialog" width="960" height="900">
    <span class="close" @click="dialog = false"></span>
    <template v-slot:activator="{ props }">
      <v-btn variant="text" class="regulation text-capitalize" v-bind="props">
        Game Rules
      </v-btn>
    </template>
    <div class="bg_setting bg_setting_top">
      <v-card-title>
        <div class="pl-2">
          <span class="game_rules">Battleship Demo Game Rules</span>
        </div>
      </v-card-title>
    </div>
    <v-card class="bg_setting bg_setting_content">
      <v-card-text>
        <span class="heading_text">Game Introduction:</span>
      </v-card-text>
      <v-card-text class="content_text">
        Battleship is a two-player strategy game with a 10x10 game board. Before the game begins, players must place 5
        ships on the board, occupying 17 squares (the five ships occupy 5, 4,3, 3, and 2, respectively). During the game,
        players take turns clicking on their opponent's board, attempting to hit the opponent's ships. Shipwrecks & flames
        indicate a hit, while splashes represent a miss. Notably, the ZK algorithm is used in the Battleship demo, so
        coordinate information is retained on the user side rather than on the blockchain. Therefore, players can only
        know the hit results of the previous round after the opponent has made their move (if hit, the splashes turns into
        shipwrecks & flames; if missed, it remains unchanged). In the Battleship demo, the first player to hit all 17
        squares wins!
      </v-card-text>
      <v-card-text>
        <span class="heading_text">Creating a Game:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image1" />
      </div>
      <div class="pa-6">
        <v-img class="show_img" :src="image2" />
      </div>
      <v-card-text class="content_text">
        Click NEW GAME (to restart and precise current game data), MOVE ships from my dock to the 10x10 game board and
        START GAME (to create a game room) in order. After completing step 3, interact with the wallet. Once the
        interaction is complete, the game is made, and you will receive a DUO CODE with the status "Waiting for an
        opponent to join."
      </v-card-text>
      <!-- <div class="pa-6">
        <v-img class="show_img" :src="image2" />
      </div> -->
      <v-card-text>
        <span class="heading_text">Joining a Game:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image3" />
      </div>
      <v-card-text class="content_text">
        Click NEW GAME (to restart and precise current game data), MOVE ships from my dock to the 10x10 game board, LIST
        GAMES (to join a game room; seeing a game number indicates a successful join) and JOIN GAME (to join the game) in
        order. After completing step 4, interact with the wallet. Once the interaction is complete, you can join an
        existing fun, with the status being "Waiting for an opponent to move."
      </v-card-text>

      <v-card-text>
        <span class="heading_text">Game Battle:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image4" />
      </div>
      <v-card-text class="content_text">
        The creator goes first, with the status being "my turn to move." Click on the opponent's board to attack, then
        complete the wallet interaction. The status changes to "waiting for an opponent to move," and the clicked
        coordinate will display splashes.
        After waiting for the opponent's move, you can see your board being hit, and the status changes back to "my turn
        to move." At this point, the opponent's board shows the previous round's attacked coordinate with shipwrecks,
        indicating a hit! (If missed, the splashes remain unchanged.) While my board shows flames.
        The first player to hit all 17 squares wins!
      </v-card-text>
    </v-card>
    <div class="bg_setting bg_setting_bottom pa-6">
      <div class="d-flex justify-center">
        <v-btn class="got_it_box" variant="tonal" @click="dialog = false">
          Got it
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import image1 from "../assets/regulation/image1.png";
import image2 from "../assets/regulation/image2.png";
import image3 from "../assets/regulation/image3.png";
import image4 from "../assets/regulation/image4.png";

export default {
  data() {
    return {
      dialog: false,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
    };
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  right: 24px;
  top: 24px;
  width: 12px;
  height: 12px;
  background: url("../assets/game/close.svg") no-repeat;
  background-size: cover;
  cursor: pointer;
  z-index: 999;
}

.v-overlay {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}

.game_rules {
  /* Battleship Demo Game Rules */

  width: 904px;
  height: 40px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  /* identical to box height, or 143% */

  background: linear-gradient(90.2deg, #01FFFF 0.18%, #FFFFFF 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.bg_setting {
  background: #0d041f;
  color: #fafeff;
}

.bg_setting_top {
  border-radius: 12px 12px 0 0 !important;
}

.bg_setting_content {
  border-radius: 0 !important;
}

.bg_setting_bottom {
  border-radius: 0 0 12px 12px !important;
  background-image: url('../assets/game/footer_bg.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.heading_text {
  /* Game Introduction: */

  width: 904px;
  height: 26px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}

.text1 {
  width: 904px;
  height: 154px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */

  color: rgba(250, 254, 255, 0.8);

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
}

.got_it_box {
  width: 214px;
  height: 40px;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #FFFFFF 0%, #01FFFF 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;

  font-family: 'Barlow';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  text-align: center;
  text-transform: capitalize;

  color: #000000;
}

.regulation {
  background: hsl(0, 0%, 100%);
  border-radius: 20px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0d041f;
  letter-spacing: normal;
}

.show_img {
  border-radius: 12px;
  border: 1px solid #251d35;
}

.v-card-text {
  padding-bottom: 0 !important;
}

.content_text {
  font-size: 16px !important;
  line-height: 22px !important;
}</style>
