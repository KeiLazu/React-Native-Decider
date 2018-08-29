import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Alert
} from 'react-native';

import ContainerStyles from '../styles/ContainerStyles';
import DeciderButton from './DeciderButton';

export default class ContainerHandler extends Component {

  _AlertMessage(input){
    alert(input)
  }

  render(){
    return(
      <View style={ContainerStyles.rootContainer}>
        <View style={ContainerStyles.displayText}>
          <Text style={ContainerStyles.textConfig}>
            Is this loss?
          </Text>
        </View>
        <View style={ContainerStyles.displayDivider}>
          <DeciderButton 
            textValue={"Yes"}
            onPress={this._AlertMessage.bind(this, "yes")}
          />
          <DeciderButton 
            textValue="No"
            onPress={this._AlertMessage.bind(this, "no")}
          />
        </View>
      </View>
    );
  }
}