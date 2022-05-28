import React , { useState,useRef } from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {DARK} from '../../Theme/Theme';

import { useWalletConnect } from '@walletconnect/react-native-dapp';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import {monsters} from '../../metaData/monsterObject';

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";





const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const monsterIcon = require('../../assets/images/monsterIcon.png')
const plusIcon = require('../../assets/icons/plusIconNeon.png')
const MARKET_ICON = require('../../assets/icons/marketIcon.png');
const FRIENDS_ICON = require('../../assets/icons/friendsIcon.jpg');
const RELOAD_ICON = require('../../assets/icons/reloadIcon.png');
const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";


const Marketplace = ({navigation}) => {
  
const connector = useWalletConnect();
const [initialization,setInitializationState] = useState(false);
const [listData, setListData]= useState([]);
const [buyStatus,setBuyStatus] = useState(null);
const [buyingItem,setBuyingItem] = useState(null);

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
		"name": "createMapping",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "openPack",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
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

const polygonpenguinMutateAddress = "0x6CE24Db542a10c02E1BB556E8D60836660cAE994";
const marketpolygonpenguinMutateAddress = "0x69b239F92208E27491a38cF46A7e45C3D67D5b96";

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

//   console.log('polypenguinMutate')
//   console.log(polypenguinMutate)

//   console.log('marketpolypenguinMutate')
//   console.log(marketpolypenguinMutate)

  let listedNFTIds = await marketpolypenguinMutate.getAllNFTs();
  console.log('listedNFTIds')

  let currentListData = [];

  for(let i=0; i<=listedNFTIds.length-1; i++)
  {
	console.log('listedNFT Token ids')
  	console.log(listedNFTIds[i].toNumber())

	let ownerOfTokenId = await polypenguinMutate.ownerOf(listedNFTIds[i].toNumber());

  console.log('ownerOfTokenId')
  console.log(ownerOfTokenId)

  let listingPrice = await marketpolypenguinMutate.s_listings(polygonpenguinMutateAddress,listedNFTIds[i].toNumber());

  	console.log('listingPrice wei')
  	console.log(listingPrice[0].toString())
    console.log(listingPrice[2].toString())

	let string = await polypenguinMutate.tokenURI(listedNFTIds[i].toNumber());
	let monsterId = string.split('ipfs.nftstorage.link/')[1].split('.')[0];

	let assetName = null;
	let image = null;
	let rarity = null;

	for(let n=0; n<=monsters.length-1; n++)
	{
	  if(monsters[n].card_id_number == monsterId){
		assetName = monsters[n].name;
		image = monsters[n].image;
		rarity = monsters[n].attributes.rarity;
		break;
	  }
	}

	currentListData.push({
		index:i,
		assetName:assetName,
		listPrice:ethers.utils.formatEther(listingPrice[0].toString()),
		listPriceWei:listingPrice[0].toString(),
		tokenId:listedNFTIds[i].toNumber(),
		token:'$ETH',
		assetInGameId:monsterId,
		image: image,
		currentOwnerAddress:ownerOfTokenId,
		baseColor:'#FF9900',
		rarity:rarity,
	  });

  }

  setListData(currentListData);
  setInitializationState(true);
}

if(initialization == false){
Initialize();
}

async function buy (item){

	setBuyingItem(item);
	await provider.enable();

	web3Provider = new providers.Web3Provider(provider);
	signer = web3Provider.getSigner();


	setBuyStatus('Open Metamask to Buy');
	// setTimeout(()=>{setBuyStatus('Open Metamask to Buy');},1000);

	marketpolypenguinMutate = await new ethers.Contract(
	  marketpolygonpenguinMutateAddress,
	  marketpolygonMutateAbi,
	  signer
	);
	

	let rawTxn = await marketpolypenguinMutate.populateTransaction.buyItem(polygonpenguinMutateAddress,item.tokenId,{
			  value:ethers.utils.parseEther(item.listPrice.toString()),
		  })
	
	console.log('rawTxn')
	console.log(rawTxn)

	let txn = await signer.sendTransaction(rawTxn);

	setBuyStatus('Finding the Owner to get the Monster');
	//setTimeout(()=>{setBuyStatus('Finding the Owner to get the Monster');},2000);

	console.log('txn')
	console.log(txn)

	let receipt =  await txn.wait();

	console.log('receipt')
	console.log(receipt)
	setBuyStatus('Bought');
	// setTimeout(()=>{setBuyStatus('Bought');},3000);

	setTimeout(()=>{navigation.navigate('home')},4000);
}



