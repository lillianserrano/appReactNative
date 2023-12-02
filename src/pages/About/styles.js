//About/styles.js

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:20,
  },
    title:{  

    fontSize: 24,
    fontWeight: 'bold',
    color: '#black',
    marginBottom: 10,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    },

    name:{
    fontSize: 18,
    color: '#006399',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',    
  },
    img:{
      width: 350,
      height: 230, 
      marginLeft: 10, 
      marginTop: 30, 
      marginBottom: 20, 
  },
    photo: {
    height: 200,
    width: 200,
    marginTop: 30,
    borderRadius: 130,
  }
});
export {styles}