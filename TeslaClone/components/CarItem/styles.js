import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
      image: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover' ,
        position:'absolute',
      },
      carContainer: {
        width:'100%',
        height:'100%',
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title :{
        fontSize: 40,
        fontWeight: '500', 
    
      },
      subtitle: {
        fontSize:16,
        color: '#5c5e62',
      },
      buttonsContainer:{
        position:'absolute',
        bottom: 50,
        width:'100%',
      },
      subtitleCTA:{
        textDecorationLine:'underline'
      }

});
export default styles;