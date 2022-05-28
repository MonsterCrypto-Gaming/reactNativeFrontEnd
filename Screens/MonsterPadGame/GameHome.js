import React , { useState,useRef } from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {DARK} from '../../Theme/Theme';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import WalletConnectProvider from "@walletconnect/web3-provider";

import {monsters} from '../../metaData/monsterObject';

import { providers } from "ethers";

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";

const fs = require('fs');



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const monsterIcon = require('../../assets/images/monsterIcon.png')
const plusIcon = require('../../assets/icons/plusIconNeon.png')
const MARKET_ICON = require('../../assets/icons/marketIcon.png');
const FRIENDS_ICON = require('../../assets/icons/friendsIcon.jpg');
const RELOAD_ICON = require('../../assets/icons/reloadIcon.png');
const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";




const GameHome = ({navigation}) => {
  
const connector = useWalletConnect();
const [monstersOwned,setMonstersOwned] = useState([]);
const [initialization,setInitializationState] = useState(false);

const mutate_abi = [
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_subscriptionId",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_vrfCoordinator",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_keyHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "setSplitBy__NumberInvalid",
		"type": "error"
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
				"indexed": false,
				"internalType": "uint256",
				"name": "monsterId",
				"type": "uint256"
			}
		],
		"name": "MonsterGenerated",
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
				"indexed": false,
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"name": "RandomNumberArray",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "numReceived",
				"type": "uint256[]"
			}
		],
		"name": "ReceiveRandomNumber",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newSplitBy",
				"type": "uint256"
			}
		],
		"name": "SplitBy_Updated",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "opened",
				"type": "bool"
			}
		],
		"name": "openedPack",
		"type": "event"
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
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseMetadataURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createMapping",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deployer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCLRandomNumber",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCardRandomizerNumbers",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSubscriptionId",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_mintPack",
				"type": "uint8"
			}
		],
		"name": "mintPack",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "mintRights",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "monster",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openPack",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_requestId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_splitBy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sender_request_ids",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
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
				"internalType": "uint256",
				"name": "_newsplitby",
				"type": "uint256"
			}
		],
		"name": "setSplitBy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
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
		"type": "function"
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
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIdToMonster",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
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
	}
]

