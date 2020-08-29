const bip39 = require("bip39");
const hd = require("stellar-hd-wallet");

const wordlist = bip39.wordlists["EN"];

document.querySelector("button").addEventListener("click", () => {
  const partialMnemonic = document.querySelector("#known-wordlist").value.replace(/\s+/, " ").trim();
  const pubkey = document.querySelector("#known-pubkey").value.trim();

  wordlist.forEach(word => {
    try {
      const wallet = hd.fromMnemonic([partialMnemonic, word].join(" "));
      const walletPubkey = wallet.getPublicKey(0);

      console.log({word})
      if (walletPubkey === pubkey) {
        alert(`The 24th word is ${word}`);
      }
    } catch (error) {
      //
    }
  })
});
