/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Screens/Authentication/Login'
import Profile from './Screens/Profile/Profile'
import {name as appName} from './app.json';

// const { withWalletConnect } = require('@walletconnect/react-native-dapp');


AppRegistry.registerComponent(appName, () => App);

//${scheme}
// registerRootComponent(withWalletConnect(App, {
//     redirectUrl: Platform.OS === 'web' ? window.location.origin : `monster://`,
//     storageOptions: {
//       asyncStorage: AsyncStorage,
//     },
//   }));
