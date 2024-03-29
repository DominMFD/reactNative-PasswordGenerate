import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#FFF',
    borderWidth:2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  }
});