//   const listData = [
//     {
//       index:0,
//       assetName:'Greenip',
//       listPrice:30,
//       token:'$MOP',
//       assetInGameId:'101',
//       image: require('../../metaData/monsterAssets/101.png'),
//       currentOwnerAddress:'0xbc126537613432166154abc',
//       nftId:'0xbc126537613432166154abc718821',
//       baseColor:'#FF9900',
//       rarity:'Common',
//     },
//     {
//         index:1,
//         assetName:'Mythikos',
//         listPrice:600,
//         token:'$MOP',
//         assetInGameId:'112',
//         image: require('../../metaData/monsterAssets/112.png'),
//         currentOwnerAddress:'0xbc126537613432166154abc',
//         nftId:'0xbc12as32ds432166154abc718821',
//         baseColor:'#FF9900',
//         rarity:'Ultra Rare',
//     },
//     {
//         index:2,
//         assetName:'Rabuddaa',
//         listPrice:450,
//         token:'$MOP',
//         assetInGameId:'109',
//         image: require('../../metaData/monsterAssets/109.png'),
//         currentOwnerAddress:'0xbc126537613432166154abc',
//         nftId:'0xa3456213332ds432166154abc718821',
//         baseColor:'#FF9900',
//         rarity:'Ultra Rare',
//     },
//     {
//         index:3,
//         assetName:'Flyfury',
//         listPrice:15,
//         token:'$MOP',
//         assetInGameId:'114',
//         image: require('../../metaData/monsterAssets/114.png'),
//         currentOwnerAddress:'0xbc126537613432166154abc',
//         nftId:'0xa3456213332ds12abc334abc718821',
//         baseColor:'#FF9900',
//         rarity:'Common',
//     },
//   ];

  const [searchValue, setSearchValue] = useState('');

  const [reloadValue, setReloadValue] = useState(0);

  const setSearchText = newText => {
    setSearchValue(newText);
  };

  async function reload (){
      
    console.log(reloadValue)
	setInitializationState(false)
    setReloadValue(reloadValue+1)
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', height:75, justifyContent:'space-between', flexDirection:'row'}}>

        <View style={{marginLeft:24, height:45,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>market</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>market</Text>

        </View>


        <View style={{width:44,height:44, marginRight:24,marginTop:18}}>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} onPress={()=>{reload();}}>

                      <Image source={RELOAD_ICON} style={{width:25, height:25, alignSelf:'center', borderRadius:2}}/>          

                    </TouchableOpacity>
                    <View style={{width:40, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

      </View>

      <View style={{width:WIDTH-24, height:55, justifyContent:'space-between', flexDirection:'row', marginBottom:20, alignSelf:'center'}}>

        <View style={{width:'100%', height:55}}>

        <TextInput
            style={{
              width: WIDTH-29,
              height: 50,
              backgroundColor: DARK.PRIMARY_TEXT_INPUT,
              position: 'absolute',
              zIndex: 2,
              left: 0,
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Biryani-SemiBold',
              paddingVertical: 0,
              elevation: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 3,
            }}
            placeholderTextColor={'#777777'}
            placeholder={'search asset name or address'}
            underlineColorAndroid="transparent"
            value={searchValue}
            onChangeText={setSearchText}
          />

            <View style={{width:WIDTH-29, height:50, backgroundColor:DARK.PRIMARY_TEXT_INPUT,opacity:0.8 , position:'absolute',zIndex:1, left:5, top:5, borderRadius:3}}></View>
        </View>

      </View>

		{(buyStatus=='Open Metamask to Buy' || buyStatus=='Finding the Owner to get the Monster' || buyStatus=='Bought')?
		<View style={{width:'100%', height:HEIGHT, top:140, backgroundColor:'rgba(0,0,0,0.9)', zIndex:2, position:'absolute'}}>
		<View style={{width:'75%', backgroundColor:DARK.SECONDARY_BUTTON, alignSelf:'center', marginTop:80, borderRadius:5}}>
			<Text style={{width:'85%', textAlign:'center', fontFamily:'Biryani-Bold', fontSize:14, lineHeight:20, marginTop:20, alignSelf:'center', marginBottom:10}}>
			{(buyStatus == 'Open Metamask to Buy')?
			'Open MetaMask to Approve':
			(buyStatus == 'Finding the Owner to get the Monster')?
			'Finding the Owner to get the Monster':
			(buyStatus == 'Bought')?
			'Bought':null
			}
			</Text>
			<Text style={{width:'85%', textAlign:'center', fontFamily:'Biryani-Bold', fontSize:14, lineHeight:20, alignSelf:'center', marginBottom:20, color:DARK.SECONDARY_TEXT_COLOR}}>You are Buying '{buyingItem.assetName}' for {buyingItem.listPrice} $ETH</Text>
			
		</View>
		</View>:null}

      <View style={{width:WIDTH-24, height:HEIGHT-150, alignSelf:'center'}}>
        <FlatList
          data={listData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
                (item.assetName.includes(searchValue) || item.currentOwnerAddress.includes(searchValue))?
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
                            <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:10, textAlign:'left',color:DARK.TERTIARY_TEXT_COLOR,alignSelf:'center', marginLeft:15}}>currentOwner: {item.currentOwnerAddress}</Text>
                            
                            <View style={{width:100, height:30, backgroundColor:DARK.PRIMARY_TEXT_INPUT, marginLeft:10, borderRadius:5, marginTop:4, justifyContent:'center'}}>
                                <Text style={{width:'100%',fontFamily:'Biryani-Bold', fontSize:12, textAlign:'center',color:DARK.PRIMARY_TEXT_COLOR,alignSelf:'center'}}>{item.rarity}</Text>
                            </View>

                        </View>
                    </View>


                  <View style={{width:(WIDTH-24), height:50, borderRadius:3, alignSelf:'center', flexDirection:'row', marginLeft:2, marginTop:10,}}>
                  
                        <View style={{height:30,borderRadius:3, backgroundColor:item.baseColor, alignSelf:'center', justifyContent: 'center'}}>
                            <Text style={{fontFamily:'Biryani-Bold', fontSize:13, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center', paddingHorizontal:10}}>{item.token}  {item.listPrice}</Text>
                        </View>

                        <View style={{width:90, height:45, marginLeft:20}}>
                            <TouchableOpacity style={{width:85, height:(45), backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}} activeOpacity={0.6} onPress={()=>{buy(item);}}>
                                <Text style={{fontFamily:'Biryani-Bold', fontSize:15, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>buy</Text>
                            </TouchableOpacity>
                            <View style={{width:85, height:45, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                        </View>

                  </View>

              </View> : null
            );
          }}
          keyExtractor={item => item.index}
        />
      </View>

    </View>
  );
};


export default Marketplace;
