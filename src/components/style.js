import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EECCDD'
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#EECCDD'
  },
  button: {
    backgroundColor: '#EECCDD',
    borderColor: '#EECCDD',
    fontSize: 40,
    fontFamily: 'FontAwesome',
    margin: 10,
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 120,
    fontFamily: 'FontAwesome',
    textAlign: 'center',
    margin: 10
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 28,
    color: '#333333',
    marginBottom: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    // fontFamily: 'BPG SuperSquare 2013',
    // fontFamily: 'BPG ExtraSquare Mtavruli',
    fontFamily: 'Geo Sabechdi Mtavr ASTER',
    color: '#333333',
    marginBottom: 5
  }
});
