//CharacterDetails/styles.js

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterImageBigger: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  characterName:{
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterData:{
    fontSize: 18,
  textAlign: 'center'
  },
  title:{
    fontWeight:'bold',
    marginTop:10,
  },

  button: {
    marginTop:20,
    backgroundColor: '#182B86',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily:'Calibri',
    fontWeight:'bold',
  },
});
export {styles}