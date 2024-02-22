import React from "react";
import {Text,Image, ImageBackground,View, StyleSheet} from 'react-native';
const App= () =>{
    return (
        <View style={styles.pageContainer}>
            <View style={styles.card}>
                <ImageBackground source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG"}} 
                    style={styles.image}>
                    <View style={styles.cardinner}>
                        <Text style={styles.name}>Elon Musk</Text>
                        <Text style={styles.bio}>In the middle of the night i built a rocket to make earth people move to mars</Text>
                    </View>
                </ImageBackground>
            </View>
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
    pageContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow:'hidden',
        justifyContent:'flex-end'
    },
    card:{
        width:'95%',
        height:'70%',
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
})
export default App;