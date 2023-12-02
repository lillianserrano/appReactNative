//characterList/styles
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  characterList: {
    marginTop:20,
    width: '100%',
    paddingHorizontal: 20,
  },
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    textAlign:'center',
    fontWeight:'bold'
  }  ,
  characterName: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom:25,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
});

export {styles}