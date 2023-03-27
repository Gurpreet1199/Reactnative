import React from 'react';
import { View, Text , ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
const CarItem = (props) =>{
  const {name,tagline,image,tagslineCTA}=props;
    return (
        <View style={styles.carContainer}>
        <ImageBackground
         source={image}
         style={styles.image}
        />
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              <Text style={styles.subtitleCTA}>
                {tagslineCTA}
              </Text>
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
          <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={()=>{
              console.warn("Custom Data was pressed");
            }} 
          />
          <StyledButton 
            type="secondary" 
            content={"Existing Entry"} 
            onPress={()=>{
            console.warn("Existing entry was pressed");
          }}/>
          </View>
          </View> 
          
    );
};

export default CarItem;