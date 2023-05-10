<template>
  <v-dialog v-model="dialog" width="960" height="900">
    <span class="close" @click="dialog = false"></span>
    <template v-slot:activator="{ props }">
      <v-btn variant="text" class="regulation text-capitalize" v-bind="props">
        Game Rules
      </v-btn>
    </template>
    <div class="bg_setting">
      <v-card-title>
        <div class="pl-2">
          <span class="game_rules">Battleship Demo Game Rules</span>
        </div>
      </v-card-title>
    </div>
    <v-card class="bg_setting bg_setting_top">
      <v-card-text>
        <span class="heading_text">Game Introduction:</span>
      </v-card-text>
      <v-card-text class="content_text">
        Battleship is a two-player strategy game played on a 10x10 game board.
Before the game begins, each player must place five ships on the board, which
will occupy a total of 17 squares (with the ships having sizes of 5, 4, 3, 3,
and 2 squares respectively). During the game, players take turns clicking on
their opponent's board to attempt to hit their opponent's ships. A circle with
a cross indicates a hit, while a cross indicates a miss. It is worth noting
that the ZK algorithm is used in the Battleship demo, which means that
coordinate information is retained on the user's side rather than on the
blockchain. As a result, players can only learn the hit results of the
previous round after their opponent has made their move. If a ship is hit, the
cross indicating its location will change to a circle with a cross; if a miss
occurs, the cross will remain unchanged. In the Battleship demo, the first
player to hit two squares wins. In the official version, however, players must
hit all 17 squares, which is a much more challenging task.
      </v-card-text>
      <v-card-text>
        <span class="heading_text">Creating a Game:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image1" />
      </div>
      <v-card-text class="content_text">
Click on 'NEW GAME' to restart the game and reset the current game data. Click
on 'RANDOM BOARD' to randomly place the five ships. If you prefer to place the
ships manually, you must follow the ship placement rules. Click on 'START
GAME' to create a game room. Once you have completed step 3, interact with the
wallet. After the interaction is complete, the game will be created, and you
will receive a game number with the status 'Waiting for an opponent to join.'
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image2" />
      </div>
      <v-card-text>
        <span class="heading_text">Joining a Game:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image3" />
      </div>
      <v-card-text class="content_text">
Click on 'NEW GAME' to restart the game and reset the current game data. Click
on 'RANDOM BOARD' to randomly place the five ships. If you prefer to place the
ships manually, you must follow the ship placement rules. Click on 'START
GAME' to create a game room. Once you have completed step 4, interact with the
wallet. After the interaction is complete, the game will be created, and you
will receive a game number with the status 'Waiting for an opponent to join.'
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image4" />
      </div>
      <v-card-text>
        <span class="heading_text">Game Battle:</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image5" />
      </div>
      <v-card-text class="content_text">
In Battleship, the creator of the game goes first, and the status will show as
'my turn to move.' Click on the opponent's board to attack, and then complete
the wallet interaction. After this, the status will change to 'waiting for an
opponent to move,' and the coordinate that you clicked on will be marked with
a cross to indicate a missed shot.
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image6" />
      </div>
      <v-card-text class="content_text">
After waiting for the opponent's move, you will see your board being hit, and
the status will change back to 'my turn to move.' At this point, the
opponent's board will display the previous round's attacked coordinate with a
circle and a cross, indicating a hit (if it was missed, the cross remains
unchanged). You can then choose to attack the coordinate to the left of the
hit one to see if you can strike again.
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image7" />
      </div>
      <v-card-text class="content_text">
Unfortunately, we did not hit the opponent's ships this time, but they managed
to hit ours. At this point, we can guess whether the square above the hit
point will also be occupied by an opponent's ship. However, we cannot know the
result because the game ends immediately after the wallet interaction.
      </v-card-text>
      <v-card-text>
        <span class="heading_text">Creator loses!</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image8_1" />
      </div>
      <div class="pa-6">
        <v-img class="show_img" :src="image8_2" />
      </div>
      <v-card-text>
        <span class="heading_text">Joiner wins! We can see that the creator
would have hit on their third try.</span>
      </v-card-text>
      <div class="pa-6">
        <v-img class="show_img" :src="image9_1" />
      </div>
      <div class="pa-6">
        <v-img class="show_img" :src="image9_2" />
      </div>
    </v-card>
    <div class="bg_setting bg_setting_bottom pa-6">
      <div class="bg_setting d-flex justify-center">
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
import image5 from "../assets/regulation/image5.png";
import image6 from "../assets/regulation/image6.png";
import image7 from "../assets/regulation/image7.png";
import image8_1 from "../assets/regulation/image8_1.png";
import image8_2 from "../assets/regulation/image8_2.png";
import image9_1 from "../assets/regulation/image9_1.png";
import image9_2 from "../assets/regulation/image9_2.png";
export default {
  data() {
    return {
      dialog: false,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
      image7: image7,
      image8_1: image8_1,
      image8_2: image8_2,
      image9_1: image9_1,
      image9_2: image9_2,
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

  background: linear-gradient(
    90.2deg,
    #43cefc -13.94%,
    #de15f3 3.66%,
    #fef3ff 60.22%
  );
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
.bg_setting_bottom {
  border-radius: 0 0 12px 12px !important;
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
}
</style>
