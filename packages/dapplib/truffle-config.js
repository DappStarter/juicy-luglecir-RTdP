require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strategy deny oval million gloom entire metal ghost'; 
let testAccounts = [
"0x5f40a25722d473b8b23a4b80ef3f5213526311b4f5ede186d859dc2386169573",
"0x762c6010a64cc5d78ad0cebccc81c8af869c498a4f746b68f4fbf4b8f5d4480f",
"0xb6277c8020c6c863737a91132a430d0fde5bc5d0553e908afd34674810c46fad",
"0xef2e236a203b77eff358c6c6389499dbcb17415617631d9224ebb44cd985f9f9",
"0xebc9320071431dd8c8e41e3ca091d45bd72f0e86aefc9d368aae022c39a34311",
"0x34312c30000af64615c05cfdbdfc36a7c3ad8eb678707716b690151947169597",
"0x91429f936e1d06fb7b355186066f00e5bf307cddbd4260cf8c98315a18313950",
"0xf040c3c6f3485845ed5aff78e2369ca247dc6ca2b1a4652f0292f96ce6c0b5d8",
"0x1983df30a94b22d40c796cc08446f3ec05f8fc4184aaeb1f329903e2a3b4f457",
"0xf2d2b67a1cca2476e836578069ebe08139eca8dc8bc0bd016ae2131c2c9c09c0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

