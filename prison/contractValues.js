// Contract Data to pass to main page

export const provider =  'https://eth-rinkeby.alchemyapi.io/v2/wfk7B_6hehmx0YsOfvKcgi3wmFugtot6'

export const contractAddress = "0x24Eb24647786135352cbB14f888B23277F0014e7"

export const contractABI = [
{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "ApprovalForAll",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "stateMutability": "payable",
    "type": "fallback",
    "payable": true
},
{
    "inputs": [],
    "name": "MAX_ORDER",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "MAX_WALLET",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "PRICE",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }
    ],
    "name": "balanceOf",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "getApproved",
    "outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }
    ],
    "name": "isApprovedForAll",
    "outputs": [
    {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }
    ],
    "name": "isDelegate",
    "outputs": [
    {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "account",
        "type": "address"
    },
    {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
    }
    ],
    "name": "isOwnerOf",
    "outputs": [
    {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "name",
    "outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "ownerOf",
    "outputs": [
    {
        "internalType": "address",
        "name": "",
        "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    },
    {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    },
    {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "addr",
        "type": "address"
    },
    {
        "internalType": "bool",
        "name": "isDelegate_",
        "type": "bool"
    }
    ],
    "name": "setDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
    }
    ],
    "name": "supportsInterface",
    "outputs": [
    {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }
    ],
    "name": "tokenByIndex",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
    {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
    },
    {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }
    ],
    "name": "transferBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }
    ],
    "name": "walletOfOwner",
    "outputs": [
    {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "stateMutability": "payable",
    "type": "receive",
    "payable": true
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "tokenURI",
    "outputs": [
    {
        "internalType": "string",
        "name": "",
        "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
    }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
},
{
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
},
{
    "inputs": [
    {
        "internalType": "address",
        "name": "account",
        "type": "address"
    },
    {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
    }
    ],
    "name": "burnFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
},
{
    "inputs": [
    {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
    },
    {
        "internalType": "uint256[]",
        "name": "quantities",
        "type": "uint256[]"
    }
    ],
    "name": "mintTo",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
},
{
    "inputs": [
    {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
    },
    {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
    }
    ],
    "name": "resurrect",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
},
{
    "inputs": [],
    "name": "finalize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "bool",
        "name": "presaleActive",
        "type": "bool"
    },
    {
        "internalType": "bool",
        "name": "mainsaleActive",
        "type": "bool"
    }
    ],
    "name": "setActive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "maxWallet",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "maxOrder",
        "type": "uint256"
    },
    {
        "internalType": "uint256",
        "name": "maxSupply",
        "type": "uint256"
    }
    ],
    "name": "setMax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
    }
    ],
    "name": "setPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "internalType": "string",
        "name": "prefix",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "suffix",
        "type": "string"
    }
    ],
    "name": "setUri",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
]

export const tokenAddress = ''

export const tokenABI = []


