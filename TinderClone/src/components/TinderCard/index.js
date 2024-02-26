import React from "react";
import { Text ,View,ImageBackground,StyleSheet} from "react-native";
const Card =(props)=>{
    const {name,image,bio}=props.user;
    return (
        <View style={styles.card}>
                <ImageBackground source={{uri:image}} 
                    style={styles.image}>
                    <View style={styles.cardinner}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.bio}>{bio}</Text>
                    </View>
                </ImageBackground>
            </View>
    );
}
const styles=StyleSheet.create({
    cardinner:{
        padding:10,
        //backgroundColor:'red'
    },
    name:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
    },
    bio:{
        fontSize:18,
        color:'white',
        lineHeight:25,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'flex-end'
    },
    card:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.7,
        shadowRadius: 3.05,
        elevation: 4
    }
});
export default Card;