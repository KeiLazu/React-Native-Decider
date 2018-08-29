import React from 'react';
import { Text, View } from 'react-native';

import Style from './styles/Styles';
import HeaderHandler from './components/HeaderHandler';
import ContainerHandler from './components/ContainerHandler';

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        {/* Header Status Bar*/}
        <View style={Style.statusBar}/>

        <View style={Style.headerNative}>
          {/* Handle Header here */}
          <HeaderHandler />
        </View>
        
        <ContainerHandler />
      </View>
    );
  }
}