const market_mutate_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "AlreadyListed",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "buyItem",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "cancelListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "listItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NoProceeds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotApprovedForMarketplace",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "NotListed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "PriceMustBeAboveZero",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "PriceNotMet",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "ItemBought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ItemCanceled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "ItemListed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "remove",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setNftAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "updateListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawProceeds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllNFTs",
		"outputs": [
			{
				"internalType": "int256[]",
				"name": "",
				"type": "int256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getListing",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "seller",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"internalType": "struct NftMarketplace.Listing",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"name": "getProceeds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "IdToListingStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "onMarketArray",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_listings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIdToListIndex",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

//const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

//Create WalletConnect Provider
const provider = new WalletConnectProvider({
    rpc: {
        4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    },
    chainId: 4,
    connector: connector,
    qrcode: false,
});


let web3Provider = null;

let signer = null;

const marketpolygonpenguinMutateAddress  = '0x69b239F92208E27491a38cF46A7e45C3D67D5b96';
const polygonpenguinMutateAddress = "0x6CE24Db542a10c02E1BB556E8D60836660cAE994";

const polygonMutateAbi = JSON.stringify(mutate_abi);
const marketpolygonMutateAbi = JSON.stringify(market_mutate_abi);

let polypenguinMutate = null;
let marketpolypenguinMutate = null;
        
async function Initialize (){
    await provider.enable();

    web3Provider = new providers.Web3Provider(provider);
    signer = web3Provider.getSigner();

    polypenguinMutate = await new ethers.Contract(
        polygonpenguinMutateAddress,
        polygonMutateAbi,
        signer
    );

    marketpolypenguinMutate = await new ethers.Contract(
      marketpolygonpenguinMutateAddress,
      marketpolygonMutateAbi,
      signer
  );

    console.log('polypenguinMutate')
    console.log(polypenguinMutate)

    let count = await polypenguinMutate.balanceOf(connector.accounts[0]);

    console.log('count');
    console.log(count.toString());
    
  
    //loop over
  
    let currentMonsterArray = [];

    console.log('Monsters')
    console.log(monsters)

    for (let m=0; m<=count-1; m++){
  
      let tokenId = await polypenguinMutate.tokenOfOwnerByIndex(connector.accounts[0],m);
      let string = await polypenguinMutate.tokenURI(tokenId);
      let monsterId = string.split('ipfs.nftstorage.link/')[1].split('.')[0];

      console.log('mosnterID')
      console.log(monsterId)

      let alreadyPresent = false;
      //  for(let n=0; n<=currentMonsterArray.length-1; n++){

      //   if(currentMonsterArray[n].assetName == monsterObject.name){
      //     currentMonsterArray[n].count = currentMonsterArray[n].count + 1;
      //     alreadyPresent = true;
      //     break;
      //   }
        
      // }


      for(let n=0; n<=currentMonsterArray.length-1; n++){

        if(currentMonsterArray[n].assetInGameId == monsterId){
          currentMonsterArray[n].count = currentMonsterArray[n].count + 1;
          currentMonsterArray[n].tokenId = tokenId,
          alreadyPresent = true;
          break;
        }
        
      }
      if(alreadyPresent == false){

        for(let n=0; n<=monsters.length-1; n++)
            {
              console.log('monsters[n].card_id_number')
              console.log(monsters[n].card_id_number)
              if(monsters[n].card_id_number == monsterId){
                currentMonsterArray.push(        
                  {
                  index:currentMonsterArray.length,
                  assetName:monsters[n].name,
                  tokenId:tokenId,
                  count:1,
                  assetInGameId:monsterId,
                  image: monsters[n].image,
                  baseColor:'#FF9900',
                  rarity:monsters[n].attributes.rarity,
                });
                break;
              }
              
            }

      }

    }

      setInitializationState(true);
      setMonstersOwned(currentMonsterArray);
  
    }
    

    if(initialization == false)
    {
      Initialize();
    }


    async function buy (item){

    }
  
    async function listItem (item){
      
      await provider.enable();

      web3Provider = new providers.Web3Provider(provider);
      signer = web3Provider.getSigner();
  
      polypenguinMutate = await new ethers.Contract(
          polygonpenguinMutateAddress,
          polygonMutateAbi,
          signer
      );

      marketpolypenguinMutate = await new ethers.Contract(
        marketpolygonpenguinMutateAddress,
        marketpolygonMutateAbi,
        signer
      );

      console.log('polypenguinMutate')
      console.log(polypenguinMutate)

      console.log('marketpolypenguinMutate')
      console.log(marketpolypenguinMutate)
  
      console.log('item.tokenId')
      console.log(parseInt(item.tokenId.toString()))

      let rawTxn0 = await polypenguinMutate.populateTransaction.approve(polygonpenguinMutateAddress,parseInt(item.tokenId.toString()));
  
      console.log('rawTxn0')
      console.log(rawTxn0)
  
      let txn0 = await signer.sendTransaction(rawTxn0);
  
      console.log('txn0')
      console.log(txn0)
  
      let receipt0 =  await txn0.wait();
  
      console.log('receipt0')
      console.log(receipt0)


      let rawTxn = await marketpolypenguinMutate.populateTransaction.listItem(polygonpenguinMutateAddress,parseInt(item.tokenId.toString()), 100000,{
        gasPrice: 100000,
        gasLimit: 100000,
      });
  
      console.log('rawTxn')
      console.log(rawTxn)
  
      let txn = await signer.sendTransaction(rawTxn);
  
      console.log('txn')
      console.log(txn)
  
      let receipt =  await txn.wait();
  
      console.log('receipt')
      console.log(receipt)
  
    }
  

  
  const listData = [
    {
      index:0,
      assetName:'Greenip',
      listPrice:30,
      token:'$MOP',
      assetInGameId:'101',
      image: require('../../metaData/monsterAssets/101.png'),
      currentOwnerAddress:'0xbc126537613432166154abc',
      nftId:'0xbc126537613432166154abc718821',
      baseColor:'#FF9900',
      rarity:'Common',
    },
    {
        index:1,
        assetName:'Mythikos',
        listPrice:600,
        token:'$MOP',
        assetInGameId:'112',
        image: require('../../metaData/monsterAssets/112.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xbc12as32ds432166154abc718821',
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
    {
        index:2,
        assetName:'Rabuddaa',
        listPrice:450,
        token:'$MOP',
        assetInGameId:'109',
        image: require('../../metaData/monsterAssets/109.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xa3456213332ds432166154abc718821',
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
    {
        index:3,
        assetName:'Flyfury',
        listPrice:15,
        token:'$MOP',
        assetInGameId:'114',
        image: require('../../metaData/monsterAssets/114.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:'0xa3456213332ds12abc334abc718821',
        baseColor:'#FF9900',
        rarity:'Common',
    },
  ];




  // let count = balanceOf(connector.accounts[0])
	// //loop over
	// let tokenId = tokenOfOwner(connector.accounts[0],0)
	// let string = tokenUri(tokenId)

  // let monstersOwned = [
  //   {
  //     index:0,
  //     assetName:'Greenip',
  //     count:28,
  //     assetInGameId:'101',
  //     image: require('../../metaData/monsterAssets/101.png'),
  //     nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',,'0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
  //     baseColor:'#FF9900',
  //     rarity:'Common',
  //   },
  //   {
  //       index:1,
  //       assetName:'Bloonip',
  //       count:3,
  //       assetInGameId:'102',
  //       image: require('../../metaData/monsterAssets/102.png'),
  //       nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
  //       baseColor:'#FF9900',
  //       rarity:'Rare',
  //     },
  //   {
  //       index:2,
  //       assetName:'Terapartor',
  //       count:14,
  //       assetInGameId:'115',
  //       image: require('../../metaData/monsterAssets/115.png'),
  //       currentOwnerAddress:'0xbc126537613432166154abc',
  //       nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
  //       baseColor:'#FF9900',
  //       rarity:'Common',
  //   },
  //   {
  //       index:3,
  //       assetName:'Champlava',
  //       count:2,
  //       assetInGameId:'106',
  //       image: require('../../metaData/monsterAssets/106.png'),
  //       currentOwnerAddress:'0xbc126537613432166154abc',
  //       nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821'],
  //       baseColor:'#FF9900',
  //       rarity:'Ultra Rare',
  //   },
  // ];

  const [monsterAssets, setMonsterAssets] = useState(monstersOwned);

  const [reloadValue, setReloadValue] = useState(0);


  const domainName = connector.accounts[0];


  async function reload (){
      
    console.log(reloadValue)
    setReloadValue(reloadValue+1)
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', justifyContent:'space-between', flexDirection:'column'}}>

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Monster Pad</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>Monster Pad</Text>

        </View>
      </View>



    <View style={{width:WIDTH-24, alignSelf:'center', height:50, marginTop:5,}}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={[{key:0,assetid:'101', image:require('../../metaData/monsterAssets/101.png')},
            {key:1,assetid:'102', image:require('../../metaData/monsterAssets/102.png')},
            {key:2,assetid:'103', image:require('../../metaData/monsterAssets/103.png')},
            {key:3,assetid:'104', image:require('../../metaData/monsterAssets/104.png')},
            {key:4,assetid:'105', image:require('../../metaData/monsterAssets/105.png')},
            {key:5,assetid:'106', image:require('../../metaData/monsterAssets/106.png')},
            {key:6,assetid:'107', image:require('../../metaData/monsterAssets/107.png')},
            {key:7,assetid:'108', image:require('../../metaData/monsterAssets/108.png')},
            {key:8,assetid:'109', image:require('../../metaData/monsterAssets/109.png')},
            {key:9,assetid:'110', image:require('../../metaData/monsterAssets/110.png')},
            {key:10,assetid:'111', image:require('../../metaData/monsterAssets/111.png')},
            {key:11,assetid:'112', image:require('../../metaData/monsterAssets/112.png')},
            {key:12,assetid:'113', image:require('../../metaData/monsterAssets/113.png')},
            {key:13,assetid:'114', image:require('../../metaData/monsterAssets/114.png')},
            {key:14,assetid:'115', image:require('../../metaData/monsterAssets/115.png')}]}
            style={{width:'100%', alignSelf:'center', height:'100%'}}

            renderItem={({item,index})=>{

            return(
            <Image source={item.image} style={{width:50, height:50, marginHorizontal:10}}></Image>);
            }}
        />

    </View>

    <View style={{width:WIDTH-24, height:44, flexDirection: 'row', marginBottom:10}}>

        <View style={{width:105,height:44, marginTop:20, marginLeft:24}}>
                        <TouchableOpacity style={{width:100, height:40, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Play Game</Text>        

                        </TouchableOpacity>
                        <View style={{width:100, height:40, backgroundColor:DARK.TERTIARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

        <View style={{width:105,height:44, marginTop:20, marginLeft:10}}>
                        <TouchableOpacity style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{navigation.navigate('buyPack')}}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Buy Pack</Text>        

                        </TouchableOpacity>
                        <View style={{width:100, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

    
    </View>

    <View style={{width:WIDTH-24, alignSelf:'center', marginTop:24,}}>

        <View style={{marginLeft:10, height:45,width:200 }}>

            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>your monsters</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>your monsters</Text>

        </View>

        <View style={{marginLeft:10, height:20,width:'100%' }}>
            <Text style={{width:'62%',fontSize:13, fontFamily:'Biryani-Bold', color:DARK.TERTIARY_TEXT_COLOR, textAlign: 'left', alignSelf:'flex-start'}} ellipsizeMode='middle' numberOfLines={1} >{domainName}</Text>
        </View>



    </View>

    <View style={{width:WIDTH-24, height:HEIGHT-267, alignSelf:'center', marginTop:10}}>
        <FlatList
          data={monstersOwned}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {

            let evolvesAt = null;
            let evolveAvailable = false;
            if((item.rarity=='Common'))
            {
                if(item.assetInGameId=='101'||item.assetInGameId=='104'||item.assetInGameId=='107')
                {
                    evolvesAt = 20
                    if(item.count >= 20){
                        evolveAvailable = true;
                    }
                }
            }

            if((item.rarity=='Rare'))
            {
                if(item.assetInGameId=='102'||item.assetInGameId=='105'||item.assetInGameId=='108')
                {
                    evolvesAt = 5
                    if(item.count >= 5){
                        evolveAvailable = true;
                    }
                }
            }

            return (
              <View style={{width:(WIDTH-24),height:(WIDTH-24)/3 + 100, flexDirection:'column',borderColor:'black'}}> 
    
                    <View style={{width:(WIDTH-24), height:(WIDTH-24)/3 + 5, flexDirection:'row'}}>
                        <View style={{width:((WIDTH-24)/3)+5, height:((WIDTH-24)/3)+5, alignSelf:'flex-start'}}>
                            <View style={{width:((WIDTH-24)/3), height:((WIDTH-24)/3), backgroundColor:item.baseColor, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                                {
                                <Image source={item.image} style={{width:((WIDTH-24)/3)-10, height:((WIDTH-24)/3)-10,backgroundColor:item.gameColor,resizeMode:'cover', alignSelf:'center'}}/>
                                }

                            </View>
                            <View style={{width:((WIDTH-24)/3), height:((WIDTH-24)/3), backgroundColor:item.baseColor, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                        <View style={{width:(2*(WIDTH-24)/3)-5,height:(WIDTH-24)/3 + 100, flexDirection:'column'}}>
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:15, textAlign:'left',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>{item.assetName}</Text>
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>level: {item.count}</Text>
                            {(evolvesAt!=null)?
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.TERTIARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>evolves at: {evolvesAt}</Text>:null}
                            
                            <View style={{width:100, height:30, backgroundColor:DARK.PRIMARY_TEXT_INPUT, marginLeft:10, borderRadius:5, marginTop:4, justifyContent:'center'}}>
                                <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:12, textAlign:'center',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center'}}>{item.rarity}</Text>
                            </View>

                        </View>
                    </View>


                  <View style={{width:(WIDTH-24), height:50, borderRadius:3, alignSelf:'center', flexDirection:'row', marginLeft:2, marginTop:10,}}>
                            
                        {(evolveAvailable == true)?
                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{buy(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>evolve</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.TERTIARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>:null}

                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{listItem(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>list/sell</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                  </View>

              </View>
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>

    </View>
  );
};


export default GameHome;
