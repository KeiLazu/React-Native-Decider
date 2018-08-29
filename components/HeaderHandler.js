import React, {
  Component
} from 'react';

import {
  View,
  Text
} from 'react-native';

import Styles from '../styles/Styles';

export default class HeaderHandler extends Component {
  render(){
    return(
      <View>
        <Text style={Styles.textHeader}>
          Divider
        </Text>
      </View>
    );
  }
}