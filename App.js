/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {DARK} from './Theme/Theme';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Routes/AuthStack';
// import WalletConnect from "@walletconnect/client";
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  withWalletConnect,
  useWalletConnect,
} from "@walletconnect/react-native-dapp";

import {MoralisProvider} from 'react-moralis';


const Moralis = require('moralis/react-native.js');
// const AsyncStorage = require('react-native').AsyncStorage;
Moralis.setAsyncStorage(AsyncStorage);



const appId = "T0AYtywpQkJdMuZm6JgMMD9MMBaTX7spd57FMmnf";
const serverUrl = "https://vviek4wdoaep.usemoralis.com:2053/server";
const masterKey = "EcqaiVhB15A2ChLFL3FGJkRrVccbEPiT50ncKUIq";

// const connector = new WalletConnect(
//   {
//     // Required
//     uri: "wc:8a5e5bdc-a0e4-47...TJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U=",
//     // Required
//     clientMeta: {
//       description: "WalletConnect Developer App",
//       url: "https://walletconnect.org",
//       icons: ["https://walletconnect.org/walletconnect-logo.png"],
//       name: "WalletConnect",
//     },
//   }
// );

// // Subscribe to session requests
// connector.on("session_request", (error, payload) => {
//   if (error) {
//     throw error;
//   }
//   else{
//     console.log('Payload')
//     console.log(payload)
//   }
// })



const App = () => {

  

  return (

    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <WalletConnectProvider
        // bridge="https://bridge.walletconnect.org"
        // clientMeta={{
        //   description: 'Connect with WalletConnect',
        //   url: 'https://walletconnect.org',
        //   icons: ['https://walletconnect.org/walletconnect-logo.png'],
        //   name: 'WalletConnect',
        // }}
        redirectUrl={Platform.OS === 'web' ? window.location.origin : 'monster://'}
        storageOptions= {{
          asyncStorage: AsyncStorage,
        }}>
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </WalletConnectProvider>
    </MoralisProvider>

  );
};


// export default withWalletConnect(App, {
//   clientMeta: {
//     description: "Connect with WalletConnect",
//   },
//   redirectUrl:
//     Platform.OS === "web" ? window.location.origin : "monster://",
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// });


export default App;
