
let contractAddress
try {
  contractAddress = require('../../../../dc-protocol/v_0.1/build/addresses.json').Game
} catch(e){
  contractAddress = '0x8273e4B8ED6c78e252a9fCa5563Adfcc75C91b2A'
}


module.exports = {
  slug: "Game_EX_v1",
  disabled: true,

  // if you want to change filename  - change it too in /scripts/config/paths
  logic: "./dapp.logic.js",

  rules: {
    depositX: 2
  },

  contract: {
    address: contractAddress,
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "disputes",
        "outputs": [
          {
            "name": "disputeSeed",
            "type": "bytes32"
          },
          {
            "name": "disputeBet",
            "type": "uint256"
          },
          {
            "name": "initiator",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x11be1997"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          },
          {
            "name": "_session",
            "type": "uint256"
          },
          {
            "name": "_disputeBet",
            "type": "uint256"
          },
          {
            "name": "_gameData",
            "type": "uint256[]"
          },
          {
            "name": "_disputeSeed",
            "type": "bytes32"
          },
          {
            "name": "_sign",
            "type": "bytes"
          }
        ],
        "name": "openDispute",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x4904b251"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "playerWL",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x562a6c78"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          },
          {
            "name": "_N",
            "type": "bytes"
          },
          {
            "name": "_E",
            "type": "bytes"
          },
          {
            "name": "_rsaSign",
            "type": "bytes"
          }
        ],
        "name": "resolveDispute",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x64629522"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          },
          {
            "name": "_playerBalance",
            "type": "uint256"
          },
          {
            "name": "_bankrollerBalance",
            "type": "uint256"
          },
          {
            "name": "_totalBet",
            "type": "uint256"
          },
          {
            "name": "_session",
            "type": "uint256"
          },
          {
            "name": "_sign",
            "type": "bytes"
          }
        ],
        "name": "updateChannel",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x698b2fc5"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "config",
        "outputs": [
          {
            "name": "maxBet",
            "type": "uint256"
          },
          {
            "name": "minBet",
            "type": "uint256"
          },
          {
            "name": "gameDevReward",
            "type": "uint8"
          },
          {
            "name": "bankrollReward",
            "type": "uint8"
          },
          {
            "name": "platformReward",
            "type": "uint8"
          },
          {
            "name": "refererReward",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x79502c55"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "channels",
        "outputs": [
          {
            "name": "state",
            "type": "uint8"
          },
          {
            "name": "player",
            "type": "address"
          },
          {
            "name": "bankroller",
            "type": "address"
          },
          {
            "name": "playerBalance",
            "type": "uint256"
          },
          {
            "name": "bankrollerBalance",
            "type": "uint256"
          },
          {
            "name": "totalBet",
            "type": "uint256"
          },
          {
            "name": "session",
            "type": "uint256"
          },
          {
            "name": "endBlock",
            "type": "uint256"
          },
          {
            "name": "RSAHash",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7a7ebd7b"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "rsa",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8468ec68"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_hash",
            "type": "bytes32"
          },
          {
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "recoverSigner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function",
        "signature": "0x97aba7f9"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          },
          {
            "name": "_playerBalance",
            "type": "uint256"
          },
          {
            "name": "_bankrollerBalance",
            "type": "uint256"
          },
          {
            "name": "_totalBet",
            "type": "uint256"
          },
          {
            "name": "_session",
            "type": "uint256"
          },
          {
            "name": "_close",
            "type": "bool"
          },
          {
            "name": "_sign",
            "type": "bytes"
          }
        ],
        "name": "closeByConsent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb90b516f"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "developer",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xca4b208b"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "safeTime",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdd754511"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "refContract",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdf97d31c"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          },
          {
            "name": "_player",
            "type": "address"
          },
          {
            "name": "_bankroller",
            "type": "address"
          },
          {
            "name": "_playerBalance",
            "type": "uint256"
          },
          {
            "name": "_bankrollerBalance",
            "type": "uint256"
          },
          {
            "name": "_openingBlock",
            "type": "uint256"
          },
          {
            "name": "_gameData",
            "type": "uint256[]"
          },
          {
            "name": "_N",
            "type": "bytes"
          },
          {
            "name": "_E",
            "type": "bytes"
          },
          {
            "name": "_sign",
            "type": "bytes"
          }
        ],
        "name": "openChannel",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xe104b6b3"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "gameWL",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xeaea5174"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "bytes32"
          }
        ],
        "name": "closeByTime",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xed784626"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "token",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xfc0c546a"
      },
      {
        "inputs": [
          {
            "name": "_token",
            "type": "address"
          },
          {
            "name": "_ref",
            "type": "address"
          },
          {
            "name": "_gameWL",
            "type": "address"
          },
          {
            "name": "_playerWL",
            "type": "address"
          },
          {
            "name": "_rsa",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "action",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "playerBalance",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "bankrollerBalance",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "session",
            "type": "uint256"
          }
        ],
        "name": "logChannel",
        "type": "event",
        "signature": "0xcf0d23e4e524385efe626d64e9a58ae4a824ab23c37d387469ea22d5ccc456cc"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "action",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "initiator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "session",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "seed",
            "type": "bytes32"
          }
        ],
        "name": "logDispute",
        "type": "event",
        "signature": "0xa96a4cd9eb9d5917ce9fbed6d8e3cfa2fa5a8dfbc43704a8b8c78138e2f5b89f"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_gameData",
            "type": "uint256[]"
          },
          {
            "name": "_bet",
            "type": "uint256"
          }
        ],
        "name": "checkGameData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf632262f"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_gameData",
            "type": "uint256[]"
          },
          {
            "name": "_bet",
            "type": "uint256"
          },
          {
            "name": "_sigseed",
            "type": "bytes"
          }
        ],
        "name": "game",
        "outputs": [
          {
            "name": "_win",
            "type": "bool"
          },
          {
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xc352998c"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_gameData",
            "type": "uint256[]"
          },
          {
            "name": "_bet",
            "type": "uint256"
          }
        ],
        "name": "getProfit",
        "outputs": [
          {
            "name": "_profit",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function",
        "signature": "0x55cd5c10"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_sigseed",
            "type": "bytes"
          },
          {
            "name": "_min",
            "type": "uint256"
          },
          {
            "name": "_max",
            "type": "uint256"
          }
        ],
        "name": "generateRnd",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function",
        "signature": "0xb5a4a146"
      }
    ],
  },

};
