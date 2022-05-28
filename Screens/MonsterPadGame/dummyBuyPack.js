import React , { useState,useRef } from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import {DARK} from '../../Theme/Theme';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

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


const BuyPack = ({navigation}) => {
  
  let monstersOwned = [
    {
      index:0,
      assetName:'Greenip',
      count:28,
      assetInGameId:'101',
      image: require('../../metaData/monsterAssets/101.png'),
      nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',,'0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
      baseColor:'#FF9900',
      rarity:'Common',
    },
    {
        index:1,
        assetName:'Bloonip',
        count:3,
        assetInGameId:'102',
        image: require('../../metaData/monsterAssets/102.png'),
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
        baseColor:'#FF9900',
        rarity:'Rare',
      },
    {
        index:2,
        assetName:'Terapartor',
        count:14,
        assetInGameId:'115',
        image: require('../../metaData/monsterAssets/115.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821','0xbc126537613432166154abc718821',],
        baseColor:'#FF9900',
        rarity:'Common',
    },
    {
        index:3,
        assetName:'Champlava',
        count:2,
        assetInGameId:'106',
        image: require('../../metaData/monsterAssets/106.png'),
        currentOwnerAddress:'0xbc126537613432166154abc',
        nftId:['0xbc126537613432166154abc718821','0xbc126537613432166154abc718821'],
        baseColor:'#FF9900',
        rarity:'Ultra Rare',
    },
  ];

const [monsterAssets, setMonsterAssets] = useState(monstersOwned);

const [buyStatus, setBuyStatus] = useState(null);

const [reloadValue, setReloadValue] = useState(0);

const connector = useWalletConnect();

const mutate_abi = [
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "safeMint",
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
];


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

const polygonpenguinMutateAddress = "0x5612d2941c9a0bcEe1Cdb9C97dC7087BA328c777";

const polygonMutateAbi = JSON.stringify(mutate_abi);

let polypenguinMutate = null;
        
async function Initialize (){
    await provider.enable();

    web3Provider = new providers.Web3Provider(provider);
    signer = web3Provider.getSigner();

    polypenguinMutate = new ethers.Contract(
        polygonpenguinMutateAddress,
        polygonMutateAbi,
        signer
    );

    console.log('polypenguinMutate')
    console.log(polypenguinMutate)
    
}
    
Initialize();


const domainName = connector.accounts[0];

async function reload (){
    
  console.log(reloadValue)
  setReloadValue(reloadValue+1)
}


  return (
    <View style={{width: '100%', height: '100%', backgroundColor:DARK.BACKGROUND_COLOR}}>

      <View style={{width:'100%', justifyContent:'space-between', flexDirection:'column'}}>

        <View style={{marginLeft:24, height:20,width:200 ,marginTop:17.5}}>

          <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Monster Pad</Text>
          <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:30, color:DARK.SECONDARY_BUTTON_TEXT, left:3, top:1, opacity:0.65}}>Monster Pad</Text>

        </View>
      </View>


    <View style={{width:WIDTH-24, alignSelf:'center', marginTop:24,}}>

        <View style={{marginLeft:10, height:45,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>pack mechanics</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:25, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>pack mechanics</Text>
        </View>

        <View style={{width:260,height:44, marginTop:10,marginBottom:15, marginLeft:10}}>
                        <TouchableOpacity style={{width:260, height:40, backgroundColor:DARK.PRIMARY_BUTTON, position:'absolute', zIndex:2, left:0,top:0, textAlign:'center', paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} 
                        onPress={async()=>{

                              // polypenguinMutate.

                              //let rawTxn = await polypenguinMutate.safeMint(1);

                              let rawTxn = await polypenguinMutate.populateTransaction.safeMint(1);

                              console.log('rawTxn')
                              console.log(rawTxn)

                              let txn = await signer.sendTransaction(rawTxn);

                              console.log('txn')
                              console.log(txn)

                              let receipt =  await txn.wait();

                              console.log('receipt')
                              console.log(receipt)

                        }}>

                            <Text style={{fontFamily:'Biryani-Bold', fontSize:16, color:DARK.PRIMARY_BUTTON_TEXT, textAlign:'center', alignSelf:'center'}}>Buy a pack with two monsters</Text>        

                        </TouchableOpacity>
                        <View style={{width:260, height:40, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:4, top:4, fontSize:20,borderRadius:3}}></View>
        </View>

        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Common 60%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Common 60%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/101.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/104.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

            
            <View style={{width:105, height:105, alignSelf:'flex-start'}}>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                    {
                    <Image source={require('../../metaData/monsterAssets/107.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                    }

                </View>
                <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
            </View>

        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/113.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/114.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>


          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/115.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>


        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Rare 25%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Rare 25%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/110.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/111.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>

        <View style={{marginLeft:10, height:30,}}>
            <Text style={{position:'absolute', zIndex:2, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.PRIMARY_TEXT_COLOR, left:0}}>Ultra Rare 15%</Text>
            <Text style={{position:'absolute', zIndex:1, fontFamily:'Biryani-Bold', fontSize:18, color:DARK.SECONDARY_BUTTON_TEXT, left:2, top:1, opacity:0.65}}>Ultra Rare 15%</Text>
        </View>

        <View style={{width:WIDTH-24, height:120, flexDirection: 'row'}}>

          <View style={{width:105, height:105, alignSelf:'flex-start'}}>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute', left:0,top:0,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1,}}>
                  {
                  <Image source={require('../../metaData/monsterAssets/112.png')} style={{width:80, height:80,resizeMode:'cover', alignSelf:'center'}}/>
                  }

              </View>
              <View style={{width:100, height:100, backgroundColor:'#FF9900', position:'absolute',zIndex:1,opacity:0.6,left:5,top:5, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
          </View>

        </View>

    </View>


    </View>
  );
};


export default BuyPack;

