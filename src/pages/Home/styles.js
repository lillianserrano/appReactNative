//Home/styles
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#052566',
  },
  titulo1: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',

    fontStyle:'italic',
    
  },
  titulo2: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 1,
    color: 'white'
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 50,
   
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#182B86',
    textAlign: 'center',
  },
  img: {
    
    width: 200,
    height: 150,
    marginLeft: 5,
    marginTop: 30,
    borderRadius:5,
      
  }
});
export {styles}