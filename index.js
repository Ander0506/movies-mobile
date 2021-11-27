import {AppRegistry} from 'react-native';
import Provider from './src/components/app/provider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Provider);
