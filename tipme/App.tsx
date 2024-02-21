/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Homecard from './components/homecard';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const windowWidth = Dimensions.get('window').width;
  const windowHieght = Dimensions.get('window').height;
  const data:number[][]=[[11,22,133,1211],[1,2,3,4],[4,12,5,312,12,41,123,12,12]]
  const flat_len=Array(data.length).fill(null)
  const func = ({ index }: {index:number}) => {
    // You can pass variables to your JSX elements here
    const one_d_array=data[index]
    return <Homecard id={one_d_array}/>;
  };
  return (
    <>
      <StatusBar/>
    <View style={styles.topbar}>
      <View style={styles.topbarView}>
        <Text >User Profile/L</Text>
      </View>
      <View style={styles.topbarView}>
        <Text>Filter</Text>
      </View>
      <View style={styles.topbarView}>
      <Text>Chats</Text>
      </View>
      <View style={styles.topbarView}>
      <Text>Notifications</Text>
      </View>
    </View>

    <View style={{padding:10}}>
    <FlatList
    scrollEnabled
    horizontal
    showsHorizontalScrollIndicator={true}
    data={flat_len}
    renderItem={func}
    keyExtractor={(item, index) => index.toString()}
    //ItemSeparatorComponent={() => <View style={styles.separator} />}
    snapToInterval={windowWidth-20}
    decelerationRate="fast"
    
    />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  topbarView:{
    fontStyle:'normal',
    fontWeight:'500',
    flex:1,
    borderColor:'#12aaa1',
    borderWidth:1
  },
  flatlistitems:{
    padding:10,
    backgroundColor:'#cca123'
  },
  separator:{
    padding:10,
  },
  topbar:{
    flex:.2,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    elevation:20,
    shadowOffset:{
      height:10,
      width:10,
    },
    backgroundColor:'#ccacca',
    padding:10,
  },
  
});

export default App;
