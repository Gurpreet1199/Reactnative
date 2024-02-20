import { Dimensions,FlatList,StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface ListItemProps {
  id: number[];
}
const Homecard:React.FC<ListItemProps> =({id}):JSX.Element=>{
  const [index,nextindex]=useState(0)
  const increaseindex = ()=>{
    nextindex((index+1)%id.length)
    console.log(index)
  }
  return (
    
    <View style={styles.card}>
       <Text>{id[index]}</Text>
       <TouchableOpacity
       onPress={increaseindex}>
        <Text>Next</Text>
       </TouchableOpacity>
       <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {id.map((_,index_) => (
          <View
            key={index_}
            style={{
              width: 10,
              height: 10,
              backgroundColor: index === index_ ? 'blue' : 'gray',
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
       
      </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHieght = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#aef",
    width: windowWidth-20,
    height:windowHieght/1.5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:'#fea121',
    padding:10,
  }
})
export default Homecard