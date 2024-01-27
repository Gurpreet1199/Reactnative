/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  const [bg,changebg]=useState("#FFFFFF")
  const createrandomcolor = () =>{
    const hexRange="0123456789ABCDEF"
    let clr="#"
    for (let i = 0; i < 6; i++) {
      clr+=hexRange[Math.floor(Math.random()*16)];
    }
    changebg(clr)
  }
  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style={[styles.container,{backgroundColor:bg}]}>
      <TouchableOpacity
        onPress={createrandomcolor}
      >
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtntxt}>Click</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  actionbtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionbtntxt:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
})

export default App;
