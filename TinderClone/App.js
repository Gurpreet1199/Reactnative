import 'react-native-gesture-handler';
import React ,{useEffect, useState} from "react";
import {Text,Image, ImageBackground,View, StyleSheet, Pressable, useWindowDimensions} from 'react-native';
import Card from "./src/components/TinderCard";
import users from "./assets/data/users";
import Animated, {
useAnimatedGestureHandler, 
useSharedValue,
useAnimatedStyle,
withSpring, 
useDerivedValue,
interpolate, 
withDelay,
runOnJS
} from 'react-native-reanimated';
import { PanGestureHandler ,GestureHandlerRootView} from 'react-native-gesture-handler';
import Like from './assets/images/LIKE.png';
import Nope from './assets/images/nope.png';

const ROTATION=60;
const SWIPE_VELOCITY=800;
const App= () =>{
    const [currentIndex,setCureentIndex]=useState(0);
    const [nextIndex,setNextIndex]=useState(currentIndex+1);
    const currentProfile=users[currentIndex]
    const nextProfile=users[nextIndex]
    const {width:screenWidth}=useWindowDimensions();
    const hiddenTranslateX=2*screenWidth;
    const translateX=useSharedValue(0);
    const rotate = useDerivedValue(()=>interpolate(
        translateX.value,
        [0,hiddenTranslateX],
        [0,ROTATION]
    )+'deg');
    const cardStyle=useAnimatedStyle(()=>({
        transform:[
            {
                translateX:translateX.value,
            },
            {
                rotate:rotate.value,
            },
        ]
    }));
    const nextCardStyle=useAnimatedStyle(()=>({
        transform:[
            {
                scale: interpolate(
                    translateX.value,
                    [-hiddenTranslateX,0,hiddenTranslateX],
                    [1,0.8,1]
                    ),
            },
        ],
        opacity: interpolate(
            translateX.value,
            [-hiddenTranslateX,0,hiddenTranslateX],
            [1,0.6,1]
            ),
    }));
    const gestureHandeler=useAnimatedGestureHandler({
        onStart:(_,context)=>{
            context.startX=translateX.value
        },
        onActive:(event,context) =>{
            translateX.value=context.startX+event.translationX
        },
        onEnd:(event)=>{
            if(Math.abs(event.velocityX)<SWIPE_VELOCITY){
                translateX.value=withSpring(0);
                return;
            }
            translateX.value=withSpring(
                event.velocityX>0 ? 
                hiddenTranslateX :-hiddenTranslateX,
                {},
                ()=>runOnJS(setCureentIndex)((currentIndex+1)%users.length)
                );
        },
    });
    useEffect(()=>{
        translateX.value=0;
        setNextIndex((currentIndex+1)%users.length);
    },[currentIndex,translateX]);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <View style={styles.pageContainer}>
            {nextProfile  &&(<View style={styles.nextCardContainer}>
                <Animated.View style={[styles.animatedCard,nextCardStyle]}>
                    <Card user={nextProfile} />
                </Animated.View>
                
            </View>)}
            { currentProfile &&
        (<PanGestureHandler onGestureEvent={gestureHandeler}>
            <Animated.View style={[styles.animatedCard,cardStyle]}>
                <Image source={Like} style={[styles.like,{right:10}]} resizeMode='contain'/>
                <Image source={Nope} style={[styles.like,{left:10}]} resizeMode='contain'/>
                <Card user={currentProfile}/>
            </Animated.View>
            </PanGestureHandler>
)}
            {/* <Pressable
            onPress={()=>(sharedValue.value=withSpring(Math.random()))}>
                    <Text>Change Value</Text>
            </Pressable> */}
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
        width:'90%',
        height:'70%',
        justifyContent:'center',
        alignItems:'center',
    },
    nextCardContainer:{
        ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems:'center',
    },
    like:{
        width:100,
        height:100,
        position:'absolute',
        top:10,
        zIndex:1,

    }
});
export default App;