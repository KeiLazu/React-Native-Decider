import {
  StyleSheet
} from 'react-native';

var ContainerStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  displayText: {
    flex: 3,
    backgroundColor: '#f257ee',
    justifyContent: 'center',
    alignItems: 'center'
  },

  displayDivider: {
    flex: 7,
    backgroundColor: '#ac09b9',
  },

  textConfig: {
    fontSize: 24,
    color: '#FFFFFF',
  },

  dividerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },

});

export default ContainerStyles;