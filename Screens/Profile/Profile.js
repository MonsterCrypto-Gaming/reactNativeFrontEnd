import React , { useState,useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {DARK} from '../../Theme/Theme';
import {WalletChainImageMapping} from './WalletImageMapping';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";


import {monsters} from '../../metaData/monsterObject';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DP = "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Bored-Ape-Yacht-Club-NFT.jpg";
const profileName = "aakash";

const WalletData = [
    {chain:"ETH", wallets:[{address:"0x6abf3829779", balance:"2.45", accountHostedIn:"metamask"},{address:"0xca256829779", balance:"1.45", accountHostedIn:"trust"}]},
    {chain:"BNB", wallets:[{address:"0xe1243bf788", balance:"0.95", accountHostedIn:"Binance"}]},
    {chain:"SOL", wallets:[{address:"0xdab12f78a", balance:"408", accountHostedIn:"phanthom"}]},
];

const GameAssetsDataGlobal = [
    {gameName:"Monster Pad", gameColor:'#FF9900',gameIcon:require('../../assets/images/monsterIcon.png'),token:"MOP", chain:"ETH", walletAddress:"0x6abf3829779", totalValueOfAssets:39,assets:[{name:"monster1", value:15, address:"0xca25682977923", assetIcon:'https://pngimg.com/uploads/pokemon/pokemon_PNG52.png'},{name:"monster2", value:9, address:"0xcad56f82977923",assetIcon:'https://freepngimg.com/save/119342-pic-charmander-pokemon-hq-image-free/530x600'},{name:"monster3", value:5, address:"0xcadas56f82977923", assetIcon:'https://www.downloadclipart.net/large/pokemon-png-hd.png'},{name:"monster4", value:5, address:"0xa3456f82977923", assetIcon:'http://assets.stickpng.com/thumbs/5859611e4f6ae202fedf2859.png'}]},
    {gameName:"Valorant", gameColor:'#F8424F',gameIcon:'https://cdn.mos.cms.futurecdn.net/QCb8dh8TGFfLY2qwKt4vKN.jpg',token:"VALO", chain:"BNB", walletAddress:"0xe1243bf788", totalValueOfAssets:1200, assets:[{name:"skin1", value:1000, address:"0xca25682977923",assetIcon:"https://cdn.vox-cdn.com/thumbor/-Ow9Zap6WVVydc-nDJyLgVjDW9o=/0x0:6572x4320/1200x800/filters:focal(2761x1635:3811x2685)/cdn.vox-cdn.com/uploads/chorus_image/image/67148670/Glitchpop_Frenzy_SideView.0.png"},{name:"skin2", value:100, address:"0xcad56f82977923", assetIcon:'https://owwya.com/wp-content/uploads/2020/07/Valorant-Pistolinha-Classic-Razes-Classic-Skin.png'},{name:"skin3", value:100, address:"0xcadas56f82977923", assetIcon:'https://vgraphs.com/images/weapons/skins/full-details/valorant-nebula-phantom-weapon-skin.png'}]},
];


const DISCONNECT_ICON = require('../../assets/icons/disconnectIconBlack.png')



const Profile = ({navigation}) => {

    
    
    const ProfileHeader = () => {

        const connector = useWalletConnect();
        // const connector2 = useWalletConnect();

        if(connector.connected){
            connector.updateSession({
                chainId: connector.chainId,
                accounts: connector.accounts,
            });
        }

        console.log('connector accounts')
        console.log(connector.accounts);

        // console.log('connector2 accounts')
        // console.log(connector2.accounts);         


        const domainName = connector.accounts[0];


    
        return(
    
                <View style={{width:'100%',alignSelf:'center', justifyContent: 'center', flexDirection:'column'}}>
                    
                    <View style={{width:'100%', height:125,justifyContent:'center'}}>
                        <View style={{width:120, height:120, backgroundColor:DARK.PRIMARY_BUTTON, zIndex:2, justifyContent:'center',position:'absolute',top:0,left:((WIDTH)-120)/2, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3, borderWidth:1, borderColor:'black',}}>
                            <Image source={{uri: DP}} style={{width:111, height:111, alignSelf:'center', borderRadius:2}}/>
                        </View>
    
                        <View style={{width:120, height:120, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.6,position:'absolute', top:5 , zIndex:1, left:((WIDTH)-120)/2 + 5, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}>
                        </View>
                    </View>
    
                    <Text style={{width:'100%',height:30,fontSize:22, fontFamily:'Biryani-Bold',color:DARK.PRIMARY_TEXT_COLOR, textAlign: 'center', alignSelf:'center', marginTop:10}}>{profileName}</Text>
                    <Text style={{width:'62%',height:20,fontSize:13, fontFamily:'Biryani-Bold', color:DARK.TERTIARY_TEXT_COLOR, textAlign: 'center', alignSelf:'center', marginTop:5}} ellipsizeMode='middle' numberOfLines={1} >{domainName}</Text>
    
                    <TouchableOpacity style={{width:30, height:30,position:'absolute', left:(WIDTH-125)/6, top:50}} activeOpacity={0.5} onPress={async ()=>{
            
                        connector.killSession();
                        navigation.navigate('login')
                    }}>
                        <View style={{width:30, height:30, backgroundColor:DARK.PRIMARY_BUTTON, zIndex:2, justifyContent:'center',position:'absolute',top:0,left:0, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3, borderWidth:1, borderColor:'black',}}>
                            <Image source={DISCONNECT_ICON} style={{width:25, height:25, alignSelf:'center', borderRadius:2}}/>
                        </View>
    
                        <View style={{width:30, height:30, backgroundColor:DARK.PRIMARY_BUTTON,opacity:0.6,position:'absolute', top:3 , zIndex:1, left:3, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}>
                        </View>
                    </TouchableOpacity>
    
                </View>
    
        );
    }
    
    
    
    const ProfileBody = () => {
    
        
        const [flatListOption, setFlatListOption] = useState("wallet")



        const connector = useWalletConnect();
const [GameAssetsData,setGameAssetsData] = useState([]);
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

const polygonpenguinMutateAddress = "0x6CE24Db542a10c02E1BB556E8D60836660cAE994";

const polygonMutateAbi = JSON.stringify(mutate_abi);

let polypenguinMutate = null;
        
async function Initialize (){
    await provider.enable();

    web3Provider = new providers.Web3Provider(provider);
    signer = web3Provider.getSigner();

    polypenguinMutate = await new ethers.Contract(
        polygonpenguinMutateAddress,
        polygonMutateAbi,
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
          currentMonsterArray[n].value = currentMonsterArray[n].value + 1;
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
                  name:monsters[n].name,
                  value:1,
                  assetInGameId:monsterId,
                  assetIcon: monsters[n].image,
                  baseColor:'#FF9900',
                });
                break;
              }
              
            }

      }

    }

      setInitializationState(true);
      GameAssetsDataGlobal[0].totalValueOfAssets = count.toString();
      GameAssetsDataGlobal[0].token = 'LVL';
      GameAssetsDataGlobal[0].assets = currentMonsterArray;

      setGameAssetsData(GameAssetsDataGlobal);
  
    }
    

    if(initialization == false)
    {
      Initialize();
    }






    
        function setChoice(choice){
    
            setFlatListOption(choice);
            console.log('Choice')
            console.log(choice)
            
        }
    
    
        const Wallet = () => {
        
            return(
                <View style={{width:'100%', height:HEIGHT-265, flexDirection:'column', marginTop:50}}>

                    <Text style={{fontFamily:'Biryani-Bold', fontSize:13, textAlign: 'center', color:DARK.PRIMARY_TEXT_COLOR, alignSelf:'center', marginTop:10}}>Adding Multi Chain Wallets Coming Soon</Text>
                    <View style={{height:50,flexDirection:'row', alignSelf:'center', marginTop:20 }}>
                        <Image source={require('../../assets/images/ethereumIcon.png')} style={{width:40, height:40, marginRight:15, marginLeft:12}}/>
                        <Image source={require('../../assets/images/binanceIcon.png')} style={{width:40, height:40, marginRight:15, marginLeft:12}}/>
                        <Image source={require('../../assets/images/solanaIcon.png')} style={{width:40, height:40, marginRight:15, marginLeft:12}}/>
                    </View>
    
             </View>
            );
        }
    
        const GameAssets = () => {
        
            return(
                <View style={{width:'100%', height:HEIGHT-265, flexDirection:'column', marginTop:10}}>
    
                <FlatList
                    data={GameAssetsData}
                    showsVerticalScrollIndicator={false}
                    style={{width:'100%', height:100}}
                     keyExtractor={(item,index)=>item.chain}
                    renderItem={({item,index})=>{
                        console.log(item)
                        let  icon = null;
                        let chain = null;
    
                        let parentIndex = index;
                        let gameAssetsLength = item.assets.length;
                        let gameColor = item.gameColor;
                        let token = item.token;
    
                        let totalValueType = null;
                        let totalValue = null;
                        if(item.totalValueOfAssets>999999)
                        {
                            totalValue = item.totalValueOfAssets/1000000;
                            totalValueType = "M"
                        }
                        else if(item.totalValueOfAssets>999)
                        {
                            totalValue = item.totalValueOfAssets/1000;
                            totalValueType = "K"
                        }
                        else{
                            totalValue = item.totalValueOfAssets
                        }
                        
                        return(
                            <View style={{width:WIDTH-24, marginVertical:10, flexDirection:'column', marginLeft:12}}>
    
                                <View style={{width:WIDTH-24, height:50, flexDirection:'row', justifyContent: 'space-between'}}>
    
                                    <View style={{width:(2/3)*(WIDTH-24), height:50, flexDirection:'row',}}>
                                        <View style={{ marginRight:61 }}>
                                            <View style={{width:45, height:45, backgroundColor:item.gameColor, position:'absolute', zIndex:2,justifyContent:'center', borderRadius:3}}>
                                                {(index ==0)?
                                                <Image source={item.gameIcon} style={{marginLeft:2,width:41, height:41,backgroundColor:item.gameColor,resizeMode:'cover'}}/>
                                                :
                                                <Image source={{uri:item.gameIcon}} style={{marginLeft:2,width:41, height:41,backgroundColor:item.gameColor,resizeMode:'cover'}}/>}
                                            </View>
                                        <View style={{width:45, height:45, backgroundColor:item.gameColor, position:'absolute',zIndex:1,opacity:0.6,left:4,top:4, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                                        </View>
                                        <Text style={{fontFamily:'Biryani-Bold', fontSize:14, textAlign: 'center', color:DARK.PRIMARY_TEXT_COLOR, alignSelf:'center'}}>{item.gameName}</Text>
                                    </View>
    
                                    <View style={{backgroundColor:item.gameColor, width:100, height:30, borderRadius:3, alignSelf:'center', flexDirection:'row'}}>
                                        <Text style={{width:100,fontFamily:'Biryani-Bold', fontSize:14, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>${item.token}  {totalValue}{totalValueType}</Text>
                                    </View>
    
                                </View>
    
                                <FlatList
                                 data={item.assets}
                                 style={{width:WIDTH-24, marginTop:10}}
                                 numColumns={3}
                                 showsVerticalScrollIndicator={false}
                                 keyExtractor={(item,index)=>item.address}
                                 renderItem = {({item,index})=>{
                                     
                                     let valueType = null;
                                     let value = null;
                                     if(item.value>999999)
                                     {
                                        value = item.value/1000000;
                                         valueType = "M"
                                     }
                                     else if(item.value>999)
                                     {
                                        value = item.value/1000;
                                         valueType = "K"
                                     }
                                     else{
                                        value = item.value
                                     }
    
    
                                     return(
                                     <View style={{width:(WIDTH-24)/3,height:(WIDTH-24)/3 + 50, flexDirection:'column',borderColor:'black'}}> 
    
                                        <View >
                                            <View style={{width:((WIDTH-24)/3)-20, height:((WIDTH-24)/3)-20, backgroundColor:gameColor, position:'absolute', left:10,zIndex:2,justifyContent:'center', borderRadius:3,borderColor:'black',borderWidth:1}}>
                                                {(parentIndex==0)?
                                                <Image source={item.assetIcon} style={{marginLeft:5,width:((WIDTH-24)/3)-30, height:((WIDTH-24)/3)-30,backgroundColor:item.gameColor,resizeMode:'cover'}}/>:
                                                <Image source={{uri:item.assetIcon}} style={{marginLeft:5,width:((WIDTH-24)/3)-30, height:((WIDTH-24)/3)-30,backgroundColor:item.gameColor,resizeMode:'cover'}}/>}
                                            </View>
                                            <View style={{width:((WIDTH-24)/3)-20, height:((WIDTH-24)/3)-20, backgroundColor:gameColor, position:'absolute',zIndex:1,opacity:0.6,left:14,top:4, borderRadius:3,borderColor:'black',borderWidth:1}}></View>
                                        </View>
    
                                        <View style={{backgroundColor:gameColor, width:80, height:30, borderRadius:3, alignSelf:'center', flexDirection:'row', marginTop:((WIDTH-24)/3)}}>
                                            <Text style={{width:80,fontFamily:'Biryani-Bold', fontSize:12, textAlign: 'center', color:DARK.PRIMARY_BUTTON_TEXT,alignSelf:'center'}}>{(parentIndex!=0)?'$':''}{token}  {value}{valueType}</Text>
                                        </View>
    
                                     </View>  
                                     )
                                     
                                 }}
    
                             />
                            </View>
                            
                        )
                    }}
                /> 
    
             </View>
            );
        }
    
    
    
        return(
                <View style={{width:'100%',height:HEIGHT-190, alignSelf:'center', justifyContent: 'flex-start', flexDirection:'column'}}>
                    
                    <View style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
    
    
                        {
                        (flatListOption == "wallet")?
                        <View style={{width:93}}>
                                <TouchableOpacity style={{width:93, height:50, backgroundColor:DARK.SECONDARY_BUTTON, position:'absolute', zIndex:2, left:((WIDTH/2)-(93))/2, paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} 
                                onPress={()=>{setChoice("wallet")}}>
    
                                    <Text style={{ color:DARK.SECONDARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>wallet</Text>
    
                                </TouchableOpacity>
                                <View style={{width:93, height:50, backgroundColor:DARK.SECONDARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, left:((WIDTH/2)-(93))/2 + 4, top:4, fontSize:20, fontFamily:'Biryani-SemiBold', borderRadius:3}}></View>
                        </View>
                        :
                        <View style={{width:93}}>
                            <TouchableOpacity style={{width:93, height:50, position:'absolute', zIndex:2, left:((WIDTH/2)-(93))/2, paddingVertical:0, justifyContent:'center'}} activeOpacity={0.6} onPress={ () => {setChoice("wallet")}}>
    
                                <Text style={{ color:DARK.TERTIARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>wallet</Text>
    
                            </TouchableOpacity>
                        </View>
                        }
    
                        {
                        
                        (flatListOption == "game-assets")?
                        <View style={{width:140}}>
                                <TouchableOpacity style={{width:140, height:50, backgroundColor:DARK.SECONDARY_BUTTON, position:'absolute', zIndex:2, right:((WIDTH/2)-(140))/2, paddingVertical:0, elevation:5, borderColor:'black', borderWidth:1, borderRadius:3, justifyContent:'center'}} activeOpacity={0.6} 
                                onPress={()=>{setChoice("game-assets")}}>
    
                                    <Text style={{ color:DARK.SECONDARY_BUTTON_TEXT, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>game assets</Text>
    
                                </TouchableOpacity>
                                <View style={{width:140, height:50, backgroundColor:DARK.SECONDARY_BUTTON,opacity:0.8 , position:'absolute',zIndex:1, right:((WIDTH/2)-(140))/2 - 4, top:4,borderRadius:3}}></View>
                        </View>
                        :
                        <View style={{width:140}}>
                            <TouchableOpacity style={{width:140, height:50, position:'absolute', zIndex:2, right:((WIDTH/2)-(140))/2, paddingVertical:0,justifyContent:'center'}} activeOpacity={0.6} onPress={() => {setChoice("game-assets")}}>
    
                                <Text style={{ color:DARK.TERTIARY_TEXT_COLOR, fontFamily:'Biryani-Bold', fontSize:20, textAlign:'center',}}>game assets</Text>
    
                            </TouchableOpacity>
                        </View>
                        } 
    
    
    
    
                    </View>
    
                    {
                    (flatListOption=="wallet")?
                        <Wallet/>:<GameAssets/>
                    }
                    
    
    
                </View>
        );
    }
    



    return (
        <View style={{width:WIDTH, height:HEIGHT, backgroundColor:DARK.BACKGROUND_COLOR, flexDirection:'column'}}>
            <View style={{width:WIDTH, height:20}}></View>
            <ProfileHeader/>
            <ProfileBody />
        </View>
    );
}

export default Profile;