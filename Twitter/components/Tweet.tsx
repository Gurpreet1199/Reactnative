import { View , Text , Image , StyleSheet } from "react-native";
type User = {
  id: String;
  name: string;
  username: string;
  image? : string;
}
type tweetType = {
  content: string;
  user : User;
}
type tweetProps ={
  tweet: tweetType;
}
const Tweet = ({tweet} : tweetProps) => {
  return (
    <View style={styles.container}>
      <Image
       src= {tweet.user.image} 
       style={styles.UserImage}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    padding:10,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:'lightgrey',
  },
  UserImage: {
    width:50,
    height:50,
    borderRadius:50,
  },
  mainContainer : {
    marginLeft:10,
    flex:1,
  },
  name :{
    fontWeight : '600',
  },
  content :{
    lineHeight: 20,
    marginTop: 5,
  },

});

export default Tweet;