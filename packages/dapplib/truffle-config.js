require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember equip good process bridge genius'; 
let testAccounts = [
"0x4242975c23df8a2c43393750dda567d44e1350989e6dcc47745a6a38905116c6",
"0xfbc6c99168347b7dc38d3513b251b7e62464ad6042939174aa3b284d494a02c4",
"0x86b56ba22c8a11961939ed30110ddefaccb5ad2e2025d6d15bbd6530e63e9dff",
"0xeb1a7b689b7119be1487a8c5eace07211604b8937407c27b9fd1d7fb69c077c1",
"0xf2d7afc0174a883a3487119d1455555a9bd58d106d09e7f408844e4b88f478d2",
"0x36aafa434f375aa554a6b45b5f232f90de699050853fa771c9f77b563d1d3c34",
"0xe6145721200d4f12e75240a37e5763601c96508d586e6df1c4649ae8bacbd198",
"0x8b67c2076e136e2ae78d89cf62d01467a1c9c1c230ef60838730d6a69630892c",
"0x2d41fe79d9e571b61c9d0900d978756cd310539b297ed4fabab57a8eaf3e3f3c",
"0xb4c6655baea097d81515578667448fced86dc665940f7edf8e9eff969d7d6240"
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

