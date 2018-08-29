import React, {
  Component
} from 'react';

import {
  View,
  Text
} from 'react-native';

import ContainerStyles from '../styles/ContainerStyles';

export default class ContainerHandler extends Component {
  render(){
    return(
      <View style={ContainerStyles.rootContainer}>
        <View style={ContainerStyles.displayText}>
          <Text style={ContainerStyles.textConfig}>
            Is this loss?
          </Text>
        </View>
        <View style={ContainerStyles.displayDivider}>

        </View>
      </View>
    );
  }
}