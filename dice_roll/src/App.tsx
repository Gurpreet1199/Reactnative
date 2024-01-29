/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice =({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne) //TODO
  const rollDiceOnTap=()=>{
    let num=Math.floor(Math.random()*6)+1;
    switch (num) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}>
        <Text style={styles.button}>
          roll
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  upperview:{
    paddingBottom:20,
  },
  diceImage:{
    height:200,
    width:200,
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  button:{
    borderRadius:10,
    paddingVertical:20,
    paddingHorizontal:20,
    backgroundColor:"#231aa3"
  },
  intext:{
    fontSize:24,
  }
});

export default App;
