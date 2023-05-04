<script setup lang="ts">
import { ethosForVue, TransactionBlock } from "ethos-connect-vue";
import { ETHOS_EXAMPLE_CONTRACT } from "../constants";

const { context } = ethosForVue() || {};
const { wallet } = context?.wallet || {};

const mint = async () => {
  if (!wallet) return;

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${ETHOS_EXAMPLE_CONTRACT}::ethos_example_nft::mint_to_sender`,
    arguments: [
      transactionBlock.pure("Ethos Example NFT"),
      transactionBlock.pure("A sample NFT from Ethos Wallet."),
      transactionBlock.pure("https://ethoswallet.xyz/assets/images/ethos-email-logo.png"),
    ],
  });

  await wallet.signAndExecuteTransactionBlock({
    transactionBlock,
    options: {
      showEffects: true,
    },
  });
};
</script>

<template>
  <div v-if="!!wallet" className="main">
    <div className="wallet-name">
      <img :src="wallet.icon" />
      {{ wallet.name }}
    </div>
    <div v-if="!!wallet.contents" className="wallet-balance">
      Balance: {{ wallet.contents.suiBalance }} MIST
    </div>
    <div v-if="!!wallet.contents?.nfts && wallet.contents.nfts.length > 0">
      <div className="subtitle">NFT From Wallet:</div>
      <div>
        <img
          :src="wallet.contents.nfts[wallet.contents.nfts.length - 1].imageUri"
          className="nft"
          height="300"
          width="300"
        />
      </div>
    </div>
    <div>
      <button :onClick="mint" className="button">Mint A New NFT</button>
    </div>
  </div>
</template>
