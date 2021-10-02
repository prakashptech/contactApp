import React from 'react';
import {View,Text,StyleSheet} from "react-native";
const First = ()=>{
  return (
    <View style={style.body}>
      <Text style={style.headerText}> Resto Home</Text>
      <View style={style.tapWrapper}>
      <Text onPress = { () => {alert('hello')}} style={style.tap}>Add</Text>
      <Text style={style.tap}>List</Text>
      <Text style={style.tap}>Delete</Text>
      <Text style={style.tap}> Edit</Text>
      <Text style={style.tapLogin}>Login</Text>
      </View>
    </View>
  );

};
const style=StyleSheet.create( {
  body:{
     backgroundColor:'grey',
     flex:1,
  },
   headerText:{
       color:'white',
       fontSize:50,
       alignSelf:'center',
   },
   tap:{
     backgroundColor:'blue',
     height:150,
     weight:150,
     color:'white',
     margin:2,
     lineHeight:150,
     fontSize:30,
     textAlign:'center',
   },
   tapWrapper: {
    //  flexDirection:'row',
     flex:1,
     flexWrap:'wrap',
     padding:50,
   },
   tapLogin: {
    backgroundColor:'blue',
    height:150,
    weight:150,
    color:'white',
    margin:2,
    lineHeight:150,
    fontSize:30,
    textAlign:'center',
   }
   
})
export default First;








// import React,{useState} from 'react';
// import { Button, Text, View,Input} from 'react-native';

// export default function App() {
//   const [count, setCount] = useState(1)
//   return (
//     <View>
//       <Button title="update state minus" onPress= {
//         () => setCount(count-1)
//       }/>
//       <Text>
//         {count}
//       </Text>
//       <Button title="update state plus" onPress= {
//         () => setCount(count+1)
//       }/>
      
//     </View>
//   );
// }
