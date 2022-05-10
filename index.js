/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Screens/Authentication/Login'
import Profile from './Screens/Profile/Profile'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Login);
