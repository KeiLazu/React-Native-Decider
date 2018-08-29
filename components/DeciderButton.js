import React, {
  Component
} from 'react';

import {
  TouchableHighlight,
  Text,
} from 'react-native';

import ContainerStyles from '../styles/ContainerStyles';

export default class DeciderButton extends Component {
  render(){
    return(
      <TouchableHighlight 
          style={ContainerStyles.dividerButton}
          onPress={this.props.onPress}>
        <Text>{this.props.textValue}</Text>
      </TouchableHighlight>
    );
  }
}