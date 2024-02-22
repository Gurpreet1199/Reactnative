import 'react-native-gesture-handler';
import React from "react";
import {Text,Image, ImageBackground,View, StyleSheet, Pressable} from 'react-native';
import Card from "./src/components/TinderCard";
import users from "./assets/data/users";
import Animated, { useAnimatedGestureHandler, useSharedValue,useAnimatedStyle,withSpring } from 'react-native-reanimated';
import { PanGestureHandler ,GestureHandlerRootView} from 'react-native-gesture-handler';
const App= () =>{
    const translateX=useSharedValue(0);
    const cardStyle=useAnimatedStyle(()=>({
        transform:[{
            translateX:translateX.value,
        }]
    }));
    const gestureHandeler=useAnimatedGestureHandler({
        onStart:(_,context)=>{
            context.startX=translateX.value
        },
        onActive:(event,context) =>{
            translateX.value=context.startX+event.translationX
        },
        onEnd:()=>{
            console.warn('Touch ended');
        },
    });
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.pageContainer}>
            <PanGestureHandler onGestureEvent={gestureHandeler}>
            <Animated.View style={[styles.animatedCard,cardStyle]}>
                <Card user={users[0]}/>
            </Animated.View>
            </PanGestureHandler>

            <Pressable
            onPress={()=>(sharedValue.value=withSpring(Math.random()))}>
                    <Text>Change Value</Text>
            </Pressable>
        </View>        
        </GestureHandlerRootView>

        );
}
const styles=StyleSheet.create({
    pageContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    animatedCard:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
});
export default App;