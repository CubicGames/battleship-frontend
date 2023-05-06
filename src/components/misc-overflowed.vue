<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          class="regulation text-capitalize"
          v-bind="props"
        >
          Game Rules
        </v-btn>
      </template>
      <v-card class="bg_setting">
        <v-card-title>
<div class="pl-2">
          <span class="game_rules">Battleship Demo Game Rules</span>
</div>
        </v-card-title>
        <v-card-text>
          <span class="heading_text">Game Introduction:</span>
        </v-card-text>
        <v-card-text>
Battleship is a two-player strategy game with a 10x10 game board. Before the
game begins, players must place 5 ships on the board, occupying 17 squares
(the five ships occupy 5, 4,3, 3, and 2, respectively). During the game,
players take turns clicking on their opponent's board, attempting to hit the
opponent's ships. A circle with a cross indicates a hit, while a cross
indicates a miss. Notably, the ZK algorithm is used in the Battleship demo, so
coordinate information is retained on the user side rather than on the
blockchain. Therefore, players can only know the hit results of the previous
round after the opponent has made their move (if hit, the cross turns into a
circle with a cross; if missed, it remains unchanged). In the Battleship demo,
the first player to hit 2 squares wins! (In the official version, 17 squares
must be hit – a big task!)
        </v-card-text>
        <v-card-text>
          <span class="heading_text">Creating a Game:</span>
        </v-card-text>
<div class="pa-6">
  <v-img :src="image1"/>
</div>
        <v-card-text>
Click NEW GAME (to restart and precise current game data), RANDOM BOARD (to
randomly place 5 ships; manual placement must follow ship placement rules) and
START GAME (to create a game room) in order. After completing step 3, interact
with the wallet. Once the interaction is complete, the game is made, and you
will receive a game number with the status "Waiting for an opponent to join."
        </v-card-text>
<div class="pa-6">
  <v-img :src="image2" />
</div>
        <v-card-text>
          <span class="heading_text">Joining a Game:</span>
        </v-card-text>
<div class="pa-6">
  <v-img :src="image3" />
</div>
        <v-card-text>
Click NEW GAME (to restart and precise current game data), RANDOM BOARD (to
randomly place 5 ships; manual placement must follow ship placement rules),
LIST GAMES (to join a game room; seeing a game number indicates a successful
join) and JOIN GAME (to join the game) in order. After completing step 4,
interact with the wallet. Once the interaction is complete, you can join an
existing fun, with the status being "Waiting for an opponent to move."
        </v-card-text>
<div class="pa-6">
  <v-img :src="image4" />
</div>
        <v-card-text>
          <span class="heading_text">Game Battle:</span>
        </v-card-text>
<div class="pa-6">
  <v-img :src="image5" />
</div>
        <v-card-text>
The creator goes first, with the status being "my turn to move." Click on the
opponent's board to attack, then complete the wallet interaction. The status
changes to "waiting for an opponent to move," and the clicked coordinate will
display a cross.
        </v-card-text>
<div class="pa-6">
  <v-img :src="image6" />
</div>
        <v-card-text>
After waiting for the opponent's move, you can see your board being hit, and
the status changes back to "my turn to move." At this point, the opponent's
board shows the previous round's attacked coordinate with a circle and a cross,
indicating a hit! (If missed, the cross remains unchanged.) We then attack the
coordinate to the left of the hit one to see if we can strike again.
        </v-card-text>
<div class="pa-6">
  <v-img :src="image7" />
</div>
        <v-card-text>
Unfortunately, we didn't hit this time, but the opponent did. So we can guess
whether the square above the hit point will also be hit. (However, we cannot
know the result because the game ends after wallet interaction.)
        </v-card-text>
<div class="pa-6">
  <v-img :src="image8" />
</div>
        <v-card-text>
          <span class="heading_text">Creator loses!</span>
        </v-card-text>
<div class="pa-6">
  <v-img :src="image9" />
</div>
        <v-card-text>
	Joiner wins! We can see that the creator would have hit on their third
try.
        </v-card-text>
      </v-card>
          <div class="bg_setting pa-6">
          <div class="bg_setting d-flex justify-center">
          <v-btn
            class="got_it_box"
            variant="tonal"
            @click="dialog = false"
          >
            Got it
          </v-btn>
          </div>
	 </div>
    </v-dialog>
  </v-row>
</template>

<script>
import image1 from '../assets/regulation/image1.png'
import image2 from '../assets/regulation/image2.png'
import image3 from '../assets/regulation/image3.png'
import image4 from '../assets/regulation/image4.png'
import image5 from '../assets/regulation/image5.png'
import image6 from '../assets/regulation/image6.png'
import image7 from '../assets/regulation/image7.png'
import image8 from '../assets/regulation/image8.png'
import image9 from '../assets/regulation/image9.png'
  export default {
    data () {
      return {
        dialog: false,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
      image7: image7,
      image8: image8,
      image9: image9,
      }
    },
  }
</script>

<style scoped>
.game_rules {
/* Battleship Demo Game Rules */


width: 904px;
height: 40px;

font-family: 'Barlow';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 40px;
/* identical to box height, or 143% */


background: linear-gradient(90.2deg, #43CEFC -13.94%, #DE15F3 3.66%, #FEF3FF
60.22%);
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
    background: #0D041F;
    color: #FAFEFF;
}

.heading_text {
/* Game Introduction: */


width: 904px;
height: 26px;

font-family: 'Barlow';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
/* identical to box height, or 130% */


color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}

.text1 {
width: 904px;
height: 154px;

font-family: 'Barlow';
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

background: linear-gradient(90deg, #2DD6FF 0.62%, #FF00D2 99.37%);
border-radius: 6px;
}

.regulation {
	font-family: 'Barlow';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	text-align: center;

	color: #FFFFFF;
}

</style>
